import { motion } from "framer-motion";
import { ChatBubbles } from "./ChatBubbles";

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

        {/* Right: chat bubbles — each bubble tight-wrapped by pretext */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="self-stretch"
        >
          <ChatBubbles />
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
