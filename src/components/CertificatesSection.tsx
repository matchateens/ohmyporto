import { Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "ABC123XYZ",
    link: "#",
  },
  {
    title: "Professional Frontend Developer",
    issuer: "Meta",
    date: "2023",
    credentialId: "META-FE-456",
    link: "#",
  },
  {
    title: "Google Cloud Professional",
    issuer: "Google",
    date: "2023",
    credentialId: "GCP-789",
    link: "#",
  },
  {
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2022",
    credentialId: "FCC-FSWD",
    link: "#",
  },
  {
    title: "React Developer Certification",
    issuer: "Coursera",
    date: "2022",
    credentialId: "REACT-123",
    link: "#",
  },
  {
    title: "UX Design Professional",
    issuer: "Google",
    date: "2021",
    credentialId: "GUX-456",
    link: "#",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">
            Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Certificates & Awards
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className="group relative p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10">
                  <Award size={28} className="text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-muted-foreground text-sm mb-4">
                  Issued by {cert.issuer}
                </p>

                {/* Details */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {cert.date}
                  </span>
                  <span className="font-mono">ID: {cert.credentialId}</span>
                </div>

                {/* View Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-center gap-2 border border-border hover:border-primary/50 hover:bg-primary/5"
                >
                  <span>View Credential</span>
                  <ExternalLink size={14} />
                </Button>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
