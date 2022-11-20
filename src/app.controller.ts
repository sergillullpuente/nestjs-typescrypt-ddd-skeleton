import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { ControllerInterface } from "@commons";

@Controller()
export class AppController implements ControllerInterface<string> {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    async run(): Promise<string> {
        return this.appService.execute();
    }
}
