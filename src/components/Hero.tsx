import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronDown, FileDown } from "lucide-react";
import headshot from "@/assets/headshot.jpg";

const roles = [
  "Full Stack Developer",
  "Distributed Systems Engineer",
  "CS Graduate @ UIC",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const full = roles[roleIndex];
    setDisplayed((prev) => {
      if (!isDeleting) {
        if (prev.length < full.length) return full.slice(0, prev.length + 1);
        setTimeout(() => setIsDeleting(true), 1500);
        return prev;
      } else {
        if (prev.length > 0) return prev.slice(0, -1);
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
        return "";
      }
    });
  }, [roleIndex, isDeleting]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, displayed, isDeleting]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative max-w-3xl text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden ring-2 ring-primary ring-offset-4 ring-offset-background shadow-[0_0_40px_hsl(var(--primary)/0.3)]">
            <img src={headshot} alt="Abhishek Walvekar" className="w-full h-full object-cover object-top" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold font-heading text-foreground mb-4 tracking-tight"
        >
          Abhishek <span className="text-gradient">Walvekar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-8 mb-6"
        >
          <span className="font-mono text-primary text-lg">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-muted-foreground max-w-xl mx-auto mb-10"
        >
          Passionate about building scalable full-stack applications, distributed systems, and data-driven solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="/Abhishek_Walvekar_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-2.5 text-sm font-mono text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <FileDown className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="inline-block animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
