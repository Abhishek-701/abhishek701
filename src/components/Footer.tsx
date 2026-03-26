import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer
    className="border-t border-[#E8E4D8] py-10 px-6"
    style={{ backgroundColor: "#F4F2ED" }}
  >
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm font-bold tracking-[0.2em] text-[#111111] uppercase">
          AW
        </span>
        <span className="h-4 w-px bg-[#E8E4D8]" />
        <span className="text-sm text-[#AAAAAA]">
          © {new Date().getFullYear()} Abhishek Walvekar
        </span>
      </div>

      <div className="flex items-center gap-5">
        {[
          { icon: Github, href: "https://github.com/Abhishek-701", label: "GitHub", bg: "bg-[#111111] hover:bg-[#333333]" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/abhishek-walvekar/", label: "LinkedIn", bg: "bg-[#0A66C2] hover:bg-[#004182]" },
          { icon: Mail, href: "mailto:walvekarabhishek701@gmail.com", label: "Email", bg: "bg-[#C8441A] hover:bg-[#a33515]" },
        ].map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.label}
            className={`flex items-center justify-center h-8 w-8 rounded-full text-white transition-colors ${l.bg}`}
          >
            <l.icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
