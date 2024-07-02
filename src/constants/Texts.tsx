// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

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
} as const

export type TPageHeader = keyof typeof PAGE_HEADERS