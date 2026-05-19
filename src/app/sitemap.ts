import type { MetadataRoute } from "next";

const baseUrl = "https://www.audex.dev";
const articleUpdatedAt = new Date("2026-05-05T00:00:00+09:00");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: articleUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: articleUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/local-claude-code-mlx-qwen-m5-max`,
      lastModified: articleUpdatedAt,
      changeFrequency: "yearly",
      priority: 0.9,
    },
  ];
}
