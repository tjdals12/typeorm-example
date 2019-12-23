import { JsonController, Get, Param, Post, Body, Delete } from 'routing-controllers';
import { ManagerServiceImpl } from 'service/ManagerService/ManagerServiceImpl';
import { Manager } from 'entity/Manager';
import { Inject } from 'typedi';

/**
 * @author      minz-logger
 * @date        2019. 12. 23
 * @description Manager Controller
 */
@JsonController('/managers')
export class ManagerController {
    @Inject()
    private readonly managerService: ManagerServiceImpl;

    @Get('/')
    getManagers(): Promise<Manager[]> {
        return this.managerService.getManagers();
    }

    @Get('/:id')
    getManager(@Param('id') id: number): Promise<Manager> {
        return this.managerService.getManager(id);
    }

    @Post('/')
    addManager(@Body() body: Record<string, string>): Promise<Manager> {
        return this.managerService.addManager(body);
    }

    @Delete('/:id')
    deleteManager(@Param('id') id: number): Promise<boolean> {
        return this.managerService.deleteManager(id);
    }
}
