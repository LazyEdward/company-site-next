// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

"use client"

import RoundButton, { ROUND_BUTTON_STYLE } from "@/components/RoundButton"
import { CAREER_DATA, CAREER_HEADER, CAREER_SKILLS, TCareer } from "@/constants/Texts"
import ArrowForward from "@/icons/ArrowForward"
import { useState } from "react"
import CareerTableLocation from "./CareerTableLocation"
import CareerTableSkill from "./CareerTableSkill"

type TCareerInteractable = {
	skillsExpand?: boolean,
	locationExpand?: boolean,
} & TCareer

const CareerTable = () => {
	const [careerData, setCareerData] = useState<TCareerInteractable[]>([...CAREER_DATA])

	const handleExpand = (key: string, type: 'skillsExpand' | 'locationExpand') => {
		let index = careerData.findIndex(data => data.role.title === key)

		if(index === -1)
			return

		let newData = JSON.parse(JSON.stringify(careerData))
		newData[index][type] = !newData[index][type]

		setCareerData(newData)
	}

	return (
		<section className="w-full flex flex-1 justify-center items-center max-h-auto lg:max-h-[992px] px-5 lg:px-[12vw] overflow-hidden lg:overflow-x-auto">
			<table className="flex flex-1 lg:table lg:table-auto w-full h-full overflow-hidden lg:overflow-x-auto border-collapse">
				<thead className="hidden lg:table-header-group text-left">
					<tr>
						<th className="font-semibold text-lg border-0">{CAREER_HEADER.role}</th>
						<th className="font-semibold text-lg border-0">{CAREER_HEADER.skills}</th>
						<th className="font-semibold text-lg border-0">{CAREER_HEADER.location}</th>
					</tr>
				</thead>
				<tbody className="w-full flex flex-col gap-6 lg:table-row-group border-t border-[#BBB]">
					{careerData.map(data => (
						<tr key={data.role.title} className="flex flex-col gap-6 lg:table-row border-b border-[#BBB]">
							<td className="lg:table-cell lg:align-top py-10 pr-4 lg:pr-0 border-0">
								<div className="flex flex-col w-full lg:w-auto lg:max-w-[534px]">
									<section className={`flex flex-col gap-5 lg:whitespace-pre-wrap`}>
										<span className="text-[28px] font-semibold">
											{data.role.title}
										</span>
										<span className="text-lg">{data.role.content}</span>
									</section>
									<div className={`flex lg:hidden flex-col lg:gap-6 pt-10`}>
										<span
											className="font-semibold cursor-pointer border-b border-[#BBB]"
											onClick={() => handleExpand(data.role.title, 'skillsExpand')}
										>
												{`> ${CAREER_HEADER.skills}`}
										</span>
										<div className={`${!!data.skillsExpand ? "w-full max-h-[50vh] overflow-auto " : "max-h-0 overflow-hidden "} mt-5 transition-[max-height] ease-in-out duration-200`}>
											<CareerTableSkill
												skills={data.skills}
											/>
										</div>
									</div>
									<div className={`flex lg:hidden flex-col lg:gap-6 pt-5`}>
										<span
											className="font-semibold cursor-pointer border-b border-[#BBB]"
											onClick={() => handleExpand(data.role.title, 'locationExpand')}
										>
												{`> ${CAREER_HEADER.location}`}
										</span>
										<div className={`${!!data.locationExpand ? "w-full max-h-[50vh] overflow-auto " : "max-h-0 overflow-hidden "} mt-5 transition-[max-height] ease-in-out duration-200`}>
											<CareerTableLocation
												locations={data.locations}
											/>
										</div>
									</div>
									<div className={`flex items-center gap-3 lg:gap-6 pt-5`}>
										<RoundButton
											className={`max-w-[200px] ${ROUND_BUTTON_STYLE.default}`}
											hoverText="APPLY NOW"
										>
											<span className="pr-1">APPLY NOW</span>
											<ArrowForward/>
										</RoundButton>
										<RoundButton
											className={`max-w-[200px] ${ROUND_BUTTON_STYLE.bright}`}
											hoverText="LEARN MORE"
										>
											LEARN MORE
										</RoundButton>
									</div>
								</div>
							</td>
							<td className="hidden lg:table-cell lg:align-top py-10 lg:pr-4 pr-0 border-0">
								<CareerTableSkill
									skills={data.skills}
								/>
							</td>
							<td className="hidden lg:table-cell lg:align-top py-10 lg:pr-4 pr-0 border-0">
								<CareerTableLocation
									locations={data.locations}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	)
}

export default CareerTable