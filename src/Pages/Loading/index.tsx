import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../Assets/Animation/soccer-filed-loading.json';

const Loading = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	};
	return <Lottie options={defaultOptions} height={400} width={600} isStopped={false} isPaused={false} />;
};

export default Loading;
