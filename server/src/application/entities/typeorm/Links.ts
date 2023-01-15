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

    // constructor() {
    //     if (!this.id) {
    //         this.id = uuidV4();
    //     }
    // }
}

export { Links }


