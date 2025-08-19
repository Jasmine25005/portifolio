const fs = require("fs");
const https = require("https");
const process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName: "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed: "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium: "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_USERNAME) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
  const query = JSON.stringify({
    query: `
      {
        user(login:"${GITHUB_USERNAME}") {
          name
          bio
          avatarUrl
          location
          pinnedItems(first: 6, types: [REPOSITORY]) {
            edges {
              node {
                ... on Repository {
                  name
                  description
                  url
                  stargazers { totalCount }
                  forkCount
                  primaryLanguage { name color }
                }
              }
            }
          }
        }
      }`
  });

  const options = {
    hostname: "api.github.com",
    path: "/graphql",
    method: "POST",
    port: 443,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node"
    }
  };

  const req = https.request(options, res => {
    let body = "";
    console.log(`GitHub statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) throw new Error(ERR.requestFailed);

    res.on("data", chunk => (body += chunk));
    res.on("end", () => {
      fs.writeFileSync("./public/profile.json", body);
      console.log("Saved file to public/profile.json");
    });
  });

  req.on("error", e => { throw e; });
  req.write(query);
  req.end();
}

if (MEDIUM_USERNAME) {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=${encodeURIComponent(`https://medium.com/feed/@${MEDIUM_USERNAME}`)}`,
    port: 443,
    method: "GET"
  };

  const req = https.request(options, res => {
    let body = "";
    console.log(`Medium statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) throw new Error(ERR.requestFailedMedium);

    res.on("data", chunk => (body += chunk));
    res.on("end", () => {
      fs.writeFileSync("./public/blogs.json", body);
      console.log("Saved file to public/blogs.json");
    });
  });

  req.on("error", e => { throw e; });
  req.end();
}
