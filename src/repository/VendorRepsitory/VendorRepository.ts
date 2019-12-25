import { Vendor } from 'entity/Vendor';
import { QueryRunner } from 'typeorm';

/**
 * @author      minz-logger
 * @date        2019. 12. 22
 * @description Vendor Repository
 */
export interface VendorRepository {
    /**
     * @author      minz-logger
     * @date        2019. 12. 22
     * @description 업체 목록 조회
     */
    findVendors(): Promise<Vendor[]>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 22
     * @description 업체 조회
     * @param       id
     */
    findVendor(id: number): Promise<Vendor>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 22
     * @description 업체 추가
     * @param       param
     */
    saveVendor(param: Record<string, string>, queryRunner?: QueryRunner): Promise<number>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 22
     * @description 업체 삭제
     * @param       id
     */
    deleteVendor(id: number): Promise<boolean>;
}
