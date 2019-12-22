import { EntityRepository, Repository } from 'typeorm';
import { Project } from 'entity/Project';
import { ProjectRepository } from './ProjectRepository';

/**
 * @author      minz-logger
 * @date        2019. 12. 22
 * @description Project Repository Impl
 */
@EntityRepository(Project)
export class ProjectRepositoryImpl extends Repository<Project> implements ProjectRepository {
    async findProjects(): Promise<Project[]> {
        const projects = await this.createQueryBuilder('project').getMany();

        return projects;
    }

    async findProject(id: number): Promise<Project> {
        const project = await this.createQueryBuilder('project')
            .where('project.id = :id', { id })
            .getOne();

        return project;
    }

    async saveProject(param: Record<string, string>): Promise<number> {
        const result = await this.createQueryBuilder('project')
            .insert()
            .into('project')
            .values({ ...param })
            .execute();

        return result.identifiers[0].id;
    }

    async deleteProject(id: number): Promise<boolean> {
        const result = await this.createQueryBuilder('project')
            .where('project.id = :id', { id })
            .delete()
            .execute();

        return result.affected === 1;
    }
}
