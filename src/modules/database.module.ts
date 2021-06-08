import { join } from 'path'
import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { TypeOrmModule, TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'

import databaseConfig from '../config/database.config'

type DatabaseConfigType = ConfigType<typeof databaseConfig>

@Injectable()
class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(
    @Inject(databaseConfig.KEY)
    private databaseConfig: DatabaseConfigType,
  ) {
  }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mongodb',
      host: this.databaseConfig.host,
      port: this.databaseConfig.port,
      username: this.databaseConfig.username,
      password: this.databaseConfig.password,
      database: this.databaseConfig.database || '',
      entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
      synchronize: true,
    }
  }
}


const DatabaseModule = TypeOrmModule.forRootAsync({
  useClass: TypeOrmConfigService
})

export default DatabaseModule
