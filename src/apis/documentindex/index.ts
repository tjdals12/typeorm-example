import Router from 'koa-router';
import * as documentIndexCtrl from './documentindex.ctrl';

const documentIndex = new Router();

documentIndex.get('/', documentIndexCtrl.getDocumentIndexList);

documentIndex.post('/', documentIndexCtrl.addDocumentIndex);

documentIndex.get('/:id', documentIndexCtrl.getDocumentIndex);

documentIndex.patch('/:id/update', documentIndexCtrl.updateDocumentIndex);

documentIndex.delete('/:id/delete', documentIndexCtrl.deleteDocumentIndex);

export default documentIndex;
