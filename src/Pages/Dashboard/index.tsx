import React from 'react';

import { Layout } from 'antd';
import AdminRoutes from 'Routes/Admin';

import AdminSider from 'Components/Sider';

const { Header, Content, Footer } = Layout;

const SideMenu: React.FC = (): React.ReactElement => {
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<AdminSider />
			<Layout>
				<Header style={{ padding: 0, backgroundColor: '#fff' }} />
				<Content style={{ margin: '0 16px' }}>
					<AdminRoutes />
				</Content>
				<Footer style={{ textAlign: 'center' }}>Sistema iUP ©{new Date().getFullYear()} Criado por StudioMVP</Footer>
			</Layout>
		</Layout>
	);
};

export default SideMenu;
