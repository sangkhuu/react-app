module.exports = {
  branches: "main",
  repositoryUrl: "ssh://git@github.com/sangkhuu/react-app",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};
