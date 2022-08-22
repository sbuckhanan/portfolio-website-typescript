import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from '../Styles/ComponentStyles/ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../Styles/GlobalComponents';
import { projects } from '../Constants/constants';

import { SectionProps } from './Hero';

export const Projects = () => {
	return (
		<Section nopadding id='projects'>
			<SectionDivider />
			<SectionTitle main>Projects</SectionTitle>
			<GridContainer>
				{projects.map(({ id, image, title, description, tags, source, visit }) => (
					<BlogCard key={id}>
						<Img src={image} />
						<TitleContent>
							<HeaderThree>{title}</HeaderThree>
							<Hr />
						</TitleContent>
						<CardInfo>{description}</CardInfo>
						<div>
							<TitleContent>Stack</TitleContent>
							<TagList>
								{tags.map((tag, i) => (
									<Tag key={i}>{tag}</Tag>
								))}
							</TagList>
						</div>
						<UtilityList>
							<ExternalLinks href={visit}>Code</ExternalLinks>
							<ExternalLinks href={source}>Source</ExternalLinks>
						</UtilityList>
					</BlogCard>
				))}
			</GridContainer>
		</Section>
	);
};
