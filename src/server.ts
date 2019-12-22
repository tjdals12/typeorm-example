import 'reflect-metadata';
import App from 'app';
import config from 'configs';
import logger from 'logger';
import { createConnection } from 'typeorm';

const app = new App();
const { port } = config;

async function main(): Promise<void> {
    await createConnection();
    logger.info('Connect database');

    await app.listen(port);
    logger.info(`Server running at ${port}`);
}

main();
