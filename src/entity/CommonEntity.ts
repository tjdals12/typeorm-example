import { BaseEntity, Column } from 'typeorm';

export class CommonEntity extends BaseEntity {
    @Column({
        name: 'reg_date',
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP',
    })
    public regDate: Date;

    @Column({ name: 'reg_id', type: 'varchar', default: 'SYSTEM' })
    public regId: string;

    @Column({
        name: 'upd_date',
        type: 'datetime',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP()',
    })
    public updDate: Date;

    @Column({ name: 'upd_id', type: 'varchar', default: 'SYSTEM' })
    public updId: string;
}
