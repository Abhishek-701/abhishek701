import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const links = [
  { icon: Mail, label: "walvekarabhishek701@gmail.com", href: "mailto:walvekarabhishek701@gmail.com" },
  { icon: Phone, label: "+1 (773) 991-2944", href: "tel:+17739912944" },
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
    <section id="contact" className="py-28 px-6">
      <div className="mx-auto max-w-xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 font-heading text-3xl font-bold text-foreground"
        >
          <span className="mr-3 font-mono text-base text-primary">06.</span>
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-sm text-muted-foreground"
        >
          Open to full-time opportunities, freelance projects, and collaborations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-wrap items-center justify-center gap-3"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.ext ? "_blank" : undefined}
              rel={l.ext ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <l.icon className="h-3.5 w-3.5" />
              {l.label}
            </a>
          ))}
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-left"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block font-mono text-xs text-muted-foreground">
                Name
              </label>
              <input
                required
                maxLength={100}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1.5 block font-mono text-xs text-muted-foreground">
                Email
              </label>
              <input
                required
                type="email"
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block font-mono text-xs text-muted-foreground">
              Message
            </label>
            <textarea
              required
              maxLength={1000}
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-none rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
          >
            <Send className="h-4 w-4" />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
