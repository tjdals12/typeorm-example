import { ParameterizedContext } from 'koa';
import { getCustomRepository } from 'typeorm';
import { VendorRepository } from './VendorRepository';

export class VendorService {
    getVendorList = async (ctx: ParameterizedContext): Promise<void> => {
        const vendorRepository = getCustomRepository(VendorRepository);

        const vendorList = await vendorRepository.findVendors();

        ctx.status = 200;
        ctx.body = vendorList;
    };

    getVendor = async (ctx: ParameterizedContext): Promise<void> => {
        const vendorRepository = getCustomRepository(VendorRepository);
        const { id } = ctx.params;

        const vendor = await vendorRepository.findVendor(id);

        ctx.status = 200;
        ctx.body = vendor;
    };

    addVendor = async (ctx: ParameterizedContext): Promise<void> => {
        const vendorRepository = getCustomRepository(VendorRepository);

        const id = await vendorRepository.addVendor(ctx.request.body);
        const addedVendor = await vendorRepository.findVendor(id);

        ctx.status = 200;
        ctx.body = addedVendor;
    };
}
