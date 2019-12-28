import dotenv from 'dotenv';

dotenv.config();

const env: string = process.env.NODE_ENV || 'development';

const configs: Record<string, Record<string, string>> = {
    base: {
        env,
        port: process.env.PORT || '4000',
    },
    production: {
        connectionName: 'default',
    },
    development: {
        connectionName: 'default',
    },
    test: {
        connectionName: 'test',
    },
};

const config: Record<string, string> = Object.assign(configs.base, configs[env]);

export default config;
