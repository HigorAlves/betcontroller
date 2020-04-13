import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
  	margin: 0;
  	padding: 0;
		font-family: "Nunito Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
  'Segoe UI Emoji', 'Segoe UI Symbol';
		font-variant-numeric: tabular-nums;
	}

	body {
		background-color:  #fff;
	}

	html {
  	font-size: 16px;
		word-wrap: break-word;
	}

	h1,
	h2 {
  	font-weight: 300;
	}

	h3,
	h4,
	h5 {
  	font-weight: 400;
	}

	p{
		font-weight: 300;
	}

	mark {
		background: #FF9E18;
		color: #fff;
		padding: 0px 2px 2px 1px;
	}

	code {
		background: #F2F2F2;
    color: #666;
		border: 1px solid #ddd;
    border-left: 1px solid #f36d33;
		border-radius: 2px;
    page-break-inside: avoid;
    font-family: monospace;
    line-height: 1.6;
    max-width: 100%;
    overflow: auto;
    padding: 2px 2px;
    display: block;
    word-wrap: break-word;
	}

	u {
  	text-decoration: underline;
	}
`;

export default GlobalStyle;
