export enum AuthenticationTypes {
	LOGIN_REQUEST = '@auth/LOGIN_REQUEST',
	LOGIN_SUCCESS = '@auth/LOGIN_SUCCESS',
	LOGIN_FAILURE = '@auth/LOGIN_FAILURE'
}

export interface Error {
	code: string;
	message: string;
}

export interface AuthenticationData {
	displayName: string;
	emailVerified: boolean;
	isAnonymous: boolean;
	phoneNumber: string;
	photoURL: string;
	email: string;
	role: string;
}

export interface AuthenticationState {
	readonly user: AuthenticationData;
	readonly loading: boolean;
	readonly error: Error;
}

export interface AuthenticationCredentials {
	email: string;
	password: string;
	callback(): void;
}

interface LoginRequestAction {
	type: typeof AuthenticationTypes.LOGIN_REQUEST;
	payload: AuthenticationCredentials;
}
interface LoginSucces {
	type: typeof AuthenticationTypes.LOGIN_SUCCESS;
	payload: any;
}
interface LoginFailure {
	type: typeof AuthenticationTypes.LOGIN_FAILURE;
	payload: Error;
}

export type AuthenticationActions = LoginRequestAction | LoginSucces | LoginFailure;
