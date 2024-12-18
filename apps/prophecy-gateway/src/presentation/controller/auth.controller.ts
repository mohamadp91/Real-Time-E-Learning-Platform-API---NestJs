import { Controller, Post } from '@nestjs/common'

@Controller('auth')
export class AuthController {
  constructor() {}

  @Post('/signup')
  async signup() {
    // TODO Connect this with auth service through gRPC method
  }
}
