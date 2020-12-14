const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export default {
  port: env.PORT || 3001,
  host: env.HOST || 'localhost',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  },
};

export const logStars = function (message) {
  console.info('*********');
  console.info(message);
  console.info('*********');
};
