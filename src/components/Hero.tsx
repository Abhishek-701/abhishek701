import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin } from "lucide-react";
import { prepareWithSegments, layoutWithLines } from "@chenglou/pretext";
import headshot from "@/assets/headshot.jpg";

const roles = [
  "Full Stack Developer",
  "Distributed Systems Engineer",
  "CS Graduate @ UIC",
];

// The canvas font that matches Tailwind's font-mono text-sm (14px)
const MONO_FONT = "14px ui-monospace, SFMono-Regular, Menlo, monospace";
const LINE_HEIGHT = 20;

const stats = [
  { value: "3.72", label: "GPA" },
  { value: "3", label: "Internships" },
  { value: "MS", label: "CS @ UIC" },
];

// Measure each role's exact pixel width with pretext once — no DOM, no reflow.
// prepareWithSegments() does the canvas font measurement pass;
// layoutWithLines() returns per-line { text, width } via pure arithmetic.
function measureRoleWidths(): number[] {
  try {
    return roles.map((role) => {
      const prepared = prepareWithSegments(role, MONO_FONT);
      const { lines } = layoutWithLines(prepared, 10_000, LINE_HEIGHT);
      return lines[0]?.width ?? 0;
    });
  } catch {
    return roles.map(() => 0);
  }
}

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [waiting, setWaiting] = useState(false);

  // Exact pixel widths for each role, measured by pretext
  const roleWidths = useRef<number[]>([]);
  useEffect(() => {
    roleWidths.current = measureRoleWidths();
  }, []);

  const tick = useCallback(() => {
    const full = roles[roleIdx];
    setText((prev) => {
      if (!deleting) {
        if (prev.length < full.length) return full.slice(0, prev.length + 1);
        setTimeout(() => setDeleting(true), 2200);
        return prev;
      }
      if (prev.length > 0) return prev.slice(0, -1);
      // Finished deleting — pause briefly while underline resets, then type next role
      setDeleting(false);
      setWaiting(true);
      setTimeout(() => {
        setRoleIdx((i) => (i + 1) % roles.length);
        setWaiting(false);
      }, 220);
      return "";
    });
  }, [roleIdx, deleting]);

  useEffect(() => {
    if (waiting) return;
    const id = setTimeout(tick, deleting ? 38 : 72);
    return () => clearTimeout(id);
  }, [tick, text, deleting, waiting]);

  // Target underline width: pretext-measured width for the current role.
  // Falls back to 0 if measurements haven't landed yet.
  const targetW = roleWidths.current[roleIdx] ?? 0;

  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-20 pt-28">
      {/* Subtle warm grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17,17,17,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 md:flex-row md:items-center md:justify-between">
        {/* ── Left: Text ── */}
        <div className="flex-1 md:max-w-xl">
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 inline-flex items-center gap-2.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#888880]">
              Available for Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-heading font-extrabold leading-[0.95] tracking-tight text-[#111111]"
            style={{ fontSize: "clamp(3.5rem, 7.5vw, 6.5rem)" }}
          >
            Abhishek
            <br />
            <span style={{ color: "#0047FF" }}>Walvekar</span>
          </motion.h1>

          {/* Typewriter + pretext-measured leading underline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-6 flex flex-col gap-1.5"
          >
            {/*
              The underline animates to the pretext-measured pixel width of the
              current role — it always leads the cursor, snapping to the exact
              final width before the last character is typed.
            */}
            <motion.div
              className="h-[2px] rounded-full"
              style={{ backgroundColor: "#0047FF" }}
              animate={{ width: targetW > 0 ? targetW : 40 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            />

            <span className="font-mono text-sm text-[#888880]">
              {text}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.85, repeat: Infinity }}
              >
                _
              </motion.span>
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-[#888880]"
          >
            Passionate about scalable full-stack applications, distributed
            systems, and data-driven solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[#111111] px-7 py-3 text-sm font-bold text-white transition-all hover:bg-[#0047FF]"
            >
              View Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/Abhishek_Walvekar_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#E8E4D8] bg-white px-7 py-3 text-sm font-bold text-[#111111] transition-all hover:border-[#111111]"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex gap-8 border-t border-[#E8E4D8] pt-8"
          >
            {stats.map((s, i) => (
              <div key={i}>
                <div
                  className="font-heading text-3xl font-extrabold"
                  style={{ color: "#0047FF" }}
                >
                  {s.value}
                </div>
                <div className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#888880]">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="https://github.com/Abhishek-701"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-9 w-9 rounded-full bg-[#111111] text-white hover:bg-[#333333] transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-walvekar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-9 w-9 rounded-full bg-[#0A66C2] text-white hover:bg-[#004182] transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        {/* ── Right: Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="shrink-0 md:w-72 lg:w-80"
        >
          <div className="relative">
            {/* Shadow blocks */}
            <div
              className="absolute inset-0 translate-x-5 translate-y-5 rounded-3xl"
              style={{ backgroundColor: "#0047FF", opacity: 0.08 }}
            />
            <div
              className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-3xl"
              style={{ backgroundColor: "#0047FF", opacity: 0.05 }}
            />

            <img
              src={headshot}
              alt="Abhishek Walvekar"
              className="relative w-full rounded-3xl object-cover object-top"
              style={{ aspectRatio: "4/5" }}
            />

            {/* Blue accent badge */}
            <div
              className="absolute -bottom-5 -left-5 flex h-[68px] w-[68px] flex-col items-center justify-center rounded-2xl"
              style={{ backgroundColor: "#0047FF" }}
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-white leading-tight text-center">
                MS
                <br />
                CS
              </span>
            </div>

            {/* UIC badge */}
            <div className="absolute -top-4 -right-4 flex items-center gap-1.5 rounded-full bg-white border border-[#E8E4D8] px-3.5 py-1.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#E8220D]" />
              <span className="font-mono text-[10px] font-bold tracking-wider text-[#111111]">
                UIC
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
