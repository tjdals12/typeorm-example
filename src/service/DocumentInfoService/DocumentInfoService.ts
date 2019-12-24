import { DocumentInfo } from 'entity/DocumentInfo';

/**
 * @author      minz-logger
 * @date        2019. 12. 24
 * @description DocumentInfo Service
 */
export interface DocumentInfoService {
    /**
     * @author      minz-logger
     * @date        2019. 12. 24
     * @description 문서정보 목록 조회
     */
    getDocumentInfos(): Promise<DocumentInfo[]>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 24
     * @description 문서정보 조회
     */
    getDocumentInfo(id: number): Promise<DocumentInfo>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 24
     * @description 문서정보 추가
     */
    addDocumentInfo(param: Record<string, string>): Promise<DocumentInfo>;
}
