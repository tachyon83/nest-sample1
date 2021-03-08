import { ApiProperty } from '@nestjs/swagger'

export class JoinRequestDto {

    @ApiProperty({
        example: 'sample@gmail.com',
        description: 'email',
        required: true
    })
    public email: string

    @ApiProperty({
        example: 'sam',
        description: 'nickname',
        required: false,
    })
    public nickname: string

    @ApiProperty({
        example: 'abcd1234',
        description: 'password',
        required: true,
    })
    public password: string

}