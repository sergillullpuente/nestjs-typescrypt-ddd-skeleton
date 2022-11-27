import { Body, Controller, Post } from "@nestjs/common";
import { ControllerInterface } from "@commons";
import { CreateUserService } from "../../application/create-user.service";

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
export class CreateUserController implements ControllerInterface<UserDto> {
    constructor(private readonly createUserService: CreateUserService) {
    }

    @Post()
    async run(@Body() userDto: UserDto): Promise<UserDto> {
        const user = await this.createUserService.execute(userDto);
        return user.toPrimitives();
    }
}
