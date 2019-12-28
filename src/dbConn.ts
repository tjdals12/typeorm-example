import { createConnection, getConnectionOptions, getConnection } from 'typeorm';
import { Container } from 'typedi';
import config from 'configs';

const { connectionName } = config;

export const connect = async (): Promise<void> => {
    const connectionOptions = await getConnectionOptions(connectionName);
    await createConnection({ ...connectionOptions, name: 'default' });
};

export const close = async (): Promise<void> => {
    await getConnection().close();
    await Container.reset();
};
