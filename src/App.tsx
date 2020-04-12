import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import Routes from 'Routes';
import Store from 'Store';
import GlobalStyles from 'Theme/GlobalStyles';

const APP: React.FC = (): ReactElement => (
	<React.Fragment>
		<Provider store={Store}>
			<GlobalStyles />
			<Routes />
		</Provider>
	</React.Fragment>
);

export default APP;
