import { Server } from 'http';
import clc from 'cli-color';
import config from 'configs';
import { connect, close } from 'dbConn';
import App from 'app';
import request from 'supertest';
import { expect } from 'chai';

const { port } = config;

describe(clc.bgGreen(clc.black('[Project]')), () => {
    const app = new App();

    let server: Server;
    let projectId: number;

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

    it('add project code', done => {
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

                expect(ctx.body).instanceOf(Object);
                expect(cdMajor).to.equals('0001');
                expect(cdMinor).to.equals('0001');
                expect(cdFname).to.equals('프로젝트 구분');
                expect(cdSname).to.equals('증설');
                done();
            });
    });

    it('get projects', done => {
        request(server)
            .post('/api/v1/projects')
            .send({
                projectGbCd: '0001',
                projectName: 'Methane Gas Sales & CFU/ARO2 Project',
                projectCode: 'MGS',
                client: '한화토탈',
                clientCode: 'HTC',
                contractor: '한화건설',
                contractorCode: 'HENC',
                memo: '',
            })
            .end((err, ctx) => {
                if (err) throw err;

                const { id, projectGbCd, projectName, projectCode, client, clientCode, contractor, contractorCode, memo } = ctx.body;
                projectId = id;

                expect(ctx.body).instanceOf(Object);
                expect(projectGbCd).to.equals('0001');
                expect(projectName).to.equals('Methane Gas Sales & CFU/ARO2 Project');
                expect(projectCode).to.equals('MGS');
                expect(client).to.equals('한화토탈');
                expect(clientCode).to.equals('HTC');
                expect(contractor).to.equals('한화건설');
                expect(contractorCode).to.equals('HENC');
                expect(memo).to.equals('');
                done();
            });
    });

    it('get project', done => {
        request(server)
            .get(`/api/v1/projects/${projectId}`)
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                expect(ctx.body).have.instanceOf(Object);
                expect(ctx.body.id).to.equals(projectId);
                done();
            });
    });

    it('get projects', done => {
        request(server)
            .get('/api/v1/projects')
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                expect(ctx.body).instanceOf(Array);
                expect(ctx.body).have.length(1);
                done();
            });
    });
});
