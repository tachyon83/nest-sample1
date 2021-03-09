import { Body, Controller, Get, Post, Req, Res, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger'
import { User } from 'src/common/decorators/user.decorator';
import { UserDto } from 'src/common/dto/user.dto';
import { undefinedToNullInterceptor } from 'src/common/interceptors/undefinedToNull.interceptor';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@UseInterceptors(undefinedToNullInterceptor) // 전체 적용
@ApiTags('USER')
@Controller('api/users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @ApiResponse({
        status: 200,
        description: 'successful',
        type: UserDto
    })
    @ApiResponse({
        status: 500,
        description: 'internal server error',
    })
    @ApiOperation({ summary: 'user self info' })
    @Get()
    getUsers(@User() user) {
        return user
    }

    // @UseInterceptors(undefinedToNullInterceptor) // 여기만 적용
    @ApiOperation({ summary: 'user signup' })
    @Post()
    postUsers(@Body() data: JoinRequestDto) {
        this.usersService.postUsers(data)

    }

    @ApiResponse({
        status: 500,
        description: 'internal server error',
    })
    @ApiResponse({
        status: 200,
        description: 'successful',
        type: UserDto
    })
    @ApiOperation({ summary: 'user signin' })
    @Post('login')
    logIn(@User() user) {
        return user
    }

    @ApiOperation({ summary: 'user signout' })
    // express-specific
    @Post('logout')
    logOut(@Req() req, @Res() res) {
        req.logOut()
        res.clearCookie('connect.sid', {
            httpOnly: true,
        })
        res.json(true)
    }
}
