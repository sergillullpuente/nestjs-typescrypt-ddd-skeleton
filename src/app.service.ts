import { Injectable } from "@nestjs/common";
import { Service } from "@commons";

export type AppServiceDefinition = Service<void, string>

@Injectable()
export class AppService implements AppServiceDefinition {
    async execute(): Promise<string> {
        return "Hello World!";
    }
}
