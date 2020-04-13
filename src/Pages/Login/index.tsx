import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Col, Form, Input, Button, Divider } from 'antd';

import { Title, RowContainer } from './styles';

const LOGIN = ({ history }: RouteComponentProps): ReactElement => {
	const dispatch = useDispatch();
	const [form] = Form.useForm();

	function onFinish(value: any): void {
		dispatch({ type: '@auth/LOGIN_REQUEST', payload: { ...value, callback: (): void => history.push('/dashboard') } });
	}

	return (
		<RowContainer align='middle'>
			<Col style={{ backgroundColor: '#fff', padding: 20, borderRadius: 5, textAlign: 'center' }} md={{ offset: 1, span: 8 }} sm={24}>
				<Title>
					Entre com sua <strong style={{ color: '#8C37D8' }}>conta</strong>
				</Title>
				<Form form={form} onFinish={onFinish}>
					<Form.Item
						name='email'
						rules={[
							{ type: 'email', required: true, message: 'É preciso inserir um email valido' },
							{ required: true, message: 'É preciso inserir o email!' }
						]}
					>
						<Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='E-mail' />
					</Form.Item>

					<Form.Item name='password' rules={[{ required: true, message: 'É preciso inserir uma senha!' }]}>
						<Input.Password prefix={<LockOutlined className='site-form-item-icon' />} type='password' placeholder='Senha' />
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
		</RowContainer>
	);
};

export default withRouter(LOGIN);
