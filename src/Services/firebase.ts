import Firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: '',
	authDomain: '',
	databaseURL: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
	appId: ''
};

Firebase.initializeApp(firebaseConfig);

export default Firebase;
