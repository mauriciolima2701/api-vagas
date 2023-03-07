import { Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate, Column } from "typeorm";
import { v4 } from "uuid";

export abstract class EntityBase {
  @PrimaryColumn()
  id!: string;

  @Column({
    name: "created_at",
    type: "timestamp",
  })
  createdAt!: Date;

  @Column({
    name: "updated_at",
    type: "timestamp",
  })
  updatedAt?: Date;

  @BeforeInsert()
  beforeCreate() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.updatedAt = new Date();
  }
}
