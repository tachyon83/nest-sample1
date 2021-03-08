import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@ApiTags('USER')
@Controller('api/users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @ApiOperation({ summary: 'user self info' })
    @Get()
    getUsers(@Req() req) {
        return req.user
    }

    @ApiOperation({ summary: 'user signup' })
    @Post()
    postUsers(@Body() data: JoinRequestDto) {
        this.usersService.postUsers(data)

    }

    @ApiOperation({ summary: 'user signin' })
    @Post('login')
    logIn(@Req() req) {
        return req.user
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
