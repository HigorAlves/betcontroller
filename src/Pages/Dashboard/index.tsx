import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { BankOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import UserRoutes from 'Routes/User';

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;

const SideMenu = (props: RouteComponentProps): React.ReactElement => {
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Header>
				<div
					className='logo'
					style={{ width: 120, height: 31, background: 'rgba(255, 255, 255, 0.2)', margin: '16px 24px 16px 0', float: 'left' }}
				/>
				<Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']} style={{ float: 'right' }}>
					<SubMenu
						key='bank'
						title={
							<span>
								<BankOutlined />
								Banca
							</span>
						}
					>
						<Menu.Item key='bank/bank' onClick={(): void => props.history.push('/dashboard/banca')}>
							Fazer apostas
						</Menu.Item>
						<Menu.Item key='bank/timeline' onClick={(): void => props.history.push('/dashboard/banca/historico')}>
							Historico
						</Menu.Item>
						<Menu.Item key='bank/config' onClick={(): void => props.history.push('/dashboard/banca/configurar')}>
							Configurar
						</Menu.Item>
					</SubMenu>
				</Menu>
			</Header>
			<Content style={{ margin: '0 16px' }}>
				<UserRoutes />
			</Content>
			<Footer style={{ textAlign: 'center' }}>Bet Controller ©{new Date().getFullYear()} Criado por StudioMVP</Footer>
		</Layout>
	);
};

export default withRouter(SideMenu);
