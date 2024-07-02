// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import ArrowDown from "@/icons/ArrowDown"
import Facebook from "@/icons/Facebook"
import Instagram from "@/icons/Instagram"
import LinkedIn from "@/icons/LinkedIn"
import Twitter from "@/icons/Twitter"
import YouTube from "@/icons/YouTube"

export const TOP_BAR_LINKS = [
	{
		displayText: "How to start",
		link: "/get-started",
		icon: undefined
	},
	{
		displayText: "Services",
		link: "/services",
		icon: <ArrowDown className="text-default-text"/>
	},
	{
		displayText: "Technologies",
		link: "/technologies",
		icon: <ArrowDown className="text-default-text"/>
	},
	{
		displayText: "Careers",
		link: "/careers",
		icon: undefined
	},
] as const

export const FOOTER_LINKS = [
	{
		title: "Company",
		links: [
			{
				displayText: "About Us",
				link: "#",
			},
			{
				displayText: "Success Stories",
				link: "#",
			},
			{
				displayText: "Privacy Policy",
				link: "#",
			},
			{
				displayText: "Terms & Conditions",
				link: "#",
			},
			{
				displayText: "Contact Us",
				link: "#",
			},
		]
	},
	{
		title: "Services",
		links: [
			{
				displayText: "Hire Permanent Staff",
				link: "#",
			},
			{
				displayText: "Staff Augmentation",
				link: "#",
			},
			{
				displayText: "Software Outsourcing",
				link: "#",
			},
			{
				displayText: "Build Remote Office",
				link: "#",
			},
		]
	},
	{
		title: "How to Start",
		links: [
			{
				displayText: "You Asked",
				link: "#",
			},
			{
				displayText: "We Proceed",
				link: "#",
			},
			{
				displayText: "Negotiate",
				link: "#",
			},
			{
				displayText: "You Get",
				link: "#",
			},
		]
	},
] as const

export const MEDIA_LINKS = [
	{
		displayText: "Facebook",
		link: "https://www.facebook.com/",
		icon: <Facebook className="text-default-text"/>
	},
	{
		displayText: "Instagram",
		link: "https://www.instagram.com/",
		icon: <Instagram className="text-default-text"/>
	},
	{
		displayText: "LinkedIn",
		link: "https://www.linkedin.com/",
		icon: <LinkedIn className="text-default-text"/>
	},
	{
		displayText: "Twitter",
		link: "https://twitter.com/",
		icon: <Twitter className="text-default-text"/>
	},
	{
		displayText: "YouTube",
		link: "https://www.youtube.com/",
		icon: <YouTube className="text-default-text"/>
	},
] as const
