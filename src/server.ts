import 'reflect-metadata';
import App from 'app';
import config from 'configs';
import logger from 'logger';
import { connect } from 'dbConn';

const app = new App();

async function main(): Promise<void> {
    await connect();
    logger.info('Connected database');

    await app.listen(config.port);
    logger.info('Server running at 4000');
}

main();
