
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateUserInput {
    firstName: string;
    lastName: string;
    email: EmailAddress;
    birthDate?: Date;
}

export class UpdateUserInput {
    id: ObjectID;
}

export class User {
    id: ObjectID;
    name: string;
    email: EmailAddress;
    age?: number;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract user(id: ObjectID): User | Promise<User>;
}

export abstract class IMutation {
    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: ObjectID): User | Promise<User>;
}

export type DateTime = any;
export type EmailAddress = any;
export type JSON = any;
export type ObjectID = any;
export type URL = any;
