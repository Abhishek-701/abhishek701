import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ChevronDown } from "lucide-react";
import headshot from "@/assets/headshot.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <div className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-primary ring-offset-4 ring-offset-background">
            <img src={headshot} alt="Abhishek Walvekar" className="w-full h-full object-cover" />
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-primary text-sm tracking-widest uppercase mb-4"
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight"
        >
          Abhishek Walvekar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8"
        >
          CS graduate student at UIC passionate about building scalable full-stack applications, distributed systems, and data-driven solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-5 mb-12"
        >
          <a
            href="mailto:walvekarabhishek701@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">walvekarabhishek701@gmail.com</span>
            <span className="sm:hidden">Email</span>
          </a>
          <a
            href="tel:+17739912944"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">(773) 991-2944</span>
            <span className="sm:hidden">Phone</span>
          </a>
          <a
            href="https://linkedin.com/in/abhishek-walvekar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </motion.div>
        <motion.a
          href="#skills"
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
