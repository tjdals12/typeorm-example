import Router from 'koa-router';
import * as loggerCtrl from 'apis/logger.ctrl';
import * as vendorCtrl from './vendor.ctrl';

const vendor = new Router();

vendor.get('/', loggerCtrl.logging, vendorCtrl.getVendorList);

vendor.post('/', loggerCtrl.logging, vendorCtrl.addVendor);

vendor.get('/:id', loggerCtrl.logging, vendorCtrl.getVendor);

export default vendor;
