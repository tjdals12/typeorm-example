import { Cmcode } from 'entity/Cmcode';

/**
 * @author      minz-logger
 * @date        2019. 12. 23
 * @description Cmcode Service
 */
export interface CmcodeService {
    /**
     * @author      minz-logger
     * @date        2019. 12. 23
     * @description 공통코드 목록 조회
     */
    getCmcodes(): Promise<Cmcode[]>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 23
     * @description 공통코드 조회
     */
    getCdMinors(id: string): Promise<Cmcode[]>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 23
     * @description 공통코드 추가
     */
    addCmcode(param: Record<string, string>): Promise<Cmcode>;
}
