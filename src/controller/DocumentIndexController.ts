import { JsonController, Get, Param, Body, Post } from 'routing-controllers';
import { DocumentIndexServiceImpl } from 'service/DocumentIndexService/DocumentIndexServiceImpl';
import { DocumentIndex } from 'entity/DocumentIndex';
import { Inject } from 'typedi';

@JsonController('/documentindexes')
export class DocumentIndexController {
    @Inject()
    private readonly documentIndexService: DocumentIndexServiceImpl;

    @Get('/')
    getDocumentIndexes(): Promise<DocumentIndex[]> {
        return this.documentIndexService.getDocumentIndexes();
    }

    @Get('/:id')
    getDocumentIndex(@Param('id') id: number): Promise<DocumentIndex> {
        return this.documentIndexService.getDocumentIndex(id);
    }

    @Post('/')
    addDocumentIndex(@Body() body: Record<string, string>): Promise<DocumentIndex> {
        return this.documentIndexService.addDocumentIndex(body);
    }
}
