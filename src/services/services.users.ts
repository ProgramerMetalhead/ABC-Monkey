import { UserModel, CreateUserModel } from '../models/models.user';
import { IUserService } from './types/types.services.users';


class ServicesFromUsers implements IUserService {

    public constructor() {}

    public async getAllUsers(): Promise<UserModel[]> {
        
        return [];
    }

    public async getUserById(id: string): Promise<UserModel | null> {
        
        return null;
    }

    public async createUser(user: CreateUserModel): Promise<CreateUserModel> {
        
        return new CreateUserModel(user);
    }


}