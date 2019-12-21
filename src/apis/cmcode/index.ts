import Router from 'koa-router';
import * as cmcodeCtrl from './cmcode.ctrl';

const cmcode = new Router();

cmcode.get('/', cmcodeCtrl.getCmcodeList);

cmcode.get('/:cdmajor', cmcodeCtrl.getCmcodeByCdMajor);

cmcode.post('/', cmcodeCtrl.addCmcode);

cmcode.patch('/:cdmajor/update', cmcodeCtrl.updateCdMajor);

cmcode.patch('/:cdmajor/update/:cdminor', cmcodeCtrl.updateCdMinor);

export default cmcode;
