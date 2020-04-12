import { createStore, Store, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { AuthenticationState } from 'Store/Ducks/Authentication/types';

import rootReducer from './Ducks/rootReducer';
import rootSaga from './Ducks/rootSaga';

export interface ApplicationState {
	authentication: AuthenticationState;
}

const sagaMiddleware = createSagaMiddleware();
const store: Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
