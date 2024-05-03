module.exports = {
  apps: [
    {
      name: 'next-app',
      cwd: './client',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'production',
        // Add other environment variables as needed
      },
    },
    {
      name: 'express-app',
      cwd: './server',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'production',
        // Add other environment variables as needed
      },
    },
  ],
};
