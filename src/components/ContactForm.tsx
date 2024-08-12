// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

"use client"

import { useState } from "react"
import TitleContentForm from "@/components/TitleContentForm"
import LabelInput from "@/components/LabelInput"

const ContactForm = () => {
	const [company, setCompany] = useState("")
	const [name, setName] = useState("")
	const [phone, setPhone] = useState("")
	const [email, setEmail] = useState("")
	const [projectDetail, setProjectDetail] = useState("")
	const [acceptPolicy, setAcceptPolicy] = useState(false)

	const handleSubmitForm = () => {
		console.log(
			company,
			name,
			phone,
			email,
			projectDetail,
			acceptPolicy,
		)
	}

	return (
		<TitleContentForm
			title={`Connect With Your
Next Great Hire Today!`}
			buttonText="GET CONSULTATION"
			formContainerStyle = "p-5 bg-white lg:rounded-tl-[100px] lg:h-[879px] lg:p-[0px] lg:pr-2 lg:pl-[113px] lg:py-[100px] lg:z-[2]"
			titleStyle = "text-[36px] lg:text-[46px] lg:pb-[20px] lg:whitespace-pre-wrap "
			buttonStyle = "w-full lg:w-[310px]"
			submitAction={handleSubmitForm}
		>
			<div className="w-full flex gap-8 flex-col">
				<div className="w-full flex flex-col gap-8 lg:flex-row">
					<div className="w-full lg:w-1/2">
						<LabelInput
							value={company}
							label="Company"
							onChange={(e) => setCompany(e.target.value)}
						/>
					</div>
					<div className="w-full lg:w-1/2">
						<LabelInput
							value={name}
							label="Your Name"
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
				</div>
				<div className="w-full flex flex-col gap-8 lg:flex-row">
					<div className="w-full lg:w-1/2">
						<LabelInput
							value={phone}
							label="Phone Number"
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
					<div className="w-full lg:w-1/2">
						<LabelInput
							inputType="email"
							value={email}
							label="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
				</div>
				<div className="w-full">
					<LabelInput
						multiLine
						value={projectDetail}
						label="Project Detail"
						onChange={(e) => setProjectDetail(e.target.value)}
					/>
				</div>
				<div className="w-full flex gap-5">
					<input
						className="pt-2 w-[24px] h-[24px] flex rounded-none accent-current color-default-text"
						title="Accept Policy"
						type="checkbox"
						checked={acceptPolicy}
						onChange={() => setAcceptPolicy(!acceptPolicy)}
					/>
					<span className="flex flex-col">
						{`By sending this form I confirm that I have read and accept the`}
						<span className="font-semibold">{`Privacy Policy`}</span>
					</span>
				</div>
			</div>
		</TitleContentForm>
	)
}

export default ContactForm