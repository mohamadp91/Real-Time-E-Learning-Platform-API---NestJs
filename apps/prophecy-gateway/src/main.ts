import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'

import { ProphecyGatewayModule } from './prophecy-gateway.module'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    ProphecyGatewayModule,
    new FastifyAdapter(),
  )

  await app.listen(process.env.GATEWAY_PORT ?? 3000)
}
bootstrap()
