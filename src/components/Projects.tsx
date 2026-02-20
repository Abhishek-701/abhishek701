import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Distributed LLM System",
    tech: ["Scala", "Spark", "AWS EMR", "Lambda", "gRPC"],
    description:
      "Built a distributed text-processing pipeline in Spark to run encoder–decoder style workflows in parallel. Exposed inference via REST and gRPC, deployed on AWS Lambda with structured config and logging.",
  },
  {
    title: "Interactive Data Visualization Dashboard",
    tech: ["D3.js", "JavaScript", "HTML", "CSS"],
    description:
      "Built an interactive D3 dashboard for exploring biological datasets with linked views (scatter plots + radar charts) that stay in sync. Optimized render logic for smooth interaction under heavy use.",
  },
  {
    title: "Crypto & Stock Market Advisor",
    tech: ["React", "Django", "MongoDB"],
    description:
      "Integrated third-party market data APIs with caching and rate-limit handling. Built a normalization layer for portfolio analytics, optimized MongoDB queries to under 300ms, and wired CI with GitHub Actions.",
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
          className="text-3xl font-bold text-foreground mb-2"
        >
          <span className="font-mono text-primary text-lg mr-2">03.</span>
          Projects
        </motion.h2>
        <div className="w-16 h-0.5 bg-primary mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs text-muted-foreground">
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
