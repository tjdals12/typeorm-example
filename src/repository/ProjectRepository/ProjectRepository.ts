import { Project } from 'entity/Project';

/**
 * @author      minz-logger
 * @date        2019. 12. 22
 * @description Project Repository
 */
export interface ProjectRepository {
    /**
     * @author      minz-logger
     * @date        2019. 12. 22
     * @description 프로젝트 목록 조회
     */
    findProjects(): Promise<Project[]>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 22
     * @description 프로젝트 조회
     * @param       id
     */
    findProject(id: number): Promise<Project>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 22
     * @description 프로젝트 추가
     * @param       param
     */
    saveProject(param: Record<string, string>): Promise<number>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 22
     * @description 프로젝트 삭제
     * @param       id
     */
    deleteProject(id: number): Promise<boolean>;
}
