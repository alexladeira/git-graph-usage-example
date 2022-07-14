import { createGitgraph, Mode, templateExtend } from "@gitgraph/js";

const graphContainerOption1 = document.getElementById("gitgraph_option1");
const gitgraphOption1 = createGitgraph(graphContainerOption1, {
  template: templateExtend("metro", {
    commit: {
      message: { displayHash: false },
    },
  }),
});

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
const gitgraphOption2 = createGitgraph(graphContainerOption2, {
  template: templateExtend("metro", {
    commit: {
      message: { displayHash: false },
    },
  }),
});

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

const graphContainerOption3 = document.getElementById("gitgraph_option3");
const gitgraphOption3 = createGitgraph(graphContainerOption3, {
  template: templateExtend("metro", {
    commit: {
      message: { displayHash: false },
    },
  }),
});

const mainOption3 = gitgraphOption3.branch("main");
mainOption3.commit({
  author: "User 1 <user1@provider.com>",
  subject: "Init the project",
});

const newFeatureOption3 = gitgraphOption3.branch("feature-one");
const newFeatureOption4 = gitgraphOption3.branch("feature-two");

newFeatureOption3.commit({
  author: "User 1 <user1@provider.com>",
  subject: "Implement an awesome feature",
});

newFeatureOption4.commit({
  author: "User 3 <user3@provider.com>",
  subject: "Implement an awesome feature",
});

newFeatureOption3.commit({
  author: "User 2 <user2@provider.com>",
  subject: "Fix tests",
});

mainOption3.merge({
  branch: newFeatureOption3,
  commitOptions: {
    author: "MasterBlaster <masterblaster@provider.com>",
    subject: "merged via PR",
  },
});

newFeatureOption4.commit({
  author: "User 4 <user4@provider.com>",
  subject: "Fix tests",
});

mainOption3.merge({
  branch: newFeatureOption4,
  commitOptions: {
    author: "MasterBlaster <masterblaster@provider.com>",
    subject: "merged via PR",
  },
});
