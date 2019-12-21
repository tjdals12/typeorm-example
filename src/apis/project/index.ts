import Router from 'koa-router';
import * as projectCtrl from './project.ctrl';

const project = new Router();

project.get('/', projectCtrl.getProjectList);

project.post('/', projectCtrl.addProject);

project.get('/:id', projectCtrl.getProject);

project.patch('/:id/update', projectCtrl.updateProject);

project.delete('/:id/delete', projectCtrl.deleteProject);

export default project;
