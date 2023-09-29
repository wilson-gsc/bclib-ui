import { Status } from "../_helpers/enums/status";
import { Author } from "./author";
import { Category } from "./category";
import { Publisher } from "./publisher";

export class Book {
    id?: string;
    name?: string;
    description?: string;
    status?: Status;
    author?: Author;
    category?: Category;
    publisher?: Publisher;
    access_book_num?: string;
}