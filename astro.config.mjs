import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog'

export default defineConfig({
	integrations: [
		starlight({
			favicon: '/public/favicon.svg',
			plugins: [starlightBlog({
				authors: {
				  santy: {
					name: 'Santy',
					title: 'Council Member',
					picture: 'https://avatars.githubusercontent.com/u/42287552?s=200&u=57760bb0d84f43582421a6e6758d97b39faa0535&v=4',
					url: 'https://github.com/majorsanty',
				  },
				  cyber: {
					name: 'Cybercat5555',
					title: 'Council Member',
					picture: 'https://avatars.githubusercontent.com/u/17956808?v=4',
					url: 'https://github.com/cybercat5555',
				  },
				},
			  })],
			title: 'Shadow Wizards Money Gang',
			social: {
				github: 'https://github.com/Shadow-Wizards-Money-Gang',
				discord: 'https://discord.gg/SqTwySUswU'
			},
			customCss: [
				'./src/styles/custom.css',
			  ],
			sidebar: [
				{
					label: 'Wiki',
					autogenerate: { directory: 'wiki' },
				},
				{
					label: 'Bestiary',
					autogenerate: { directory: 'bestiary' },
				},
			],
		}),
	],
});
