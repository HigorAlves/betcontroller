import { notification } from 'antd';

const OpenNotification = (type: 'success' | 'info' | 'error' | 'warning', message: string, description: string): void => {
	notification[type]({
		message,
		description
	});
};

export default OpenNotification;
