import type { PageLoad } from './$types';
import { api } from '$lib/server/strapi';

export const load: PageLoad = async ({ params }) => {
    const artRes = await api(
        `/api/articles?` +
        new URLSearchParams({
            'filters[slug][$eq]': params.slug,
            'publicationState': 'live',
            'fields[0]': 'title',
            'fields[1]': 'slug',
            'fields[2]': 'authorName',
            'fields[3]': 'content',
            'fields[4]': 'documentId',
            'fields[5]': 'createdAt',
            'fields[6]': 'updatedAt',
            'fields[7]': 'publishedAt'
        })
    );
    const artJson = await artRes.json();
    const item = artJson.data?.[0];
    if (!item) return { status: 404 };

    return {
        article: { id: item.id, ...item.attributes },
    };
};
