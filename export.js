import contentfulExport from "contentful-export";

const options = {
  spaceId: "lcqx3493y7vb",
  environmentId: "preview",
  managementToken: "CFPAT-Q6uOr07d42Hm-mt2NJUqz-agnT0HUX0n8lJepliqgC0",
  contentFile: "exportedData.json",
};

contentfulExport(options);
