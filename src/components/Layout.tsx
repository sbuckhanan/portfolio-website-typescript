import { Footer } from './Footer';
import { Header } from './Header';
import { Container } from '../Styles/ComponentStyles/LayoutStyles';

export const Layout = ({ children }: any) => {
	return (
		<Container>
			<Header />
			<main>{children}</main>
			<Footer />
		</Container>
	);
};
