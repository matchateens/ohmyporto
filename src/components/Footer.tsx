import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com/matchateens", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/fatin-cahya/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:fatincahya69@gmail.com", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold gradient-text">
            Portfolio
          </a>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-border hover:border-primary/50 hover:text-primary hover:scale-110 transition-all"
                >
                  <social.icon size={20} />
                </Button>
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {["Home", "About", "Projects", "Skills", "Certificates", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
              Made with <Heart size={14} className="text-primary fill-primary" /> by Your Name
            </p>
            <p className="mt-2">© {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
