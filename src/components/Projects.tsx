import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Distributed LLM System",
    tech: ["Scala", "Spark", "AWS EMR", "Lambda", "gRPC"],
    desc: "Distributed text-processing pipeline in Spark (Scala) for encoder-decoder workflows. Exposed inference via REST and gRPC; deployed on AWS Lambda with Typesafe Config and Logback.",
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

      <div className="grid gap-6 md:grid-cols-3">
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
