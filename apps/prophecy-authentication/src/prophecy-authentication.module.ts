import { Module } from '@nestjs/common'
import { ProphecyAuthenticationController } from './prophecy-authentication.controller'

@Module({
  imports: [],
  controllers: [ProphecyAuthenticationController],
  providers: [],
})
export class ProphecyAuthenticationModule {}
