import Link from "next/link";
import { ArrowLeft, GithubIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const posts = [
  {
    title: "Benchmarking Local Claude Code-Compatible Agents on M5 Max",
    status: "Part 1",
    summary:
      "Preliminary TypeScript benchmark results for an Anthropic-compatible Claude Code proxy backed by MLX and Qwen3.6.",
    slug: "/blog/local-claude-code-mlx-qwen-m5-max",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-10 md:px-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <header className="flex flex-col gap-8 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <Link className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground" href="/">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              audex.dev
            </Link>
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold leading-tight md:text-5xl">Blog</h1>
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                Technical notes from local model testing, Apple Silicon measurements, and audio projects.
              </p>
            </div>
          </div>
          <a
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:bg-accent"
            href="https://github.com/audexdev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon className="h-4 w-4" aria-hidden="true" />
          </a>
        </header>

        <section className="grid gap-4">
          {posts.map((post) => (
            <Link key={post.title} className="group block" href={post.slug}>
              <Card className="rounded-lg bg-muted border-border transition-colors group-hover:bg-accent">
                <CardContent className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-lg font-semibold">{post.title}</h2>
                      <Badge variant="outline">{post.status}</Badge>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">{post.summary}</p>
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground">Read</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
