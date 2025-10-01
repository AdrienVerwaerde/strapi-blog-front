import { fetchArticleByDocumentId } from '$lib/services/api';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    try {
        const article = await fetchArticleByDocumentId(params.documentId);

        if (!article) {
            throw error(404, {
                message: 'Article non trouvé'
            });
        }

        return {
            article
        };
    } catch (err) {
        console.error('Erreur de chargement de l\'article:', err);
        throw error(404, {
            message: 'Article non trouvé'
        });
    }
};
