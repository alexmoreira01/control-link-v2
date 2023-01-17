import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("links")
class Links {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string

    @Column()
    url: string

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;
}

export { Links }


