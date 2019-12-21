import Router from 'koa-router';
import * as documentInfoCtrl from './documentinfo.ctrl';

const documentInfo = new Router();

documentInfo.get('/', documentInfoCtrl.getDocumentInfoList);

documentInfo.post('/', documentInfoCtrl.addDocumentInfo);

documentInfo.get('/:id', documentInfoCtrl.getDocumentInfo);

export default documentInfo;
