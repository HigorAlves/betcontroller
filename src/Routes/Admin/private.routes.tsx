import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import jwt from 'jsonwebtoken';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
	function isAuth(): boolean {
		try {
			const token = localStorage.getItem('token');
			const decoded: any = jwt.verify(token as string, 'randompass');

			if (decoded.admin) {
				return true;
			} else {
				return false;
			}
		} catch (e) {
			return false;
		}
	}

	return (
		<Route
			{...rest}
			render={props => (isAuth() ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />)}
		/>
	);
};

export default PrivateRoute;
