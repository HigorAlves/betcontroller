import React, { ReactElement } from 'react';

import { Col, Form, Input, Button } from 'antd';
import Firebase from 'firebase/app';
import 'firebase/auth';

import OpenNotification from 'Components/Notification';

import { UserOutlined } from '@ant-design/icons';

import { RowContainer } from './styles';

const ResetPassword: React.FC = (): ReactElement => {
	const [form] = Form.useForm();

	const onFinish = (values: any): void => {
		Firebase.auth()
			.sendPasswordResetEmail(values.email)
			.then(() => OpenNotification('success', 'Email enviado com sucesso', ''))
			.catch(error => {
				console.error(error);
				OpenNotification('error', 'Não foi possível enviar enviar o email', 'Verifique se inseriou o email correto!');
			});
	};

	return (
		<RowContainer justify='center' align='middle'>
			<Col style={{ backgroundColor: '#fff', padding: 20, borderRadius: 5, textAlign: 'center' }} md={8} sm={24}>
				<h1>Recuperação de senha</h1>
				<p>Insira seu endereço de email para recuperar sua conta</p>
				<Form form={form} onFinish={onFinish}>
					<Form.Item
						name='email'
						rules={[
							{
								type: 'email',
								message: 'É preciso inserir um email valido'
							},
							{ required: true, message: 'É preciso inserir o email!' }
						]}
					>
						<Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Seu email cadastrado' />
					</Form.Item>

					<Form.Item>
						<Button type='primary' htmlType='submit' block>
							Recuperar minha senha
						</Button>
					</Form.Item>
				</Form>
			</Col>
		</RowContainer>
	);
};

export default ResetPassword;
