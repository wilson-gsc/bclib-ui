import { Status } from "./status";
import { UOM } from "./uom";

export class Product {
    id?: string;
    name?: string;
    description?: string;
    uom?: UOM;
    status?: Status;
    qty?: number;
}