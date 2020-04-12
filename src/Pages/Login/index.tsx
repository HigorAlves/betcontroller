import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Row, Col, Form, Input, Button, Divider } from 'antd';

import { Container, Image } from './styles';

const LOGIN = ({ history }: RouteComponentProps): ReactElement => {
	const dispatch = useDispatch();
	const [form] = Form.useForm();

	function onFinish(value: any): void {
		dispatch({ type: '@auth/LOGIN_REQUEST', payload: { ...value, callback: (): void => history.push('/dashboard') } });
	}

	return (
		<Container>
			<Image src={require('../../Assets/Images/logos/dourada.png')} alt='Logo Dourada' />
			<Row justify='center' align='middle'>
				<Col style={{ backgroundColor: '#fff', padding: 20, borderRadius: 5, textAlign: 'center' }} md={8} sm={24}>
					<h1>Sistema de Login</h1>
					<p>Insira o E-mail e senha para prosseguir</p>
					<Form form={form} layout='vertical' onFinish={onFinish}>
						<Form.Item
							label='Endereço de E-mail'
							name='email'
							rules={[
								{ type: 'email', required: true, message: 'É preciso inserir um email valido' },
								{ required: true, message: 'É preciso inserir o email!' }
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item label='Senha' name='password' rules={[{ required: true, message: 'É preciso inserir uma senha!' }]}>
							<Input.Password />
						</Form.Item>

						<Form.Item>
							<Button type='primary' htmlType='submit' block>
								Entrar
							</Button>
						</Form.Item>
					</Form>
					<Divider />
					<Link to='/resetarsenha'>Esqueci minha senha</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default withRouter(LOGIN);
