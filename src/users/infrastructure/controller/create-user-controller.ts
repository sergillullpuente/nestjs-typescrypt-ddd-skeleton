import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserService } from '../../application/create-user.service';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ControllerInterface, ToPrimitives } from '../../../commons/src';
import User from '../../domain/user';
import { UserDto } from '../dto/user.dto';

@Controller()
@ApiTags('[App] User')
export class CreateUserController implements ControllerInterface<ToPrimitives<User>> {
    constructor(private readonly createUserService: CreateUserService) {
    }

    @Post('/users')
    @ApiOperation({ summary: 'Create new user' })
    @ApiCreatedResponse()
    async run(@Body() userDto: UserDto): Promise<ToPrimitives<User>> {
        const user = await this.createUserService.execute(userDto);
        return user.toPrimitives();
    }
}
