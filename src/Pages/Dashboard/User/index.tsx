import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../../Assets/Animation/working.json';

const IndexPage = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	};

	return (
		<section>
			<h1 style={{ textAlign: 'center' }}>
				Clique em banca no menu superior para acessar a banca, outras funcionalidades ainda estão sendo criadas
			</h1>
			<Lottie options={defaultOptions} height={400} width={600} isStopped={false} isPaused={false} />
		</section>
	);
};

export default IndexPage;
