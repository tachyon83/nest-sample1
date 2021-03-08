import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('abc')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('get')
  getHello() {
    return this.appService.getHello();
  }

  @Post('post')
  postHello(): string {
    return this.appService.postHello();
  }
}
