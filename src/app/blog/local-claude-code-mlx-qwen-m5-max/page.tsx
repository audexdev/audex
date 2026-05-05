import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Local Claude Code-Compatible Agents on M5 Max",
  description:
    "Preliminary controlled TypeScript benchmark results for a local Anthropic-compatible Claude Code proxy backed by MLX and Qwen3.6.",
};

const mainResults = [
  ["27b-4bit", "11/12", "145.9", "115.5", "370.2", "28.0", "34.1"],
  ["27b-mxfp4", "11/12", "129.4", "110.5", "380.4", "29.1", "27.8"],
  ["27b-nvfp4", "10/12", "119.7", "115.0", "392.3", "27.2", "28.4"],
  ["35b-a3b-4bit", "9/12", "31.4", "28.5", "1256.2", "113.2", "26.8"],
  ["35b-a3b-mxfp4", "9/12", "30.3", "28.0", "1349.1", "113.4", "24.4"],
  ["35b-a3b-nvfp4", "9/12", "36.8", "36.5", "1245.3", "107.9", "25.6"],
];

const taskResults = [
  ["27b-4bit", "3/3", "3/3", "3/3", "2/3"],
  ["27b-mxfp4", "3/3", "3/3", "3/3", "2/3"],
  ["27b-nvfp4", "3/3", "3/3", "3/3", "1/3"],
  ["35b-a3b-4bit", "3/3", "3/3", "3/3", "0/3"],
  ["35b-a3b-mxfp4", "3/3", "3/3", "3/3", "0/3"],
  ["35b-a3b-nvfp4", "3/3", "3/3", "3/3", "0/3"],
];

const mlxArtifacts = [
  [
    "Qwen3.6 27B 4-bit",
    "mlx-community/Qwen3.6-27B-4bit",
    "c000ac2c2057d94be3fa931000c31723aac53282",
  ],
  [
    "Qwen3.6 27B NVFP4",
    "mlx-community/Qwen3.6-27B-nvfp4",
    "4d2ab1eda95532602a12db325c8a3ea9f362a6f5",
  ],
  [
    "Qwen3.6 27B MXFP4",
    "mlx-community/Qwen3.6-27B-mxfp4",
    "b4ac73652af626fd653d0e4fe48a4e9c468a82f6",
  ],
  [
    "Qwen3.6 35B A3B 4-bit",
    "mlx-community/Qwen3.6-35B-A3B-4bit",
    "38740b847e4cb78f352aba30aa41c76e08e6eb46",
  ],
  [
    "Qwen3.6 35B A3B NVFP4",
    "mlx-community/Qwen3.6-35B-A3B-nvfp4",
    "9c1a3a223ddd8a3425212cc421056614f149cf0f",
  ],
  [
    "Qwen3.6 35B A3B MXFP4",
    "mlx-community/Qwen3.6-35B-A3B-mxfp4",
    "833013b27a1f7c6dbb008b55d37c387ea22ea89d",
  ],
];

function hfModelUrl(repo: string) {
  return `https://huggingface.co/${repo}`;
}

function hfRevisionUrl(repo: string, revision: string) {
  return `${hfModelUrl(repo)}/tree/${revision}`;
}

