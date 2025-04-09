import {
    User,
    CreateUser
} from "./types/types.models.user";

export class UserModel implements User {

    id: string;
    name: string;
    lastName?: string | undefined;
    age?: number | undefined;
    username: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    password?: string | undefined;
    role: "user" | "tutor" | "admin";
    isActive: boolean;
    isVerified: boolean;
    tutorId?: string | undefined;
    tutor?: User | undefined;

    constructor(userData: User) {
    
        this.id = userData.id;
        this.name = userData.name;
        this.lastName = userData.lastName;
        this.age = userData.age;
        this.username = userData.username;
        this.createdAt = userData.createdAt;
        this.updatedAt = userData.updatedAt;
        this.email = userData.email;
        this.password = userData.password;
        this.role = userData.role;
        this.isActive = userData.isActive;
        this.isVerified = userData.isVerified;
        this.tutorId = userData.tutorId;
        this.tutor = userData.tutor;
    }

    public toJSON(): User {
        return {
            id: this.id,
            name: this.name,
            lastName: this.lastName,
            age: this.age,
            username: this.username,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            email: this.email,
            password: this.password,
            role: this.role,
            isActive: this.isActive,
            isVerified: this.isVerified,
            tutorId: this.tutorId,
            tutor: this.tutor
        };
    }

    public static fromApi (data: any): User {
        return new UserModel({
            id: data.id,
            name: data.name,
            lastName: data.lastName,
            age: data.age,
            username: data.username,
            createdAt: new Date(data.createdAt),
            updatedAt: new Date(data.updatedAt),
            email: data.email,
            password: data.password,
            role: data.role,
            isActive: data.isActive,
            isVerified: data.isVerified,
            tutorId: data.tutorId,
            tutor: data.tutor
        });
    }

}

export class CreateUserModel implements CreateUser {

    password: string;
    tutor?: User | undefined;
    name: string;
    lastName?: string | undefined;
    age?: number | undefined;
    username: string;
    email: string;
    role: "user" | "tutor" | "admin";
    tutorId?: string | undefined;


    constructor (userData : CreateUser){
    
        this.name = userData.name;
        this.lastName = userData.lastName;
        this.age = userData.age;
        this.username = userData.username;
        this.password = userData.password;
        this.email = userData.email;
        this.role = userData.role;
        this.tutor = userData.tutor;
        this.tutorId = userData.tutorId;
    
    }

    
}