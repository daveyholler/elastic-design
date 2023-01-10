const { content } = require("./config/content");
const { variables } = require("./config/variables");
const { search } = require("./config/search");
const fs = require("fs");

let contentDev = null;
if (fs.existsSync("./config/content-dev.js")) {
  contentDev = require("./config/content-dev").content;
}

const meta = {
  /* *** Add / Update Docsmobile Global Variables below *** */
  globalCallout: {
    description:
      "You are on a sandbox deployment. This is a space for writers to experiment for the migration effort.",
  },
  /* *** End Docsmobile Global Variables *** */
};

const exportedContent =
  process.env.NODE_ENV !== "production" && contentDev ? contentDev : content;

module.exports = { content: exportedContent, meta, variables, search }
