import { Service } from 'typedi';
import { Vendor } from 'entity/Vendor';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { VendorRepositoryImpl } from 'repository/VendorRepsitory/VendorRepositoryImpl';
import { VendorService } from './VendorService';

/**
 * @author      minz-logger
 * @date        2019. 12. 22
 * @description Vendor Service Impl.
 */
@Service()
export class VendorServiceImpl implements VendorService {
    @InjectRepository()
    private readonly vendorRepository: VendorRepositoryImpl;

    async getVendors(): Promise<Vendor[]> {
        const vendors = await this.vendorRepository.findVendors();

        return vendors;
    }

    async getVendor(id: number): Promise<Vendor> {
        const vendor = await this.vendorRepository.findVendor(id);

        return vendor;
    }

    async addVendor(param: Record<string, string>): Promise<Vendor> {
        const id = await this.vendorRepository.saveVendor(param);
        const vendor = await this.vendorRepository.findVendor(id);

        return vendor;
    }

    async removeVendor(id: number): Promise<boolean> {
        const result = await this.vendorRepository.deleteVendor(id);

        return result;
    }
}
