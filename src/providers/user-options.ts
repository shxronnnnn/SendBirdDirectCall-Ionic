export interface UserOptions {
    AppID: string;
    UserID: string;
    AccessToken: string;
}

export interface CalleeOptions {
    CalleeID: string;
}

export interface AutoAuthenticateHandler {
    onResult(userId:string);
}