import { DocumentInfo } from 'entity/DocumentInfo';
import { ParameterizedContext } from 'koa';

/**
 * @author minz-logger
 * @date 2019. 12. 20
 * @description 문서정보 목록 조회
 */
export const getDocumentInfoList = async (
    ctx: ParameterizedContext,
): Promise<void> => {
    const documentInfoList = await DocumentInfo.createQueryBuilder(
        'documentinfo',
    )
        .orderBy('documentinfo.id', 'ASC')
        .getMany();

    ctx.status = 200;
    ctx.body = documentInfoList;
};

/**
 * @author      minz-logger
 * @date        2019. 12. 20
 * @description 문서정보 추가
 */
export const addDocumentInfo = async (
    ctx: ParameterizedContext,
): Promise<void> => {
    const result = await DocumentInfo.createQueryBuilder('documentinfo')
        .insert()
        .into('documentinfo')
        .values({ ...ctx.request.body })
        .execute();

    ctx.status = 200;
    ctx.body = result;
};

/**
 * @author minz-logger
 * @date 2019. 12. 20
 * @description 문서정보 조회
 */
export const getDocumentInfo = async (
    ctx: ParameterizedContext,
): Promise<void> => {
    const { id } = ctx.params;

    const documentInfo = await DocumentInfo.createQueryBuilder('documentinfo')
        .where('documentinfo.id = :id', { id })
        .leftJoinAndSelect('documentinfo.documentIndex', 'documentindex')
        .leftJoinAndSelect('documentindex.vendor', 'documentindex.vendor')
        .getOne();

    ctx.status = 200;
    ctx.body = documentInfo;
};
