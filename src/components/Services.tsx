import { motion } from "framer-motion";
import { Code2, Server, Database, Brain } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "End-to-end web apps using React, Spring Boot, Node.js, and RESTful APIs.",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description: "Scalable microservices, API design, and database architecture.",
  },
  {
    icon: Database,
    title: "Data Engineering / ETL",
    description: "Pipelines, dashboards, and data integrations using AWS and Python.",
  },
  {
    icon: Brain,
    title: "AI/ML Integration",
    description: "Embedding LLM capabilities and AWS Bedrock into production workflows.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-heading text-foreground mb-2"
        >
          <span className="font-mono text-primary text-lg mr-2">05.</span>
          What I Can Build For You
        </motion.h2>
        <div className="w-16 h-0.5 bg-primary mb-12" />

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-heading text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
