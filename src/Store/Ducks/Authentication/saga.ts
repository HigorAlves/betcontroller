import jwt from 'jsonwebtoken';
import { put, call } from 'redux-saga/effects';
import Firebase from 'Services/firebase';
import { loginSuccess, loginFailure } from 'Store/Ducks/Authentication/actions';
import { AuthenticationActions } from 'Store/Ducks/Authentication/types';

import Notification from 'Components/Notification';

export function* Signin(action: AuthenticationActions): any {
	try {
		let role = '';
		let token: string;
		const auth = Firebase.auth();
		const { email, password, callback } = action.payload;

		const result = yield call([auth, auth.signInWithEmailAndPassword], email, password);
		const { displayName, emailVerified, isAnonymous, phoneNumber, photoURL, uid } = result.user;

		localStorage.setItem('uid', uid);

		yield Firebase.auth()
			.currentUser?.getIdTokenResult()
			.then(Ftoken => {
				if (Ftoken.claims.admin === true) {
					token = jwt.sign({ admin: true }, 'randompass');
					role = 'admin';
					localStorage.setItem('token', token);
				}
			})
			.then(() => {
				Notification('success', 'Login realizado com sucesso!', '');
				callback();
			})
			.catch(error => console.log(error));

		yield put(loginSuccess({ displayName, emailVerified, isAnonymous, phoneNumber, photoURL, email, role, uid }));
	} catch (error) {
		Notification('error', error.code, error.message);
		yield put(loginFailure(error));
	}
}
