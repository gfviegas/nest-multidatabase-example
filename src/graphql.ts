
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreatePurchaseInput {
    description: string;
    user: ObjectID;
    amount: number;
}

export class CreateUserInput {
    firstName: string;
    lastName: string;
    email: EmailAddress;
    birthDate?: Date;
}

export class UpdateUserInput {
    id: ObjectID;
}

export class Purchase {
    id: number;
    description: string;
    user: User;
    amount: number;
    createdAt: DateTime;
}

export abstract class IQuery {
    abstract purchases(): Purchase[] | Promise<Purchase[]>;

    abstract purchase(id: number): Purchase | Promise<Purchase>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(id: ObjectID): User | Promise<User>;
}

export abstract class IMutation {
    abstract createPurchase(createPurchaseInput: CreatePurchaseInput): Purchase | Promise<Purchase>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: ObjectID): User | Promise<User>;
}

export class User {
    id: ObjectID;
    name: string;
    email: EmailAddress;
    age?: number;
}

export type DateTime = any;
export type EmailAddress = any;
export type JSON = any;
export type ObjectID = any;
export type URL = any;
