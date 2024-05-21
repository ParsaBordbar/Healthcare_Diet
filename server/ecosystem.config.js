module.exports = {
  apps: [{
    name: 'diet-backend',
    script: './server.js',
    env: {
      NODE_ENV: 'development',
      PORT: 8080,
      DB_CONNECTION_STRING: 'mongodb://localhost:8080/healthcareDiet'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 8080,
      DB_CONNECTION_STRING: 'mongodb://yourUsername:yourPassword@yourHost:yourPort/yourDatabase'
    }
  }]
};
