import Router from 'koa-router';
import { VendorService } from './VendorService';

const vendor = new Router();
const vendorService = new VendorService();

vendor.get('/', vendorService.getVendorList);

vendor.post('/', vendorService.addVendor);

vendor.get('/:id', vendorService.getVendor);

export default vendor;
