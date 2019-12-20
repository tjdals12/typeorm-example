import Router from 'koa-router';
import api from 'apis';

const router: Router = new Router();

router.use('/api', api.routes());

export default router;
