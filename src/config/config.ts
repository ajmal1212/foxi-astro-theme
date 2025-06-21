// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
	twitterHandle?: string
	schemaOrg?: Record<string, any>
}

export const configData: Config = {
	siteTitle: 'Codenetic – Complete Digital Solutions for Every Industry',
	siteDescription:
		'From CRM and WhatsApp automation to full digital marketing tools, Codenetic helps businesses grow through smart technology.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Codenetic. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true,
	twitterHandle: '@codenetic',
	schemaOrg: {
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Codenetic Tech Solutions",
		"url": "https://codenetic.tech",
		"logo": "https://codenetic.tech/logo.svg",
		"description": "Codenetic offers CRM systems, WhatsApp business integration, and marketing automation tools tailored for every industry.",
		"founder": {
			"@type": "Person",
			"name": "Ajmal"
		}
	}
}
