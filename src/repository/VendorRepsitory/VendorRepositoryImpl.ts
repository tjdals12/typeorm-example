import { EntityRepository, AbstractRepository } from 'typeorm';
import { Vendor } from 'entity/Vendor';
import { Cmcode } from 'entity/Cmcode';
import { CMCODE } from 'constants/CMCODE';
import { VendorRepository } from './VendorRepository';

/**
 * @author      minz-logger
 * @date        2019. 12. 22
 * @description Vendor Repository Impl.
 */
@EntityRepository(Vendor)
export class VendorRepositoryImpl extends AbstractRepository<Vendor> implements VendorRepository {
    async findVendors(): Promise<Vendor[]> {
        const vendors = await this.createQueryBuilder('vendor')
            .leftJoinAndSelect('vendor.project', 'project')
            .leftJoinAndSelect('vendor.manager', 'manager')
            .innerJoinAndMapMany('vendor.part', Cmcode, 'partCd', 'partCd.cdMajor = :cdMajor AND partCd.cdMinor = vendor.partCd', {
                cdMajor: CMCODE.PART,
            })
            .innerJoinAndMapMany(
                'vendor.country',
                Cmcode,
                'countryCd',
                'countryCd.cdMajor = :cdMajor AND countryCd.cdMinor = vendor.countryCd',
                { cdMajor: CMCODE.COUNTRY },
            )
            .innerJoinAndMapMany(
                'vendor.vendorGb',
                Cmcode,
                'vendorGbCd',
                'vendorGbCd.cdMajor = :cdMajor AND vendorGbCd.cdMinor = vendor.vendorGbCd',
                { cdMajor: CMCODE.VENDOR_GB },
            )
            .orderBy('vendor.id', 'ASC')
            .getMany();

        return vendors;
    }

    async findVendor(id: number): Promise<Vendor> {
        const vendor = await this.createQueryBuilder('vendor')
            .where('vendor.id = :id', { id })
            .leftJoinAndSelect('vendor.project', 'project')
            .leftJoinAndSelect('vendor.manager', 'manager')
            .innerJoinAndMapMany('vendor.part', Cmcode, 'partCd', 'partCd.cdMajor = :cdMajor AND partCd.cdMinor = vendor.partCd', {
                cdMajor: CMCODE.PART,
            })
            .innerJoinAndMapMany(
                'vendor.country',
                Cmcode,
                'countryCd',
                'countryCd.cdMajor = :cdMajor AND countryCd.cdMinor = vendor.countryCd',
                { cdMajor: CMCODE.COUNTRY },
            )
            .innerJoinAndMapMany(
                'vendor.vendorGb',
                Cmcode,
                'vendorGbCd',
                'vendorGbCd.cdMajor = :cdMajor AND vendorGbCd.cdMinor = vendor.vendorGbCd',
                { cdMajor: CMCODE.VENDOR_GB },
            )
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
