import { EntityRepository, AbstractRepository } from 'typeorm';
import { Manager } from 'entity/Manager';
import { ManagerRepository } from './ManagerRepository';

/**
 * @author      minz-logger
 * @date        2019. 12. 23
 * @description Manager Repository Impl.
 */
@EntityRepository(Manager)
export class ManagerRepositoryImpl extends AbstractRepository<Manager> implements ManagerRepository {
    async findManagers(): Promise<Manager[]> {
        const managers = await this.createQueryBuilder('manager').getMany();

        return managers;
    }

    async findManager(id: number): Promise<Manager> {
        const manager = await this.createQueryBuilder('manager')
            .where('manager.id = :id', { id })
            .getOne();

        return manager;
    }

    async saveManager(param: Record<string, string>): Promise<number> {
        const result = await this.createQueryBuilder('manager')
            .insert()
            .into('manager')
            .values({ ...param })
            .execute();

        return result.identifiers[0].id;
    }

    async deleteManager(id: number): Promise<boolean> {
        const result = await this.createQueryBuilder('manager')
            .where('manager.id = :id', { id })
            .delete()
            .execute();

        return result.affected === 1;
    }
}
