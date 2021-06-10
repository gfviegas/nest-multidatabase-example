import { registerAs } from '@nestjs/config'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'

export default registerAs('psql', (): PostgresConnectionOptions => ({
  type: 'postgres',
  host: process.env.PSQL_HOST || 'psql',
  port: parseInt(process.env.PSQL_PORT, 10) || 5432,
  username: process.env.PSQL_USERNAME || '',
  password: process.env.PSQL_PASSWORD || '',
  database: process.env.PSQL_NAME || '',
}))
