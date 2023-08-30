import { Role } from "../_helpers/enums/role";
import { Status } from "../_helpers/enums/status";

export class User {
    user?: {
        id?: string;
        username?: string;
        password?: string;
        first_name?: string;
        last_name?: string;
        role?: Role;
        status?: Status;
        token?: string;
        email?: string
    }
    access_token?: string;
}