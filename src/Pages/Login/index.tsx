import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Col, Form, Input, Button, Divider } from 'antd';

import { Title, Text, RowContainer } from './styles';

const LOGIN = ({ history }: RouteComponentProps): ReactElement => {
	const dispatch = useDispatch();
	const [form] = Form.useForm();

	function onFinish(value: any): void {
		dispatch({ type: '@auth/LOGIN_REQUEST', payload: { ...value, callback: (): void => history.push('/dashboard') } });
	}

	return (
		<RowContainer align='middle'>
			<Col style={{ backgroundColor: '#fff', padding: 20, borderRadius: 5, textAlign: 'center' }} md={{ offset: 1, span: 8 }} sm={24}>
				<Title>Authorization</Title>
				<Text>
					of your <strong style={{ color: '#8C37D8' }}>account</strong>
				</Text>
				<Form form={form} onFinish={onFinish}>
					<Form.Item
						name='email'
						rules={[
							{ type: 'email', required: true, message: 'É preciso inserir um email valido' },
							{ required: true, message: 'É preciso inserir o email!' }
						]}
					>
						<Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
					</Form.Item>

					<Form.Item name='password' rules={[{ required: true, message: 'É preciso inserir uma senha!' }]}>
						<Input.Password prefix={<LockOutlined className='site-form-item-icon' />} type='password' placeholder='Password' />
					</Form.Item>

					<Form.Item>
						<Button type='primary' htmlType='submit' block>
							Sign in
						</Button>
					</Form.Item>
				</Form>
				<Divider />
				<Link to='/resetarsenha'>Forgot my password</Link>
			</Col>
		</RowContainer>
	);
};

export default withRouter(LOGIN);
