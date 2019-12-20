import Router from 'koa-router';
import project from './project';
import cmcode from './cmcode';
import vendor from './vendor';
import manager from './manager';
import documentIndex from './documentindex';
import documentInfo from './documentinfo';

const api = new Router();

api.use('/projects', project.routes());
api.use('/cmcodes', cmcode.routes());
api.use('/vendors', vendor.routes());
api.use('/managers', manager.routes());
api.use('/documentindexes', documentIndex.routes());
api.use('/documentinfos', documentInfo.routes());

export default api;
