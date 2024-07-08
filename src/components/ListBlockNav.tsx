// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { TCarouselControl } from "./Carousel";

const ListBlockNav = ({
	currentIndex,
	itemCount,
	onSetCurrentIndex,
}: TCarouselControl) => (
	<div className="flex gap-3 justify-center items-center h-[10px] pt-[52px]">
		{[...Array(itemCount)].map((_,index) => (
			<div
				key={index}
				className={`${index === currentIndex ? "bg-[#9F9F9F]" : "bg-[#E1E1E1]"} cursor-pointer w-[48px] h-[7px]`}
				onClick={onSetCurrentIndex ? () => onSetCurrentIndex(index) : () => {}}
			/>
		))}
	</div>
)

export default ListBlockNav;