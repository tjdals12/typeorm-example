import Router from 'koa-router';
import * as loggerCtrl from 'apis/logger.ctrl';
import * as documentIndexCtrl from './documentindex.ctrl';

const documentIndex = new Router();

documentIndex.get(
    '/',
    loggerCtrl.logging,
    documentIndexCtrl.getDocumentIndexList,
);

documentIndex.post('/', loggerCtrl.logging, documentIndexCtrl.addDocumentIndex);

documentIndex.get(
    '/:id',
    loggerCtrl.logging,
    documentIndexCtrl.getDocumentIndex,
);

documentIndex.patch(
    '/:id/update',
    loggerCtrl.logging,
    documentIndexCtrl.updateDocumentIndex,
);

documentIndex.delete(
    '/:id/delete',
    loggerCtrl.logging,
    documentIndexCtrl.deleteDocumentIndex,
);

export default documentIndex;
