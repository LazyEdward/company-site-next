// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

"use client"

import { ReactNode, MouseEvent, TouchEvent } from "react"

export const ROUND_BUTTON_STYLE = {
	"default": " h-[54px] text-[#FFF] bg-gradient-to-r from-orange-gradient-st to-orange-gradient-ed hover:from-orange-gradient-st hover:to-orange-gradient-st ",
	"bright": " h-[54px] bg-[#F3F3F3] ",
	"frame": " h-[41px] border-[1px] border-default-text text-lg ",
} as const

export type TRoundButton = {
	disabled?: boolean,
	hoverText?: string,
	children?: ReactNode,
	className?: string,
	onClick?: (e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => void
}

const RoundButton = ({
	disabled = false,
	hoverText = "",
	children = "",
	className = ROUND_BUTTON_STYLE.default,
	onClick,
}: TRoundButton) => (
	<button
		disabled={disabled}
		title={hoverText}
		className={`flex w-full truncate justify-center items-center rounded-lg cursor-pointer disabled:cursor-auto disabled:opacity-50 font-semibold select-none ${className}`}
		onClick={disabled ? () => {} : onClick}
	>
		{children}
	</button>
)

export default RoundButton