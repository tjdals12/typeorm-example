import { Server } from 'http';
import { createConnection, getConnection } from 'typeorm';
import App from 'app';
import request from 'supertest';
import { expect } from 'chai';

const app = new App();

describe('  [Cmcode]', () => {
    let server: Server;

    before(async () => {
        await createConnection();
        console.log('Connected database');

        server = await app.listen(4000);
        console.log('Server running at 4000');
    });

    after(done => {
        getConnection()
            .close()
            .then(() => {
                server.close();
                done();
            })
            .catch(err => done(err));
    });

    it('getCmcodes', done => {
        request(server)
            .get('/api/v1/cmcodes')
            .expect(200)
            .end((err, ctx) => {
                if (err) throw err;

                expect(ctx.body).instanceOf(Array);
                done();
            });
    });
});
