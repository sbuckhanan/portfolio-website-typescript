import React, { useState, useRef, useEffect } from 'react';

import {
	CarouselButton,
	CarouselButtonDot,
	CarouselButtons,
	CarouselContainer,
	CarouselItem,
	CarouselItemImg,
	CarouselItemText,
	CarouselItemTitle,
	CarouselMobileScrollNode,
} from '../Styles/ComponentStyles/TimeLineStyles';
import { Section, SectionText, SectionTitle } from '../Styles/GlobalComponents';
import { TimeLineData } from '../Constants/constants';

import { SectionProps } from './Hero';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

export const TimeLine = () => {
	const [activeItem, setActiveItem] = useState(0);
	const carouselRef = useRef<null | HTMLDivElement>(null);

	const scroll = (node: any, left: any) => {
		return node.scrollTo({ left, behavior: 'smooth' });
	};

	const handleClick = (e: any, i: any) => {
		e.preventDefault();

		if (carouselRef.current) {
			const scrollLeft = Math.floor(
				carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
			);

			scroll(carouselRef.current, scrollLeft);
		}
	};

	const handleScroll = () => {
		if (carouselRef.current) {
			const index = Math.round(
				(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) *
					TimeLineData.length
			);

			setActiveItem(index);
		}
	};

	// // snap back to beginning of scroll when window is resized
	// // avoids a bug where content is covered up if coming from smaller screen
	useEffect(() => {
		const handleResize = () => {
			scroll(carouselRef.current, 0);
		};

		window.addEventListener('resize', handleResize);
	}, []);

	return (
		<Section id='about'>
			<SectionTitle>About Me</SectionTitle>
			<SectionText>
				Hello, my name is Stephon Buckhanan. I am married to my wife Savannah and have 3 little boys
				named Drey, Deon, and D'Angelo. In my free time I love to spend time with my family, play
				video game, and everything sports. I got into the Technology field when I attended Prime
				Digital Academy to learn coding. Before that I worked as a security officer and had gone to
				college for law enforcement.
			</SectionText>
			<CarouselContainer ref={carouselRef} onScroll={handleScroll}>
				<>
					{TimeLineData.map((item, index) => (
						<CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
							<CarouselItem
								index={index}
								id={`carousel__item-${index}`}
								active={activeItem}
								onClick={(e: any) => handleClick(e, index)}>
								<CarouselItemTitle>
									{item.year}
									<CarouselItemImg
										width='208'
										height='6'
										viewBox='0 0 208 6'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z'
											fill='url(#paint0_linear)'
											fillOpacity='0.33'
										/>
										<defs>
											<linearGradient
												id='paint0_linear'
												x1='-4.30412e-10'
												y1='0.5'
												x2='208'
												y2='0.500295'
												gradientUnits='userSpaceOnUse'>
												<stop stopColor='white' />
												<stop offset='0.79478' stopColor='white' stopOpacity='0' />
											</linearGradient>
										</defs>
									</CarouselItemImg>
								</CarouselItemTitle>
								<CarouselItemText>{item.text}</CarouselItemText>
							</CarouselItem>
						</CarouselMobileScrollNode>
					))}
				</>
			</CarouselContainer>
			<CarouselButtons>
				{TimeLineData.map((item, index) => (
					<CarouselButton
						key={index}
						index={index}
						active={activeItem}
						onClick={(e: any) => handleClick(e, index)}
						type='button'>
						<CarouselButtonDot active={activeItem} />
					</CarouselButton>
				))}
			</CarouselButtons>
		</Section>
	);
};
