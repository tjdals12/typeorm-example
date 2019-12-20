import { Vendor } from 'entity/Vendor';
import { Cmcode } from 'entity/Cmcode';
import { ParameterizedContext } from 'koa';
import { CMCODE } from 'constants/CMCODE';

/**
 * @author      minz-logger
 * @date        2019. 12. 19
 * @description 업체 목록 조회
 */
export const getVendorList = async (
    ctx: ParameterizedContext,
): Promise<void> => {
    const projectList = await Vendor.createQueryBuilder('vendor')
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

    ctx.status = 200;
    ctx.body = projectList;
};

/**
 * @author      minz-logger
 * @date        2019. 12. 19
 * @description 업체 추가
 */
export const addVendor = async (ctx: ParameterizedContext): Promise<void> => {
    const result = await Vendor.createQueryBuilder('vendor')
        .insert()
        .into('vendor')
        .values({ ...ctx.request.body })
        .execute();

    ctx.status = 200;
    ctx.body = result.identifiers;
};

/**
 * @author      minz-logger
 * @date        2019. 12. 19
 * @description 업체 조회
 */
export const getVendor = async (ctx: ParameterizedContext): Promise<void> => {
    const { id } = ctx.params;

    const project = await Vendor.createQueryBuilder('vendor')
        .leftJoinAndSelect('vendor.project', 'project')
        .leftJoinAndSelect('vendor.manager', 'manager')
        .where('vendor.id = :id', { id })
        .innerJoinAndMapOne(
            'vendor.part',
            Cmcode,
            'partCd',
            'partCd.cdMajor = :cdMajor AND partCd.cdMinor = vendor.partCd',
            { cdMajor: CMCODE.PART },
        )
        .innerJoinAndMapOne(
            'vendor.country',
            Cmcode,
            'countryCd',
            'countryCd.cdMajor = :cdMajor AND countryCd.cdMinor = vendor.countryCd',
            { cdMajor: CMCODE.COUNTRY },
        )
        .innerJoinAndMapOne(
            'vendor.vendorGb',
            Cmcode,
            'vendorGbCd',
            'vendorGbCd.cdMajor = :cdMajor AND vendorGbCd.cdMinor = vendor.vendorGbCd',
            { cdMajor: CMCODE.VENDOR_GB },
        )
        .innerJoinAndMapOne(
            'manager.position',
            Cmcode,
            'positionCd',
            'positionCd.cdMajor = :cdMajor AND positionCd.cdMinor = manager.positionCd',
            { cdMajor: CMCODE.POSITION },
        )
        .getOne();

    ctx.status = 200;
    ctx.body = project;
};
