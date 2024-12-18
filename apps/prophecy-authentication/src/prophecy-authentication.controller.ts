import { Controller, Get } from '@nestjs/common'

@Controller()
export class ProphecyAuthenticationController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'hello'
  }
}
