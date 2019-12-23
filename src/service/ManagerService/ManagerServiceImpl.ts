import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Manager } from 'entity/Manager';
import { ManagerRepositoryImpl } from 'repository/ManagerRepository/ManagerRepositoryImpl';
import { ManagerService } from './ManagerService';

/**
 * @author      minz-logger
 * @date        2019. 12. 23
 * @description Manager Service Impl.
 */
@Service()
export class ManagerServiceImpl implements ManagerService {
    @InjectRepository()
    private readonly managerRepository: ManagerRepositoryImpl;

    async getManagers(): Promise<Manager[]> {
        const managers = await this.managerRepository.findManagers();

        return managers;
    }

    async getManager(id: number): Promise<Manager> {
        const manager = await this.managerRepository.findManager(id);

        return manager;
    }

    async addManager(param: Record<string, string>): Promise<Manager> {
        const id = await this.managerRepository.saveManager(param);
        const manager = await this.managerRepository.findManager(id);

        return manager;
    }

    async deleteManager(id: number): Promise<boolean> {
        const result = await this.managerRepository.deleteManager(id);

        return result;
    }
}
