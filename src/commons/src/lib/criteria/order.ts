import { OrderBy } from './order-by';
import { OrderType, OrderTypes } from './order-type';

export class Order {
    readonly orderBy: OrderBy;
    readonly orderType: OrderType;

    constructor(orderBy: OrderBy, orderType: OrderType) {
        this.orderBy = orderBy;
        this.orderType = orderType;
    }

    static none(): Order {
        return new Order(new OrderBy(''), new OrderType(OrderTypes.NONE));
    }
}
