export interface UserOptions {
    AppID: string;
    UserID: string;
    AccessToken: string;
}

export interface User {
    isActive: boolean;
    userId: string;
    metaData: Record<string, string>;
    nickname: string;
    profileUrl: string;
}

export interface CalleeOptions {
    CalleeID: string;
}

export interface AutoAuthenticateHandler {
    onResult(userId:string);
}