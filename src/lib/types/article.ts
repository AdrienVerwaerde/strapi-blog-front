export interface ArticleContent {
    type: string;
    children: {
        type: string;
        text: string;
    }[];
}

export interface Article {
    id: number;
    documentId: string;
    title: string;
    slug: string;
    content: ArticleContent[];
    authorName: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface ArticlesResponse {
    data: Article[];
}

export interface SingleArticleResponse {
    data: Article;
}
