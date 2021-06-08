import { Module } from '@nestjs/common'

// Importação de módulos de configuração iniciais
import GraphQLModule from './modules/graphql.module'
import ConfigurationModule from './modules/configuration.module'
import DatabaseModule from './modules/database.module'

// Importação de módulos custom do sistema
import { UsersModule } from './users/users.module'


@Module({
  imports: [
    ConfigurationModule,
    GraphQLModule,
    UsersModule,
    DatabaseModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
