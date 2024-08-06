// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

"use client"

import { PointerEvent, useState } from "react";

export type TSwipeControl = {
	minimalOffset?: number,
	orientation: 'HORIZONTAL' | 'VERTICAL',
	onPrev: () => void,
	onNext: () => void,
	showLeftButton?: boolean,
	showRightButton?: boolean,
}

const Swipeable = ({
	minimalOffset = 100,
	orientation,
	onPrev,
	onNext,
	showLeftButton = false,
	showRightButton = false,
}: TSwipeControl) => {

	const [startPos, setStartPos] = useState(-1);
	
	const activateSwipe = (offset: number) => {
		if(offset > minimalOffset){
			onNext()
			setStartPos(-1)
		}
		else if(offset < -minimalOffset){
			onPrev()
			setStartPos(-1)
		}
	}

	const handlePointerStart = (e: PointerEvent<HTMLDivElement>) => {
		setStartPos(orientation === 'VERTICAL' ? e.clientY : e.clientX)
  };

	const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
		if(startPos !== -1){
			switch(orientation){
				case "HORIZONTAL":
					activateSwipe(e.clientX - startPos)
					break;

				case "VERTICAL":
					activateSwipe(e.clientY - startPos)
				break;
			}
		}
  };

	return (
		<div
			className="z-[2] absolute top-0 left-0 w-full h-full touch-none select-none"
			onPointerDown={handlePointerStart}
			onPointerMove={handlePointerMove}
			onPointerUp={() => setStartPos(-1)}
		/>
	)
}

export default Swipeable;