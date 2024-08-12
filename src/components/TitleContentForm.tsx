// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

"use client"

import { MouseEvent, ReactNode, TouchEvent } from "react"
import RoundButton, { ROUND_BUTTON_STYLE } from "@/components/RoundButton"
import ArrowForward from "@/icons/ArrowForward"

export type TTitleContentForm = {
	title: string,
	buttonText: string
	secondaryButtonText?: string
	submitAction?: (e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => void
	secondarySubmitAction?: (e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => void
	formContainerStyle?: string
	titleStyle?: string
	buttonStyle?: string
	children: ReactNode,
}

const TitleContentForm = ({
	title,
	buttonText,
	secondaryButtonText = "",
	submitAction,
	secondarySubmitAction,
	formContainerStyle = "",
	titleStyle = "",
	buttonStyle = "w-full",
	children = null,
}: TTitleContentForm) => (
	<section className={`flex flex-col gap-5 ${formContainerStyle}`}>
		<span className={`font-semibold ${titleStyle}`}>
			{title}
		</span>
		{children}
		<div className={`${secondarySubmitAction ? "flex items-center gap-6" : ""} ${buttonStyle}`}>
			<RoundButton hoverText={buttonText} onClick={submitAction}>
				<span className="pr-1">{buttonText}</span>
				<ArrowForward/>
			</RoundButton>
			{secondarySubmitAction && 
				<RoundButton className={ROUND_BUTTON_STYLE.bright} hoverText={secondaryButtonText} onClick={secondarySubmitAction}>
					{secondaryButtonText}
				</RoundButton>
			}
		</div>
	</section>
)

export default TitleContentForm