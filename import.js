import contentfulImport from "contentful-import";

const options = {
  contentFile: "exportedData.json",
  spaceId: "lcqx3493y7vb",
  environmentId: "migration-test",
  managementToken: "CFPAT-Q6uOr07d42Hm-mt2NJUqz-agnT0HUX0n8lJepliqgC0",
};

contentfulImport(options);
