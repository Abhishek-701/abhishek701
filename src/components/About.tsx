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
            A bit about
            <br />
            <span style={{ color: "#0047FF" }}>what I do</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-5 text-[15px] leading-[1.9] text-[#666660]"
          >
            <p>
              I'm finishing my MS in Computer Science at UIC (GPA 3.78). Right
              now I'm a Software Engineer, AI at Layered AI, where I measure
              production agent latency and work with prospective customers on
              how AI agents fit into their workflows.
            </p>
            <p>
              On the side I've built Zelyx (an LLM proxy with spend tracking
              and budget gates), FinSight (financial research over SEC
              filings), and CodeContext (live code search for LLM agents). I've
              also shipped Polyglot, a cross-lingual voice agent, and a
              computer-use tool that records a browser workflow once and
              replays it later.
            </p>
            <p>
              Before grad school I interned three times in India. At Drishti I
              sped up an Oracle ETL pipeline by about 25%. At Mobileware I
              built a CEO dashboard and Spring Boot APIs. At Cleverground I
              worked on Django services for live lectures and notifications.
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
