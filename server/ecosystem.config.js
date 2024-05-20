module.exports = {
  apps: [{
    name: 'diet-backend',
    script: './app.js',
    env: {
      NODE_ENV: 'development',
      PORT: 8080,
      DB_CONNECTION_STRING: 'mongodb://localhost:8080/'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 8080,
      DB_CONNECTION_STRING: 'mongodb://yourUsername:yourPassword@yourHost:yourPort/yourDatabase'
    }
  }]
};
