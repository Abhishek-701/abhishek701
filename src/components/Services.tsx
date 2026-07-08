import { motion } from "framer-motion";
import { Code2, Server, Database, Brain } from "lucide-react";

const items = [
  {
    icon: Code2,
    title: "Full Stack Development",
    text: "End-to-end apps in React, Next.js, Angular, and Spring Boot, from CEO dashboards at Mobileware to the Zelyx product today.",
    num: "01",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    text: "Django and Spring Boot APIs, database design, and service architecture, the backend work I've done across three internships.",
    num: "02",
  },
  {
    icon: Database,
    title: "Data Engineering / ETL",
    text: "ETL pipelines and real-time dashboards, like the Oracle ETL rebuild at Drishti that cut ingestion time by 25%.",
    num: "03",
  },
  {
    icon: Brain,
    title: "AI / ML Integration",
    text: "RAG pipelines and LLM infrastructure, from FinSight's hybrid search to Zelyx's LLM proxy and observability layer.",
    num: "04",
  },
];

const Services = () => (
  <section
    id="services"
    className="border-t border-[#E8E4D8] py-28 px-6"
    style={{ backgroundColor: "#F4F2ED" }}
  >
    <div className="mx-auto max-w-6xl">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#888880]"
      >
        05 — Services
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mb-14 font-heading font-extrabold leading-tight text-[#111111]"
        style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
      >
        What I can{" "}
        <span style={{ color: "#0047FF" }}>build for you</span>
      </motion.h2>

      <div className="grid gap-px bg-[#E8E4D8] sm:grid-cols-2">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative overflow-hidden p-8 transition-colors hover:bg-white"
            style={{ backgroundColor: "#F4F2ED" }}
          >
            <span className="mb-6 block font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#BBBBBB] transition-colors group-hover:text-[#0047FF]">
              {item.num}
            </span>

            <div
              className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl"
              style={{ backgroundColor: "#EEF0FF" }}
            >
              <item.icon className="h-5 w-5" style={{ color: "#0047FF" }} />
            </div>

            <h3 className="mb-2 font-heading text-lg font-bold text-[#111111]">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#888880]">{item.text}</p>

            <div className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: "#0047FF" }} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
