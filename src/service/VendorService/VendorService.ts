import { Vendor } from 'entity/Vendor';

/**
 * @author      minz-logger
 * @date        2019. 12. 22
 * @description Vendor Service
 */
export interface VendorService {
    /**
     * @author      minz-logger
     * @date        2019. 12. 22
     * @description 업체 목록 조회
     */
    getVendors(): Promise<Vendor[]>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 22
     * @description 업체 조회
     * @param       id
     */
    getVendor(id: number): Promise<Vendor>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 22
     * @description 업체 추가
     * @param       param
     */
    addVendor(param: Record<string, string>): Promise<Vendor>;

    /**
     * @author      minz-logger
     * @date        2019. 12. 22
     * @description 업체 삭제
     * @param       id
     */
    removeVendor(id: number): Promise<boolean>;
}
