import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Project } from './Project';
import { Manager } from './Manager';
import { Cmcode } from './Cmcode';
import { CommonEntity } from './CommonEntity';

@Entity({ name: 'vendor' })
export class Vendor extends CommonEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @ManyToOne(() => Project)
    @JoinColumn({ name: 'project_id', referencedColumnName: 'id' })
    public project: Project;

    @Column({ name: 'part_cd', type: 'varchar', nullable: false })
    public partCd: string;

    @Column({
        name: 'part_number',
        type: 'varchar',
        nullable: false,
        unique: true,
    })
    public partNumber: string;

    @Column({ name: 'country_cd', type: 'varchar', nullable: false })
    public countryCd: string;

    @Column({ name: 'vendor_gb_cd', type: 'varchar', nullable: false })
    public vendorGbCd: string;

    @Column({ name: 'vendor_name', type: 'varchar', nullable: false })
    public vendorName: string;

    @Column({ name: 'official_name', type: 'varchar', nullable: false })
    public officialName: string;

    @Column({
        name: 'eff_start_date',
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP',
    })
    public effStartDate: Date;

    @Column({
        name: 'eff_end_date',
        type: 'datetime',
        default: '9999-12-31 23:59:59',
    })
    public effEndDate: Date;

    @ManyToOne(() => Manager)
    @JoinColumn({ name: 'managerId', referencedColumnName: 'id' })
    public manager: Manager;

    @Column({ name: 'item_name', type: 'varchar', nullable: false })
    public itemName: string;

    @Column({ name: 'delete_yn', type: 'varchar', default: 'NO' })
    public deleteYn: string;

    @Column({
        name: 'delete_date',
        type: 'datetime',
        default: '9999-12-31 23:59:59',
    })
    public deleteDate: string;

    public part: Cmcode;

    public country: Cmcode;

    public vendorGb: Cmcode;
}
