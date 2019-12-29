import clc from 'cli-color';
import { Server } from 'http';
import config from 'configs';
import { connect, close } from 'dbConn';
import App from 'app';
import request from 'supertest';
import { expect } from 'chai';

const { port } = config;

describe(clc.bgGreen(clc.black('[Manager]')), () => {
    const app = new App();

    let server: Server;
    let managerId: number;

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

    it('add manager code', done => {
        request(server)
            .post('/api/v1/cmcodes')
            .send({
                cdMajor: '0006',
                cdMinor: '0001',
                cdFname: '직급 구분',
                cdSname: '사원',
            })
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                const { cdMajor, cdMinor, cdFname, cdSname } = ctx.body;

                expect(ctx.body).instanceOf(Object);
                expect(cdMajor).to.equals('0006');
                expect(cdMinor).to.equals('0001');
                expect(cdFname).to.equals('직급 구분');
                expect(cdSname).to.equals('사원');
                done();
            });
    });

    it('add manager', done => {
        request(server)
            .post('/api/v1/managers')
            .send({
                name: '박종진',
                positionCd: '0001',
            })
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                const { id, name, positionCd } = ctx.body;
                managerId = id;

                expect(ctx.body).instanceOf(Object);
                expect(name).to.equals('박종진');
                expect(positionCd).to.equals('0001');
                done();
            });
    });

    it('get manager', done => {
        request(server)
            .get(`/api/v1/managers/${managerId}`)
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                expect(ctx.body).instanceOf(Object);
                expect(ctx.body.id).to.equals(managerId);
                done();
            });
    });

    it('get managers', done => {
        request(server)
            .get('/api/v1/managers')
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                expect(ctx.body).instanceOf(Object);
                expect(ctx.body).have.length(1);
                done();
            });
    });

    it('delete manager', done => {
        request(server)
            .delete(`/api/v1/managers/${managerId}`)
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                expect(ctx.body).to.equals(true);
                done();
            });
    });

    it('get managers', done => {
        request(server)
            .get('/api/v1/managers')
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                expect(ctx.body).instanceOf(Object);
                expect(ctx.body).have.length(0);
                done();
            });
    });
});
