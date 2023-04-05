export interface User {
    id: number,
    name?: string,
    username: string,
    email: string,
}

export type UserType = {
    userDetails: User;
    accessToken: string;
    tokenType: string
}