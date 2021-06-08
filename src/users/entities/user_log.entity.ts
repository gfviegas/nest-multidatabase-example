// Uma entidade é um mapeamento do dado no banco de dados.
// NÃO necessariamente tem o mesmo mapeamento dos dados servidos via API (se é que é servido).

import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

enum UserAction {
  LOGIN,
  LOGOUT,
  CREATED,
  UPDATED
}

export class UserLog {
  @Column({
    type: 'enum',
    enum: UserAction
  })
  action: UserAction

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor(action: UserAction) {
    this.action = action
    this.created_at = new Date()
    this.updated_at = new Date()
  }
}
