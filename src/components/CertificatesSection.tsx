import { Award, ExternalLink, Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { useState } from "react";

import dicodingBackendCert from "@/assets/certificates/dicoding-backend.png";
import dicodingLogicCert from "@/assets/certificates/dicoding-logic.png";
import dicodingGitCert from "@/assets/certificates/dicoding-git.png";
import dicodingJsCert from "@/assets/certificates/dicoding-javascript.png";
import dicodingSoftwareCert from "@/assets/certificates/dicoding-software.png";
import dicodingGcloudCert from "@/assets/certificates/dicoding-gcloud.png";
import dicodingWebCert from "@/assets/certificates/dicoding-web.png";

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
  {
    title: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding Indonesia",
    date: "Agustus 2023",
    credentialId: "0LZ090DGNZ65",
    link: "https://www.dicoding.com/certificates/0LZ090DGNZ65",
    image: dicodingGitCert,
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "September 2023",
    credentialId: "JLX1W249JP72",
    link: "https://www.dicoding.com/certificates/JLX1W249JP72",
    image: dicodingJsCert,
  },
  {
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    issuer: "Dicoding Indonesia",
    date: "Agustus 2023",
    credentialId: "53XEN5N00XRN",
    link: "https://www.dicoding.com/certificates/53XEN5N00XRN",
    image: dicodingSoftwareCert,
  },
  {
    title: "Menjadi Google Cloud Engineer",
    issuer: "Dicoding Indonesia",
    date: "November 2023",
    credentialId: "L4PQ8VGL4ZO1",
    link: "https://www.dicoding.com/certificates/L4PQ8VGL4ZO1",
    image: dicodingGcloudCert,
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "September 2023",
    credentialId: "1OP81LG52ZQK",
    link: "https://www.dicoding.com/certificates/1OP81LG52ZQK",
    image: dicodingWebCert,
  },
];

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

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
              <div 
                className="relative h-48 overflow-hidden cursor-zoom-in"
                onClick={() => setSelectedCert(cert)}
              >
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

                {/* Zoom indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/20 backdrop-blur-[2px]">
                  <span className="text-foreground text-sm font-medium px-3 py-1.5 rounded-full bg-background/80 border border-border">
                    Click to zoom
                  </span>
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

      {/* Lightbox Modal */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-background/95 backdrop-blur-xl border-border overflow-hidden">
          <DialogClose className="absolute right-3 top-3 z-50 p-2 rounded-full bg-background/80 border border-border hover:bg-primary/10 transition-colors">
            <X size={20} />
          </DialogClose>
          
          {selectedCert && (
            <div className="flex flex-col">
              {/* Full Image */}
              <div className="w-full max-h-[70vh] overflow-auto">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title}
                  className="w-full h-auto object-contain"
                />
              </div>
              
              {/* Info Footer */}
              <div className="p-4 border-t border-border bg-card/50">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {selectedCert.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
                <a href={selectedCert.link} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="gap-2">
                    <span>View Original</span>
                    <ExternalLink size={14} />
                  </Button>
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificatesSection;
