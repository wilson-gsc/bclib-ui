import { Status } from "../_helpers/enums/status";

export class Course {
    getAll() {
        throw new Error('Method not implemented.');
    }
    id?: string;
    code?: string;
    name?: string;
    status?: Status;
}