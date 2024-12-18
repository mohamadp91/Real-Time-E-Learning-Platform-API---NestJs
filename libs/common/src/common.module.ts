import { Module } from '@nestjs/common'
import { CommonService } from './common.service'
import { DatabaseModule } from '@app/common/database'
import { ConfigModule } from '@app/common/config'

@Module({
  providers: [CommonService],
  exports: [CommonService],
  imports: [DatabaseModule, ConfigModule],
})
export class CommonModule {}
