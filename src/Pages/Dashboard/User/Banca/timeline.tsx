import React, { useEffect, useState } from 'react';

import { Timeline, Typography, Col, Row, Breadcrumb } from 'antd';
import Firebase from 'Services/firebase';
import Colors from 'Theme/Colors';

const { Title, Text } = Typography;

const BankTimeline = (): React.ReactElement => {
	const [data, setData] = useState<[{}]>();

	async function getData(): Promise<void> {
		const uid = localStorage.getItem('uid') as string;
		const aux: any = [];
		const database = Firebase.firestore()
			.collection('user')
			.doc(uid)
			.collection('bets');

		await database.get().then(snap => {
			snap.forEach(doc => aux.push({ ...doc.data(), id: doc.id }));
		});

		setData(aux);
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<section style={{ marginTop: 16 }}>
			<Breadcrumb>
				<Breadcrumb.Item>Dashboard</Breadcrumb.Item>
				<Breadcrumb.Item>Banca</Breadcrumb.Item>
				<Breadcrumb.Item>Historico</Breadcrumb.Item>
			</Breadcrumb>
			<div style={{ textAlign: 'center', marginBottom: 40 }}>
				<Title>Historico baseado em seu horário local</Title>
				<Text type='warning'>Bolinhas Verdes são ganhos, Vermelhas são percas e Roxas são jogos não terminados</Text>
			</div>
			<Row justify='center'>
				<Col md={8} sm={24}>
					<Timeline>
						{data
							? data.map((item: any): any => {
								if (item.result === 'lose') {
									return (
										<Timeline.Item key={item.id} color={Colors.red}>
											{new Date(item.date.seconds * 1000).toString()}
										</Timeline.Item>
									);
								}
							  })
							: null}
					</Timeline>
				</Col>
				<Col md={8} sm={24}>
					<Timeline>
						{data
							? data.map((item: any): any => {
								if (item.result === 'won') {
									return (
										<Timeline.Item key={item.id} color={Colors.green}>
											{new Date(item.date.seconds * 1000).toString()}
										</Timeline.Item>
									);
								}
							  })
							: null}
					</Timeline>
				</Col>
				<Col md={8} sm={24}>
					<Timeline>
						{data
							? data.map((item: any): any => {
								if (item.result === 'waiting') {
									return (
										<Timeline.Item key={item.id} color={Colors.purple}>
											{new Date(item.date.seconds * 1000).toString()}
										</Timeline.Item>
									);
								}
							  })
							: null}
					</Timeline>
				</Col>
			</Row>
		</section>
	);
};

export default BankTimeline;
