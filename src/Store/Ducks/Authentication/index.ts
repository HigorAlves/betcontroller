import { Reducer } from 'redux';

import { AuthenticationState, AuthenticationData, AuthenticationTypes as Types } from './types';

const INITIAL_STATE: AuthenticationState = {
	user: {} as AuthenticationData,
	loading: false,
	error: { code: '', message: '' }
};

const reducer: Reducer<AuthenticationState> = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case Types.LOGIN_REQUEST:
			return { ...state, loading: true };
		case Types.LOGIN_SUCCESS:
			return { ...state, loading: false, user: action.payload };
		case Types.LOGIN_FAILURE:
			return { ...state, loading: false, error: action.payload };
		case Types.LOGOUT:
			return { user: {}, loading: false, error: { code: '', message: '' } };
		default:
			return state;
	}
};
export default reducer;
