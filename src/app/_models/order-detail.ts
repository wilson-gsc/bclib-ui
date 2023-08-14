import { Product } from "./product";

export class OrderDetail {
    id?: string;
    product?: Product;
    qty?: number;
    price?: number;
    total?: number;
    order?: {
        id?: string;
    }
}