import { Status } from "../_helpers/enums/status";

export class borrow_record {
    id?: string;
    borrower_type?: string;
    student?: string;
    employee?: string;
    book?: string;
    date_borrowed?: string;
    date_returned?: string;
    remarks?: string;
    book_status?: string;
    return_status?:Date;
    status?: Status;
}