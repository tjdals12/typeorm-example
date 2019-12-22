import { Project } from 'entity/Project';

/**
 * @author      minz-logger
 * @date        2019. 12. 22
 * @description Project Service
 */
export interface ProjectService {
    /**
     * @author      minz-logger
     * @date        2019. 12. 22
     * @description 프로젝트 목록 조회
     */
    getProjects(): Promise<Project[]>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 22
     * @description 프로젝트 조회
     */
    getProject(id: number): Promise<Project>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 22
     * @description 프로젝트 추가
     */
    addProject(param: Record<string, string>): Promise<Project>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 22
     * @description 프로젝트 삭제
     * @param       id
     */
    removeProject(id: number): Promise<boolean>;
}
