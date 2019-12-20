import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';
import helmet from 'koa-helmet';
import router from 'router';

const app = new Koa();

app.use(
    bodyParser({
        enableTypes: ['form', 'json'],
        formLimit: '10mb',
        jsonLimit: '10mb',
    }),
);

app.use(
    cors({
        origin: '*',
        allowMethods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'HEAD'],
        allowHeaders: ['Content-Type', 'Authorization'],
        exposeHeaders: ['Content-Length', 'Date'],
    }),
);

app.use(router.routes());
app.use(router.allowedMethods());

app.use(helmet());

export default app;
