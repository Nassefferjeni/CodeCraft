import { writable, get } from 'svelte/store';

// SnippetStore
// Code Snippet
// Title, Code, Language, Favorite
export const snippetStore = writable<CodeSnippet[]>([]);

// addSnippet
export function addSnippet(input: CodeSnippetInput) {
	let snippets = get(snippetStore); // $snippetStore -> listen to changes to the value of snippetStore
	snippetStore.update(() => {
		return [{ ...input, favorite: false }, ...snippets];
	});
}

// deleteSnippet
export function deleteSnippet(index: number) {
	let snippets = get(snippetStore); // $snippetStore -> listen to changes to the value of snippetStore
	snippetStore.update(() => {
		return snippets.filter((_, i) => i !== index);
	});
}

// toggle Favorite
export function toggleFavorite(index: number) {
	let snippets = get(snippetStore); // $snippetStore -> listen to changes to the value of snippetStore
	snippetStore.update(() => {
		return snippets.map((snippet, i) =>
			i === index ? { ...snippet, favorite: !snippet.favorite } : snippet
		);
	});
}
