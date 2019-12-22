import { JsonController, Get, Param, Post, Body, Delete } from 'routing-controllers';
import { Inject } from 'typedi';
import { Project } from 'entity/Project';
import { ProjectServiceImpl } from 'service/ProjectService/ProjectServiceImpl';

/**
 * @author      minz-logger
 * @date        2019. 12. 22
 * @description Project Controller
 */
@JsonController('/projects')
export class ProjectController {
    @Inject()
    private readonly projectService: ProjectServiceImpl;

    @Get('/')
    getProjects(): Promise<Project[]> {
        return this.projectService.getProjects();
    }

    @Get('/:id')
    getProject(@Param('id') id: number): Promise<Project> {
        return this.projectService.getProject(id);
    }

    @Post('/')
    addProject(@Body() body: Record<string, string>): Promise<Project> {
        return this.projectService.addProject(body);
    }

    @Delete('/:id')
    removeProject(@Param('id') id: number): Promise<boolean> {
        return this.projectService.removeProject(id);
    }
}
