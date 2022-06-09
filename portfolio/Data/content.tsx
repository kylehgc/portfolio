import { CardData } from '../types'

export const aboutMe: string[] = [
	"I've always had a passion for solving problems, technical and mechanical. I've had many roles in that vein, from developing a paperless filing system to teaching children how to code. I spent the last few years as a bike courier, and while I enjoyed the constant challenge of optimizing routes, I felt unchallenged intellectually. I started coding again and quickly realized that this is what I was missing. I started spending my spare time studying, improving my skills, and helping others online, eventually developing multiple open source personal projects with the aim of becoming a full time software developer.",
	"I've discovered a love for building applications people actively use, leading me to focus on web development, which has the amazing ability to reach everyone. The browser is a fast, efficient and cross platform application that is literally in everyone's pocket. My next discovery was how powerful React is at creating user interfaces. Leaning into React, I quickly realized that the vast majority of errors and pain points come from either lack of documentation or data that isn't always in the structure we expect. Enter: TypeScript!",
	"After getting over the initial pain of having to write extra boilerplate and coercing the compiler to actually run my code I fell in love. Suddenly every function documented itself. Every change I made that had the possibility to create an error was suddenly blowing up warnings all over my codebase. Every difficult-to-learn library suddenly had full typings of all methods, even ones that weren't particularly clear in the documentation. My code was teaching me to be a better programmer while warning me about mistakes I might be making. Typescript still feels a little like cheating to be honest. ",
	"Front end development is limited by two things, your imagination and the data that is available to you. Because of this I've started spending more of my time developing skills for backend. I'd already done multiple fully deployed projects and was comfortable with both Python and Bash. For my last project I leaned into my old love for Python and built a full RESTful API designed for my application.  Being able to craft the data for my application and control exactly how it’s accessed meant that I was now free to do anything. ",
	"So what's next? I'm looking to join a software team where I can find mentorship and feedback on what I know and what I don't know. While I've had incredible feedback and code reviews from very talented developers, I haven't been able to work in an environment where we work as a team to reach goals. I'm excited to solve novel problems and gain the insight that one can only get from working day to day on projects with people who are as deeply committed to their work as I am. ",
]

const quoteBattlerContent = [
	'Quote Battler is a quick fun mobile game that pairs fast reflexes with humorous mismatched quotations.',
	'React application that consumes a public quote API.',
	'Managed complex game state with useReducer and ContextAPI.',
	' Leveraged react drag and drop to create a fast paced and smooth user experience',
]
export const backendTags: Tag[] = [
	{ title: 'Node.js', colorScheme: 'blackAlpha' },
	{ title: 'Python', colorScheme: 'teal' },
	{ title: 'FastApi', colorScheme: 'blue' },
	{ title: 'Bash', colorScheme: 'purple' },
	{ title: 'API', colorScheme: 'red' },
	{ title: 'Typescript', colorScheme: 'orange' },
]

export const frontTags: Tag[] = [
	{ title: 'TypeScript', colorScheme: 'blue' },
	{ title: 'React', colorScheme: 'teal' },
	{ title: 'UX', colorScheme: 'whiteAlpha' },
	{ title: 'Dynamic', colorScheme: 'orange' },
	{ title: 'Design', colorScheme: 'yellow' },
	{ title: 'CSS', colorScheme: 'green' },
]
const hackerNewsContent = [
	'Hacker News Clone is an app developed to learn react and practice consuming an unfriendly API',
	'Learned class components, best practices and lifecycle menthods of react class components',
	'Parsed data from the Hacker News API into a usable format for multiple pages.',
	'Created custom dark mode stylings done entirely in CSS. ',
]
const cbtreeContent = [
	'CBTree is a web application for creating and managing CBT thought records.',
	'The front end is a React TypeScript application with strict typings and numerous custom type guards.',
	'Designed, tested and implemented 14 distinct responsive pages.',
	'Advanced use of custom hooks for API logic, form state logic, theming and authentication.',
	'Implemented full user management scheme with context api, and a custom auth hook backed by JWT.',
	'The back end is a RESTful FastAPI Python CRUD application backed by a document based store.',
]

const yarnContent = [
	'Yarn Inc is a color and font picker tool for creating fasionable websites',
	'Wrote custom functionality that causes Yarn to only give accessible color combinations',
	'Realized pretty early on that best case scenario Yarn would be a poor version of wix and ceased development',
]

export interface Tag {
	title: string
	colorScheme: string
}
export interface heroContent {
	heroMedia: string | JSX.Element
	cardData: CardData
	title: string
	content: string[]
	tags: Tag[]
}
interface Projects {
	[key: string]: Project
}

export interface Project {
	carouselImages: string[]
	heroContent: heroContent
}

const CBTreeImages: string[] = [
	'/CBTreeScreens/BalancedThought.png',
	'/CBTreeScreens/HotThought.png',
	'/CBTreeScreens/Login.png',
	'/CBTreeScreens/Moods.png',
	'/CBTreeScreens/Profile.png',
	'/CBTreeScreens/TextField.png',
	'/CBTreeScreens/ThoughtRecordDisplay.png',
	'/CBTreeScreens/ThoughtRecordTable.png',
]

const quoteBattlerImages: string[] = [
	'/QuoteBattleScreens/abouttoanswer.png',
	'/QuoteBattleScreens/aquestion.png',
	'/QuoteBattleScreens/correct.png',
	'/QuoteBattleScreens/wrong.png',
	'/QuoteBattleScreens/gameover.png',
	'/QuoteBattleScreens/introscreen.png',
	'/QuoteBattleScreens/outoftime.png',
	'/QuoteBattleScreens/unanimatedintro.png',
]
const hackerImages: string[] = [
	'/HackerScreens/darkmodecomments.png',
	'/HackerScreens/lightmodecommentszoom.png',
	'/HackerScreens/darkmodezoom.png',
	'/HackerScreens/lightmodemain.png',
	'/HackerScreens/darkmodemain.png',
	'/HackerScreens/lightmodezoom.png',
	'/HackerScreens/darkmodecommentszoom.png',
]

