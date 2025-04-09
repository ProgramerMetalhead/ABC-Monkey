import { User, CreateUser } from "../../models/types/types.models.user"

export interface IUserService {

    getAllUsers(): Promise<User[]>;

    getUserById(id: string): Promise<User | null>;

    createUser(user: CreateUser): Promise<CreateUser>;

}