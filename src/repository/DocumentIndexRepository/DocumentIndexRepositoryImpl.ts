import { EntityRepository, AbstractRepository } from 'typeorm';
import { DocumentIndex } from 'entity/DocumentIndex';
import { DocumentIndexRepository } from './DocumentIndexRepository';

/**
 * @author      minz-logger
 * @date        2019. 12. 24
 * @description DocumentIndex Repository Impl.
 */
@EntityRepository(DocumentIndex)
export class DocumentIndexRepositoryImpl extends AbstractRepository<DocumentIndex> implements DocumentIndexRepository {
    async findDocumentIndexes(): Promise<DocumentIndex[]> {
        const documentIndexes = await this.createQueryBuilder('documentindex').getMany();

        return documentIndexes;
    }

    async findDocumentIndex(id: number): Promise<DocumentIndex> {
        const documentIndex = await this.createQueryBuilder('documentindex')
            .where('documentindex.id = :id', { id })
            .getOne();

        return documentIndex;
    }

    async saveDocumentIndex(param: Record<string, string>): Promise<number> {
        const result = await this.createQueryBuilder('documentindex')
            .insert()
            .into('documentindex')
            .values({
                ...param,
            })
            .execute();

        return result.identifiers[0].id;
    }
}
