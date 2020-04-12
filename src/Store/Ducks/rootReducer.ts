import { combineReducers } from 'redux';

import AuthenticationReducer from './Authentication';

const rootReducer = combineReducers({
	Authentication: AuthenticationReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
