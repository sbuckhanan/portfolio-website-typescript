import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
	Span,
} from '../Styles/ComponentStyles/HeaderStyles';

export const Header = () => {
	return (
		<Container>
			<Div1>
				<a
					href='#home'
					style={{
						display: 'flex',
						alignItems: 'center',
						color: 'white',
						marginBottom: '20px',
					}}>
					<DiCssdeck size='3rem' /> <Span>Portfolio</Span>
				</a>
			</Div1>
			<Div2>
				<li>
					<NavLink>Projects</NavLink>
				</li>
				<li>
					<NavLink>Technologies</NavLink>
				</li>
				<li>
					<NavLink>About</NavLink>
				</li>
			</Div2>
			<Div3>
				<SocialIcons to='https://github.com'>
					<AiFillGithub size='3rem' />
				</SocialIcons>
				<SocialIcons to='https://linkedin.com'>
					<AiFillLinkedin size='3rem' />
				</SocialIcons>
				<SocialIcons to='https://instagram.com'>
					<AiFillInstagram size='3rem' />
				</SocialIcons>
			</Div3>
		</Container>
	);
};
