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
              I'm an MS CS student at UIC (GPA: 3.78). Right now I'm building
              Zelyx, an AI proxy and observability platform that routes LLM
              calls through a self-hosted proxy so teams get real-time spend
              tracking, budget caps, and full audit trails without touching
              their existing code.
            </p>
            <p>
              Before that I built FinSight, a RAG based Q&A agent over SEC
              10-K filings, and CodeContext MCP, a live-indexed code search
              server that lets LLM agents query codebases too large for their
              context window. I've also worked in distributed systems,
              building a Spark pipeline in Scala for encoder-decoder
              workloads deployed on AWS Lambda and EMR.
            </p>
            <p>
              Before grad school I did three internships in India. At Drishti
              Software Solutions I rebuilt an Oracle ETL pipeline and improved
              ingestion throughput by 25%. At Mobileware Technologies I built
              a CEO-facing analytics dashboard and wrote Spring Boot APIs for
              internal tools. At Cleverground I worked on Django backend
              services for live lectures and notifications. Looking for
              full-time roles in full-stack or backend engineering, ideally
              on teams working with distributed systems, LLM infrastructure,
              or cloud platforms.
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
