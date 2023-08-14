import { Status } from "./status";
import { UOM } from "./uom";

export class Item {
    id?: string;
    name?: string;
    description?: string;
    uom?: UOM;
    status?: Status;
}