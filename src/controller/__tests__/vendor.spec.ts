import clc from 'cli-color';
import config from 'configs';
import { Server } from 'http';
import App from 'app';
import { connect, close } from 'dbConn';
import request from 'supertest';
import { expect } from 'chai';

const { port } = config;

describe(clc.bgGreen(clc.black('[Vendor]')), () => {
    const app = new App();

    let server: Server;
    let vendorId: number;

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

    it('add projectGb code', done => {
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

    it('add part code', done => {
        request(server)
            .post('/api/v1/cmcodes')
            .send({
                cdMajor: '0003',
                cdMinor: '0001',
                cdFname: '공종',
                cdSname: '기계',
            })
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                const { cdMajor, cdMinor, cdFname, cdSname } = ctx.body;

                expect(ctx.body).instanceOf(Object);
                expect(cdMajor).to.equals('0003');
                expect(cdMinor).to.equals('0001');
                expect(cdFname).to.equals('공종');
                expect(cdSname).to.equals('기계');
                done();
            });
    });

    it('add country code', done => {
        request(server)
            .post('/api/v1/cmcodes')
            .send({
                cdMajor: '0004',
                cdMinor: '0001',
                cdFname: '국가 구분',
                cdSname: '국내',
            })
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                const { cdMajor, cdMinor, cdFname, cdSname } = ctx.body;

                expect(ctx.body).instanceOf(Object);
                expect(cdMajor).to.equals('0004');
                expect(cdMinor).to.equals('0001');
                expect(cdFname).to.equals('국가 구분');
                expect(cdSname).to.equals('국내');
                done();
            });
    });

    it('add vendorGb code', done => {
        request(server)
            .post('/api/v1/cmcodes')
            .send({
                cdMajor: '0005',
                cdMinor: '0001',
                cdFname: '업체 구분',
                cdSname: '계약',
            })
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                const { cdMajor, cdMinor, cdFname, cdSname } = ctx.body;

                expect(ctx.body).instanceOf(Object);
                expect(cdMajor).to.equals('0005');
                expect(cdMinor).to.equals('0001');
                expect(cdFname).to.equals('업체 구분');
                expect(cdSname).to.equals('계약');
                done();
            });
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

    it('add project', done => {
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
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                const { projectGbCd, projectName, projectCode, client, clientCode, contractor, contractorCode, memo } = ctx.body;

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

                expect(ctx.body).instanceOf(Object);
                done();
            });
    });

    it('add vendor', done => {
        request(server)
            .post('/api/v1/vendors')
            .send({
                project: '1',
                partCd: '0001',
                partNumber: 'R-005',
                countryCd: '0001',
                vendorGbCd: '0001',
                vendorName: '포드기계',
                officialName: 'FRD',
                manager: '1',
                itemName: 'Circulation Pump',
            })
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                const { id, project, partCd, partNumber, countryCd, vendorGbCd, vendorName, officialName, manager, itemName } = ctx.body;
                vendorId = id;

                expect(ctx.body).instanceOf(Object);
                expect(project).instanceOf(Object);
                expect(partCd).to.equals('0001');
                expect(partNumber).to.equals('R-005');
                expect(countryCd).to.equals('0001');
                expect(vendorGbCd).to.equals('0001');
                expect(vendorName).to.equals('포드기계');
                expect(officialName).to.equals('FRD');
                expect(manager).instanceOf(Object);
                expect(itemName).to.equals('Circulation Pump');
                done();
            });
    });

    it('get vendor', done => {
        request(server)
            .get(`/api/v1/vendors/${vendorId}`)
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                expect(ctx.body).instanceOf(Object);
                expect(ctx.body.id).to.equals(vendorId);
                done();
            });
    });

    it('get vendors', done => {
        request(server)
            .get('/api/v1/vendors')
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                expect(ctx.body).instanceOf(Array);
                expect(ctx.body).have.length(1);
                done();
            });
    });

    it('delete vendor', done => {
        request(server)
            .delete(`/api/v1/vendors/${vendorId}`)
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                expect(ctx.body).to.equals(true);
                done();
            });
    });

    it('get vendors', done => {
        request(server)
            .get('/api/v1/vendors')
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                expect(ctx.body).instanceOf(Array);
                expect(ctx.body).have.length(0);
                done();
            });
    });
});
