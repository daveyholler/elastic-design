const content = {
  sources: [
    {
      type: "file",
      location: "../docs/guidelines",
    },
    {
      type: "file",
      location: "../docs/components",
    },
    {
      type: "file",
      location: "../docs/patterns",
    },
  ],

  nav: {
    structure: ["guidelines", "components", "patterns"],
    default: "guidelines",
  },
};

module.exports = { content };
