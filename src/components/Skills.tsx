import { motion } from "framer-motion";

const categories: Record<string, string[]> = {
  Languages: ["Java", "Python", "JavaScript (ES6)", "TypeScript", "SQL", "HTML5", "CSS"],
  Frameworks: ["Spring Boot", "React", "Node.js", "Django", "REST APIs", "GraphQL"],
  Databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase Firestore"],
  "Cloud & DevOps": ["AWS (S3, Lambda, EMR, Bedrock)", "Docker", "Git", "CI/CD (GitHub Actions)"],
  Testing: ["JUnit", "PyTest", "Unit Testing", "Integration Testing", "API Testing"],
};

const primary = new Set(["Java", "Spring Boot", "React", "AWS (S3, Lambda, EMR, Bedrock)"]);

const Skills = () => (
  <section id="skills" className="py-28 px-6">
    <div className="mx-auto max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 font-heading text-3xl font-bold text-foreground"
      >
        <span className="mr-3 font-mono text-base text-primary">02.</span>
        Technical Skills
      </motion.h2>

      <div className="space-y-8">
        {Object.entries(categories).map(([cat, skills], i) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-primary/70">
              {cat}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className={`rounded-full px-3 py-1 font-mono text-xs transition-colors ${
                    primary.has(s)
                      ? "bg-primary/15 text-primary border border-primary/25"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
