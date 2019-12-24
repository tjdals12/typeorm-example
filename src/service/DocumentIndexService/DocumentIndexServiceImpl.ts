import { Service } from 'typedi';
import { DocumentIndex } from 'entity/DocumentIndex';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { DocumentIndexRepositoryImpl } from 'repository/DocumentIndexRepository/DocumentIndexRepositoryImpl';
import { DocumentIndexService } from './DocumentIndexService';

/**
 * @author      minz-logger
 * @date        2019. 12. 24
 * @description DocumentIndex Service Impl.
 */
@Service()
export class DocumentIndexServiceImpl implements DocumentIndexService {
    @InjectRepository()
    private readonly documentIndexRepository: DocumentIndexRepositoryImpl;

    async getDocumentIndexes(): Promise<DocumentIndex[]> {
        const documentIndexes = await this.documentIndexRepository.findDocumentIndexes();

        return documentIndexes;
    }

    async getDocumentIndex(id: number): Promise<DocumentIndex> {
        const documentIndex = await this.documentIndexRepository.findDocumentIndex(id);

        return documentIndex;
    }

    async addDocumentIndex(param: Record<string, string>): Promise<DocumentIndex> {
        const id = await this.documentIndexRepository.saveDocumentIndex(param);
        const documentIndex = await this.documentIndexRepository.findDocumentIndex(id);

        return documentIndex;
    }
}
