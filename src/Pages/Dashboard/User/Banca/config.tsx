import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { Breadcrumb, InputNumber, Form, Button } from 'antd';
import Firebase from 'Services/firebase';

import OpenNotification from 'Components/Notification';

const IndexPage = (props: RouteComponentProps) => {
	const [form] = Form.useForm();

	async function onFinish(value: any) {
		const uid: string = (await localStorage.getItem('uid')) as string;
		const database = Firebase.firestore()
			.collection('user')
			.doc(uid)
			.collection('bank')
			.doc('config');

		database
			.set({ initialBank: value.value, stake: value.stake, month: value.month, nowBank: value.value })
			.then(() => {
				OpenNotification('success', 'Dados cadastrados', '');
				props.history.goBack();
			})
			.catch(error => {
				OpenNotification('error', 'Não foi possivel cadastrar os dados', '');
				console.error(error);
			});
	}

	return (
		<section>
			<Breadcrumb style={{ margin: '16px 0' }}>
				<Breadcrumb.Item>Dashboard</Breadcrumb.Item>
				<Breadcrumb.Item>Banca</Breadcrumb.Item>
				<Breadcrumb.Item>Configurar</Breadcrumb.Item>
			</Breadcrumb>

			<Form
				layout='vertical'
				form={form}
				onFinish={onFinish}
				style={{
					marginTop: 20,
					backgroundColor: '#fff',
					borderRadius: 5,
					paddingTop: 10,
					paddingLeft: 10
				}}
			>
				<Form.Item name='value' label='Valor da sua banca'>
					<InputNumber defaultValue={0} min={0} />
				</Form.Item>
				<Form.Item name='month' label='Porcentagem mês'>
					<InputNumber defaultValue={0} min={0} />
				</Form.Item>
				<Form.Item name='stake' label='Porcentagem unidade Stake'>
					<InputNumber defaultValue={0} min={0} />
				</Form.Item>
				<Form.Item>
					<Button type='primary' htmlType='submit' block>
						Cadastrar dados
					</Button>
				</Form.Item>
			</Form>
		</section>
	);
};

export default withRouter(IndexPage);
