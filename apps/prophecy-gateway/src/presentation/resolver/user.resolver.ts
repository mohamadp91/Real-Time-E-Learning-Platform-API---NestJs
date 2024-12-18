import { Args, Query, Resolver } from '@nestjs/graphql'

import { User } from '../../infrastructure'

@Resolver('User')
export class UserResolver {
  constructor() {}

  @Query()
  async user(@Args('id') id: number): Promise<User> {
    console.log(id)
    return {
      id: id,
      email: 'test',
      firstName: 'test',
      lastName: 'test',
    }
  }
}
