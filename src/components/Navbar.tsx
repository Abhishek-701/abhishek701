import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = ["About", "Skills", "Experience", "Projects", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-[2px] z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F9F7F2]/90 backdrop-blur-md border-b border-[#E8E4D8]"
          : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#"
          className="font-mono text-sm font-bold tracking-[0.2em] text-[#111111] hover:text-[#0047FF] transition-colors uppercase"
        >
          AW
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {sections.map((s) => (
            <li key={s}>
              <a
                href={`#${s.toLowerCase()}`}
                className="text-sm font-medium text-[#888880] hover:text-[#111111] transition-colors"
              >
                {s}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/Abhishek_Walvekar_Resume.pdf"
          download
          className="hidden md:inline-flex items-center rounded-full bg-[#111111] px-5 py-2 text-xs font-bold text-white tracking-wide hover:bg-[#0047FF] transition-colors"
        >
          Resume ↓
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#111111]"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-[#E8E4D8] bg-[#F9F7F2]/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-5">
              {sections.map((s) => (
                <li key={s}>
                  <a
                    href={`#${s.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="text-sm font-semibold text-[#111111] hover:text-[#0047FF] transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/Abhishek_Walvekar_Resume.pdf"
                  download
                  className="inline-flex rounded-full bg-[#111111] px-5 py-2 text-xs font-bold text-white"
                >
                  Resume ↓
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
