import contentfulImport from "contentful-import";

const options = {
  contentFile: "exportedData.json",
  spaceId: "lcqx3493y7vb",
  environmentId: "migration-test", //push data to this env
  managementToken: "API key read README.MD",
};

contentfulImport(options);
