// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Image from "next/image"
import { ComponentType } from "react"

export type TIconTextBlock = {
	imageIcon: string,
	title: string,
	content: string,
	iconContainerSize?: string,
	className?: string,
	iconPosition?: 'TOP' | 'LEFT'
}

const IconTextBlock = ({
	imageIcon,
	title,
	content,
	iconContainerSize = "w-[80px] h-[80px]",
	className = "",
	iconPosition = 'TOP'
}: TIconTextBlock) => (
	<div className={`flex ${iconPosition === 'TOP' ? 'flex-col items-center' : ''} gap-5 ${className}`}>
		<div className={`bg-pale-yellow rounded-xl flex shrink-0 justify-center items-center ${iconContainerSize}`}>
			<Image width={80} height={80} className="m-1 flex-1" src={`/${imageIcon}.png`} alt={imageIcon}/>
		</div>
		<div className="flex flex-col gap-5">
			<span className="text-[28px] font-semibold">{title}</span>
			<span className="text-lg">{content}</span>
		</div>
	</div>
)

export default IconTextBlock