import Router from 'koa-router';
import * as loggerCtrl from 'apis/logger.ctrl';
import * as managerCtrl from './manager.ctrl';

const manager = new Router();

manager.get('/', loggerCtrl.logging, managerCtrl.getManagerList);

manager.post('/', loggerCtrl.logging, managerCtrl.addManager);

manager.get('/:id', loggerCtrl.logging, managerCtrl.getManager);

manager.patch('/:id/update', loggerCtrl.logging, managerCtrl.updateManager);

manager.delete('/:id/delete', loggerCtrl.logging, managerCtrl.deleteManager);

export default manager;
