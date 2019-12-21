import Router from 'koa-router';
import * as managerCtrl from './manager.ctrl';

const manager = new Router();

manager.get('/', managerCtrl.getManagerList);

manager.post('/', managerCtrl.addManager);

manager.get('/:id', managerCtrl.getManager);

manager.patch('/:id/update', managerCtrl.updateManager);

manager.delete('/:id/delete', managerCtrl.deleteManager);

export default manager;
