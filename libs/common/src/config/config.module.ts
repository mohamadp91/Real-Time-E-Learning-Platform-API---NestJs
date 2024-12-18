import { Module } from '@nestjs/common'
import { ConfigModule as NestConfigModule, ConfigService } from '@nestjs/config'
import Zod from 'zod'

@Module({
  imports: [
    NestConfigModule.forRoot({
      validationSchema: Zod.object({
        MONGODB_URI: Zod.string().url(),
      }),
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
