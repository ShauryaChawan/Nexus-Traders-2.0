import client from "@sanity/client"

export default client({
  projectId: "yop9hee8",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-26",
})