import { Product } from "./product";
import { Status } from "../_helpers/enums/status";

export class ProductIn {
    id?: string;
    description?: string;
    status?: Status;
    product?: Product;
    qty?: number;
    transaction_date?: Date;
}