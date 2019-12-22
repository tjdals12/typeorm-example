import Koa from 'koa';
import cors from 'koa2-cors';
import helmet from 'koa-helmet';
import errorHandler from 'middlewares/errorHandler';
import { useKoaServer, useContainer as routingContainer } from 'routing-controllers';
import { useContainer as ormContainer } from 'typeorm';
import { Container } from 'typedi';
import { VendorController } from 'controller/VendorController';
import { ProjectController } from 'controller/ProjectController';

class App extends Koa {
    constructor() {
        super();

        this.configureContainer();
        this.configureMiddlewares();
        this.configureRoutes();
    }

    configureContainer(): void {
        routingContainer(Container);
        ormContainer(Container);
    }

    configureMiddlewares(): void {
        this.use(errorHandler());

        this.use(
            cors({
                origin: '*',
                allowMethods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT', 'HEAD'],
                allowHeaders: ['Content-Type', 'Authorization'],
                exposeHeaders: ['Content-Length', 'Date'],
            }),
        );

        this.use(helmet());
    }

    configureRoutes(): void {
        useKoaServer(this, {
            controllers: [VendorController, ProjectController],
            routePrefix: '/api/v1',
        });
    }
}

export default App;
