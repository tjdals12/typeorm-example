import { EntityRepository, AbstractRepository } from 'typeorm';
import { Cmcode } from 'entity/Cmcode';
import { CmcodeRepository } from './CmcodeRepository';

/**
 * @author      minz-logger
 * @date        2019. 12. 23
 * @description Cmcode Repository Impl.
 */
@EntityRepository(Cmcode)
export class CmcodeRepositoryImpl extends AbstractRepository<Cmcode> implements CmcodeRepository {
    async findCmcodes(): Promise<Cmcode[]> {
        const cmcodes = await this.createQueryBuilder('cmcode')
            .orderBy('cmcode.cdMajor', 'ASC')
            .getMany();

        return cmcodes;
    }

    async findCdMinors(id: string): Promise<Cmcode[]> {
        const cmcodes = await this.createQueryBuilder('cmcode')
            .where('cmcode.cdMajor = :id', { id })
            .orderBy('cmcode.cdMinor', 'ASC')
            .getMany();

        return cmcodes;
    }

    async findCdMinor(ids: Record<string, string>): Promise<Cmcode> {
        const cmcode = await this.createQueryBuilder('cmcode')
            .where('cmcode.cdMajor = :cdMajor AND cmcode.cdMinor = :cdMinor', {
                cdMajor: ids.cdMajor,
                cdMinor: ids.cdMinor,
            })
            .orderBy('cmcode.cdMinor', 'ASC')
            .getOne();

        return cmcode;
    }

    async saveCmcode(param: Record<string, string>): Promise<Record<string, string>> {
        const result = await this.createQueryBuilder('cmcode')
            .insert()
            .into('cmcode')
            .values({ ...param })
            .execute();

        return result.identifiers[0];
    }
}
