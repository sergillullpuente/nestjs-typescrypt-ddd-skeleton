import User from "./user";
import UserId from "./value-objects/user-id.vo";
import {Criteria} from "../../commons/src/lib/criteria/criteria";

export interface UserRepository {
    findAll(): Promise<User[]>

    matching(criteria: Criteria): Promise<User[]>

    save(user: User): Promise<void>;

    delete(id: UserId): Promise<void>;
}
