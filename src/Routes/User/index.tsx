import React, { lazy } from 'react';
import { Switch } from 'react-router-dom';

import Loading from 'Pages/Loading';

import PrivateRoute from './private.routes';

const Index = lazy(() => import('Pages/Dashboard/User'));
const Banca = lazy(() => import('Pages/Dashboard/User/Banca'));
const BancaConfig = lazy(() => import('Pages/Dashboard/User/Banca/config'));

const routes = [
	{
		key: '/dashboard',
		path: '/dashboard',
		component: Index
	},
	{
		key: '/dashboard/banca',
		path: '/dashboard/banca',
		component: Banca
	},
	{
		key: '/dashboard/banca/configurar',
		path: '/dashboard/banca/configurar',
		component: BancaConfig
	}
];

const AdminRoutes = () => (
	<Switch>
		<React.Suspense fallback={<Loading />}>
			{routes.map((route, index: number) => (
				<PrivateRoute exact key={index} {...route} />
			))}
		</React.Suspense>
	</Switch>
);

export default AdminRoutes;
