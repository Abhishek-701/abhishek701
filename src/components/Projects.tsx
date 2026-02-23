import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Distributed LLM System",
    tech: ["Scala", "Spark", "AWS EMR", "Lambda", "gRPC"],
    desc: "Distributed text-processing pipeline in Spark (Scala) for encoder-decoder workflows. Exposed inference via REST and gRPC; deployed on AWS Lambda with Typesafe Config and Logback.",
  },
  {
    title: "Interactive Data Viz Dashboard",
    tech: ["D3.js", "JavaScript", "HTML", "CSS"],
    desc: "Dashboard for exploring biological datasets and morphogen gradient patterns. Features linked scatter/radar chart views with optimized render logic.",
  },
  {
    title: "Crypto & Stock Market Advisor",
    tech: ["React", "Django", "MongoDB"],
    desc: "Integrated third-party market data APIs with caching and rate-limit handling. Compound indexes in MongoDB reduced read latency to under 300ms.",
  },
];

const Projects = () => (
  <section id="projects" className="py-28 px-6">
    <div className="mx-auto max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 font-heading text-3xl font-bold text-foreground"
      >
        <span className="mr-3 font-mono text-base text-primary">04.</span>
        Featured Projects
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 hover:glow-sm"
          >
            <div className="mb-4 flex items-center justify-between">
              <Folder className="h-8 w-8 text-primary/60" />
              <div className="flex gap-3 text-muted-foreground">
                <Github className="h-4 w-4 transition-colors group-hover:text-primary" />
                <ExternalLink className="h-4 w-4 transition-colors group-hover:text-primary" />
              </div>
            </div>

            <h3 className="mb-2 font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
              {p.title}
            </h3>
            <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-primary/8 px-2.5 py-0.5 font-mono text-[11px] text-primary/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
