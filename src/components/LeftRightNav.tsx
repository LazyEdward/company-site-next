// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

"use client"

import ChveonLeft from "@/icons/ChveonLeft";
import { TCarouselControl } from "@/components/Carousel";
import ChveonRight from "@/icons/ChveonRight";

const LeftRightNav = ({
	currentIndex,
	itemCount,
	onPrev,
	onNext,
}: TCarouselControl) => (
	<div
		className="z-[3] absolute top-0 left-0 w-full h-full touch-none select-none"
	>
		{currentIndex !== 0 &&
			<div className="absolute top-1/2 left-0 -translate-y-1/2 text-black cursor-pointer" onClick={onPrev}>
				<ChveonLeft/>
			</div>
		}
		{currentIndex !== itemCount - 1 &&
			<div className="absolute top-1/2 right-0 -translate-y-1/2 text-black cursor-pointer" onClick={onNext}>
				<ChveonRight/>
			</div>
		}
	</div>
)

export default LeftRightNav;