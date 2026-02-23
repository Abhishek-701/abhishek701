import { motion } from "framer-motion";
import { Code2, Server, Database, Brain } from "lucide-react";

const items = [
  { icon: Code2, title: "Full Stack Development", text: "End-to-end web apps using React, Spring Boot, Node.js, and RESTful APIs." },
  { icon: Server, title: "Backend Engineering", text: "Scalable microservices, API design, and database architecture." },
  { icon: Database, title: "Data Engineering / ETL", text: "Pipelines, dashboards, and data integrations using AWS and Python." },
  { icon: Brain, title: "AI/ML Integration", text: "Embedding LLM capabilities and AWS Bedrock into production workflows." },
];

const Services = () => (
  <section id="services" className="py-28 px-6">
    <div className="mx-auto max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 font-heading text-3xl font-bold text-foreground"
      >
        <span className="mr-3 font-mono text-base text-primary">05.</span>
        What I Can Build For You
      </motion.h2>

      <div className="grid gap-5 sm:grid-cols-2">
        {items.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-1.5 font-heading text-base font-semibold text-foreground">
              {s.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {s.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
