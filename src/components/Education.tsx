import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "University of Illinois Chicago",
    degree: "Master of Science in Computer Science",
    gpa: "GPA: 3.72 / 4.00",
    period: "Aug 2024 – May 2026",
  },
  {
    school: "University of Mumbai",
    degree: "Bachelor of Engineering in Computer Engineering",
    gpa: "GPA: 8.81 / 10",
    period: "Aug 2019 – May 2023",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-foreground mb-2"
        >
          <span className="font-mono text-primary text-lg mr-2">04.</span>
          Education
        </motion.h2>
        <div className="w-16 h-0.5 bg-primary mb-12" />

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{edu.school}</h3>
                <p className="text-muted-foreground text-sm">{edu.degree}</p>
                <p className="text-primary text-sm font-mono">{edu.gpa}</p>
                <p className="text-muted-foreground text-xs font-mono mt-1">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
