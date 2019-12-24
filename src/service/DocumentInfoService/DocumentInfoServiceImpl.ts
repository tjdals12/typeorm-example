import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { DocumentInfo } from 'entity/DocumentInfo';
import { DocumentInfoRepositoryImpl } from 'repository/DocumentInfoRepository/DocumentInfoRepositoryImpl';
import { DocumentInfoService } from './DocumentInfoService';

/**
 * @author      minz-logger
 * @date        2019. 12. 24
 * @description DocumentInfo Service Impl.
 */
@Service()
export class DocumentInfoServiceImpl implements DocumentInfoService {
    @InjectRepository()
    private readonly documentInfoRepository: DocumentInfoRepositoryImpl;

    async getDocumentInfos(): Promise<DocumentInfo[]> {
        const documentInfos = await this.documentInfoRepository.findDocumentInfos();

        return documentInfos;
    }

    async getDocumentInfo(id: number): Promise<DocumentInfo> {
        const documentInfo = await this.documentInfoRepository.findDocumentInfo(id);

        return documentInfo;
    }

    async addDocumentInfo(param: Record<string, string>): Promise<DocumentInfo> {
        const id = await this.documentInfoRepository.saveDocumentInfo(param);
        const documentInfo = await this.documentInfoRepository.findDocumentInfo(id);

        return documentInfo;
    }
}
