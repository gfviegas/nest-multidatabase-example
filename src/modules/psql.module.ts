import { join } from 'path'
import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { TypeOrmModule, TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'

import psqlConfig from '../config/psql.config'

type DatabaseConfigType = ConfigType<typeof psqlConfig>

@Injectable()
class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(
    @Inject(psqlConfig.KEY)
    private psqlConfig: DatabaseConfigType,
  ) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.psqlConfig.type,
      host: this.psqlConfig.host,
      port: this.psqlConfig.port,
      username: this.psqlConfig.username,
      password: this.psqlConfig.password,
      database: this.psqlConfig.database || '',
      entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
      synchronize: true,
    }
  }
}

const PsqlModule = TypeOrmModule.forRootAsync({
  useClass: TypeOrmConfigService,
  name: 'psqlConnection'
})

export default PsqlModule
