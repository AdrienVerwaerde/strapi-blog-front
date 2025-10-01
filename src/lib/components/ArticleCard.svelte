<script lang="ts">
  import type { Article } from "$lib/types/article";

  export let article: Article;

  function extractText(content: Article["content"]): string {
    return content
      .map((block) => block.children.map((child) => child.text).join(" "))
      .join(" ");
  }

  function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
</script>

<article class="article-card">
  <h2>
    <a href="/articles/{article.documentId}">{article.title}</a>
  </h2>

  <div class="article-meta">
    <span class="author">Par {article.authorName}</span>
    <span class="date">{formatDate(article.publishedAt)}</span>
  </div>

  <div class="article-excerpt">
    {extractText(article.content).substring(0, 200)}...
  </div>

  <a href="/articles/{article.documentId}" class="read-more"> Lire la suite → </a>
</article>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #333;
  }

  .error {
    background-color: #fee;
    border: 1px solid #fcc;
    padding: 1rem;
    border-radius: 4px;
    color: #c33;
  }

  .no-articles {
    text-align: center;
    color: #666;
    font-style: italic;
  }

  .articles-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .article-card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 1.5rem;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }

  .article-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .article-card h2 {
    margin: 0 0 0.75rem 0;
    font-size: 1.75rem;
  }

  .article-card h2 a {
    color: #2563eb;
    text-decoration: none;
  }

  .article-card h2 a:hover {
    text-decoration: underline;
  }

  .article-meta {
    display: flex;
    gap: 1rem;
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 1rem;
  }

  .article-excerpt {
    color: #444;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .read-more {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
  }

  .read-more:hover {
    text-decoration: underline;
  }
</style>
