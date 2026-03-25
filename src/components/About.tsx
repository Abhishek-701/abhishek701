import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Trophy } from "lucide-react";

const info = [
  { icon: MapPin, label: "Location", value: "Chicago, IL" },
  { icon: GraduationCap, label: "Education", value: "MS CS @ UIC · 3.72 GPA" },
  { icon: Briefcase, label: "Status", value: "Open to Opportunities" },
  { icon: Trophy, label: "Outside Work", value: "Soccer · Basketball · Squash" },
];

const About = () => (
  <section id="about" className="border-t border-[#E8E4D8] py-28 px-6">
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-16 md:grid-cols-[1fr_360px]">
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#888880]"
          >
            01 — About
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mb-10 font-heading font-extrabold leading-tight text-[#111111]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Building systems that
            <br />
            <span style={{ color: "#0047FF" }}>actually scale</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-5 text-[15px] leading-[1.9] text-[#666660]"
          >
            <p>
              I'm a Computer Science graduate student at the University of
              Illinois Chicago (GPA: 3.72), driven by a deep interest in
              scalable systems, clean software architecture, and thoughtful
              engineering.
            </p>
            <p>
              Over three internships across India — spanning full-stack,
              backend, and data engineering — I've built ETL pipelines,
              CEO-facing dashboards, real-time analytics services, and
              production REST APIs. I thrive at the intersection of reliable
              backend systems and polished user experiences.
            </p>
            <p>
              Actively seeking Full Stack and Backend Engineering roles,
              particularly those involving microservices, distributed systems,
              and cloud-native platforms.
            </p>
          </motion.div>
        </div>

        {/* Right: info list */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="self-center"
        >
          <div className="divide-y divide-[#E8E4D8] rounded-2xl border border-[#E8E4D8] bg-white overflow-hidden">
            {info.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.07 }}
                className="flex items-start gap-4 px-6 py-5"
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "#EEF0FF" }}
                >
                  <item.icon className="h-4 w-4" style={{ color: "#0047FF" }} />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#BBBBBB]">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-[#111111]">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
