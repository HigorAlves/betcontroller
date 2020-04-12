import React, { ReactElement } from 'react';

import { Row, Col, Form, Input, Button } from 'antd';
import Firebase from 'firebase/app';
import 'firebase/auth';

import OpenNotification from 'Components/Notification';

import { Container, Image } from './styles';

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
		<Container>
			<Image src={require('../../Assets/Images/logos/dourada.png')} alt='Logo Dourada' />
			<Row justify='center' align='middle'>
				<Col style={{ backgroundColor: '#fff', padding: 20, borderRadius: 5, textAlign: 'center' }} md={8} sm={24}>
					<h1>Recuperação de Senha</h1>
					<p>Insira seu endereço de email para recuperar sua conta</p>
					<Form layout='vertical' form={form} onFinish={onFinish}>
						<Form.Item
							label='Endereço de E-mail'
							name='email'
							rules={[
								{
									type: 'email',
									message: 'É preciso inserir um email valido'
								},
								{ required: true, message: 'É preciso inserir o email!' }
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item>
							<Button type='primary' htmlType='submit' block>
								Recuperar minha senha
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default ResetPassword;
