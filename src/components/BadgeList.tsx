// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

"use client"

import { useState } from "react"
import Badge, { BADGE_STYLE } from "./Badge"

export type TBadgeList = {
	badges: Record<string, string | {name: string}>,
	badgeList: (keyof Record<string, string | {name: string}>)[],
	activeBadges?: string | Set<String> | null,
	defaultShown?: boolean,
	defaultShownItems?: number,
	className?: string,
	onElementClick?: (key: string) => void
}

const BadgeList = ({
	badges,
	badgeList,
	activeBadges=null,
	defaultShown = false,
	defaultShownItems = 0,
	className="px-2 min-w-[68px]",
	onElementClick,
}: TBadgeList) => {

	const [showAll, setShowAll] = useState(defaultShown)

	return (
		<>
			{showAll || defaultShownItems < 1 ? 
					badgeList.map(item => (
						<Badge
							key={item}
							interactive
							active={typeof activeBadges === "string" ? activeBadges === item : activeBadges?.has(item)}
							hoverText={typeof badges[item] === "string" ? badges[item] : badges[item].name}
							className={className}
							onClick={onElementClick ? () => onElementClick(item) : () => {}}
						>
							{typeof badges[item] === "string" ? badges[item] : badges[item].name}
						</Badge>
					))
				:
					badgeList.slice(0, defaultShownItems).map(item => (
						<Badge
							key={item}
							interactive
							active={typeof activeBadges === "string" ? activeBadges === item : activeBadges?.has(item)}
							hoverText={typeof badges[item] === "string" ? badges[item] : badges[item].name}
							className={className}
							onClick={onElementClick ? () => onElementClick(item) : () => {}}
						>
							{typeof badges[item] === "string" ? badges[item] : badges[item].name}
						</Badge>
					))	
			}
			{defaultShownItems > 0 &&
				<Badge
					interactive
					hoverText={showAll ? "... less" : "... more"}
					className={`${BADGE_STYLE.extentsion} ${className}`}
					onClick={() => setShowAll(!showAll)}
				>
					{showAll ? "... less" : "... more"}
				</Badge>
			}
		</>
	)

}

export default BadgeList