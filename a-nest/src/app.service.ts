import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! (Get), secret: ${process.env.SECRET}`;
  }
  postHello(): string {
    return 'Hello World! (Post)'
  }
}
