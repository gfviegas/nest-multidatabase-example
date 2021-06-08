import { registerAs } from "@nestjs/config"

export interface ApiConfig {
  port: number
}

export default registerAs('api', (): ApiConfig => ({
  port: parseInt(process.env.PORT, 10) || 3000
}))
