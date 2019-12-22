import { Inject } from 'typedi';
import { JsonController, Get, Post, Delete, Param, Body } from 'routing-controllers';
import { VendorServiceImpl } from 'service/VendorService/VendorServiceImpl';
import { Vendor } from 'entity/Vendor';

/**
 * @author      minz-logger
 * @date        2019. 12. 22
 * @description Vendor Controller
 */
@JsonController('/vendors')
export class VendorController {
    @Inject()
    private readonly vendorService: VendorServiceImpl;

    @Get('/')
    getVendors(): Promise<Vendor[]> {
        return this.vendorService.getVendors();
    }

    @Get('/:id')
    getVendor(@Param('id') id: number): Promise<Vendor> {
        return this.vendorService.getVendor(id);
    }

    @Post('/')
    addVendor(@Body() body: Record<string, string>): Promise<Vendor> {
        return this.vendorService.addVendor(body);
    }

    @Delete('/:id')
    removeVendor(@Param('id') id: number): Promise<boolean> {
        return this.vendorService.removeVendor(id);
    }
}
