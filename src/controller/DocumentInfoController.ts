import { JsonController, Get, Param, Post, Body } from 'routing-controllers';
import { Inject } from 'typedi';
import { DocumentInfoServiceImpl } from 'service/DocumentInfoService/DocumentInfoServiceImpl';
import { DocumentInfo } from 'entity/DocumentInfo';

@JsonController('/documentinfos')
export class DocumentInfoController {
    @Inject()
    private readonly documentInfoService: DocumentInfoServiceImpl;

    @Get('/')
    getDocumentInfos(): Promise<DocumentInfo[]> {
        return this.documentInfoService.getDocumentInfos();
    }

    @Get('/:id')
    getDocumentInfo(@Param('id') id: number): Promise<DocumentInfo> {
        return this.documentInfoService.getDocumentInfo(id);
    }

    @Post('/')
    addDocumentInfo(@Body() body: Record<string, string>): Promise<DocumentInfo> {
        return this.documentInfoService.addDocumentInfo(body);
    }
}
