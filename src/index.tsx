import React from 'react';
import ReactDOM from 'react-dom';

// import Firebase from 'firebase/app';

import App from './App';
import * as serviceWorker from './serviceWorker';

// const firebaseConfig = {
// 	apiKey: 'AIzaSyBBsPqVI40VMhMMKCNt6ZYcIBwgmH91QC4',
// 	authDomain: 'sistemaiup.firebaseapp.com',
// 	databaseURL: 'https://sistemaiup.firebaseio.com',
// 	projectId: 'sistemaiup',
// 	storageBucket: 'sistemaiup.appspot.com',
// 	messagingSenderId: '79766768798',
// 	appId: '1:79766768798:web:850a563778eac428167f8f'
// };

// Firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
