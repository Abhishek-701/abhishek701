import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 sm:flex-row">
      <p className="font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Abhishek Walvekar
      </p>
      <div className="flex gap-4">
        {[
          { icon: Github, href: "https://github.com/Abhishek-701" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/abhishek-walvekar/" },
          { icon: Mail, href: "mailto:walvekarabhishek701@gmail.com" },
        ].map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <l.icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
