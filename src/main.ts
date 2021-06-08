import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'

import { AppModule } from './app.module'

/**
 * Inicializa a aplicação
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService = app.get<ConfigService>(ConfigService)
  const port = configService.get('api.port')

  await app.listen(port)
}

bootstrap()