const yarnImages: string[] = [
	'/YarnScreens/bluecompliment.png',
	'/YarnScreens/colorinsanity.png',
	'/YarnScreens/gogreen.png',
	'/YarnScreens/mehgray.png',
	'/YarnScreens/bluefooter.png',
	'/YarnScreens/okaypastel.png',
	'/YarnScreens/uglyyellow.png',
	'/YarnScreens/wegowhite.png',
]
export const projectCards: CardData[] = [
	{
		title: 'CBTree',
		projectLink: 'projects/cbtree',
		description: cbtreeContent,
		repositoryURL: 'https://github.com/kylehgc/CBTree',
		externalLinkURL: 'https://kylehgc.github.io/CBTree/',
		screenshotSrc: '/emotionScreen.png',
		gradiant: 'linear(to-tr, #011627, gray.400)',
	},
	{
		title: 'Quote Battler',
		projectLink: 'projects/quotebattler',
		description: quoteBattlerContent,
		repositoryURL: 'https://github.com/kylehgc/quote-battler',
		gradiant: 'linear(to-tr, #8a4fff, gray.800)',
		screenshotSrc: '/quoteScreen.png',
		externalLinkURL: 'https://kylehgc.github.io/quote-battler/',
	},
	{
		title: 'Yarn Inc',
		projectLink: 'projects/yarninc',
		description: yarnContent,
		externalLinkURL: 'https://kylehgc.github.io/yarn-inc/',
		repositoryURL: 'https://github.com/kylehgc/yarn-inc',
		gradiant: 'linear(to-tr, green.800, green.200)',
		screenshotSrc: '/yarnInc.png',
	},
	{
		title: 'Hacker News Clone',
		projectLink: 'projects/hackernews',
		description: hackerNewsContent,
		externalLinkURL:
			'https://61f462825f74f9221e946dc0--h-news-clone.netlify.app/',
		repositoryURL: 'https://github.com/kylehgc/hacker-news-clone',
		screenshotSrc: '/hackerNews.png',
		gradiant: 'linear(to-tr, orange.800, orange.200)',
	},
]

export const cbtreeProject: Project = {
	carouselImages: CBTreeImages,
	heroContent: {
		tags: [
			{ title: 'Typescript', colorScheme: 'teal' },
			{ title: 'React', colorScheme: 'blue' },
			{ title: 'Python', colorScheme: 'yellow' },
			{ title: 'FastAPI', colorScheme: 'teal' },
			{ title: 'Restful', colorScheme: 'purple' },
			{ title: 'CRUD', colorScheme: 'gray' },
			{ title: 'Custom Hooks', colorScheme: 'red' },
			{ title: 'Authentication', colorScheme: 'blue' },
			{ title: 'JWT', colorScheme: 'whiteAlpha' },
		],

		title: 'CBtree',
		cardData: projectCards[0],
		content: cbtreeContent,
		heroMedia: '/cbtree.webp',
		//(
		// 	<AspectRatio minW={{ base: '300px', md: '60%' }} ratio={1072 / 1920}>
		// 		<iframe
		// 			title="CBTree explination"
		// 			src="https://www.youtube.com/embed/nypalgwSou0?playlist=nypalgwSou0&autoplay=1&mute=1&loop=1&playsinline=1"
		// 			frameBorder="0"
		// 			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
		// 			allowFullScreen
		// 		/>
		// 	</AspectRatio>
		// ),
	},
}

export const quoteBattlerProject: Project = {
	carouselImages: quoteBattlerImages,
	heroContent: {
		heroMedia: '/quotebattler.gif',
		cardData: projectCards[1],
		title: 'Quote Battler',
		content: quoteBattlerContent,
		tags: [
			{ title: 'React', colorScheme: 'blue' },
			{ title: 'React Drag and Drop', colorScheme: 'red' },
			{ title: 'API', colorScheme: 'blackAlpha' },
			{ title: 'useReducer', colorScheme: 'blue' },
			{ title: 'contextAPI', colorScheme: 'blue' },
		],
	},
}

const yarnIncProject: Project = {
	carouselImages: yarnImages,
	heroContent: {
		title: 'Yarn Inc',
		heroMedia: '/yarninc.gif',
		cardData: projectCards[2],
		tags: [
			{ title: 'React', colorScheme: 'blue' },
			{ title: 'Javascript', colorScheme: 'teal' },
			{ title: 'Acessibility', colorScheme: 'purple' },
			{ title: 'Design', colorScheme: 'whiteAlpha' },
		],
		content: yarnContent,
	},
}
const hackerNewsProject: Project = {
	carouselImages: hackerImages,
	heroContent: {
		cardData: projectCards[3],
		heroMedia: '/hackerNews.png',
		tags: [
			{ title: 'React', colorScheme: 'blue' },
			{ title: 'Class Components', colorScheme: 'yellow' },
			{ title: 'API', colorScheme: 'whiteAlpha' },
			{ title: 'Dark Mode', colorScheme: 'blackAlpha' },
		],
		title: 'Hacker News Clone',
		content: hackerNewsContent,
	},
}

export const Projects: Projects = {
	cbtree: cbtreeProject,
	quotebattler: quoteBattlerProject,
	yarninc: yarnIncProject,
	hackernews: hackerNewsProject,
}
