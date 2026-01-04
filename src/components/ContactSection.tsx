import { Mail, Linkedin, Github, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "fatincahya69@gmail.com",
    href: "mailto:fatincahya69@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Fatin Cahya",
    href: "https://www.linkedin.com/in/fatin-cahya/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "matchateens",
    href: "https://github.com/matchateens",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@fatin.cahyo_",
    href: "https://www.instagram.com/fatin.cahyo_",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactLinks.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label !== "Email" ? "_blank" : undefined}
                rel={contact.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group"
              >
                <div
                  className="p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <contact.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Atau kirim email langsung kepada saya
            </p>
            <a href="mailto:fatincahya69@gmail.com">
              <Button variant="glow" size="lg" className="gap-2">
                <Send size={18} />
                Kirim Email
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
