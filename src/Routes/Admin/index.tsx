import React, { lazy } from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from './private.routes';

const Index = lazy(() => import('Pages/Dashboard/Administrator'));

const routes = [
	{
		key: '/dashboard',
		path: '/dashboard',
		component: Index
	}
];

const AdminRoutes = () => (
	<Switch>
		<React.Suspense fallback={'<Loading />'}>
			{routes.map((route, index: number) => (
				<PrivateRoute exact key={index} {...route} />
			))}
		</React.Suspense>
	</Switch>
);

export default AdminRoutes;
