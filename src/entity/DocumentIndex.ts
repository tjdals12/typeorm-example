import {
    Entity,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import { CommonEntity } from './CommonEntity';
import { Vendor } from './Vendor';
import { DocumentInfo } from './DocumentInfo';

@Entity({ name: 'documentindex' })
export class DocumentIndex extends CommonEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @OneToOne(() => Vendor)
    @JoinColumn({ name: 'vendorId', referencedColumnName: 'id' })
    public vendor: Vendor;

    @OneToMany(
        () => DocumentInfo,
        documentInfo => documentInfo.documentIndex,
    )
    public list: DocumentInfo[];
}
