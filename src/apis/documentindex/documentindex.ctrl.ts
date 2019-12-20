import { DocumentIndex } from 'entity/DocumentIndex';
import { ParameterizedContext } from 'koa';

/**
 * @author      minz-logger
 * @date        2019. 12. 20
 * @description 인덱스 목록 조회
 */
export const getDocumentIndexList = async (
    ctx: ParameterizedContext,
): Promise<void> => {
    const documentIndexList = await DocumentIndex.createQueryBuilder(
        'documentindex',
    )
        .innerJoinAndSelect('documentindex.vendor', 'vendor')
        .getMany();

    ctx.status = 200;
    ctx.body = documentIndexList;
};

/**
 * @author      minz-logger
 * @date        2019. 12 .20
 * @description 인덱스 추가
 */
export const addDocumentIndex = async (
    ctx: ParameterizedContext,
): Promise<void> => {
    const result = await DocumentIndex.createQueryBuilder('documentindex')
        .insert()
        .into('documentindex')
        .values({ ...ctx.request.body })
        .execute();

    ctx.status = 200;
    ctx.body = result.identifiers;
};

/**
 * @author      minz-logger
 * @date        2019. 12. 20
 * @description 인덱스 조회
 */
export const getDocumentIndex = async (
    ctx: ParameterizedContext,
): Promise<void> => {
    const { id } = ctx.params;

    const documentIndex = await DocumentIndex.createQueryBuilder(
        'documentindex',
    )
        .where('documentindex.id = :id', { id })
        .innerJoinAndSelect('documentindex.vendor', 'vendor')
        .leftJoinAndSelect('documentindex.list', 'list')
        .getOne();

    ctx.status = 200;
    ctx.body = documentIndex;
};

/**
 * @author      minz-logger
 * @date        2019. 12. 20
 * @description 인덱스 수정
 */
export const updateDocumentIndex = async (
    ctx: ParameterizedContext,
): Promise<void> => {
    const { id } = ctx.params;

    const result = await DocumentIndex.createQueryBuilder('documentindex')
        .where('documentindex.id = :id', { id })
        .update('documentindex')
        .set({ ...ctx.request.body })
        .execute();

    ctx.status = 200;
    ctx.body = result;
};

/**
 * @author      minz-logger
 * @date        2019. 12. 20
 * @description 인덱스 삭제
 */
export const deleteDocumentIndex = async (
    ctx: ParameterizedContext,
): Promise<void> => {
    const { id } = ctx.params;

    const result = await DocumentIndex.createQueryBuilder('documentindex')
        .where('documentindex.id = :id', { id })
        .delete()
        .execute();

    ctx.status = 200;
    ctx.body = result;
};
