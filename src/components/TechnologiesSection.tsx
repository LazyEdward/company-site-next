// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

"use client"

import { TECHNOLOGY_CATEGORY, TECHNOLOGY_LIST_IMAGE, TECHNOLOGY_LIST_OPTIONS } from "@/constants/Texts"
import { useState } from "react"
import Carousel from "@/components/Carousel"
import Image from "next/image"
import LeftRightNav from "@/components/LeftRightNav"
import Badge from "@/components/Badge"
import BadgeList from "./BadgeList"

const TechnologiesSection = () => {

	const [activeSection, setActiveSection] = useState<keyof typeof TECHNOLOGY_CATEGORY>("")

	return (
		<>
			<section className="px-4 xl:px-[10vw]">
				<div className="hidden xl:flex flex-wrap gap-3">
					<BadgeList
						badges={TECHNOLOGY_CATEGORY}
						badgeList={TECHNOLOGY_LIST_OPTIONS}
						activeBadges={activeSection}
						onElementClick={(item) => setActiveSection(item as keyof typeof TECHNOLOGY_CATEGORY)}
					/>
				</div>
				<div className="flex xl:hidden flex-wrap gap-3">
					<BadgeList
						badges={TECHNOLOGY_CATEGORY}
						badgeList={TECHNOLOGY_LIST_OPTIONS}
						activeBadges={activeSection}
						defaultShownItems={6}
						onElementClick={(item) => setActiveSection(item as keyof typeof TECHNOLOGY_CATEGORY)}
					/>
				</div>
			</section>
			<div className="h-[10px] lg:h-[60px]"></div>
			<section className="hidden xl:flex flex-wrap px-[10vw] gap-8 justify-center">
				{TECHNOLOGY_CATEGORY[activeSection].item.map(item => (
					<div key={item} className={`flex shrink-0 justify-center items-center w-[223px] h-[160px]`}>
						<Image src={TECHNOLOGY_LIST_IMAGE[item]} alt={item}/>
					</div>
				))}
			</section>
			<section className="flex xl:hidden flex-col px-4 gap-8">
				<Carousel
					className="h-[100px]"
					duration={5000}
					control={LeftRightNav}
				>
					{TECHNOLOGY_CATEGORY[activeSection].item.map(item => (
						<div key={item} className={`w-full flex justify-center items-center px-4 h-[100px]`}>
							<div className={`w-[calc(100%-80px)] flex justify-center items-center `}>
								<Image className="m-1" src={TECHNOLOGY_LIST_IMAGE[item]} alt={item}/>
							</div>
						</div>
					))}
				</Carousel>
			</section>
		</>
	)
}

export default TechnologiesSection