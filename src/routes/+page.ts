import type { PageLoad } from './$types';

export const load = (() => {
	return {
		snippets: [
			{
				title: 'Hello World',
				language: 'HTML',
				code: '<div>Hello world</div>',
				favorite: false
			},
			{
				title: 'Hello World 2',
				language: 'typescript',
				code: `console.log('hello world')`,
				favorite: false
			}
		]
	};
}) satisfies PageLoad;
