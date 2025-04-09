export interface User {

    id: string;
    name: string,
    lastName?: string,
    age?: number,
    username: string,
    createdAt: Date,
    updatedAt: Date,
    email: string,
    password?: string,
    role: 'user' | "tutor" | 'admin',
    isActive: boolean,
    isVerified: boolean,
    tutorId?: string,
    tutor?: User,
}

export interface CreateUser extends Omit<User, "id" | "createdAt" | "updatedAt" | "isActive" | "isVerified"> {
    password: string
}
