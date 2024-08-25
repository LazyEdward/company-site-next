// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

"use client"

import { ReactNode, MouseEvent, TouchEvent } from "react"

export const BADGE_STYLE = {
	"default": " h-[32px] text-[#9F9F9F]",
	"active": " h-[32px] bg-pale-yellow ",
	"extentsion": " h-[32px] text-default-text text-sm ",
} as const

export type TBadge = {
	active?: boolean,
	interactive?: boolean,
	hoverText?: string,
	children?: ReactNode,
	className?: string,
	onClick?: (e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => void
}

const Badge = ({
	active = false,
	interactive = false,
	hoverText = "",
	children = "",
	className = "",
	onClick,
}: TBadge) => (
	<button
		title={hoverText}
		className={`flex truncate justify-center items-center rounded-xl font-semibold select-none ${interactive ? "cursor-pointer" : ""} ${active ? BADGE_STYLE.active : BADGE_STYLE.default} ${className}`}
		onClick={interactive ? onClick : () => {}}
	>
		{children}
	</button>
)

export default Badge