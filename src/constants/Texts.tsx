// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Ask from "@/icons/Ask"
import Negotiate from "@/icons/Negotiate"
import Proceed from "@/icons/Proceed"
import Reward from "@/icons/Reward"

export const PAGE_HEADERS = {
	"/get-started": {
		title: "How to start",
		descriptions: "We specialize in helping you build a team of expert developers.",
	},
	"/services": {
		title: "Our Services",
		descriptions: "We specialize in helping you build a team of expert developers.",
	},
	"/technologies": {
		title: "Technologies",
		descriptions: "We specialize in helping you build a team of expert developers.",
	},
	"/careers": {
		title: "Careers",
		descriptions: "Do you want to learn more about Courtney? Our team is looking for people who want to work on interesting international projects, develop and learn new skills, and share what they've learned with others.",
	},
	"/contact-us": {
		title: "Contact Us",
		descriptions: "We specialize in helping you build a team of expert developers.",
	},
	"/not-exist": {
		title: "404",
		descriptions: "Page Not Found",
	},
} as const

export const HOME_SOLUTIONS = [
	{
		path: "architect",
		title: "Architect your Solution",
		content: `Our team in on your operational, technological, and strategic challenges through an in-depth understanding of your
business. We design a strategic roadmap to guide your result-oriented goals.`,
	},
	{
		path: "engineer",
		title: "Engineer your Solution",
		content: `We promptly put together your nearshore engineering dream team to fulfill your specific requirements. We create
the most elegant solution for your difficulties by combining our deep tech expertise, Top 1% Tech Talent, and
industry-specific experience.`,
	},
	{
		path: "re-engineer",
		title: "ReEngineer your Business Process",
		content: `Bolster by our team, your digital transformation swiftly gains speed and evolves into a digital acceleration. This
process places the foundation for a more efficient and strong business that can meet demands at scale.`,
	},
]

export const HOME_START = [
	{
		icon: <Ask className="text-white"/>,
		text: "YOU ASK",
	},
	{
		icon: <Proceed className="text-white"/>,
		text: "WE PROCEED",
	},
	{
		icon: <Negotiate className="text-white"/>,
		text: "Negotiate",
	},
	{
		icon: <Reward className="text-white"/>,
		text: "YOU GET",
	},
]

export type TPageHeader = keyof typeof PAGE_HEADERS