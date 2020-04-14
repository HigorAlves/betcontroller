import React, { lazy } from 'react';
import { Switch } from 'react-router-dom';

import Loading from 'Pages/Loading';

import PrivateRoute from './private.routes';

const Index = lazy(() => import('Pages/Dashboard/User'));
const Bank = lazy(() => import('Pages/Dashboard/User/Banca'));
const BankConfig = lazy(() => import('Pages/Dashboard/User/Banca/config'));
const BankTimeline = lazy(() => import('Pages/Dashboard/User/Banca/timeline'));

const routes = [
	{
		key: '/dashboard',
		path: '/dashboard',
		component: Index
	},
	{
		key: '/dashboard/banca',
		path: '/dashboard/banca',
		component: Bank
	},
	{
		key: '/dashboard/banca/configurar',
		path: '/dashboard/banca/configurar',
		component: BankConfig
	},
	{
		key: '/dashboard/banca/historico',
		path: '/dashboard/banca/historico',
		component: BankTimeline
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
