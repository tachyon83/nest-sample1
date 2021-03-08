import { Injectable, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';

@Injectable()
export class UsersService {
    getUsers() { }
    postUsers(data: JoinRequestDto) {
        console.log(data)
    }
}
