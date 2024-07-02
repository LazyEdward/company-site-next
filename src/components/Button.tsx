// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ReactNode, MouseEvent, TouchEvent } from "react"

export const ROUND_BUTTON_STYLE = {
	"default": " text-[#FFF] bg-gradient-to-r from-orange-gradient-st to-orange-gradient-ed hover:bg-orange-gradient-st ",
	"bright": " bg-[#F3F3F3] ",
	"frame": " border-[1px] border-default-text text-lg ",
} as const

export type TRoundButton = {
	disabled?: boolean,
	placeholder?: string,
	children?: ReactNode,
	className?: string,
	onClick?: (e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => void
}

const RoundButton = ({
	disabled = false,
	placeholder = "",
	children = "",
	className = ROUND_BUTTON_STYLE.default,
	onClick,
}: TRoundButton) => (
	<button
		disabled={disabled}
		title={placeholder}
		className={`flex w-full h-[54px] truncate justify-center items-center rounded-lg cursor-pointer disabled:cursor-auto disabled:opacity-50 font-semibold select-none ${className}`}
		onClick={disabled ? () => {} : onClick}
	>
		{children}
	</button>
)

export default RoundButton