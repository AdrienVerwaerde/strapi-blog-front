import type { ArticlesResponse, Article } from '$lib/types/article';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

/**
 * Récupère la liste des articles depuis l'API Strapi.
 * @returns Une promesse qui résout en un objet ArticlesResponse contenant la liste des articles.
 * @throws Si l'API Strapi renvoie une erreur, une erreur est levée avec le code d'état HTTP.
 */
export async function fetchArticles(): Promise<ArticlesResponse> {
    const response = await fetch(`${STRAPI_URL}/api/articles`);

    if (!response.ok) {
        throw new Error(`Erreur lors de la récupération des articles: ${response.status}`);
    }

    return await response.json();
}


/**
 * Récupère un article depuis l'API Strapi.
 * @param {string} documentId - L'identifiant unique de l'article.
 * @returns Une promesse qui résout en un objet Article contenant les informations de l'article.
 * @throws Si l'API Strapi renvoie une erreur, une erreur est levée avec le code d'état HTTP.
 */
export async function fetchArticleByDocumentId(documentId: string): Promise<Article> {
    const response = await fetch(`${STRAPI_URL}/api/articles/${documentId}`);

    if (!response.ok) {
        throw new Error(`Erreur lors de la récupération de l'article: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
}
