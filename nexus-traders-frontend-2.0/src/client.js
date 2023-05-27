import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "yop9hee8",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-26",
});

export default client;