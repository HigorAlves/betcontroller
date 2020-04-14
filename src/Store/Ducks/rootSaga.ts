import { all, takeLatest } from 'redux-saga/effects';

import { Signin, Logout } from './Authentication/saga';
import { AuthenticationTypes } from './Authentication/types';

export default function* rootSaga(): any {
	return yield all([takeLatest(AuthenticationTypes.LOGIN_REQUEST, Signin), takeLatest(AuthenticationTypes.LOGOUT, Logout)]);
}
