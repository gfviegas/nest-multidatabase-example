import { ConfigModule } from '@nestjs/config'

// Configurações de variáveis de ambientes e outros parâmetros
import apiConfig from '../config/api.config'
import databaseConfig from '../config/database.config'

const ConfigurationModule = ConfigModule.forRoot({
  load: [apiConfig, databaseConfig],
  isGlobal: true
})

export default ConfigurationModule
