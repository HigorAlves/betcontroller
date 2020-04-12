import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

const AdminSider = (props: RouteComponentProps): React.ReactElement => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<Sider collapsible collapsed={collapsed} onCollapse={(): void => setCollapsed(!collapsed)} style={{ backgroundColor: '#fff' }}>
			<img
				src={require('../../Assets/Images/logos/azul.png')}
				height='40'
				style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: 5 }}
				alt='Logo'
			/>
			<Menu theme='light' defaultSelectedKeys={['1']} mode='inline' style={{ paddingTop: 12 }}>
				<Menu.Item key='home'>
					<span>
						<HomeOutlined />
						<span>Inicio</span>
					</span>
				</Menu.Item>
				<SubMenu
					key='users'
					title={
						<span>
							<UserOutlined />
							<span>Usuarios</span>
						</span>
					}
				>
					<Menu.Item key='user/1'>Administradores</Menu.Item>
					<Menu.Item key='user/2'>Dentistas</Menu.Item>
					<Menu.Item key='user/4'>Clientes</Menu.Item>
				</SubMenu>
			</Menu>
		</Sider>
	);
};
export default withRouter(AdminSider);
