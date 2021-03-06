import clc from 'cli-color';
import config from 'configs';
import { Server } from 'http';
import App from 'app';
import { connect, close } from 'dbConn';
import request from 'supertest';
import { expect } from 'chai';

const { port } = config;

describe(clc.bgGreen(clc.black('[Cmcode]')), () => {
    const app = new App();

    let server: Server;
    let id: string;

    before(async () => {
        await connect();
        console.log(clc.yellow('Connected database'));

        server = await app.listen(port);
        console.log(clc.yellow(`Server running at ${port}`));
    });

    after(async () => {
        await close();
        console.log(clc.yellow('Disconnected database'));

        await server.close();
        console.log(clc.yellow('Server close'));
    });

    it('add Cmcode', done => {
        request(server)
            .post('/api/v1/cmcodes')
            .send({
                cdMajor: '0001',
                cdMinor: '0001',
                cdFname: '프로젝트 구분',
                cdSname: '증설',
            })
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                const { cdMajor, cdMinor, cdFname, cdSname } = ctx.body;
                id = cdMajor;

                expect(ctx.body).instanceOf(Object);
                expect(cdMajor).to.equals('0001');
                expect(cdMinor).to.equals('0001');
                expect(cdFname).to.equals('프로젝트 구분');
                expect(cdSname).to.equals('증설');
                done();
            });
    });

    it('get Cmcode', done => {
        request(server)
            .get(`/api/v1/cmcodes/${id}`)
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                expect(ctx.body).instanceOf(Array);
                done();
            });
    });

    it('get Cmcodes', done => {
        request(server)
            .get('/api/v1/cmcodes')
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                expect(ctx.body).instanceOf(Array);
                expect(ctx.body).have.length(1);
                done();
            });
    });
});
