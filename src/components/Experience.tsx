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
  <section id="experience" className="border-t border-[#E8E4D8] py-28 px-6">
    <div className="mx-auto max-w-6xl">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#888880]"
      >
        03 — Experience
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mb-14 font-heading font-extrabold leading-tight text-[#111111]"
        style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
      >
        Where I've{" "}
        <span style={{ color: "#0047FF" }}>worked</span>
      </motion.h2>

      <div className="space-y-5">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group grid grid-cols-[72px_1fr] overflow-hidden rounded-2xl border border-[#E8E4D8] bg-white transition-all duration-300 hover:border-[#0047FF]/30 hover:shadow-[0_8px_40px_rgba(0,71,255,0.08)]"
          >
            {/* Number column */}
            <div className="flex items-start justify-center border-r border-[#E8E4D8] pt-8 transition-colors group-hover:bg-[#0047FF] group-hover:border-[#0047FF]">
              <span
                className="font-heading text-3xl font-extrabold text-[#E8E4D8] transition-colors group-hover:text-white"
                style={{ lineHeight: 1 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Content column */}
            <div className="p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#111111]">
                    {job.role}
                  </h3>
                  <p className="mt-0.5 text-sm font-semibold" style={{ color: "#0047FF" }}>
                    {job.company}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="rounded-full border border-[#E8E4D8] bg-[#F9F7F2] px-3 py-1 font-mono text-[11px] font-medium text-[#888880]">
                    {job.when}
                  </span>
                  <span className="font-mono text-[11px] text-[#BBBBBB]">
                    {job.where}
                  </span>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {job.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-sm leading-relaxed text-[#666660]"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: "#0047FF" }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
