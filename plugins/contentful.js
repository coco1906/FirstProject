// ./plugins/contentful.js

const contentful = require("contentful");
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: "9dqgmammb73g",
  accessToken: "gLceyz0T0-Xc58SwNC5uMc7AJ9QoncL6BgfvS37hcrM"
};

// export `createClient` to use it in page components
module.exports = {
  createClient() {
    return contentful.createClient(config);
  }
};
