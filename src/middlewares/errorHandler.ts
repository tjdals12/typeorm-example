import logger from 'logger';
import { ParameterizedContext, Next } from 'koa';

const errorHandler = () => {
    return async (ctx: ParameterizedContext, next: Next): Promise<void> => {
        try {
            logger.info(`Request: ${ctx.request.originalUrl}`);
            await next();
            logger.info(`Success: ${ctx.request.originalUrl}`);
        } catch (e) {
            logger.error(`Failure: ${e.message}`);
            ctx.status = 500;
            ctx.body = e.message;
        }
    };
};

export default errorHandler;
