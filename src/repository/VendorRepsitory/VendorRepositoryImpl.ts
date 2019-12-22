import { EntityRepository, AbstractRepository } from 'typeorm';
import { Vendor } from 'entity/Vendor';
import { VendorRepository } from './VendorRepository';

/**
 * @author      minz-logger
 * @date        2019. 12. 22
 * @description Vendor Repository Impl
 */
@EntityRepository(Vendor)
export class VendorRepositoryImpl extends AbstractRepository<Vendor> implements VendorRepository {
    async findVendors(): Promise<Vendor[]> {
        const vendors = await this.createQueryBuilder('vendor').getMany();

        return vendors;
    }

    async findVendor(id: number): Promise<Vendor> {
        const vendor = await this.createQueryBuilder('vendor')
            .where('vendor.id = :id', { id })
            .getOne();

        return vendor;
    }

    async saveVendor(param: Record<string, string>): Promise<number> {
        const result = await this.createQueryBuilder('vendor')
            .insert()
            .into('vendor')
            .values({ ...param })
            .execute();

        return result.identifiers[0].id;
    }

    async deleteVendor(id: number): Promise<boolean> {
        const result = await this.createQueryBuilder('vendor')
            .where('vendor.id = :id', { id })
            .delete()
            .execute();

        return result.affected === 1;
    }
}
