import { DocumentInfo } from 'entity/DocumentInfo';

/**
 * @author      minz-logger
 * @date        2019. 12. 24
 * @description DocumentInfo Repository
 */
export interface DocumentInfoRepository {
    /**
     * @author      minz-logger
     * @date        2019. 12. 24
     * @description 문서정보 목록 조회
     */
    findDocumentInfos(): Promise<DocumentInfo[]>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 24
     * @description 문서정보 조회
     */
    findDocumentInfo(id: number): Promise<DocumentInfo>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 24
     * @description 문서정보 추가
     */
    saveDocumentInfo(param: Record<string, string>): Promise<number>;
}
