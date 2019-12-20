import { Project } from 'entity/Project';
import { ParameterizedContext } from 'koa';
import { Cmcode } from 'entity/Cmcode';
import { CMCODE } from 'constants/CMCODE';

/**
 * @author      minz-logger
 * @date        2019. 12. 19
 * @description 프로젝트 목록 조회
 */
export const getProjectList = async (
    ctx: ParameterizedContext,
): Promise<void> => {
    const projectList = await Project.createQueryBuilder('project')
        .innerJoinAndMapMany(
            'project.projectGb',
            Cmcode,
            'cmcode',
            'cmcode.cdMajor = :cdMajor AND cmcode.cdMinor = project.projectGbCd',
            { cdMajor: CMCODE.PROJECT_GB },
        )
        .getMany();

    ctx.status = 200;
    ctx.body = projectList;
};

/**
 * @author      minz-logger
 * @date        2019. 12. 19
 * @description 프로젝트 추가
 */
export const addProject = async (ctx: ParameterizedContext): Promise<void> => {
    const result = await Project.createQueryBuilder('project')
        .insert()
        .into('project')
        .values({ ...ctx.request.body })
        .execute();

    ctx.status = 200;
    ctx.body = result.identifiers;
};

/**
 * @author      minz-logger
 * @date        2019. 12. 19
 * @description 프로젝트 조회
 */
export const getProject = async (ctx: ParameterizedContext): Promise<void> => {
    const { id } = ctx.params;

    const project = await Project.createQueryBuilder('project')
        .where('project.id = :id', { id })
        .innerJoinAndMapOne(
            'project.projectGb',
            Cmcode,
            'cmcode',
            'cmcode.cdMajor = :cdMajor AND cmcode.cdMinor = project.projectGbCd',
            { cdMajor: CMCODE.PROJECT_GB },
        )
        .getOne();

    ctx.status = 200;
    ctx.body = project;
};

/**
 * @author      minz-logger
 * @date        2019. 12. 19
 * @description 프로젝트 수정
 */
export const updateProject = async (
    ctx: ParameterizedContext,
): Promise<void> => {
    const { id } = ctx.params;

    const result = await Project.createQueryBuilder('project')
        .where('project.id = :id', { id })
        .update('project')
        .set({ ...ctx.request.body })
        .execute();

    ctx.status = 200;
    ctx.body = result;
};

/**
 * @author      minz-logger
 * @date        2019. 12. 19
 * @description 프로젝트 삭제
 */
export const deleteProject = async (
    ctx: ParameterizedContext,
): Promise<void> => {
    const { id } = ctx.params;

    const result = await Project.createQueryBuilder('project')
        .where('project.id = :id', { id })
        .delete()
        .execute();

    ctx.status = 200;
    ctx.body = result;
};
