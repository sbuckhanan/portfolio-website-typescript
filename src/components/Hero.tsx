import { Section, SectionText, SectionTitle } from '../Styles/GlobalComponents';
import Button from '../Styles/GlobalComponents/Button';
import { LeftSection } from '../Styles/ComponentStyles/HeroStyles';

export interface SectionProps {
	nopadding?: boolean;
	row?: boolean;
	main?: boolean;
	index?: number;
	ref?: any;
	active?: any;
	final?: any;
	alt?: any;
	form?: any;
	disabled?: any;
	grid?: any;
}

export const Hero = () => {
	return (
		<Section row nopadding>
			<LeftSection>
				<SectionTitle>
					Welcome To <br />
					My Personal Portfolio
				</SectionTitle>
				<SectionText>
					Thank you for stopping by! Below you will be able to see some information about me and my
					projects, as well as their source code and a preview if it is available. These projects
					are currently made using technologies such as HTML, CSS, Javascript, jQuery, React,
					Node.js, Express,js, and SQL
				</SectionText>
				<Button onClick={() => (window.location.href = 'https://google.com')}>Learn More</Button>
			</LeftSection>
		</Section>
	);
};
