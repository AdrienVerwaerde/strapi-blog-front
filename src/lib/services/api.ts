import type { ArticlesResponse } from '$lib/types/article';

const STRAPI_URL = import.meta.env.STRAPI_URL || 'http://localhost:1337';

export async function fetchArticles(): Promise<ArticlesResponse> {
    const response = await fetch(`${STRAPI_URL}/api/articles`);

    if (!response.ok) {
        throw new Error(`Erreur lors de la récupération des articles: ${response.status}`);
    }

    return await response.json();
}
