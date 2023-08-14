import { PaymentType } from "./payment-type";

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
    payment_type?: PaymentType
}