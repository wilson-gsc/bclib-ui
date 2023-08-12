import { OrderDetail } from "./order-detail";

export class Order {
    id?: string;
    or_number?: string;
    ordered_to?: string;
    transaction_date?: Date;
    details?: any;
    order?: {
        id?: string;
    };
    total_amount?: number;
}