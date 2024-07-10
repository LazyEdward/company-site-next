// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export const NAV_LINK_STYLE = {
	"default": " ",
	"active": " bg-gradient-to-r from-orange-gradient-st to-orange-gradient-ed inline-block text-transparent bg-clip-text ",
} as const

export type TNavLink = {
	link: string,
	external?: boolean,
	disabled?: boolean,
	children?: ReactNode,
	className?: string,
	activeClassName?: string,
}

const NavLink = ({
	link,
	external = false,
	disabled = false,
	children = "",
	className = NAV_LINK_STYLE.default,
	activeClassName = "",
}: TNavLink) => {
	const currentPath = usePathname();
	const isActive = currentPath === link;

	return (
		<Link
			className={` text-[18px] select-none ${disabled ? "pointer-events-none cursor-auto" : "pointer-events-auto cursor-pointer"} ${isActive && activeClassName ? activeClassName : className}`}
			href={link}
			rel={external ? "noopener noreferrer" : ""}
			target={external ? "_blank" : ""}
		>
			{children}
		</Link>
	)
}

export default NavLink;