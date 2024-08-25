// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Image, { StaticImageData } from "next/image"

export type TIconTabBlock = {
	imageIcon: string | StaticImageData,
	title: string,
	iconContainerSize?: string,
	className?: string,
}

const IconTabBlock = ({
	imageIcon,
	title,
	iconContainerSize = "w-[80px] h-[80px]",
	className = "",
}: TIconTabBlock) => (
	<div className={`flex items-center p-4 gap-5 rounded-xl drop-shadow bg-white border-l-pale-yellow border-l-[13px] ${className}`}>
		<div className={`flex shrink-0 justify-center items-center ${iconContainerSize}`}>
			{typeof imageIcon === "string" ?
				<Image width={80} height={80} className="m-1 flex-1" src={`/${imageIcon}.png`} alt={title}/>
			:
				<Image className="m-1 flex-1" src={imageIcon} alt={title}/>
			}
		</div>
		<span className="text-[18px] font-semibold">{title}</span>
	</div>
)

export default IconTabBlock