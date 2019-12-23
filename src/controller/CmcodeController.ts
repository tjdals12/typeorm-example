import { JsonController, Get, Post, Body, Param } from 'routing-controllers';
import { CmcodeServiceImpl } from 'service/CmcodeService/CmcodeServiceImpl';
import { Inject } from 'typedi';
import { Cmcode } from 'entity/Cmcode';

/**
 * @author      minz-logger
 * @date        2019. 12. 23
 * @description Cmcode Controller
 */
@JsonController('/cmcodes')
export class CmcodeController {
    @Inject()
    private readonly cmcodeService: CmcodeServiceImpl;

    @Get('/')
    getCmcodes(): Promise<Cmcode[]> {
        return this.cmcodeService.getCmcodes();
    }

    @Get('/:id')
    getCdminors(@Param('id') id: string): Promise<Cmcode[]> {
        return this.cmcodeService.getCdMinors(id);
    }

    @Post('/')
    addCmcode(@Body() body: Record<string, string>): Promise<Cmcode> {
        return this.cmcodeService.addCmcode(body);
    }
}
