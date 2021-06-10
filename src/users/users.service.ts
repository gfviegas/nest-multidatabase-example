import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { User } from './entities/user.entity'

import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { Repository, ObjectID } from 'typeorm'

import * as bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User, 'mongoConnection')
    private userRepository: Repository<User>
  ) {}

  async create(createUserInput: CreateUserInput) {
    const user = this.userRepository.create({
      fullName: `${createUserInput.firstName} ${createUserInput.lastName}`,
      birthDate: createUserInput.birthDate,
      email: createUserInput.email,
      password: await bcrypt.hash(createUserInput.email + createUserInput.birthDate.getUTCDate(), SALT_ROUNDS),
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    await this.userRepository.save(user)
    return user
  }

  findAll() {
    return this.userRepository.find()
  }

  findOne(id: ObjectID) {
    return this.userRepository.findOne(id)
  }

  async update(id: ObjectID, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`
  }

  async remove(id: ObjectID) {
    const user = await this.findOne(id)
    return this.userRepository.softRemove(user)
  }
}
