import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const featured = {
  title: "Zelyx",
  tag: "Currently Building",
  role: "Co-founder",
  tech: ["FastAPI", "Next.js 15", "React 19", "Postgres", "Docker"],
  desc: "AI proxy and observability platform. Every LLM call routes through Zelyx — giving teams real-time spend tracking, per-key budget caps, and full audit trails without changing a single line of existing code.",
  live: "https://zelyx.app",
  github: null,
};

const projects = [
  {
    num: "01",
    title: "Distributed LLM System",
    tech: ["Scala", "Spark", "AWS EMR", "Lambda", "gRPC"],
    desc: "Distributed text-processing pipeline in Spark (Scala) for encoder-decoder workflows. Inference runs over REST and gRPC, deployed on AWS Lambda with Typesafe Config and Logback for structured logging.",
    tag: "Systems / Cloud",
    accentBg: "#0047FF",
    accentText: "#EEF0FF",
    github: "https://github.com/Abhishek-701/Hybrid-LLM-Gateway-Akka-gRPC-AWS-Bedrock-",
    live: null,
  },
  {
    num: "02",
    title: "Interactive Data Viz Dashboard",
    tech: ["D3.js", "JavaScript", "HTML", "CSS"],
    desc: "Dashboard for exploring biological datasets and morphogen gradient patterns. Features linked scatter/radar chart views with optimized render logic.",
    tag: "Data / Visualization",
    accentBg: "#111111",
    accentText: "#F9F7F2",
    github: "https://github.com/Abhishek-701/Patterns-in-Pattering",
    live: null,
  },
  {
    num: "03",
    title: "Crypto & Stock Market Advisor",
    tech: ["React", "Django", "MongoDB"],
    desc: "Integrated third-party market data APIs with caching and rate-limit handling. Compound indexes in MongoDB reduced read latency to under 300ms.",
    tag: "Full Stack",
    accentBg: "#0047FF",
    accentText: "#EEF0FF",
    github: null,
    live: null,
  },
  {
    num: "04",
    title: "CodeContext MCP",
    tech: ["Python", "tree-sitter", "PostgreSQL", "pgvector", "FastMCP", "watchdog"],
    desc: "A live-indexed codebase context server with an MCP interface. Watches a repo, parses symbols with tree-sitter, and lets LLM agents search code that doesn't fit in context — semantic and exact-match both.",
    tag: "Developer Tools / AI",
    accentBg: "#111111",
    accentText: "#F9F7F2",
    github: "https://github.com/Abhishek-701/codecontext-mcp",
    live: null,
  },
];

const Projects = () => (
  <section id="projects" className="border-t border-[#E8E4D8] py-28 px-6">
    <div className="mx-auto max-w-6xl">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#888880]"
      >
        04 — Projects
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mb-14 font-heading font-extrabold leading-tight text-[#111111]"
        style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
      >
        Things I've{" "}
        <span style={{ color: "#0047FF" }}>built</span>
      </motion.h2>

      {/* Featured — Zelyx */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mb-6 overflow-hidden rounded-2xl border border-[#E8E4D8] bg-white"
      >
        <div className="grid md:grid-cols-2">
          {/* Left — content */}
          <div className="flex flex-col justify-between p-8">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#00C853] px-3 py-0.5 font-mono text-[11px] font-bold uppercase tracking-widest text-white">
                  Live
                </span>
              </div>

              <h3 className="mb-3 font-heading text-3xl font-extrabold text-[#111111]">
                {featured.title}
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-[#555550]">
                {featured.desc}
              </p>

              <div className="mb-8 flex flex-wrap gap-1.5">
                {featured.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#E8E4D8] bg-[#F9F7F2] px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#666660]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={featured.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#0047FF] px-4 py-2 font-mono text-xs font-bold text-white transition-opacity hover:opacity-85"
              >
                Visit zelyx.app <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              {featured.github && (
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#E8E4D8] px-4 py-2 font-mono text-xs font-bold text-[#444440] transition-colors hover:border-[#0047FF]/30"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              )}
            </div>
          </div>

          {/* Right — dashboard screenshot */}
          <div className="relative flex items-center justify-center overflow-hidden border-t border-[#E8E4D8] bg-[#F5F5F3] p-4 md:border-l md:border-t-0">
            <div className="w-full overflow-hidden rounded-lg border border-[#E0DDD6] shadow-lg">
              <div className="flex items-center gap-1.5 border-b border-[#E0DDD6] bg-[#ECEAE4] px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                <span className="ml-2 font-mono text-[10px] text-[#999990]">zelyx.app/overview</span>
              </div>
              <img
                src="/zelyx-dashboard.png"
                alt="Zelyx dashboard overview"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((p, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-[#E8E4D8] bg-white transition-all duration-300 hover:border-[#0047FF]/30 hover:shadow-[0_12px_48px_rgba(0,71,255,0.1)] hover:-translate-y-1"
          >
            {/* Card top */}
            <div
              className="flex items-center justify-between px-6 py-5"
              style={{ backgroundColor: p.accentBg }}
            >
              <span
                className="font-mono text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: p.accentText, opacity: 0.6 }}
              >
                {p.tag}
              </span>
              <div className="flex gap-2.5" style={{ color: p.accentText, opacity: 0.5 }}>
                {p.github ? (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                    <Github className="h-4 w-4" />
                  </a>
                ) : (
                  <Github className="h-4 w-4 opacity-30" />
                )}
                {p.live ? (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <ExternalLink className="h-4 w-4 opacity-30" />
                )}
              </div>
            </div>

            {/* Card body */}
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-1 flex items-start justify-between gap-2">
                <h3 className="font-heading text-lg font-bold leading-snug text-[#111111]">
                  {p.title}
                </h3>
                <ArrowUpRight
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#CCCCCC] transition-colors group-hover:text-[#0047FF]"
                />
              </div>

              <p className="mb-5 flex-1 text-sm leading-relaxed text-[#888880]">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#E8E4D8] bg-[#F9F7F2] px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#666660]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
