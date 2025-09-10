module.exports = {
  apps: [
    {
      name: "rs-invitation",
      script: "yarn",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 5050,
      },
    },
  ],
};
