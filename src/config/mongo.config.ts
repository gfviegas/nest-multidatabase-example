import { registerAs } from '@nestjs/config'
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions'

export default registerAs('mongo', (): MongoConnectionOptions => ({
  type: 'mongodb',
  host: process.env.MONGO_HOST || 'mongo',
  port: parseInt(process.env.MONGO_PORT, 10) || 27017,
  username: process.env.MONGO_USERNAME || '',
  password: process.env.MONGO_PASSWORD || '',
  database: process.env.MONGO_NAME || '',
}))
