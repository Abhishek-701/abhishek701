import { motion } from "framer-motion";

const jobs = [
  {
    role: "Software Development Intern",
    company: "Drishti Software Solutions",
    where: "Kolhapur, India",
    when: "Oct 2022 – Feb 2023",
    bullets: [
      "Built Oracle Data Integrator ETL pipeline, improving ingestion throughput by 25%.",
      "Added quantitative analysis features to LIMS, cutting reporting turnaround by 15%.",
      "Created real-time ZKoss dashboards for operational quality tracking.",
    ],
  },
  {
    role: "Full Stack Development Intern",
    company: "Mobileware Technologies Pvt Ltd",
    where: "Mumbai, India",
    when: "Jun 2022 – Jul 2022",
    bullets: [
      "CEO-facing analytics dashboard reducing weekly reporting time by 30%.",
      "Spring Boot REST APIs with MySQL for enterprise workflows.",
      "KPI charts using Angular and Apex Charts.",
    ],
  },
  {
    role: "Back-end Development Intern",
    company: "Cleverground Pvt Ltd",
    where: "Pune, India",
    when: "Jan 2022 – Apr 2022",
    bullets: [
      "Backend services for analytics, live lectures, and notifications via Django & REST APIs.",
      "Reduced recurring backend bug reports by 20% through production issue triage.",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="py-28 px-6">
    <div className="mx-auto max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 font-heading text-3xl font-bold text-foreground"
      >
        <span className="mr-3 font-mono text-base text-primary">03.</span>
        Work Experience
      </motion.h2>

      <div className="relative border-l border-border pl-8">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative mb-12 last:mb-0"
          >
            {/* Dot */}
            <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />

            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {job.role}
              </h3>
              <span className="shrink-0 font-mono text-xs text-muted-foreground">
                {job.when}
              </span>
            </div>
            <p className="mt-0.5 text-sm text-primary">
              {job.company} · {job.where}
            </p>
            <ul className="mt-3 space-y-2">
              {job.bullets.map((b, j) => (
                <li
                  key={j}
                  className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-1 shrink-0 text-primary">▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
