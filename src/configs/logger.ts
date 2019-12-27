import config from 'configs';

const { env } = config;

const configs = {
    level: process.env.LOG_LEVEL || (env === 'test' ? 'error' : 'info'),
};

export default configs;
