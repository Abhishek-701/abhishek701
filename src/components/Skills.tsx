import { motion } from "framer-motion";

const skills = {
  Languages: ["Java", "Python", "JavaScript (ES6)", "TypeScript", "SQL", "HTML5", "CSS"],
  Frameworks: ["React", "Node.js", "Django", "Spring Boot", "REST APIs", "GraphQL"],
  Databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase Firestore"],
  "Cloud & DevOps": ["AWS (S3, Lambda, EMR, Bedrock)", "Docker", "Git", "CI/CD (GitHub Actions)"],
  Testing: ["JUnit", "PyTest", "Unit Testing", "Integration Testing", "API Testing"],
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-foreground mb-2"
        >
          <span className="font-mono text-primary text-lg mr-2">01.</span>
          Technical Skills
        </motion.h2>
        <div className="w-16 h-0.5 bg-primary mb-12" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} variants={item}>
              <h3 className="font-mono text-primary text-sm mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-md font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
