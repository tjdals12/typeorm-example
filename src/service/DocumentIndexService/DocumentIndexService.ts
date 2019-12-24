import { DocumentIndex } from 'entity/DocumentIndex';

/**
 * @author      minz-logger
 * @date        2019. 12. 24
 * @description DocumentIndex Service
 */
export interface DocumentIndexService {
    /**
     * @author      minz-logger
     * @date        2019. 12. 24
     * @description 인덱스 목록 조회
     */
    getDocumentIndexes(): Promise<DocumentIndex[]>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 24
     * @description 인덱스 조회
     */
    getDocumentIndex(id: number): Promise<DocumentIndex>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 24
     * @description 인덱스 추가
     */
    addDocumentIndex(param: Record<string, string>): Promise<DocumentIndex>;
}
