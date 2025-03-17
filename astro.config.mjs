// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://webtec-2024.github.io/website/',
	base: '/website',
	integrations: [
		starlight({
			title: 'Kursen webtec',
			favicon: 'favicon.png',
			logo: {
				src: './src/assets/leaf_256x256.png',
			},
			customCss: [
				'./src/styles/dbwebb.css',
			],
			editLink: {
				baseUrl: 'https://github.com/webtec-2024/website/tree/main',
			},
			social: {
				github: 'https://github.com/webtec-2024/website',
			},
			head: [
				{
				  tag: 'base',
				  attrs: {
					href: '/website/'
				  }
				}
			],
			sidebar: [
				{
					label: 'Introduktion',
					collapsed: true,
					autogenerate: { directory: 'intro' },
				},
				{
					label: 'Labbmiljö',
					collapsed: true,
					autogenerate: { directory: 'labbmiljo' },
				},
				{
					label: 'Kursrepo',
					collapsed: true,
					autogenerate: { directory: 'kursrepo' },
				},
				{
					label: 'Kursmoment',
					autogenerate: { directory: 'kmom' },
				},
				{
					label: 'Läromaterial',
					collapsed: true,
					autogenerate: { directory: 'laromaterial' },
				},
				{
					label: 'Studieguide',
					collapsed: true,
					autogenerate: { directory: 'studieguide' },
					/* items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],*/
				},
				{
					label: 'Reference',
					collapsed: true,
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
