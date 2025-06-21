import { Uuid } from '../../../commons/src';

export default class UserId extends Uuid {
    static fromString(id: string): UserId {
        return new UserId(id);
    }
}
