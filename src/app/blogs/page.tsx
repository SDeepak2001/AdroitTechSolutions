import Link from "next/link";

type Post = {
  title: string;
  date: string;
  source: string;
  href: string;
  summary: string;
};

const posts: Post[] = [
  {
    title: "NVIDIA unveils next-gen GPU platform focused on AI inference efficiency",
    date: "Aug 2025",
    source: "Industry",
    href: "https://www.nvidia.com/",
    summary:
      "The new architecture targets lower latency and power per token, with optimized transformer kernels and memory pipelines for LLMs.",
  },
  {
    title: "OpenAI ships multi-modal assistant features for enterprise workflows",
    date: "Aug 2025",
    source: "OpenAI",
    href: "https://openai.com/",
    summary:
      "Updates make it easier to blend text, image, and structured tools in a single flow, with expanded governance controls.",
  },
  {
    title: "AWS expands Bedrock & Q integrations for GenAI governance",
    date: "Jul 2025",
    source: "AWS",
    href: "https://aws.amazon.com/",
    summary:
      "New controls for safety, cost attribution, and enterprise connectors reduce friction for production GenAI deployments.",
  },
  {
    title: "Microsoft previews next wave of Copilot extensibility",
    date: "Jul 2025",
    source: "Microsoft",
    href: "https://www.microsoft.com/",
    summary:
      "Deeper plugin model and orchestration features help teams turn internal systems into natural-language copilots.",
  },
  {
    title: "Google ships vector search updates across Vertex AI",
    date: "Jun 2025",
    source: "Google Cloud",
    href: "https://cloud.google.com/",
    summary:
      "Faster hybrid search and guardrails improve retrieval quality for RAG while reducing infrastructure overhead.",
  },
  {
    title: "Apple focuses on on-device AI performance in latest silicon",
    date: "Jun 2025",
    source: "Apple",
    href: "https://www.apple.com/",
    summary:
      "New neural blocks and memory bandwidth targets cut energy cost per inference for private, offline experiences.",
  },
  {
    title: "Meta advances open-weights research with safety tooling",
    date: "May 2025",
    source: "Meta",
    href: "https://ai.facebook.com/",
    summary:
      "Improved evaluations and distribution tooling aim to make open models easier to adopt responsibly.",
  },
  {
    title: "GitHub introduces policy-aware CI for secure supply chains",
    date: "May 2025",
    source: "GitHub",
    href: "https://github.com/",
    summary:
      "Build policies, provenance, and SBOM integration move into the default developer workflow to reduce risk.",
  },
  {
    title: "Snowflake adds native feature stores for ML pipelines",
    date: "Apr 2025",
    source: "Snowflake",
    href: "https://www.snowflake.com/",
    summary:
      "Tighter online/offline parity simplifies production ML with lower operational overhead.",
  },
  {
    title: "Cloudflare rolls out global vector cache for RAG",
    date: "Apr 2025",
    source: "Cloudflare",
    href: "https://www.cloudflare.com/",
    summary:
      "Edge caching for embeddings and retrieved chunks reduces tail latency for AI assistants worldwide.",
  },
];

export const metadata = {
  title: "Blogs & Tech News | Adroit Tech Solutions",
  description:
    "Curated tech news and insights across AI, cloud, data and developer platforms.",
};

export default function BlogsPage() {
  return (
    <>
      <header className="bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-black">Latest in Tech</h1>
          <p className="mt-3 text-neutral-700 max-w-3xl">
            Curated news and product updates across AI, cloud, data and developer platforms.
          </p>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs rounded-full bg-neutral-100 px-2 py-1 text-neutral-600">
                    {p.source}
                  </span>
                  <time className="text-xs text-neutral-500">{p.date}</time>
                </div>
                <h2 className="mt-4 text-lg font-semibold text-neutral-900">{p.title}</h2>
                <p className="mt-2 text-sm text-neutral-600">{p.summary}</p>
                <Link
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-sky-700 hover:underline"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
