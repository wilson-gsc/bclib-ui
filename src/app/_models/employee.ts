import { Status } from "../_helpers/enums/status";

export class Employee {
    id?: string;
    employee_id?: string;
    first_name?: string;
    last_name?: string;
    full_name?: string;
    course?: string;
    status?: Status;
}