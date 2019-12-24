import { DocumentIndex } from 'entity/DocumentIndex';

/**
 * @author      minz-logger
 * @date        2019. 12. 24
 * @description DocumentIndex Repository
 */
export interface DocumentIndexRepository {
    /**
     * @author      minz-logger
     * @date        2019. 12. 24
     * @description 인덱스 목록 조회
     */
    findDocumentIndexes(): Promise<DocumentIndex[]>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 24
     * @description 인덱스 조회
     */
    findDocumentIndex(id: number): Promise<DocumentIndex>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 24
     * @description 인덱스 추가
     */
    saveDocumentIndex(param: Record<string, string>): Promise<number>;
}
