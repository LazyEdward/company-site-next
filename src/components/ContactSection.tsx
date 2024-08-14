// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Image from "next/image"
import ContactForm from "./ContactForm"

export type TContactSection = {
	imgSrc?: string
}

const ContactSection = ({
	imgSrc = "contact.png"
}: TContactSection) => (
	<>
		<section data-cy="contact-section" className="w-full flex justify-center items-center h-[565px] lg:h-[992px] lg:px-[10vw] overflow-x-auto">
			<section className="relative w-full h-full max-w-[1536px] flex items-center overflow-hidden">
				<div className="relative w-[1000px] h-full flex max-w-full lg:max-w-[1000px]">
					<Image data-cy="contact-section-img" width={1000} height={992} className="object-cover max-w-full lg:max-w-[1000px] rounded-br-[100px] " src={`/${imgSrc}`} alt="Contact Image"/>
				</div>
				<div className="hidden lg:flex items-center absolute top-0 right-0 h-full">
					<ContactForm/>
				</div>
			</section>
		</section>
		<section className="flex flex-col gap-5 lg:hidden bg-white -mt-[186px] mx-[20px] z-[2]">
			<ContactForm/>
		</section>
	</>
)

export default ContactSection