import { EntityRepository, AbstractRepository } from 'typeorm';
import { Vendor } from 'entity/Vendor';
import { Cmcode } from 'entity/Cmcode';
import { CMCODE } from 'constants/CMCODE';

@EntityRepository(Vendor)
export class VendorRepository extends AbstractRepository<Vendor> {
    findVendors = async (): Promise<Vendor[]> => {
        const venodrList = await this.createQueryBuilder('vendor')
            .leftJoinAndSelect('vendor.project', 'project')
            .innerJoinAndMapMany(
                'vendor.part',
                Cmcode,
                'partCd',
                'partCd.cdMajor = :cdMajor AND partCd.cdMinor = vendor.partCd',
                { cdMajor: CMCODE.PART },
            )
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

        return venodrList;
    };

    findVendor = async (id: number): Promise<Vendor> => {
        const vendor = await Vendor.createQueryBuilder('vendor')
            .where('vendor.id = :id', { id })
            .leftJoinAndSelect('vendor.project', 'project')
            .innerJoinAndMapMany(
                'vendor.part',
                Cmcode,
                'partCd',
                'partCd.cdMajor = :cdMajor AND partCd.cdMinor = vendor.partCd',
                { cdMajor: CMCODE.PART },
            )
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
    };

    addVendor = async (
        params: Record<string, number | string>,
    ): Promise<number> => {
        const result = await Vendor.createQueryBuilder('vendor')
            .insert()
            .into('vendor')
            .values(params)
            .execute();

        return result.identifiers[0].id;
    };
}
