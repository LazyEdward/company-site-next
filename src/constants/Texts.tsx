// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Ask from "@/icons/Ask"
import Negotiate from "@/icons/Negotiate"
import Proceed from "@/icons/Proceed"
import Reward from "@/icons/Reward"

import ReactLogo from "../../public/react-logo.png"
import AngularLogo from "../../public/angular-logo.png"
import NextLogo from "../../public/next-logo.png"
import NodejsLogo from "../../public/nodejs-logo.png"

import FrontendSpecialized from "../../public/Specialized/frontend.png"
import FullstackSpecialized from "../../public/Specialized/fullstack.png"
import UiUxSpecialized from "../../public/Specialized/ui-ux.png"
import QASpecialized from "../../public/Specialized/qa.png"
import DesignerSpecialized from "../../public/Specialized/designer.png"
import DatabaseSpecialized from "../../public/Specialized/database.png"
import AngularSpecialized from "../../public/Specialized/angular.png"
import DevopsSpecialized from "../../public/Specialized/devops.png"
import PHPSpecialized from "../../public/Specialized/php.png"
import WordpressSpecialized from "../../public/Specialized/wordpress.png"
import MobileSpecialized from "../../public/Specialized/mobile.png"
import AiMlSpecialized from "../../public/Specialized/ai-ml.png"
import DataScienceSpecialized from "../../public/Specialized/data-science.png"
import ManagersSpecialized from "../../public/Specialized/managers.png"
import AnalysisSpecialized from "../../public/Specialized/analysis.png"
import InfoSecuritySpecialized from "../../public/Specialized/info-scur.png"
import SecuritySpecialized from "../../public/Specialized/security.png"
import IosAndroidSpecialized from "../../public/Specialized/ios-android.png"
import SolutionSpecialized from "../../public/Specialized/solution.png"
import TeamLeadSpecialized from "../../public/Specialized/team-lead.png"
import GOSpecialized from "../../public/Specialized/go.png"

import AndroidTechnologies from "../../public/Technologies/android.png";
import AngularTechnologies from "../../public/Technologies/angular.png";
import CSharpTechnologies from "../../public/Technologies/c-sharp.png";
import CssTechnologies from "../../public/Technologies/css.png";
import CPlusPlusTechnologies from "../../public/Technologies/c-plus-plus.png";
import DjangoTechnologies from "../../public/Technologies/django.png";
import ETechnologies from "../../public/Technologies/e.png";
import ExpressTechnologies from "../../public/Technologies/express.png";
import FlutterTechnologies from "../../public/Technologies/flutter.png";
import GoTechnologies from "../../public/Technologies/go.png";
import HadoopTechnologies from "../../public/Technologies/hadoop.png";
import HtmlTechnologies from "../../public/Technologies/html.png";
import IonicTechnologies from "../../public/Technologies/ionic.png";
import IosTechnologies from "../../public/Technologies/ios.png";
import JavaTechnologies from "../../public/Technologies/java.png";
import JsTechnologies from "../../public/Technologies/js.png";
import KotlinTechnologies from "../../public/Technologies/kotlin.png";
import LaravelTechnologies from "../../public/Technologies/laravel.png";
import MariadbTechnologies from "../../public/Technologies/mariadb.png";
import MongodbTechnologies from "../../public/Technologies/mongodb.png";
import MssqlTechnologies from "../../public/Technologies/mssql.png";
import MysqlTechnologies from "../../public/Technologies/mysql.png";
import NodeTechnologies from "../../public/Technologies/node.png";
import OpenCvTechnologies from "../../public/Technologies/open-cv.png";
import OracleTechnologies from "../../public/Technologies/oracle.png";
import PhpTechnologies from "../../public/Technologies/php.png";
import PostgresqlTechnologies from "../../public/Technologies/postgresql.png";
import PowerBiTechnologies from "../../public/Technologies/power-bi.png";
import pythonTechnologies from "../../public/Technologies/python.png";
import RTechnologies from "../../public/Technologies/r.png";
import ReactTechnologies from "../../public/Technologies/react.png";
import ReactNativeTechnologies from "../../public/Technologies/react-native.png";
import RedisTechnologies from "../../public/Technologies/redis.png";
import SpringTechnologies from "../../public/Technologies/spring.png";
import SymfonyTechnologies from "../../public/Technologies/symfony.png";
import VuejsTechnologies from "../../public/Technologies/vuejs.png";

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
] as const

export const HOME_EXPERTSES = [
	{
		path: "teams",
		title: "Dedicated Teams",
		content: `Find your next team member`,
	},
	{
		path: "augmentation",
		title: "Staff Augmentation",
		content: `Build a distributed development team`,
	},
	{
		path: "outsourcing",
		title: "Software Outsourcing",
		content: `End-to-End Software Development
Outsourcing Solutions`,
	},
	{
		path: "remote-office",
		title: "Remote Office",
		content: `Open your own remote development
center and grow your business`,
	},
] as const

