import { motion } from "framer-motion";
import { ExternalLink, Folder, Github } from "lucide-react";

const projects = [
  {
    title: "Distributed LLM System",
    tech: ["Scala", "Spark", "AWS EMR", "Lambda", "gRPC"],
    description:
      "Built a distributed text-processing pipeline in Spark (Scala) for encoder-decoder style workflows. Exposed inference via REST and gRPC; deployed on AWS Lambda with Typesafe Config and Logback for structured logging.",
  },
  {
    title: "Interactive Data Visualization Dashboard",
    tech: ["D3.js", "JavaScript", "HTML", "CSS"],
    description:
      "Interactive dashboard for exploring biological datasets and morphogen gradient patterns. Features linked scatter/radar chart views with optimized render logic for smooth performance.",
  },
  {
    title: "Crypto & Stock Market Advisor",
    tech: ["React", "Django", "MongoDB"],
    description:
      "Integrated third-party market data APIs with caching and rate-limit handling. Added compound indexes in MongoDB reducing read latency to under 300ms; wired with GitHub Actions CI.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-heading text-foreground mb-2"
        >
          <span className="font-mono text-primary text-lg mr-2">04.</span>
          Featured Projects
        </motion.h2>
        <div className="w-16 h-0.5 bg-primary mb-12" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_hsl(var(--primary)/0.1)] flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
