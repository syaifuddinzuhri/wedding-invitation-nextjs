module.exports = {
  apps: [
    {
      name: "rs-invitation",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 5050,
      },
    },
  ],
};
