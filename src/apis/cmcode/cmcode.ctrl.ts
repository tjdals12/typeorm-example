import { Cmcode } from 'entity/Cmcode';
import { ParameterizedContext } from 'koa';

/**
 * @author      minz-logger
 * @date        2019. 12. 19
 * @description 공통코드 목록 조회
 */
export const getCmcodeList = async (
    ctx: ParameterizedContext,
): Promise<void> => {
    const cmcodeList = await Cmcode.createQueryBuilder('cmcode')
        .orderBy('cmcode.cdMajor', 'ASC')
        .getMany();

    ctx.status = 200;
    ctx.body = cmcodeList;
};

/**
 * @author      minz-logger
 * @date        2019. 12. 19
 * @description 공통코드 목록 조회 by cdmajor
 */
export const getCmcodeByCdMajor = async (
    ctx: ParameterizedContext,
): Promise<void> => {
    const { cdmajor } = ctx.params;

    const cmcodeList = await Cmcode.createQueryBuilder('cmcode')
        .where('cmcode.cdMajor = :cdmajor', { cdmajor })
        .orderBy('cmcode.cdMinor', 'ASC')
        .getMany();

    ctx.status = 200;
    ctx.body = cmcodeList;
};

/**
 * @author      minz-logger
 * @date        2019. 12. 19
 * @description 공통코드 추가
 */
export const addCmcode = async (ctx: ParameterizedContext): Promise<void> => {
    const result = await Cmcode.createQueryBuilder('cmcode')
        .insert()
        .into('cmcode')
        .values({ ...ctx.request.body })
        .execute();

    ctx.status = 200;
    ctx.body = result.identifiers;
};

/**
 * @author      minz-logger
 * @date        2019. 12. 19
 * @description 상위코드 수정
 */
export const updateCdMajor = async (
    ctx: ParameterizedContext,
): Promise<void> => {
    const { cdmajor } = ctx.params;

    const result = await Cmcode.createQueryBuilder('cmcode')
        .where('cmcode.cdMajor = :cdmajor', { cdmajor })
        .update('cmcode')
        .set({ ...ctx.request.body })
        .execute();

    ctx.status = 200;
    ctx.body = result;
};

/**
 * @author      minz-logger
 * @date        2019. 12. 19
 * @description 하위코드 수정
 */
export const updateCdMinor = async (
    ctx: ParameterizedContext,
): Promise<void> => {
    const { cdmajor, cdminor } = ctx.params;

    const result = await Cmcode.createQueryBuilder('cmcode')
        .where('cmcode.cdMajor = :cdmajor AND cmcode.cdMinor = :cdminor', {
            cdmajor,
            cdminor,
        })
        .update('cmcode')
        .set({ ...ctx.request.body })
        .execute();

    ctx.status = 200;
    ctx.body = result;
};
