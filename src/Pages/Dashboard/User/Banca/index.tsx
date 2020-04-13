import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { ArrowUpOutlined } from '@ant-design/icons';
import { Breadcrumb, Statistic, Card, Row, Col, InputNumber, Form, Button, Table, Radio } from 'antd';

const IndexPage = (props: RouteComponentProps) => {
	const [oddValue, setOddValue] = useState(0);
	const [betValue, setBetValue] = useState(0);
	const [data, setData] = useState<any>([{ bet: 1.5, key: 52.345829595968475, odd: 1, return: 1.5 }]);
	const [earn, setEarn] = useState(0);
	const [form] = Form.useForm();

	function onFinish(value: any): void {
		const aux = data;
		aux.push({ key: Math.random() * 100, bet: value.bet, odd: value.odd, return: value.bet * value.odd });
		setData(aux);
	}

	useEffect(() => {
		setEarn(betValue * oddValue);
	}, [betValue, oddValue]);

	const columns = [
		{
			title: 'Valor Aposta',
			dataIndex: 'bet',
			key: 'bet'
		},
		{
			title: 'Valor Odd',
			dataIndex: 'odd',
			key: 'odd'
		},
		{
			title: 'Retorno esperado',
			dataIndex: 'return',
			key: 'return'
		},
		{
			title: 'Resultado',
			dataIndex: 'key',
			key: 'key',
			// eslint-disable-next-line react/display-name
			render: () => (
				<>
					<Radio.Group>
						<Button>Green</Button>
						<Button danger>Red</Button>
					</Radio.Group>
				</>
			)
		}
	];

	return (
		<section>
			<Breadcrumb style={{ margin: '16px 0' }}>
				<Breadcrumb.Item>Dashboard</Breadcrumb.Item>
				<Breadcrumb.Item>Banca</Breadcrumb.Item>
			</Breadcrumb>

			<Row gutter={16}>
				<Col span={6}>
					<Card>
						<Statistic title='Banca Inicial' value={34.22} prefix={'R$'} />
					</Card>
				</Col>
				<Col span={6}>
					<Card>
						<Statistic title='Unidade' value={0.5} prefix={'R$'} />
					</Card>
				</Col>
				<Col span={6}>
					<Card>
						<Statistic title='Banca Atual' value={34.22} prefix={'R$'} />
					</Card>
				</Col>
				<Col span={6}>
					<Card>
						<Statistic
							title='Crescimento'
							value={11.28}
							precision={2}
							valueStyle={{ color: '#3f8600' }}
							prefix={<ArrowUpOutlined />}
							suffix='%'
						/>
					</Card>
				</Col>
			</Row>

			<Button block type='primary' style={{ marginTop: 40 }} onClick={() => props.history.push('/dashboard/banca/configurar')}>
				Configurar Banca
			</Button>

			<Form
				layout='horizontal'
				form={form}
				onFinish={onFinish}
				style={{ marginTop: 20, backgroundColor: '#fff', borderRadius: 5, paddingTop: 10, paddingLeft: 10, height: 50 }}
			>
				<Row gutter={16} justify='center' align='middle'>
					<Col span={4}>
						<Form.Item name='bet' label='Valor Aposta'>
							<InputNumber defaultValue={0} min={0} onChange={value => setBetValue(value as number)} />
						</Form.Item>
					</Col>
					<Col span={4}>
						<Form.Item name='odd' label='Valor da ODD'>
							<InputNumber defaultValue={0} min={0} onChange={value => setOddValue(value as number)} />
						</Form.Item>
					</Col>
					<Col span={4}>
						<p>
							Retorno esperado <strong style={{ color: 'green' }}>{earn}</strong>
						</p>
					</Col>

					<Col span={4}>
						<Form.Item>
							<Button type='primary' htmlType='submit' block>
								Cadastrar
							</Button>
						</Form.Item>
					</Col>
				</Row>
			</Form>

			<Table dataSource={data} columns={columns} />
		</section>
	);
};

export default withRouter(IndexPage);
