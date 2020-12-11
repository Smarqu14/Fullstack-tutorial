const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export default {
  port: env.PORT || 3000,
};

export const logStars = function (message) {
  console.info('*********');
  console.info(message);
  console.info('*********');
};
