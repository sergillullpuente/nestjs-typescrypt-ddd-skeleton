import {Controller, Get, Param} from "@nestjs/common";
import {ApiCreatedResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {ControllerInterface, ToPrimitives} from "../../../commons/src";
import User from "../../domain/user";
import {GetUserService} from "../../application/get-user.service";

@Controller('/user')
@ApiTags('[App] User')
export class GetUserController implements ControllerInterface<ToPrimitives<User>> {

    constructor(private readonly getUserService: GetUserService) {
    }

    @Get('/:id')
    @ApiOperation({summary: 'Get user by id'})
    @ApiCreatedResponse()
    async run(@Param('id') id: string): Promise<ToPrimitives<User>> {
        return this.getUserService.execute(id).then((user) => user.toPrimitives())
    }
}
