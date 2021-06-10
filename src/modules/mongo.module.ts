import { join } from 'path'
import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { TypeOrmModule, TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'

import mongoConfig from '../config/mongo.config'

// Entidades no Mongo
import { User } from 'src/users/entities/user.entity'

type DatabaseConfigType = ConfigType<typeof mongoConfig>

@Injectable()
class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(
    @Inject(mongoConfig.KEY)
    private mongoConfig: DatabaseConfigType,
  ) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mongodb',
      host: this.mongoConfig.host,
      port: this.mongoConfig.port,
      username: this.mongoConfig.username,
      password: this.mongoConfig.password,
      database: this.mongoConfig.database || '',
      entities: [User],
      synchronize: true,
    }
  }
}

const MongoModule = TypeOrmModule.forRootAsync({
  useClass: TypeOrmConfigService,
  name: 'mongoConnection'
})

export default MongoModule
