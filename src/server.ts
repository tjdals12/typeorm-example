import 'reflect-metadata';
import App from 'app';
import config from 'configs';
import logger from 'logger';
import { createConnection } from 'typeorm';

const app = new App();

async function main(): Promise<void> {
    await createConnection();
    logger.info('Connected database');

    await app.listen(config.port);
    logger.info(`Server running at ${config.port}`);
}

main();
