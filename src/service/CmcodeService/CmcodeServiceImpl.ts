import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Cmcode } from 'entity/Cmcode';
import { CmcodeRepositoryImpl } from 'repository/CmcodeRepository/CmcodeRepositoryImpl';
import { CmcodeService } from './CmcodeService';

/**
 * @author      minz-logger
 * @date        2019. 12. 23
 * @description Cmcode Service Impl.
 */
@Service()
export class CmcodeServiceImpl implements CmcodeService {
    @InjectRepository()
    private readonly cmcodeRepository: CmcodeRepositoryImpl;

    async getCmcodes(): Promise<Cmcode[]> {
        const cmcodes = await this.cmcodeRepository.findCmcodes();

        return cmcodes;
    }

    async getCdMinors(id: string): Promise<Cmcode[]> {
        const cmcodes = await this.cmcodeRepository.findCdMinors(id);

        return cmcodes;
    }

    async addCmcode(param: Record<string, string>): Promise<Cmcode> {
        const ids = await this.cmcodeRepository.saveCmcode(param);
        const cmcode = await this.cmcodeRepository.findCdMinor(ids);

        return cmcode;
    }
}
