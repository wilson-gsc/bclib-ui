import { Status } from "../_helpers/enums/status";
import { Book } from "./book";
import { Employee } from "./employee";
import { Student } from "./student";

export class BorrowersRecord {
    id?: string;
    borrower_type?: string;
    student?: Student;
    employee?: Employee;
    book?: Book;
  //  date_borrowed?: string;
   // date_returned?: string;
    remarks?: string;
    book_status?: string;
    return_status?:Date;
    status?: Status;
}