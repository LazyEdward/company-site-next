// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

"use client"

import { ChangeEvent } from "react"

export type TLabelInput = {
	disabled?: boolean,
	multiLine?: boolean,
	value: string | number,
	label: string,
	inputType?: "text" | "email" | "number" | "password",
	onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const LabelInput = ({
	disabled = false,
	multiLine = false,
	value,
	label,
	inputType = "text",
	onChange,
}: TLabelInput) => (
	<div className={`flex flex-col w-full truncate`}>
		<span className={`w-full pb-2 font-semibold truncate `}>{label}</span>
		{multiLine ? 
				<textarea
					className={`w-full outline-none resize-none border-[#C5E0FF] border-[1px] text-sm h-[93px] lg:h-[77px] p-2 rounded-lg`}
					disabled={disabled}
					placeholder={label}
					value={value}
					title={label}
					onChange={disabled ? () => {} : onChange}
				/>
			:
				<input
					className={`w-full outline-none border-[#C5E0FF] border-[1px] text-sm h-[60px] p-2 rounded-lg`}
					disabled={disabled}
					placeholder={label}
					title={label}
					value={value}
					type={inputType}
					onChange={disabled ? () => {} : onChange}
				/>
		}
	</div>
)

export default LabelInput