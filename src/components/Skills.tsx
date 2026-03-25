import { motion } from "framer-motion";

const row1 = [
  "Java", "Python", "TypeScript", "JavaScript", "SQL",
  "Spring Boot", "React", "Node.js", "Django", "GraphQL",
  "REST APIs", "AWS", "Docker", "Spark", "Scala",
];

const row2 = [
  "MongoDB", "PostgreSQL", "MySQL", "Firebase Firestore",
  "AWS S3", "Lambda", "EMR", "Bedrock",
  "GitHub Actions", "CI/CD", "JUnit", "PyTest",
  "gRPC", "HTML5", "CSS",
];

const categories = [
  { name: "Languages", count: 7 },
  { name: "Frameworks", count: 6 },
  { name: "Databases", count: 4 },
  { name: "Cloud", count: 4 },
  { name: "Testing", count: 5 },
];

interface PillProps {
  text: string;
  blue?: boolean;
}

const Pill = ({ text, blue }: PillProps) => (
  <span
    className={`mx-2 inline-flex items-center whitespace-nowrap rounded-full border px-4 py-1.5 font-mono text-sm font-medium ${
      blue
        ? "border-[#0047FF]/40 bg-[#0047FF]/10 text-[#6699FF]"
        : "border-[#333333] bg-[#1A1A1A] text-[#BBBBBB]"
    }`}
  >
    {text}
  </span>
);

const Skills = () => (
  <section id="skills" className="overflow-hidden bg-[#111111] py-24">
    {/* Header */}
    <div className="mx-auto max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#555550]">
            02 — Technical Skills
          </p>
          <h2
            className="font-heading font-extrabold leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#F9F7F2" }}
          >
            What I work
            <br />
            <span style={{ color: "#0047FF" }}>with</span>
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-[#666660]">
          A full stack skill set spanning languages, frameworks, cloud
          platforms, and data engineering tools.
        </p>
      </motion.div>
    </div>

    {/* Marquee row 1 — left */}
    <div className="marquee-row relative py-3">
      <div className="flex w-max animate-marquee-left">
        {[...row1, ...row1].map((skill, i) => (
          <Pill key={i} text={skill} blue={i % 5 === 1} />
        ))}
      </div>
    </div>

    {/* Marquee row 2 — right */}
    <div className="marquee-row relative py-3">
      <div className="flex w-max animate-marquee-right">
        {[...row2, ...row2].map((skill, i) => (
          <Pill key={i} text={skill} blue={i % 4 === 2} />
        ))}
      </div>
    </div>

    {/* Category counts */}
    <div className="mx-auto mt-14 max-w-6xl px-6">
      <div className="grid grid-cols-2 gap-px bg-[#222222] md:grid-cols-5">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="group bg-[#111111] px-6 py-7 transition-colors hover:bg-[#0047FF]/5"
          >
            <div
              className="font-heading text-4xl font-extrabold transition-colors group-hover:text-[#0047FF]"
              style={{ color: "#F9F7F2" }}
            >
              {cat.count}
            </div>
            <div className="mt-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#555550] group-hover:text-[#0047FF]/60 transition-colors">
              {cat.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
