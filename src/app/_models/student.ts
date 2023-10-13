import { Status } from "../_helpers/enums/status";

export class Student {
    id?: string;
    student_id?: string;
    first_name?: string;
    last_name?: string;
    full_name?: string;
    course?: string;
    year_level?: string;
    enrollment_date?:Date;
    status?: Status;
}