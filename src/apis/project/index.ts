import Router from 'koa-router';
import * as loggerCtrl from 'apis/logger.ctrl';
import * as projectCtrl from './project.ctrl';

const project = new Router();

project.get('/', loggerCtrl.logging, projectCtrl.getProjectList);

project.post('/', loggerCtrl.logging, projectCtrl.addProject);

project.get('/:id', loggerCtrl.logging, projectCtrl.getProject);

project.patch('/:id/update', loggerCtrl.logging, projectCtrl.updateProject);

project.delete('/:id/delete', loggerCtrl.logging, projectCtrl.deleteProject);

export default project;
