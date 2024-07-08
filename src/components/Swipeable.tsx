// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { DragEvent, useState } from "react";

export type TSwipeControl = {
	minimalOffset?: number,
	orientation: 'HORIZONTAL' | 'VERTICAL',
	onPrev: () => void,
	onNext: () => void,
}

const Swipeable = ({
	minimalOffset = 100,
	orientation,
	onPrev,
	onNext,
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
	
	const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
		setStartPos(orientation === 'VERTICAL' ? e.clientY : e.clientX)
  };

	const handleDrag = (e: DragEvent<HTMLDivElement>) => {

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
			tabIndex={1}
			draggable
			className="z-[2] absolute top-0 left-0 w-full h-full select-none"
			onDragStart={handleDragStart}
			onDrag={handleDrag}
			onDragEnd={() => setStartPos(-1)}
		/>
	)
}

export default Swipeable;