function benchUrl(path: string) {
  return `https://github.com/audexdev/local-agent-bench/blob/main/${path}`;
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8 space-y-5 border-t border-border pt-8">
      <h2 className="text-2xl font-semibold tracking-normal">{title}</h2>
      {children}
    </section>
  );
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[760px] border-collapse text-left text-sm">
        <thead className="bg-muted text-foreground">
          <tr>
            {headers.map((header) => (
              <th key={header} className="border-b border-border px-4 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("-")} className="odd:bg-background even:bg-muted/30">
              {row.map((cell, index) => (
                <td key={`${row[0]}-${index}`} className="border-b border-border px-4 py-3 align-top">
                  {index === 0 ? <code>{cell}</code> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ArtifactTable() {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[760px] border-collapse text-left text-sm">
        <thead className="bg-muted text-foreground">
          <tr>
            {["Artifact", "Repository", "Revision"].map((header) => (
              <th key={header} className="border-b border-border px-4 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mlxArtifacts.map(([artifact, repo, revision]) => (
            <tr key={repo} className="odd:bg-background even:bg-muted/30">
              <td className="border-b border-border px-4 py-3 align-top">
                <code>{artifact}</code>
              </td>
              <td className="border-b border-border px-4 py-3 align-top">
                <ExternalAnchor href={hfModelUrl(repo)}>{repo}</ExternalAnchor>
              </td>
              <td className="border-b border-border px-4 py-3 align-top">
                <ExternalAnchor href={hfRevisionUrl(repo, revision)}>
                  <code>{revision}</code>
                </ExternalAnchor>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ExternalAnchor({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      className="inline-flex items-center gap-1 text-foreground underline underline-offset-4 hover:text-muted-foreground"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
    </a>
  );
}

export default function LocalClaudeCodeMlxQwenM5MaxPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground md:px-12">
      <article className="mx-auto flex w-full max-w-4xl flex-col gap-9">
        <header className="space-y-7">
          <Link className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground" href="/blog">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Blog
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Part 1</Badge>
              <Badge variant="outline">Preliminary</Badge>
              <Badge variant="outline">M5 Max</Badge>
            </div>
            <h1 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
              Benchmarking Local Claude Code-Compatible Agents on M5 Max with MLX and Qwen3.6
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
              A practical local-agent benchmark using a Claude Code-compatible Anthropic API bridge,
              Qwen3.6 MLX artifacts, prompt caching, and held-out TypeScript validation tests.
            </p>
          </div>
        </header>

        <Section id="tldr" title="TL;DR">
          <div className="space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
            <p>
              I built an Anthropic-compatible local proxy for Claude Code and backed it with MLX.
              The proxy used in this benchmark is{" "}
              <ExternalAnchor href="https://github.com/audexdev/anthropic-api-to-mlx">
                anthropic-api-to-mlx
              </ExternalAnchor>{" "}
              at benchmark proxy commit <code>ed74457</code>. The controlled TypeScript benchmark is{" "}
              <ExternalAnchor href="https://github.com/audexdev/local-agent-bench">
                local-agent-bench
              </ExternalAnchor>
              .
            </p>
            <p>
              The main result is practical rather than philosophical: with prompt caching enabled,
              local Claude Code-style agent loops are usable on an M5 Max. In this controlled TypeScript
              benchmark, Qwen3.6 35B A3B 4-bit class artifacts were much faster than dense 27B artifacts,
              with median decode throughput around 108-113 tokens/s versus roughly 27-29 tokens/s for 27B.
            </p>
            <p>
              I would not read this as a model-quality leaderboard. The benchmark has only four tasks,
              three repeats, and one discriminator task. The robust signal is speed and local-agent
              feasibility. The quality signal is included only as context for the pass counts.
            </p>
          </div>
        </Section>

        <Section id="motivation" title="Motivation">
          <div className="space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
            <p>
              Claude Code is a useful interface for coding-agent work, but it expects an Anthropic-style
              HTTP API. MLX gives me a fast local runtime on Apple Silicon, but it does not expose a
              Claude Code-compatible endpoint. The missing piece is a bridge.
            </p>
            <p>
              The goal of this experiment was not to prove that one model is generally smarter than
              another. I wanted to know whether a local M5 Max setup can run the kind of repeated
              read-edit-test loop that Claude Code performs, and what breaks first: throughput, context
              handling, or tool formatting.
            </p>
          </div>
        </Section>

        <Section id="proxy" title="Proxy Architecture">
          <div className="space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
            <p>The path is intentionally simple:</p>
            <pre className="overflow-x-auto rounded-lg border border-border bg-muted p-4 text-xs text-foreground">
{`Claude Code
  -> Anthropic-compatible /v1/messages
  -> anthropic-api-to-mlx
  -> mlx_lm
  -> local MLX model`}
            </pre>
            <p>
              The proxy implements the small subset needed for these experiments: <code>POST /v1/messages</code>,
              streaming responses, <code>POST /v1/messages/count_tokens</code>, model listing, and health checks.
              Tool parsing is best-effort because Qwen does not emit Anthropic-native tool calls. The proxy
              handles common XML and JSON-ish tool-call shapes that appear under Claude Code prompts.
            </p>
            <p>
              Qwen reasoning was enabled with <code>MLX_ENABLE_THINKING=1</code>. The proxy strips{" "}
              <code>&lt;think&gt;...&lt;/think&gt;</code> blocks before returning content to Claude Code,
              because provider-specific reasoning text inside normal content can interfere with the agent loop.
            </p>
          </div>
        </Section>

        <Section id="prompt-cache" title="Prompt Caching">
          <div className="space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
            <p>
              Prompt caching is not a quality feature here. It is an execution feature. Claude Code repeatedly
              sends long, highly overlapping conversations. Without cache reuse, the agent loop becomes painful.
            </p>
            <p>
              The proxy keeps bounded in-memory MLX prompt-cache slots. For each request, it renders the chat
              template with the tokenizer and only accepts a cache hit when the current token IDs start with
              the cached token IDs exactly. The request body remains the source of truth. A cache hit changes
              speed, not semantics.
            </p>
            <p>
              In the run logs, typical completed runs show two initial misses followed by hits for later
              Claude Code turns. The recorded metrics include cache hits and misses, cached/rest token counts,
              prefill throughput, decode throughput, and peak memory.
            </p>
          </div>
        </Section>

        <Section id="setup" title="Hardware and Setup">
          <div className="space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
            <p>
              The benchmark was run locally on an M5 Max system. The agent was Claude Code pointed at the local
              Anthropic-compatible endpoint. The backend was MLX through <code>mlx_lm</code>. The main settings were:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Apple M5 Max with 128 GB unified memory</li>
              <li>macOS 26.3.1 (build 25D771280a)</li>
              <li>Python 3.12.13, MLX 0.31.2, mlx-lm 0.31.3</li>
              <li>Claude Code 2.1.126</li>
              <li>benchmark proxy commit <code>ed74457</code></li>
              <li><code>MLX_ENABLE_THINKING=1</code></li>
              <li><code>PROMPT_CACHE=1</code></li>
              <li><code>MLX_MAX_KV_SIZE=196608</code></li>
              <li><code>MLX_MAX_TOKENS=2048</code> for the first repeat set, then <code>8192</code> for completion repeats</li>
              <li>KV cache quantization was not used in the main matrix</li>
            </ul>
          </div>
        </Section>

        <Section id="artifacts" title="Model Artifacts and Revisions">
          <p className="text-sm leading-7 text-muted-foreground md:text-base">
            Artifact identity matters. The main comparison below is MLX-only, and the revisions are
            recorded so the benchmark can be rerun against the same model artifacts.
          </p>
          <ArtifactTable />
        </Section>

        <Section id="protocol" title="Benchmark Protocol">
          <div className="space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
            <p>
              The benchmark project,{" "}
              <ExternalAnchor href="https://github.com/audexdev/local-agent-bench">
                local-agent-bench
              </ExternalAnchor>
              , is a controlled TypeScript task suite. It is useful for local-agent smoke testing,
              tool behavior, prompt-cache behavior, and throughput. It is not a full coding benchmark.
            </p>
            <p>
              Each Claude Code run works in a worktree under <code>/tmp/bench-work</code> that excludes
              held-out validation tests. Those tests are public in the benchmark repository for reproducibility,
              but hidden from the agent workdir during each run. Evaluation is applied externally from{" "}
              <code>/tmp/bench-eval</code>. Public tests are development feedback for the agent; held-out
              validation tests are the scoring signal.
            </p>
            <p>The recorded fields include:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>public and held-out validation pass/fail</li>
              <li>wall time, turns, and tool calls</li>
              <li>cache hits and misses</li>
              <li>average prefill and decode throughput</li>
              <li>peak memory</li>
            </ul>
          </div>
        </Section>

        <Section id="results" title="Main MLX 4-bit Results">
          <div className="space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
            <p>
              The main matrix covers six MLX model/quant combinations, four TypeScript tasks,
              and three repeats per task, for 72 runs.
            </p>
            <DataTable
              headers={[
                "Model slug",
                "Pass",
                "Avg wall time (s)",
                "Median wall time (s)",
                "Avg prefill (t/s)",
                "Median decode (t/s)",
                "Avg peak memory (GB)",
              ]}
              rows={mainResults}
            />
            <p>
              The speed result is the cleanest signal. The 35B A3B artifacts finished in about 30-37 seconds
              on average, while the 27B artifacts were around 120-146 seconds. Decode throughput was also
              much higher for 35B A3B in this MLX setup.
            </p>
            <p>
              The quality signal is weaker. All models passed tasks 01-03 in all repeats. Task04 dominated
              the pass-rate difference, so I would not use this table to claim a general model-quality ranking.
            </p>
            <DataTable
              headers={["Model slug", "01 Bugfix", "02 Feature", "03 Refactor", "04 From scratch"]}
              rows={taskResults}
            />
          </div>
        </Section>

        <Section id="task04" title="Task04 Failure Analysis">
          <div className="space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
            <p>
              Task04 asks the agent to implement a fixed-window rate limiter. Public tests allowed some
              rolling-window implementations to pass. Held-out validation tests caught the boundary bug.
            </p>
            <p>The wrong implementation pattern was:</p>
            <pre className="overflow-x-auto rounded-lg border border-border bg-muted p-4 text-xs text-foreground">
{`resetAt = nowMs + windowMs`}
            </pre>
            <p>The fixed-window boundary should be computed from the window bucket:</p>
            <pre className="overflow-x-auto rounded-lg border border-border bg-muted p-4 text-xs text-foreground">
{`resetAt = Math.floor(nowMs / windowMs) * windowMs + windowMs`}
            </pre>
            <p>
              This is exactly the kind of bug held-out validation tests are supposed to expose. Public tests
              checked enough behavior for development feedback, but not enough to distinguish rolling-window
              semantics from fixed-window semantics.
            </p>
            <p>
              In this benchmark, 27B variants solved task04 one to two times out of three. The 35B A3B variants
              solved it zero times out of three. That is a useful observation, but it is still only one task.
              I include it to explain the pass counts, not to rank the models.
            </p>
          </div>
        </Section>

        <Section id="limitations" title="Limitations">
          <ul className="list-disc space-y-3 pl-5 text-sm leading-7 text-muted-foreground md:text-base">
            <li>The task count is small: four TypeScript tasks, with one discriminator task.</li>
            <li>Three repeats are better than one, but these results are still preliminary.</li>
            <li>Some run diffs include <code>package-lock.json</code> noise from <code>npm install</code>.</li>
            <li>Tool parsing is best-effort and model-dependent.</li>
            <li>The benchmark uses held-out validation, but it is not designed to support broad quality claims.</li>
            <li>Artifacts must be referenced by repository URL and revision; local directory names are not enough.</li>
            <li>These results should not be used to claim that MXFP4 is generally better than NVFP4.</li>
            <li>KV-cache quantization was intentionally excluded from the main comparison.</li>
          </ul>
        </Section>

        <Section id="reproducibility" title="Reproducibility">
          <div className="space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
            <p>
              The benchmark code, tasks, protocol, and generated summaries are public in{" "}
              <ExternalAnchor href="https://github.com/audexdev/local-agent-bench">
                local-agent-bench
              </ExternalAnchor>
              . The most relevant files are:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <ExternalAnchor href={benchUrl("results/PRIMARY_MATRIX_20260504.md")}>
                  results/PRIMARY_MATRIX_20260504.md
                </ExternalAnchor>
              </li>
              <li>
                <ExternalAnchor href={benchUrl("results/SUMMARY.md")}>
                  results/SUMMARY.md
                </ExternalAnchor>
              </li>
              <li>
                <ExternalAnchor href={benchUrl("BENCH_PROTOCOL.md")}>
                  BENCH_PROTOCOL.md
                </ExternalAnchor>
              </li>
              <li>
                <ExternalAnchor href={benchUrl("eval/run-mlx-4bit-complete-matrix.sh")}>
                  eval/run-mlx-4bit-complete-matrix.sh
                </ExternalAnchor>
              </li>
            </ul>
            <p>
              The proxy source is{" "}
              <ExternalAnchor href="https://github.com/audexdev/anthropic-api-to-mlx">
                anthropic-api-to-mlx
              </ExternalAnchor>
              , and the benchmark proxy commit was{" "}
              <ExternalAnchor href="https://github.com/audexdev/anthropic-api-to-mlx/commit/ed7445716b86faa84b1fef14931a3b2620a595ba">
                ed74457
              </ExternalAnchor>
              .
            </p>
            <pre className="overflow-x-auto rounded-lg border border-border bg-muted p-4 text-xs text-foreground">
{`git clone https://github.com/audexdev/local-agent-bench
cd local-agent-bench
cat BENCH_PROTOCOL.md
cat results/PRIMARY_MATRIX_20260504.md`}
            </pre>
          </div>
        </Section>

        <Section id="conclusion" title="Conclusion">
          <div className="space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
            <p>
              This benchmark answers a narrow practical question: can a local Claude Code-compatible loop run
              comfortably through MLX on an M5 Max? In this setup, yes, as long as prompt caching is working.
            </p>
            <p>
              The main thing I would take from the numbers is speed. Qwen3.6 35B A3B was much faster than
              dense 27B in this local MLX agent workflow, and the difference was large enough to change how
              usable the loop felt. That is the result I am comfortable publishing from this run.
            </p>
          </div>
        </Section>
      </article>
    </main>
  );
}
