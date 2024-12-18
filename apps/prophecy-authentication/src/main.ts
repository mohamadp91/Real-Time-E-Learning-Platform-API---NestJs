import { NestFactory } from '@nestjs/core'
import { ProphecyAuthenticationModule } from './prophecy-authentication.module'

async function bootstrap() {
  const app = await NestFactory.create(ProphecyAuthenticationModule)
  await app.listen(process.env.AUTH_PORT ?? 3000)
}
bootstrap()
