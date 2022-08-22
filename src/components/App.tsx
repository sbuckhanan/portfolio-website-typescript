import './App.css';
import Theme from '../Styles/Themes/theme';
import { Layout } from './Layout';
import { Section } from '../Styles/GlobalComponents';
import { Hero } from './Hero';
import { TimeLine } from './TimeLine';
import { Projects } from './Projects';
import { Technologies } from './Technologies';
import { Accomplishments } from './Accomplishments';
import { BackgroundAnimation } from './BackgroundAnimation';

function App() {
	return (
		<>
			<Theme>
				<Layout>
					<Section grid>
						<Hero />
						<BackgroundAnimation />
					</Section>
					<br />
					<TimeLine />
					<Projects />
					<Technologies />
					<Accomplishments />
				</Layout>
			</Theme>
		</>
	);
}

export default App;
