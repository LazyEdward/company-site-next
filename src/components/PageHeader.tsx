// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { PAGE_HEADERS, TPageHeader } from "@/constants/Texts"
import Image from "next/image"
import PageDefaultImage from "../../public/page_default.png"

const PageHeader = ({
	pathName
}:{
	pathName: TPageHeader
}) => (
	<div className="relative flex justify-center items-center w-full h-[407px]">
		<div className="absolute top-0 left-0 w-full h-full">
			<Image className="w-full h-full object-cover" src={PageDefaultImage} alt="Page Default"/>
		</div>
		<div className="flex flex-col px-5 max-w-[80%] lg:max-w-[40%] items-center text-center text-white z-[2]">
			<span className=" font-semibold text-[48px] lg:text-[64px]">{PAGE_HEADERS[pathName].title}</span>
			<span className="text-lg">{PAGE_HEADERS[pathName].descriptions}</span>
		</div>
	</div>
)

export default PageHeader