import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Development Intern",
    company: "Drishti Software Solutions",
    location: "Kolhapur, India",
    period: "Oct 2022 – Feb 2023",
    bullets: [
      "Built an Oracle Data Integrator ETL pipeline and tuned jobs/flows to improve ingestion throughput by 25%.",
      "Added quantitative analysis features to a Laboratory Information Management System, cutting reporting turnaround by 15%.",
      "Created real-time dashboards in ZKoss so teams could track operational quality metrics without manual reporting.",
    ],
  },
  {
    title: "Full Stack Development Intern",
    company: "Mobileware Technologies Pvt Ltd",
    location: "Mumbai, India",
    period: "Jun 2022 – Jul 2022",
    bullets: [
      "Delivered a CEO-facing analytics dashboard; reduced weekly reporting turnaround time by 30%.",
      "Implemented Spring Boot REST APIs backed by MySQL (CRUD + validation + error handling) for internal enterprise workflows.",
      "Built interactive KPI charts using Angular and Apex Charts to support stakeholder reviews and decision-making.",
    ],
  },
  {
    title: "Back-end Development Intern",
    company: "Cleverground Pvt Ltd",
    location: "Pune, India",
    period: "Jan 2022 – Apr 2022",
    bullets: [
      "Worked on backend services for analytics, live lectures, and notifications using Django and REST APIs.",
      "Triaged production issues and shipped fixes, reducing recurring backend bug reports by 20%.",
      "Updated internal documentation (setup + API notes), helping new developers ramp up faster.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-heading text-foreground mb-2"
        >
          <span className="font-mono text-primary text-lg mr-2">03.</span>
          Work Experience
        </motion.h2>
        <div className="w-16 h-0.5 bg-primary mb-12" />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-primary/20" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background shadow-[0_0_8px_hsl(var(--primary)/0.4)]" />
                <div className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="text-lg font-semibold font-heading text-foreground">{exp.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-primary text-sm mb-3 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    {exp.company} · {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
