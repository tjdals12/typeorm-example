import { Cmcode } from 'entity/Cmcode';

/**
 * @author      minz-logger
 * @date        2019. 12. 23
 * @description Cmcode Repository
 */
export interface CmcodeRepository {
    /**
     * @author      minz-logger
     * @date        2019. 12. 23
     * @description 공통코드 목록 조회
     */
    findCmcodes(): Promise<Cmcode[]>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 23
     * @description 공통코드 조회
     */
    findCdMinors(id: string): Promise<Cmcode[]>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 23
     * @description 공통코드 조회
     */
    findCdMinor(ids: Record<string, string>): Promise<Cmcode>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 23
     * @description 공통코드 추가
     * @param       param
     */
    saveCmcode(param: Record<string, string>): Promise<Record<string, string>>;
}
