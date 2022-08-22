import { ThemeProvider } from 'styled-components';

import theme from './default';
import GlobalStyles from '../GlobalComponents/globals';

const Theme = ({ children }: any) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	);
};

export default Theme;
