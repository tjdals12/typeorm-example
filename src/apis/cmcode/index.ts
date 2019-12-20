import Router from 'koa-router';
import * as loggerCtrl from 'apis/logger.ctrl';
import * as cmcodeCtrl from './cmcode.ctrl';

const cmcode = new Router();

cmcode.get('/', loggerCtrl.logging, cmcodeCtrl.getCmcodeList);

cmcode.get('/:cdmajor', loggerCtrl.logging, cmcodeCtrl.getCmcodeByCdMajor);

cmcode.post('/', loggerCtrl.logging, cmcodeCtrl.addCmcode);

cmcode.patch('/:cdmajor/update', loggerCtrl.logging, cmcodeCtrl.updateCdMajor);

cmcode.patch(
    '/:cdmajor/update/:cdminor',
    loggerCtrl.logging,
    cmcodeCtrl.updateCdMinor,
);

export default cmcode;
