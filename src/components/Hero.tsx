import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import headshot from "@/assets/headshot.jpg";

const roles = [
  "Full Stack Developer",
  "Distributed Systems Engineer",
  "CS Graduate @ UIC",
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const tick = useCallback(() => {
    const full = roles[roleIdx];
    setText((prev) => {
      if (!deleting) {
        if (prev.length < full.length) return full.slice(0, prev.length + 1);
        setTimeout(() => setDeleting(true), 2000);
        return prev;
      }
      if (prev.length > 0) return prev.slice(0, -1);
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
      return "";
    });
  }, [roleIdx, deleting]);

  useEffect(() => {
    const id = setTimeout(tick, deleting ? 35 : 70);
    return () => clearTimeout(id);
  }, [tick, text, deleting]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Grid bg */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow orb */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[140px]" />

      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/60 to-primary/20 blur-sm" />
            <img
              src={headshot}
              alt="Abhishek Walvekar"
              className="relative h-48 w-48 rounded-full object-cover object-top ring-2 ring-primary/40 ring-offset-4 ring-offset-background md:h-56 md:w-56"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-3 font-heading text-5xl font-bold tracking-tight text-foreground md:text-7xl"
        >
          Abhishek{" "}
          <span className="text-gradient">Walvekar</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6 h-8"
        >
          <span className="font-mono text-lg text-primary">
            {text}
            <span className="ml-0.5 animate-pulse">▍</span>
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-10 max-w-lg text-muted-foreground"
        >
          Passionate about building scalable full-stack applications, distributed
          systems, and data-driven solutions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:glow-sm hover:brightness-110"
          >
            View My Work
          </a>
          <a
            href="/Abhishek_Walvekar_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-2.5 text-sm font-mono text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 animate-bounce text-muted-foreground/50 hover:text-primary transition-colors"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
