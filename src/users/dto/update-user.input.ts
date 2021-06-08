import { CreateUserInput } from './create-user.input'
import { PartialType } from '@nestjs/mapped-types'

import { ObjectID } from 'typeorm'

export class UpdateUserInput extends PartialType(CreateUserInput) {
  id: ObjectID
}
