<script lang="ts">
  import { page } from "$app/stores";
  import type { PageData } from "./$types";
  import ArticleContent from "$lib/components/ArticleContent.svelte";

  export let data: PageData;

  function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
</script>

<svelte:head>
  <title>{data.article.title} - Mon Blog</title>
  <meta name="description" content={data.article.title} />
</svelte:head>

<article class="article-detail">
  <div class="article-header">
    <a href="/" class="back-link">← Retour aux articles</a>

    <h1>{data.article.title}</h1>

    <div class="article-meta">
      <div class="meta-item">
        <span class="label">Auteur :</span>
        <span class="value">{data.article.authorName}</span>
      </div>
      <div class="meta-item">
        <span class="label">Publié le :</span>
        <span class="value">{formatDate(data.article.publishedAt)}</span>
      </div>
      {#if data.article.updatedAt !== data.article.createdAt}
        <div class="meta-item">
          <span class="label">Mis à jour le :</span>
          <span class="value">{formatDate(data.article.updatedAt)}</span>
        </div>
      {/if}
    </div>
  </div>

  <div class="article-body">
    <ArticleContent content={data.article.content} />
  </div>

  <div class="article-footer">
    <a href="/" class="back-link">← Retour aux articles</a>
  </div>
</article>

<style>
  .article-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  .article-header {
    margin-bottom: 3rem;
  }

  .back-link {
    display: inline-block;
    color: #2563eb;
    text-decoration: none;
    margin-bottom: 2rem;
    font-size: 0.95rem;
  }

  .back-link:hover {
    text-decoration: underline;
  }

  h1 {
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    color: #111;
  }

  .article-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 1rem 0;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
  }

  .meta-item {
    display: flex;
    gap: 0.5rem;
    font-size: 0.95rem;
  }

  .meta-item .label {
    color: #666;
    font-weight: 500;
  }

  .meta-item .value {
    color: #333;
  }

  .article-body {
    margin: 3rem 0;
    font-size: 1.125rem;
  }

  .article-footer {
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid #e0e0e0;
  }

  @media (max-width: 768px) {
    .article-detail {
      padding: 1rem;
    }

    h1 {
      font-size: 2rem;
    }

    .article-meta {
      flex-direction: column;
      gap: 0.75rem;
    }

    .article-body {
      font-size: 1rem;
    }
  }
</style>
