// Uma entidade é um mapeamento do dado no banco de dados.
// NÃO necessariamente tem o mesmo mapeamento dos dados servidos via API (se é que é servido).

import { Column, CreateDateColumn, DeleteDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm'
import { UserLog } from './user_log.entity'

@Entity()
export class User {
  @ObjectIdColumn()
  id!: ObjectID

  @Column()
  fullName!: string

  @Column({ unique: true })
  email!: string

  @Column()
  birthDate!: Date

  @Column({ select: false })
  password!: string

  @Column(type => UserLog)
  logs: UserLog[]

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @DeleteDateColumn()
  deletedAt?: Date
}
