import app from 'app';
import config from 'configs';
import logger from 'logger';

import { createConnection } from 'typeorm';

const { port } = config;

createConnection().then(connection => {
    logger.info('Connect database');

    app.listen(port, () => {
        logger.info(`Server running at ${port}`);
    });
});
