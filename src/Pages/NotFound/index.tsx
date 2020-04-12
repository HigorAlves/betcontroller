import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Button } from 'antd';

import { Container, Image } from './styles';

const NotFound: React.FC = (): ReactElement => {
	return (
		<Container>
			<Row justify='center' align='middle' style={{ height: '100vh' }}>
				<Col style={{ backgroundColor: '#fff', padding: 20, borderRadius: 5, textAlign: 'center' }} md={9} sm={24}>
					<Image src={require('../../Assets/Images/404.png')} alt='Logo Dourada' />
					<h1>Página não encontrada!</h1>
					<Link to='/'>
						<Button type='primary' block>
							Voltar para tela de Login
						</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default NotFound;
