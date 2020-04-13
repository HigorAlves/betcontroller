import React from 'react';

import { Breadcrumb, InputNumber, Form, Button } from 'antd';

const IndexPage = () => {
	const [form] = Form.useForm();

	function onFinish(value: any): void {}

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

export default IndexPage;
