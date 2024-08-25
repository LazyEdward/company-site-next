// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

"use client"

import { ComponentType, useRef } from "react"
import { Children, ReactNode, useEffect, useState } from "react"
import Swipeable from "@/components/Swipeable";

export type TCarouselControl = {
	currentIndex: number,
	itemCount: number,
	onPrev?: () => void,
	onNext?: () => void,
	onSetCurrentIndex?: (index: number) => void,
}

export type TCarousel = {
	className?: string,
	duration?: number,
	swipeable?: boolean;
	children: ReactNode[],
	count?: number,
	control: ComponentType<TCarouselControl>;
}

const Carousel = ({
	className = "",
	duration = 3000,
	swipeable = true,
	control: Control,
	children
}: TCarousel) => {
	const childCount = Children.count(children);
	const [currentIndex, setCurrentIndex] = useState(0);

	const getCarouselShift = (currentIndex: number) => {
		return childCount > 0 ? -100/childCount * currentIndex : 0
	}

	const onPrev = () => {
		if(currentIndex - 1 < 0){
			setCurrentIndex(childCount - 1)
			return;
		}

		setCurrentIndex(index => index - 1)
	}

	const onNext = () => {
		if(currentIndex + 1 >= childCount){
			setCurrentIndex(0)
			return;
		}

		setCurrentIndex(index => index + 1)
	}

	useEffect(() => {
		setCurrentIndex(0)
	}, [childCount])

	useEffect(() => {
		if(!duration)
			return;

		const transitionIntervral = setInterval(() => {
			if(currentIndex + 1 >= childCount){
				setCurrentIndex(0)
				return;
			}

			setCurrentIndex(index => index + 1)
		}, duration)

    return () => {
      if (transitionIntervral) {
        clearInterval(transitionIntervral);
      }
    };

	}, [duration, currentIndex, childCount])

	return (
		<div className="relative w-full flex flex-col overflow-hidden ">
			<div
				className={`transition-transform ease-in-out duration-500 flex items-center ${className}`}
				style={{"width": `calc(100%*${childCount})`, "transform": `translateX(${getCarouselShift(currentIndex)}%)`}}
			>
				{children}
			</div>
			{childCount > 0 &&
				<Control
						currentIndex={currentIndex}
						itemCount={Children.count(children)}
						onPrev={onPrev}
						onNext={onNext}
						onSetCurrentIndex={(index) => setCurrentIndex(index)}
				/>
			}
			{swipeable && childCount > 0 && 
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