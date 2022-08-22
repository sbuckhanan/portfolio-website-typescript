import { Section, SectionTitle } from '../Styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from '../Styles/ComponentStyles/AccomplishmentsStyles';

const data = [
	{ number: 25, text: 'Repositories' },
	{ number: 1, text: 'Solo Project' },
	{ number: 1, text: 'Group Client Project' },
];

export const Accomplishments = () => {
	return (
		<Section>
			<SectionTitle>Personal Accomplishments</SectionTitle>
			<Boxes>
				{data.map((card, index) => (
					<Box key={index}>
						<BoxNum>{card.number}+</BoxNum>
						<BoxText>{card.text}</BoxText>
					</Box>
				))}
			</Boxes>
		</Section>
	);
};
