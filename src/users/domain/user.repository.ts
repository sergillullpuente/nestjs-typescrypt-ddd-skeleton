import User from "./user";
import UserId from "./value-objects/user-id.vo";

export interface UserRepository {
    findAll(): Promise<User[]>

    save(user: User): Promise<void>;

    delete(id: UserId): Promise<void>;
}
