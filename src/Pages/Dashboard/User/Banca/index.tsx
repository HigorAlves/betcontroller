import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Breadcrumb, Statistic, Card, Row, Col, InputNumber, Form, Button, Table, Radio, Input } from 'antd';
import Firebase from 'Services/firebase';
import Colors from 'Theme/Colors';

import OpenNotification from 'Components/Notification';

const IndexPage = (props: RouteComponentProps): React.ReactElement => {
	const [oddValue, setOddValue] = useState(0);
	const [betValue, setBetValue] = useState(0);
	const [config, setConfig] = useState<any>({ initialBank: 0, stake: 0, nowBank: 0 });
	const [data, setData] = useState<any>([]);
	const [earn, setEarn] = useState(0);
	const [loading, setLoading] = useState(true);
	const [form] = Form.useForm();

	async function getData(): Promise<void> {
		const uid = localStorage.getItem('uid') as string;
		const database = Firebase.firestore()
			.collection('user')
			.doc(uid);

		const config = (await database
			.collection('bank')
			.doc('config')
			.get()
			.then(snap => snap.data())) as any;

		if (config) {
			setConfig({
				initialBank: config.initialBank,
				stake: (config.stake / 100) * config.initialBank,
				nowBank: config?.nowBank,
				grow: -1 * ((config?.initialBank - config?.nowBank) / config?.initialBank) * 100
			});
		} else {
			setConfig({
				initialBank: 0,
				stake: 0,
				nowBank: 0,
				grow: 0
			});
		}

		const bets = await database
			.collection('bets')
			.get()
			.then(snap => snap.docs);
		const aux: any = [];
		bets.forEach(doc => aux.push({ ...doc.data(), id: doc.id }));
		setData(aux);
		setLoading(false);
	}

	function onFinish(value: any): void {
		setLoading(true);
		const uid = localStorage.getItem('uid') as string;
		const database = Firebase.firestore()
			.collection('user')
			.doc(uid)
			.collection('bets');

		database
			.add({
				date: Firebase.firestore.FieldValue.serverTimestamp(),
				bet: value.bet,
				odd: value.odd,
				return: value.bet * value.odd,
				game: value.gameid,
				result: 'waiting'
			})
			.then(doc => {
				setData([
					...data,
					{
						id: doc.id,
						bet: value.bet,
						odd: value.odd,
						return: value.bet * value.odd,
						result: 'waiting',
						date: Date.now(),
						game: value.gameid
					}
				]);
				OpenNotification('success', 'Dados cadastrado', '');
				setLoading(false);
			})
			.catch(error => {
				OpenNotification('error', 'Tente cadastrar novamente', 'para mais detalhes visualize os logs');
				console.error(error);
			});
	}

	async function handleResult(type: string, doc: string, bet: number, value: number): Promise<void> {
		const uid = localStorage.getItem('uid') as string;
		const database = Firebase.firestore()
			.collection('user')
			.doc(uid);

		if (type === 'lose') {
			await database
				.collection('bets')
				.doc(doc)
				.update({ result: 'lose' });
			database
				.collection('bank')
				.doc('config')
				.update({ nowBank: config.nowBank - bet })
				.then(() => {
					const nowBank = config.nowBank - bet;
					setConfig({ ...config, nowBank, grow: -1 * ((config.initialBank - nowBank) / config.initialBank) * 100 });
				})
				.catch(error => {
					OpenNotification('error', 'Tente cadastrar novamente', 'para mais detalhes visualize os logs');
					console.error(error);
				});
		} else if (type === 'won') {
			await database
				.collection('bets')
				.doc(doc)
				.update({ result: 'won' });
			database
				.collection('bank')
				.doc('config')
				.update({ nowBank: config.nowBank + (value - bet) })
				.then(() => {
					const nowBank = config.nowBank + (value - bet);
					setConfig({ ...config, nowBank, grow: -1 * ((config.initialBank - nowBank) / config.initialBank) * 100 });
				})
				.catch(error => {
					OpenNotification('error', 'Tente cadastrar novamente', 'para mais detalhes visualize os logs');
					console.error(error);
				});
		}

		const bets = await database
			.collection('bets')
			.get()
			.then(snap => snap.docs);
		const aux: any = [];
		bets.forEach(doc => aux.push({ ...doc.data(), id: doc.id }));
		setData(aux);
	}

	useEffect(() => {
		setEarn(betValue * oddValue);
	}, [betValue, oddValue]);

	useEffect(() => {
		getData();
	}, []);

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
			title: 'Jogo',
			dataIndex: 'game',
			key: 'game'
		},
		{
			title: 'Resultado',
			dataIndex: 'result',
			key: 'result',
			//@ts-ignore
			sorter: (a, b): any => a.result.length - b.result.length,
			// eslint-disable-next-line react/display-name
			render: (result: string, doc: any): React.ReactElement => {
				if (result === 'lose') {
					return <strong style={{ color: Colors.red }}>Perda</strong>;
				} else if (result === 'won') {
					return <strong style={{ color: Colors.green }}>Ganho</strong>;
				} else {
					return (
						<Radio.Group>
							<Button onClick={(): Promise<void> => handleResult('won', doc.id, doc.bet, doc.return)}>Green</Button>
							<Button danger onClick={(): Promise<void> => handleResult('lose', doc.id, doc.bet, 0)}>
								Red
							</Button>
						</Radio.Group>
					);
				}
			}
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
						<Statistic title='Banca Inicial' value={config.initialBank} prefix={'R$'} />
					</Card>
				</Col>
				<Col span={6}>
					<Card>
						<Statistic title='Unidade Recomendada' value={config.stake} prefix={'R$'} />
					</Card>
				</Col>
				<Col span={6}>
					<Card>
						<Statistic title='Banca Atual' value={config.nowBank} prefix={'R$'} />
					</Card>
				</Col>
				<Col span={6}>
					<Card>
						<Statistic
							title='Crescimento'
							value={config.grow}
							precision={2}
							valueStyle={config.grow >= 0 ? { color: Colors.green } : { color: Colors.red }}
							prefix={config.grow >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
							suffix='%'
						/>
					</Card>
				</Col>
			</Row>

			<Form
				layout='horizontal'
				form={form}
				onFinish={onFinish}
				style={{ marginTop: 20, backgroundColor: '#fff', borderRadius: 5, paddingTop: 10, paddingLeft: 10, height: 50 }}
			>
				<Row gutter={16} justify='center' align='middle'>
					<Col span={4}>
						<Form.Item name='gameid' label='Jogo'>
							<Input />
						</Form.Item>
					</Col>
					<Col span={4}>
						<Form.Item name='bet' label='Valor Aposta'>
							<InputNumber min={0} onChange={(value): void => setBetValue(value as number)} />
						</Form.Item>
					</Col>
					<Col span={4}>
						<Form.Item name='odd' label='Valor da ODD'>
							<InputNumber min={0} onChange={(value): void => setOddValue(value as number)} />
						</Form.Item>
					</Col>
					<Col span={4}>
						<p>
							Retorno esperado <strong style={{ color: Colors.green }}>{earn}</strong>
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

			<Table rowKey={(item): string => item.id} dataSource={data} columns={columns} loading={loading} />
		</section>
	);
};

export default withRouter(IndexPage);
