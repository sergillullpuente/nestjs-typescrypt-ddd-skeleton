import {Controller, Get, Param} from "@nestjs/common";
import {ApiCreatedResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {ToPrimitives} from "../../../commons/src";
import User from "../../domain/user";
import {ControllerInterface} from "../../../../libs/commons/src";

@Controller('/user')
@ApiTags('[App] User')
export class GetUserController implements ControllerInterface<ToPrimitives<User>> {

    @Get('/:id')
    @ApiOperation({summary: 'Get user by id'})
    @ApiCreatedResponse()
    async run(@Param() id: string): Promise<ToPrimitives<User>> {
        return {
            id: 'id',
            email: 'sergi.llull@holaunibo.com',
            firstName: 'firstName',
            lastName: 'lastName',
            alias: 'alias',
            address: {
                id: 'id',
                addressLine: 'addressLine',
                country: 'country',
                city: 'city',
                postalCode: 'postalCode',
            },
            status: 'status',
        }
    }
}
