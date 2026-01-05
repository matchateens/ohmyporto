import { Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

import dicodingBackendCert from "@/assets/certificates/dicoding-backend.png";
import dicodingLogicCert from "@/assets/certificates/dicoding-logic.png";

const certificates = [
  {
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
    issuer: "Dicoding Indonesia",
    date: "Oktober 2023",
    credentialId: "N9ZO59VEYPG5",
    link: "https://www.dicoding.com/certificates/N9ZO59VEYPG5",
    image: dicodingBackendCert,
  },
  {
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    issuer: "Dicoding Indonesia",
    date: "Agustus 2023",
    credentialId: "6RPNWNNE5P2M",
    link: "https://www.dicoding.com/certificates/6RPNWNNE5P2M",
    image: dicodingLogicCert,
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
              className="group relative rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Certificate Image Preview */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Award badge */}
                <div className="absolute top-3 left-3 p-2 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30">
                  <Award size={20} className="text-primary" />
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-5">
                {/* Title */}
                <h3 className="text-base font-semibold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-muted-foreground text-sm mb-3">
                  {cert.issuer}
                </p>

                {/* Details */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {cert.date}
                  </span>
                  <span className="font-mono text-[10px]">ID: {cert.credentialId}</span>
                </div>

                {/* View Button */}
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-center gap-2 border border-border hover:border-primary/50 hover:bg-primary/5"
                  >
                    <span>View Credential</span>
                    <ExternalLink size={14} />
                  </Button>
                </a>
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
