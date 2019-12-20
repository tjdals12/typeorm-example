import dotenv from 'dotenv';

dotenv.config();

const env: string = process.env.NODE_ENV || 'development';

const configs: Record<string, Record<string, string | number>> = {
    base: {
        env,
        port: process.env.PORT || 4000,
    },
    production: {},
    development: {},
    test: {},
};

const config: Record<string, string | number> = Object.assign(
    configs.base,
    configs[env],
);

export default config;
