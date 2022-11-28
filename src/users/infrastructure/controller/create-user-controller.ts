import {Body, Controller, Post} from "@nestjs/common";
import {ControllerInterface} from "@commons";
import {CreateUserService} from "../../application/create-user.service";
import {ApiCreatedResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {ToPrimitives} from "../../../commons/src";
import User from "../../domain/user";

export interface UserDto {
    email: string,
    firstName: string,
    lastName: string,
    alias: string,
    address: {
        addressLine: string,
        country: string,
        city: string,
        postalCode: string,
    },
}

@Controller()
@ApiTags('[App] User')
export class CreateUserController implements ControllerInterface<ToPrimitives<User>> {
    constructor(private readonly createUserService: CreateUserService) {
    }

    @Post('/user')
    @ApiOperation({summary: 'Create new user'})
    @ApiCreatedResponse()
    async run(@Body() userDto: UserDto): Promise<ToPrimitives<User>> {
        const user = await this.createUserService.execute(userDto);
        return user.toPrimitives();
    }
}
