import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from 'Pages/Dashboard';
import Login from 'Pages/Login';
import NotFound from 'Pages/NotFound';
import PasswordReset from 'Pages/Password_Reset';

const ROUTES: React.FC = (): ReactElement => (
	<Router>
		<Switch>
			<Route exact path='/resetarsenha'>
				<PasswordReset />
			</Route>

			<Route exact path='/login'>
				<Login />
			</Route>

			<Route path='/dashboard'>
				<Dashboard />
			</Route>

			<Route path='/'>
				<Dashboard />
			</Route>

			<Route path='*'>
				<NotFound />
			</Route>
		</Switch>
	</Router>
);

export default ROUTES;
