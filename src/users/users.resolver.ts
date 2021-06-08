import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql'
import { ObjectID } from 'typeorm'

import { UsersService } from './users.service'

import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { User } from './entities/user.entity'

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  // @ResolveField()
  // async id(@Parent() user) {
  //   console.log({user})
  //   return user._id
  // }

  @ResolveField()
  name(@Parent() user: User) {
    console.log({ user })
    return user.fullName
  }

  @ResolveField()
  age(@Parent() user: User) {
    return (new Date()).getFullYear() - user.birthDate.getFullYear()
  }

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput)
  }

  @Query('users')
  findAll() {
    return this.usersService.findAll()
  }

  @Query('user')
  findOne(@Args('id') id: ObjectID) {
    return this.usersService.findOne(id)
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput)
  }

  @Mutation('removeUser')
  remove(@Args('id') id: ObjectID) {
    return this.usersService.remove(id)
  }
}
