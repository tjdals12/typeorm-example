import Router from 'koa-router';
import * as loggerCtrl from 'apis/logger.ctrl';
import * as documentInfoCtrl from './documentinfo.ctrl';

const documentInfo = new Router();

documentInfo.get('/', loggerCtrl.logging, documentInfoCtrl.getDocumentInfoList);

documentInfo.post('/', loggerCtrl.logging, documentInfoCtrl.addDocumentInfo);

documentInfo.get('/:id', loggerCtrl.logging, documentInfoCtrl.getDocumentInfo);

export default documentInfo;
