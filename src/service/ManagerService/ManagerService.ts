import { Manager } from 'entity/Manager';

/**
 * @author      minz-logger
 * @date        2019. 12. 23
 * @description Manager Service
 */
export interface ManagerService {
    /**
     * @author      minz-logger
     * @date        2019. 12. 23
     * @description 담당자 목록 조회
     */
    getManagers(): Promise<Manager[]>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 23
     * @description 담당자 조회
     */
    getManager(id: number): Promise<Manager>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 23
     * @description 담당자 추가
     */
    addManager(param: Record<string, string>): Promise<Manager>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 23
     * @description 담당자 삭제
     */
    deleteManager(id: number): Promise<boolean>;
}
