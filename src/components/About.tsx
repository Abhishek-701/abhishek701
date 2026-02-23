import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Trophy } from "lucide-react";

const chips = [
  { icon: MapPin, text: "Chicago, IL" },
  { icon: GraduationCap, text: "MS CS @ UIC" },
  { icon: Briefcase, text: "Open to Opportunities" },
  { icon: Trophy, text: "Soccer · Basketball · Squash" },
];

const About = () => (
  <section id="about" className="py-28 px-6">
    <div className="mx-auto max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 font-heading text-3xl font-bold text-foreground"
      >
        <span className="mr-3 font-mono text-base text-primary">01.</span>
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="space-y-5 text-[15px] leading-relaxed text-muted-foreground"
      >
        <p>
          I'm a Computer Science graduate student at the University of Illinois
          Chicago (GPA: 3.72), driven by a deep interest in scalable systems,
          clean software architecture, and thoughtful engineering.
        </p>
        <p>
          Over three internships across India — spanning full-stack, backend, and
          data engineering — I've built ETL pipelines, CEO-facing dashboards,
          real-time analytics services, and production REST APIs. I thrive at
          the intersection of reliable backend systems and polished user
          experiences.
        </p>
        <p>
          I'm actively seeking Full Stack and Backend Engineering roles,
          particularly those involving microservices, distributed systems, and
          cloud-native platforms.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-8 flex flex-wrap gap-3"
      >
        {chips.map((c) => (
          <span
            key={c.text}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
          >
            <c.icon className="h-3.5 w-3.5 text-primary" />
            {c.text}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default About;
