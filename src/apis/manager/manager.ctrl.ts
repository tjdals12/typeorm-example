import { Manager } from 'entity/Manager';
import { ParameterizedContext } from 'koa';
import { Cmcode } from 'entity/Cmcode';
import { CMCODE } from 'constants/CMCODE';

/**
 * @author      minz-logger
 * @date        2019. 12. 20
 * @description 담당자 목록 조회
 */
export const getManagerList = async (
    ctx: ParameterizedContext,
): Promise<void> => {
    const managerList = await Manager.createQueryBuilder('manager')
        .innerJoinAndMapMany(
            'manager.position',
            Cmcode,
            'positionCd',
            'positionCd.cdMajor = :cdMajor AND positionCd.cdMinor = manager.positionCd',
            { cdMajor: CMCODE.POSITION },
        )
        .getMany();

    ctx.status = 200;
    ctx.body = managerList;
};

/**
 * @author      minz-logger
 * @date        2019. 12. 20
 * @description 담당자 추가
 */
export const addManager = async (ctx: ParameterizedContext): Promise<void> => {
    const result = await Manager.createQueryBuilder('manager')
        .insert()
        .into('manager')
        .values({ ...ctx.request.body })
        .execute();

    ctx.status = 200;
    ctx.body = result.identifiers;
};

/**
 * @author      minz-logger
 * @date        2019. 12. 20
 * @description 담당자 조회
 */
export const getManager = async (ctx: ParameterizedContext): Promise<void> => {
    const { id } = ctx.params;

    const manager = await Manager.createQueryBuilder('manager')
        .where('manager.id = :id', { id })
        .innerJoinAndMapOne(
            'manager.position',
            Cmcode,
            'positionCd',
            'positionCd.cdMajor = :cdMajor AND positionCd.cdMinor = manager.positionCd',
            { cdMajor: CMCODE.POSITION },
        )
        .getOne();

    ctx.status = 200;
    ctx.body = manager;
};

/**
 * @author      minz-logger
 * @date        2019. 12. 20
 * @description 담당자 수정
 */
export const updateManager = async (
    ctx: ParameterizedContext,
): Promise<void> => {
    const { id } = ctx.params;

    const result = await Manager.createQueryBuilder('manager')
        .where('manager.id = :id', { id })
        .update('manager')
        .set({ ...ctx.request.body })
        .execute();

    ctx.status = 200;
    ctx.body = result;
};

/**
 * @author      minz-logger
 * @date        2019. 12. 20
 * @description 담당자 삭제
 */
export const deleteManager = async (
    ctx: ParameterizedContext,
): Promise<void> => {
    const { id } = ctx.params;

    const result = await Manager.createQueryBuilder('manager')
        .where('manager.id = :id', { id })
        .delete()
        .execute();

    ctx.status = 200;
    ctx.body = result;
};
