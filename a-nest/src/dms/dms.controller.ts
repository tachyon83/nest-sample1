import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiParam, ApiTags } from '@nestjs/swagger'
import { PostChatDto } from './dto/post.chat.dto';

@ApiTags('DM')
@Controller('api/workspaces/:url/dms')
export class DmsController {
    @ApiParam({
        name: 'id',
        required: true,
        description: 'param id'
    })
    @ApiParam({
        name: 'url',
        required: true,
        description: 'param url'
    })
    @ApiQuery({
        name: 'perPage',
        required: true,
        description: 'data amount per each try'
    })
    @ApiQuery({
        name: 'page',
        required: true,
        description: 'page number'
    })
    @Get(':id/chats')
    getChat(@Query('perPage') perPage, @Query('page') page, @Param('id') id, @Param('url') url) {
        console.log(perPage, page)
        console.log(id, url)
    }

    @Post(':id/chats')
    postChat(@Body() body: PostChatDto) {
        console.log(body)
    }

}
