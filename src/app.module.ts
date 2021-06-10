import { Module } from '@nestjs/common'

// Importação de módulos de configuração iniciais
import GraphQLModule from './modules/graphql.module'
import ConfigurationModule from './modules/configuration.module'
import MongoModule from './modules/mongo.module'
import PsqlModule from './modules/psql.module'

// Importação de módulos custom do sistema
import { UsersModule } from './users/users.module'
// import { PurchasesModule } from './purchases/purchases.module'


@Module({
  imports: [
    ConfigurationModule,
    GraphQLModule,
    UsersModule,
    // PurchasesModule,
    MongoModule,
    PsqlModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
