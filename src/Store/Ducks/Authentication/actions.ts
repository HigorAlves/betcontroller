import {
	AuthenticationActions,
	AuthenticationTypes,
	AuthenticationCredentials,
	Error,
	AuthenticationData
} from 'Store/Ducks/Authentication/types';

export const loginRequest = (data: AuthenticationCredentials): AuthenticationActions => ({
	type: AuthenticationTypes.LOGIN_REQUEST,
	payload: data
});

export const loginSuccess = (data: AuthenticationData): AuthenticationActions => ({
	type: AuthenticationTypes.LOGIN_SUCCESS,
	payload: data
});

export const loginFailure = (error: Error): AuthenticationActions => {
	return {
		type: AuthenticationTypes.LOGIN_FAILURE,
		payload: error
	};
};
