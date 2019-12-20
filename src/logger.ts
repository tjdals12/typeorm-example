import { createLogger, transports, format, Logger } from 'winston';
import TimestampColorize from 'winston-timestamp-colorize';

const commonFormat = format.combine(
    format(info => ({
        ...info,
        level: `::[${info.level.toUpperCase()}]`,
    }))(),
    format.label({ label: 'MY_APP' }),
    format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss' }),
);

const colorFormat = format.combine(
    format.colorize({
        all: true,
        colors: { debug: 'green', info: 'yellow', error: 'red' },
    }),
    TimestampColorize({ color: 'green' }),
);

const printFormat = format.combine(
    format.printf(
        info =>
            `🚀  ${info.timestamp} ${info.label}${info.level} - ${info.message}`,
    ),
);

const logger: Logger = createLogger({
    transports: [
        new transports.Console({
            level: 'debug',
            format: format.combine(commonFormat, colorFormat, printFormat),
        }),
    ],
});

export default logger;
