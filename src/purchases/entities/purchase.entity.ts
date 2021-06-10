// Uma entidade é um mapeamento do dado no banco de dados.
// NÃO necessariamente tem o mesmo mapeamento dos dados servidos via API (se é que é servido).

import { Column, CreateDateColumn, Entity, ObjectID, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id!: number

  @Column({ type: 'int' })
  amount!: number

  @Column({ type: 'string' })
  user!: ObjectID

  @Column()
  description!: string

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}
