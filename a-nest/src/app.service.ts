import { Injectable } from '@nestjs/common';
import { UsersService } from './users/users.service';

@Injectable()
export class AppService {
  constructor(private usersService: UsersService) { }

  async getHello() {
    this.usersService.getUsers()
    this.getWow()
    return `Hello World! (Get), secret: ${process.env.SECRET}`;
  }
  postHello(): string {
    return 'Hello World! (Post)'
  }
  getWow(): string {
    return 'wow'
  }
}
