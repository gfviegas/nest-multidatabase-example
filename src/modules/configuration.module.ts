import { ConfigModule } from '@nestjs/config'

// Configurações de variáveis de ambientes e outros parâmetros
import apiConfig from '../config/api.config'
import mongoConfig from '../config/mongo.config'
import psqlConfig from '../config/psql.config'

const ConfigurationModule = ConfigModule.forRoot({
  load: [apiConfig, mongoConfig, psqlConfig],
  isGlobal: true
})

export default ConfigurationModule
