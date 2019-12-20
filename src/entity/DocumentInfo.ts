import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CommonEntity } from './CommonEntity';
import { DocumentIndex } from './DocumentIndex';

@Entity({ name: 'documentinfo' })
export class DocumentInfo extends CommonEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @ManyToOne(
        () => DocumentIndex,
        documentIndex => documentIndex.list,
    )
    public documentIndex: DocumentIndex;

    @Column({ name: 'document_number', type: 'varchar', nullable: false })
    public documentNumber: string;

    @Column({ name: 'document_title', type: 'varchar', nullable: false })
    public documentTitle: string;

    @Column({ name: 'document_gb_cd', type: 'varchar', nullable: false })
    public documentGbCd: string;

    @Column({ name: 'plan', type: 'date', nullable: false })
    public plan: Date;

    @Column({ name: 'delete_yn', type: 'varchar', default: 'NO' })
    public deleteYn: string;

    @Column({
        name: 'delete_date',
        type: 'datetime',
        default: '9999-12-31 23:59:59',
    })
    public deleteDate: Date;
}
