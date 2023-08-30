import { Product } from "./product";
import { Status } from "../_helpers/enums/status";

export class ProductInventory {
    id?: string;
    name?: string;
    description?: string;
    status?: Status;
    product?: Product;
    balance_begin?: number;
    product_in?: number;
    product_out?: number;
    balance_end?: number;
    transaction_date?: Date;
}