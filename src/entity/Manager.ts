import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CommonEntity } from './CommonEntity';
import { Cmcode } from './Cmcode';

@Entity({ name: 'manager' })
export class Manager extends CommonEntity {
    @PrimaryGeneratedColumn()
    public id: string;

    @Column({ name: 'name', type: 'varchar' })
    public name: string;

    @Column({ name: 'position_cd', type: 'varchar' })
    public positionCd: string;

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

    public manager: Cmcode;
}
