import { Row } from 'antd';
import styled from 'styled-components';

import BgImage from '../../Assets/Images/bg.jpg';

export const RowContainer = styled(Row)`
	background-image: linear-gradient(0deg, rgba(27, 28, 31, 1), rgba(140, 55, 216, 0.4)), url(${BgImage});
	background-repeat: no-repeat;
	background-size: cover;
	background-color: rgba(27, 28, 31, 1);
	height: 100vh;
`;

export const Title = styled.h1`
	font-weight: bold;
`;
