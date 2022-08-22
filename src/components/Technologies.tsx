import { DiFirebase, DiReact } from 'react-icons/di';
import { FaServer } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../Styles/GlobalComponents';
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from '../Styles/ComponentStyles/TechnologiesStyles';

export const Technologies = () => {
	return (
		<Section id='tech'>
			<SectionDivider />
			<br />
			<SectionTitle>Technologies</SectionTitle>
			<SectionText>
				I've worked with a range of technologies in the web development world. I have worked with
				Front-End, Back-End, Design, and Databases. I pride myself in keeping up to date with
				current technologies and being versatile.
			</SectionText>
			<List>
				<ListItem>
					<DiReact size='3rem' />
					<ListContainer>
						<ListTitle>Front-End</ListTitle>
						<ListParagraph>
							React.js <br />
							JavaScript <br />
							JQuery <br />
							HTML <br />
							CSS <br />
						</ListParagraph>
					</ListContainer>
				</ListItem>
				<ListItem>
					<FaServer size='3rem' />
					<ListContainer>
						<ListTitle>Back-End</ListTitle>
						<ListParagraph>
							Node.js <br />
							Express.js <br />
							MySQL <br />
							NoSQL <br />
							Databases <br />
							C# <br />
							.NET
						</ListParagraph>
					</ListContainer>
				</ListItem>
				<ListItem>
					<DiFirebase size='3rem' />
					<ListContainer>
						<ListTitle>Libraries/Frameworks</ListTitle>
						<ListParagraph>
							Bootstrap <br />
							MUI <br />
							Socket.io <br />
							Moment.js <br />
							Sweet Alerts <br />
							REST APIs
						</ListParagraph>
					</ListContainer>
				</ListItem>
			</List>
			<SectionDivider />
		</Section>
	);
};
