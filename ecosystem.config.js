module.exports = {
  apps: [
    {
      name: 'diet_client',
      cwd: './client',
      script: 'npm',
      args: 'run start',
      env: {
        PORT: 7001, 
      },
    },
    {
      name: 'diet_server',
      cwd: './server',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'production',
        PORT: 7020, 
      },
    },
  ],
};
