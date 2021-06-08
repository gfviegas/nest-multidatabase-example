import { registerAs } from '@nestjs/config'
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions'

export default registerAs('database', (): MongoConnectionOptions => ({
  type: 'mongodb',
  host: process.env.DATABASE_HOST || 'mongo',
  port: parseInt(process.env.DATABASE_PORT, 10) || 27017,
  username: process.env.DATABASE_USERNAME || '',
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME || '',
}))