export const HOME_SPECIALIZED = [
	[
		{
			name: "frontend",
			src: FrontendSpecialized,
			title: "Frontend Engineers",
		},
		{
			name: "fullstack",
			src: FullstackSpecialized,
			title: "Fullstack Engineers",
		},
		{
			name: "ui-ux",
			src: UiUxSpecialized,
			title: "UI/UX Engineers",
		},
		{
			name: "qa",
			src: QASpecialized,
			title: "QA Engineers",
		},
		{
			name: "designer",
			src: DesignerSpecialized,
			title: "Product Designer",
		},
		{
			name: "database",
			src: DatabaseSpecialized,
			title: "Database admin",
		},
	],
	[
		{
			name: "angular",
			src: AngularSpecialized,
			title: "Angular Developers",
		},
		{
			name: "devops",
			src: DevopsSpecialized,
			title: "DevOps + DevSecOps Engineers",
		},
		{
			name: "php",
			src: PHPSpecialized,
			title: "PHP Developers",
		},
		{
			name: "wordpress",
			src: WordpressSpecialized,
			title: "Wordpress CMS Developers",
		},
		{
			name: "mobile",
			src: MobileSpecialized,
			title: "Mobile App Developers",
		},
	],
	[
		{
			name: "ai-ml",
			src: AiMlSpecialized,
			title: "AI and ML Engineers Deep Lerning/Machine Vision/NLP",
		},
		{
			name: "data-science",
			src: DataScienceSpecialized,
			title: "Data Scientist / Data Engineers",
		},
		{
			name: "managers",
			src: ManagersSpecialized,
			title: "Project Managers",
		},
		{
			name: "analysis",
			src: AnalysisSpecialized,
			title: "Business Analyst",
		},
		{
			name: "info-scur",
			src: InfoSecuritySpecialized,
			title: "Information Scurity Engineers",
		},
	],
	[
		{
			name: "security",
			src: SecuritySpecialized,
			title: "Application Security Engineers",
		},
		{
			name: "ios-android",
			src: IosAndroidSpecialized,
			title: "IOS and Android Developers",
		},
		{
			name: "solution",
			src: SolutionSpecialized,
			title: "Solution Architects",
		},
		{
			name: "team-lead",
			src: TeamLeadSpecialized,
			title: "Tech Leads / Team Leads",
		},
		{
			name: "go",
			src: GOSpecialized,
			title: "Golang Dev",
		},
	],
] as const

export const HOME_TECH = [
	{
		name: "react-logo",
		src: ReactLogo,
	},
	{
		name: "angular-logo",
		src: AngularLogo,
	},
	{
		name: "next-logo",
		src: NextLogo,
	},
	{
		name: "nodejs-logo",
		src: NodejsLogo,
	},
] as const

export const HOME_START = [
	{
		icon: <Ask className="text-white" />,
		text: "YOU ASK",
	},
	{
		icon: <Proceed className="text-white" />,
		text: "WE PROCEED",
	},
	{
		icon: <Negotiate className="text-white" />,
		text: "Negotiate",
	},
	{
		icon: <Reward className="text-white" />,
		text: "YOU GET",
	},
] as const

export const HOW_TO_START_PROCESSES = [
	{
		path: "request",
		title: "01. Request",
		content: `Tell us more about your
requirements and technical needs`,
	},
	{
		path: "interview",
		title: "02. Interview",
		content: `You interview candidates. Average 2
interviews to hire.`,
	},
	{
		path: "hire",
		title: "03. Hire",
		content: `You choose who to hire, and we
handle all the paperwork.`,
	},
] as const

export const HOW_TO_START_REASONS = [
	"Talent shortage",
	"Lack of Expertise",
	"Quick Kick-Off",
	"Cost Optimization",
	"Talent Accessibility",
	"Administrative Hassle",
] as const

export const SERVICES = [
	{
		path: "teams",
		title: "Dedicated Teams",
		content: `Building an extended team with Courtney is just like opening
your own remote development center, but without the hassle.`,
	},
	{
		path: "augmentation",
		title: "Staff Augmentation",
		content: `IT Staff Augmentation is a service designed to add extra talent to
your team on an on-demand basis. This allows businesses to
immediately find the right fit for hard-to-fill or temporary
positions, which boosts the scalability and efficiency of project
development.`,
	},
	{
		path: "outsourcing",
		title: "Software Outsourcing",
		content: `Today, organizations all over the world deal with software
outsourcing companies to have access to experienced
software engineers with a variety of tech expertise ranging
from user experience design to blockchain consulting.`,
	},
	{
		path: "remote-office",
		title: "Remote Office",
		content: `Courtney is a trustworthy partner that can help you open your own
remote development center and grow your business from Sri Lanka
and United Kingdom.
`,
	},
] as const

