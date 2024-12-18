import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius'
import { join } from 'path'

import { AuthController, UserResolver } from './presentation'

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(
          process.cwd(),
          'apps/prophecy-gateway/src/infrastructure/schema/graphql.ts',
        ),
        outputAs: 'class',
      },
      graphiql: true,
    }),
  ],
  controllers: [AuthController],
  providers: [UserResolver],
})
export class ProphecyGatewayModule {}
