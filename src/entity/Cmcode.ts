import { Entity, PrimaryColumn, Column, BaseEntity } from 'typeorm';

@Entity({ name: 'cmcode' })
export class Cmcode extends BaseEntity {
    @PrimaryColumn({ name: 'cdmajor' })
    public cdMajor: string;

    @Column({ name: 'cdfname', type: 'varchar', nullable: false })
    public cdFname: string;

    @PrimaryColumn({ name: 'cdminor' })
    public cdMinor: string;

    @Column({ name: 'cdsname', type: 'varchar', nullable: false })
    public cdSname: string;

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
}
