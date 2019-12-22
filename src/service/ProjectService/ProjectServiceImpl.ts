import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { ProjectRepositoryImpl } from 'repository/ProjectRepository/ProjectRepositoryImpl';
import { Project } from 'entity/Project';
import { ProjectService } from './ProjectService';

/**
 * @author      minz-logger
 * @date        2019. 12. 22
 * @description Project Repository Impl
 */
@Service()
export class ProjectServiceImpl implements ProjectService {
    @InjectRepository()
    private readonly projectRepository: ProjectRepositoryImpl;

    async getProjects(): Promise<Project[]> {
        const projects = await this.projectRepository.findProjects();

        return projects;
    }

    async getProject(id: number): Promise<Project> {
        const project = await this.projectRepository.findProject(id);

        return project;
    }

    async addProject(param: Record<string, string>): Promise<Project> {
        const id = await this.projectRepository.saveProject(param);
        const project = await this.projectRepository.findProject(id);

        return project;
    }

    async removeProject(id: number): Promise<boolean> {
        const result = await this.projectRepository.deleteProject(id);

        return result;
    }
}
