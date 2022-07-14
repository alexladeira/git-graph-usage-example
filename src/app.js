import { createGitgraph } from "@gitgraph/js";

const graphContainerOption1 = document.getElementById("gitgraph_option1");
const gitgraphOption1 = createGitgraph(graphContainerOption1);

const mainOption1 = gitgraphOption1.branch("main");
mainOption1
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

const graphContainerOption2 = document.getElementById("gitgraph_option2");
const gitgraphOption2 = createGitgraph(graphContainerOption2);

const mainOption2 = gitgraphOption2.branch("main");
mainOption2.commit({
  author: "User 1 <user1@provider.com>",
  subject: "Init the project",
});

const newFeatureOption2 = gitgraphOption2.branch("new-feature");
newFeatureOption2.commit({
  author: "User 1 <user1@provider.com>",
  subject: "Implement an awesome feature",
});
newFeatureOption2.commit({
  author: "User 2 <user2@provider.com>",
  subject: "Fix tests",
});
mainOption2.merge(newFeatureOption2, "Release new version");
