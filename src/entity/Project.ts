import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { Cmcode } from './Cmcode';

@Entity({ name: 'project' })
export class Project extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ name: 'project_gb_cd', type: 'varchar', nullable: false })
    public projectGbCd: string;

    @Column({ name: 'project_name', type: 'varchar', nullable: false })
    public projectName: string;

    @Column({ name: 'project_code', type: 'varchar', nullable: false })
    public projectCode: string;

    @Column({
        name: 'eff_start_date',
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP',
    })
    public effStartDate: string;

    @Column({
        name: 'eff_end_date',
        type: 'datetime',
        default: '9999-12-31 23:59:59',
    })
    public effEndDate: string;

    @Column({ name: 'client', type: 'varchar', nullable: false })
    public client: string;

    @Column({ name: 'client_code', type: 'varchar', nullable: false })
    public clientCode: string;

    @Column({ name: 'contractor', type: 'varchar', nullable: false })
    public contractor: string;

    @Column({ name: 'contractor_code', type: 'varchar', nullable: false })
    public contractorCode: string;

    @Column({ name: 'memo', type: 'varchar' })
    public memo: string;

    @Column({ name: 'delete_yn', type: 'varchar', default: 'NO' })
    public deleteYn: string;

    @Column({ name: 'is_main', type: 'int', default: 0 })
    public isMain: number;

    @Column({
        name: 'reg_date',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    public regDate: Date;

    @Column({ name: 'reg_id', type: 'varchar', default: 'SYSTEM' })
    public regId: string;

    @Column({
        name: 'upd_date',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP()',
    })
    public updDate: Date;

    @Column({
        name: 'upd_id',
        type: 'varchar',
        default: 'SYSTEM',
    })
    public updId: string;

    public projectGb: Cmcode;
}
