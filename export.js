import contentfulExport from "contentful-export";

const options = {
  spaceId: "lcqx3493y7vb",
  environmentId: "preview", //export data from this env
  managementToken: "APIkey read README.MD",
  contentFile: "exportedData.json",
};

contentfulExport(options);
