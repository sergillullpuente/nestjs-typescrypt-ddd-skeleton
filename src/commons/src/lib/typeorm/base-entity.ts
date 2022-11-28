import {BeforeInsert, BeforeUpdate, Column} from 'typeorm';

export abstract class BaseEntity {
    @Column({
        type: 'timestamp without time zone',
        name: 'created_at',
    })
    protected createdAt!: Date;

    @Column({
        type: 'timestamp without time zone',
        name: 'updated_at',
    })
    protected updatedAt!: Date;

    @BeforeInsert()
    private beforeInsert() {
        if (!this.createdAt) {
            this.createdAt = new Date();
        }
        this.beforeUpdate();
    }

    @BeforeUpdate()
    private beforeUpdate() {
        this.updatedAt = new Date();
    }
}
