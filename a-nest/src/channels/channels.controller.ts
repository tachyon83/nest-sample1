import { Controller, Query, Get, Post, Param, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger'
import { PostChatDto } from 'src/dms/dto/post.chat.dto';

@ApiTags('CHANNEL')
@Controller('api/workspaces/:url/channels')
export class ChannelsController {
    @Get()
    getAllChannels() { }

    @Post()
    createChannel() { }

    @Get(':name')
    getSpecificChannel() { }

    @Get(':name/chats')
    getChats(@Query() query, @Param() param) {
        console.log(query)
        console.log(param)
    }

    @Post(':name/chats')
    postChat(@Body() body: PostChatDto) {
        console.log(body)
    }

    @Get(':name/members')
    getAllMembers() { }

    @Post(':name/members')
    inviteMembers() { }

}
