import { createGitgraph } from "@gitgraph/js";

const graphContainer = document.getElementById("gitgraph_option1");
const gitgraph = createGitgraph(graphContainer);

const main = gitgraph.branch("main");
main
  .commit({
    author: "User 1 <user1@provider.com>",
    subject: "Init the project",
  })
  .commit({
    author: "User 2 <user2@provider.com>",
    subject: "Add README",
  })
  .commit({
    author: "User 2 <user2@provider.com>",
    subject: "Add tests",
  })
  .commit({
    author: "User 1 <user1@provider.com>",
    subject: "Implement feature",
  });