export const TECHNOLOGY_LIST_IMAGE = {
	"android": AndroidTechnologies,
	"angular": AngularTechnologies,
	"c-sharp": CSharpTechnologies,
	"css": CssTechnologies,
	"c-plus-plus": CPlusPlusTechnologies,
	"django": DjangoTechnologies,
	"e": ETechnologies,
	"express": ExpressTechnologies,
	"flutter": FlutterTechnologies,
	"go": GoTechnologies,
	"hadoop": HadoopTechnologies,
	"html": HtmlTechnologies,
	"ionic": IonicTechnologies,
	"ios": IosTechnologies,
	"java": JavaTechnologies,
	"js": JsTechnologies,
	"kotlin": KotlinTechnologies,
	"laravel": LaravelTechnologies,
	"mariadb": MariadbTechnologies,
	"mongodb": MongodbTechnologies,
	"mssql": MssqlTechnologies,
	"mysql": MysqlTechnologies,
	"node": NodeTechnologies,
	"open-cv": OpenCvTechnologies,
	"oracle": OracleTechnologies,
	"php": PhpTechnologies,
	"postgresql": PostgresqlTechnologies,
	"power-bi": PowerBiTechnologies,
	"python": pythonTechnologies,
	"r": RTechnologies,
	"react": ReactTechnologies,
	"react-native": ReactNativeTechnologies,
	"redis": RedisTechnologies,
	"spring": SpringTechnologies,
	"symfony": SymfonyTechnologies,
	"vuejs": VuejsTechnologies,
} as const

export const TECHNOLOGY_CATEGORY = {
	"": {
		name: "All",
		item: [
			"js",
			"react",
			"vuejs",
			"e",
			"html",
			"css",

			"node",
			"java",
			"python",
			"php",
			"c-sharp",
			"c-plus-plus",

			"laravel",
			"symfony",
			"django",
			"express",
			"spring",
			"ios",

			"react-native",
			"flutter",
			"kotlin",
			"ionic",
			"mysql",
			"mssql",

			"postgresql",
			"mariadb",
			"mongodb",
			"redis",
			"oracle",
			"go",

			"angular",
			"android",
			"r",
			"hadoop",
			"power-bi",
			"open-cv",
		]
	},
	"frontend": {
		name: "Frontend",
		item: [
			"js",
			"react",
			"vuejs",
			"e",
			"html",
			"css",
		]
	},
	"backend": {
		name: "Backend",
		item: [
			"node",
			"java",
			"python",
			"php",
			"c-sharp",
			"c-plus-plus",

			"go",

			"r",
		]
	},
	"frameworks": {
		name: "Frameworks",
		item: [
			"react",
			"vuejs",
			"e",

			"laravel",
			"symfony",
			"django",
			"express",
			"spring",

			"react-native",
			"flutter",
			"ionic",

			"angular",
			"android",
			"hadoop",
		]
	},
	"mobile-apps": {
		name: "Mobile Apps",
		item: [
			"ios",

			"react-native",
			"flutter",
			"kotlin",
			"ionic",

			"angular",
			"android",
		]
	},
	"database": {
		name: "Database",
		item: [
			"mysql",
			"mssql",

			"postgresql",
			"mariadb",
			"mongodb",
			"redis",
			"oracle",
		]
	},
	"google": {
		name: "Google",
		item: [
			"flutter",
			"kotlin",

			"go",

			"angular",
			"android",
		]
	},
	"data-science": {
		name: "Data Science",
		item: [
			"python",

			"r",
			"hadoop",
			"power-bi",
			"open-cv",
		]
	},
	"machine-learning": {
		name: "Machine Learning",
		item: [
			"python",

			"r",
			"hadoop",
			"power-bi",
			"open-cv",
		]
	},
	"devops": {
		name: "DevOps",
		item: [
		]
	},
	"cms": {
		name: "CMS",
		item: [
		]
	},
	"ec": {
		name: "ECommerce",
		item: [
		]
	},
	"security": {
		name: "Security",
		item: [
		]
	},
} as const

export const TECHNOLOGY_LIST_OPTIONS: (keyof typeof TECHNOLOGY_CATEGORY)[] = [
	"",
	"frontend",
	"backend",
	"frameworks",
	"mobile-apps",
	"database",
	"google",
	"data-science",
	"machine-learning",
	"devops",
	"cms",
	"ec",
	"security",
]

export type TPageHeader = keyof typeof PAGE_HEADERS