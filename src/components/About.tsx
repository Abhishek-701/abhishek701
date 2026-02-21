import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Dumbbell } from "lucide-react";

const details = [
  { icon: MapPin, label: "Chicago, IL" },
  { icon: GraduationCap, label: "MS CS @ UIC" },
  { icon: Briefcase, label: "Open to Opportunities" },
  { icon: Dumbbell, label: "Soccer, Basketball, Squash" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-heading text-foreground mb-2"
        >
          <span className="font-mono text-primary text-lg mr-2">01.</span>
          About Me
        </motion.h2>
        <div className="w-16 h-0.5 bg-primary mb-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl mb-10"
        >
          <p>
            I'm a Computer Science graduate student at the University of Illinois Chicago (GPA: 3.72), driven by a deep interest in scalable systems, clean software architecture, and thoughtful engineering.
          </p>
          <p>
            Over three internships across India — spanning full-stack, backend, and data engineering — I've built ETL pipelines, CEO-facing dashboards, real-time analytics services, and production REST APIs. I thrive at the intersection of reliable backend systems and polished user experiences.
          </p>
          <p>
            I'm actively seeking Full Stack and Backend Engineering roles, particularly those involving microservices, distributed systems, and cloud-native platforms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4"
        >
          {details.map((d) => (
            <div
              key={d.label}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-sm text-muted-foreground"
            >
              <d.icon className="w-4 h-4 text-primary" />
              {d.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
