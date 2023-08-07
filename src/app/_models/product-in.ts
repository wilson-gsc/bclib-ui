import { Product } from "./product";
import { Status } from "./status";

export class ProductIn {
    id?: string;
    description?: string;
    status?: Status;
    product?: Product;
    qty?: number;
    transaction_date?: Date;
}