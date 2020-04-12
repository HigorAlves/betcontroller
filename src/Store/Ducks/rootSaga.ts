import { all, takeLatest } from 'redux-saga/effects';

import { Signin } from './Authentication/saga';
import { AuthenticationTypes } from './Authentication/types';

export default function* rootSaga(): any {
	return yield all([takeLatest(AuthenticationTypes.LOGIN_REQUEST, Signin)]);
}
