import { AbstractRepository, EntityRepository } from 'typeorm';
import { DocumentInfo } from 'entity/DocumentInfo';
import { DocumentInfoRepository } from './DocumentInfoRepository';

/**
 * @author      minz-logger
 * @date        2019. 12. 24
 * @description DocumentInfo Repository Impl.
 */
@EntityRepository(DocumentInfo)
export class DocumentInfoRepositoryImpl extends AbstractRepository<DocumentInfo> implements DocumentInfoRepository {
    async findDocumentInfos(): Promise<DocumentInfo[]> {
        const documentInfos = await this.createQueryBuilder('documentinfo').getMany();

        return documentInfos;
    }

    async findDocumentInfo(id: number): Promise<DocumentInfo> {
        const documentInfo = await this.createQueryBuilder('documentinfo')
            .where('documentinfo.id = :id', { id })
            .getOne();

        return documentInfo;
    }

    async saveDocumentInfo(param: Record<string, string>): Promise<number> {
        const result = await this.createQueryBuilder('documentinfo')
            .insert()
            .into('documentinfo')
            .values({ ...param })
            .execute();

        return result.identifiers[0].id;
    }
}
