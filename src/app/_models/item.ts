import { Status } from "../_helpers/enums/status";
import { UOM } from "../_helpers/enums/uom";

export class Item {
    id?: string;
    name?: string;
    description?: string;
    uom?: UOM;
    status?: Status;
}