const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px'
};

const device = {
	mobileS: `screen and (max-width: ${size.mobileS})`,
	mobileM: `screen and (max-width: ${size.mobileM})`,
	mobileL: `screen and (max-width: ${size.mobileL})`,
	tablet: `screen and (max-width: ${size.tablet})`,
	laptop: `screen and (max-width: ${size.laptop})`,
	laptopL: `screen and (max-width: ${size.laptopL})`,
	desktop: `screen and (max-width: ${size.desktop})`,
	desktopL: `screen and (max-width: ${size.desktop})`
};

export default device;
