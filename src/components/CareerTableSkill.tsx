// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { CAREER_SKILLS } from "@/constants/Texts";
import BadgeList from "./BadgeList";

export type TCareerTableSkill = {
	skills: (keyof typeof CAREER_SKILLS)[]
}

const CareerTableSkill = ({
	skills
}: TCareerTableSkill) => (
	<div className="flex flex-wrap w-full lg:w-auto lg:max-w-[400px] gap-3">
		<BadgeList
			className="px-3 min-w-[68px]"
			badges={CAREER_SKILLS}
			badgeList={skills}
			activeBadges={new Set(skills)}
		/>
	</div>
)

export default CareerTableSkill