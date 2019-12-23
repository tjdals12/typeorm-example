import { Manager } from 'entity/Manager';

/**
 * @author      minz-logger
 * @date        2019. 12. 23
 * @description Manager Repository
 */
export interface ManagerRepository {
    /**
     * @author      minz-logger
     * @date        2019. 12. 23
     * @description 담당자 목록 조회
     */
    findManagers(): Promise<Manager[]>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 23
     * @description 담당자 조회
     */
    findManager(id: number): Promise<Manager>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 23
     * @description 담당자 추가
     */
    saveManager(param: Record<string, string>): Promise<number>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 23
     * @description 담당자 삭제
     */
    deleteManager(id: number): Promise<boolean>;
}
