import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, ArrowUpRight } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "walvekarabhishek701@gmail.com", href: "mailto:walvekarabhishek701@gmail.com", ext: false },
  { icon: Phone, label: "+1 (773) 991-2944", href: "tel:+17739912944", ext: false },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/abhishek-walvekar/", ext: true },
  { icon: Github, label: "GitHub", href: "https://github.com/Abhishek-701", ext: true },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const s = encodeURIComponent(`Portfolio Contact from ${name}`);
    const b = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:walvekarabhishek701@gmail.com?subject=${s}&body=${b}`;
  };

  return (
    <section id="contact" className="border-t border-[#E8E4D8] py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#888880]"
        >
          06 — Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mb-14 font-heading font-extrabold leading-tight text-[#111111]"
          style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
        >
          Let's{" "}
          <span style={{ color: "#0047FF" }}>work together</span>
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-[380px_1fr]">
          {/* Left: dark panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl p-8 text-white"
            style={{ backgroundColor: "#111111" }}
          >
            {/* Grid texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* Blue accent dot */}
            <div
              className="absolute -top-12 -right-12 h-40 w-40 rounded-full opacity-20"
              style={{ backgroundColor: "#0047FF" }}
            />

            <div className="relative">
              <p className="mb-8 text-sm leading-relaxed text-[#888880]">
                Open to full-time roles, freelance projects, and
                collaborations. Let's build something great together.
              </p>

              <div className="space-y-3">
                {contactLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.ext ? "_blank" : undefined}
                    rel={l.ext ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-xl border border-[#2A2A2A] px-4 py-3 text-sm font-medium text-[#BBBBBB] transition-all hover:border-[#0047FF]/50 hover:bg-[#0047FF]/8 hover:text-white"
                  >
                    <l.icon className="h-4 w-4 shrink-0 text-[#0047FF]" />
                    <span className="flex-1 truncate">{l.label}</span>
                    {l.ext && (
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-40 transition-opacity group-hover:opacity-100" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col gap-4 rounded-2xl border border-[#E8E4D8] bg-white p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#AAAAAA]">
                  Name
                </label>
                <input
                  required
                  maxLength={100}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-[#E8E4D8] bg-[#F9F7F2] px-4 py-2.5 text-sm text-[#111111] placeholder:text-[#CCCCCC] transition-all focus:border-[#0047FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0047FF]/10"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#AAAAAA]">
                  Email
                </label>
                <input
                  required
                  type="email"
                  maxLength={255}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-[#E8E4D8] bg-[#F9F7F2] px-4 py-2.5 text-sm text-[#111111] placeholder:text-[#CCCCCC] transition-all focus:border-[#0047FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0047FF]/10"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#AAAAAA]">
                Message
              </label>
              <textarea
                required
                maxLength={1000}
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-xl border border-[#E8E4D8] bg-[#F9F7F2] px-4 py-2.5 text-sm text-[#111111] placeholder:text-[#CCCCCC] transition-all focus:border-[#0047FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0047FF]/10"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="group mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#111111] py-3 text-sm font-bold text-white transition-all hover:bg-[#0047FF]"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
