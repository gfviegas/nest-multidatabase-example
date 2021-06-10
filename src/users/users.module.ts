import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { User } from './entities/user.entity'
import { UsersService } from './users.service'
import { UsersResolver } from './users.resolver'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
    ], 'mongoConnection')
  ],
  providers: [UsersResolver, UsersService],
  exports: [UsersService]
})
export class UsersModule {}
