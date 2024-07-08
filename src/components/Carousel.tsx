// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT


import { ComponentType } from "react"
import { Children, ReactNode, useEffect, useState } from "react"
import Swipeable, { TSwipeControl } from "./Swipeable";

export type TCarouselControl = {
	currentIndex: number,
	itemCount: number,
	onPrev?: () => void,
	onNext?: () => void,
	onSetCurrentIndex?: (index: number) => void,
}

export type TCarousel = {
	className?: string,
	swipeable?: boolean;
	children: ReactNode[],
	control: ComponentType<TCarouselControl>;
}

const Carousel = ({
	className = "",
	swipeable = true,
	control: Control,
	children
}: TCarousel) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const getCarouselShift = (currentIndex: number) => {
		return -100/Children.count(children) * currentIndex
	}

	const onPrev = () => {
		if(currentIndex - 1 < 0){
			setCurrentIndex(Children.count(children) - 1)
			return;
		}

		setCurrentIndex(index => index - 1)
	}

	const onNext = () => {
		if(currentIndex + 1 >= Children.count(children)){
			setCurrentIndex(0)
			return;
		}

		setCurrentIndex(index => index + 1)
	}

	useEffect(() => {
		const transitionIntervral = setInterval(() => {
			if(currentIndex + 1 >= Children.count(children)){
				setCurrentIndex(0)
				return;
			}

			setCurrentIndex(index => index + 1)
		}, 3000)

    return () => {
      if (transitionIntervral) {
        clearInterval(transitionIntervral);
      }
    };

	}, [currentIndex, children])

	return (
		<div className="relative w-full flex flex-col overflow-hidden ">
			<div
				className={`w-[calc(100%*3)] transition-transform ease-in-out duration-500 flex items-center ${className}`}
				style={{"transform": `translateX(${getCarouselShift(currentIndex)}%)`}}
			>
				{children}
			</div>
			<Control
					currentIndex={currentIndex}
					itemCount={Children.count(children)}
					onPrev={onPrev}
					onNext={onNext}
					onSetCurrentIndex={(index) => setCurrentIndex(index)}
			/>
			{swipeable && 
				<Swipeable
					orientation="HORIZONTAL"
					onPrev={onPrev}
					onNext={onNext}
				/>
			}
		</div>
	)
}

export default Carousel