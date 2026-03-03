import { Briefcase } from "lucide-react";

const experienceData = [
  {
    company: 'PT Satria Antaran Prima Tbk. ("SAP Express")',
    position: "Information Technology – Magang",
    period: "Nov 2025 - Saat ini",
    responsibilities: [
      "Melakukan instalasi ulang sistem operasi, konfigurasi perangkat, dan deployment software untuk mendukung kelancaran operasional kantor.",
      "Menangani troubleshooting hardware & network seperti perbaikan printer, konfigurasi LAN/internet, serta maintenance PC guna meminimalkan downtime pengguna.",
      "Mengelola dan menyelesaikan ticket permintaan (request) melalui sistem CoreSys secara tepat waktu, termasuk perubahan data pengiriman, pembaruan informasi operasional, dan reset akses pengguna.",
      "Memberikan dukungan teknis responsif kepada karyawan, memastikan stabilitas sistem dan efisiensi kerja harian.",
    ],
  },
  {
    company: "Kuliah Kerja Lapangan Desa Brani, Cilacap",
    position: "Koordinator IT",
    period: "Aug 2025 - Sep 2025",
    responsibilities: [
      "Memimpin dan mengoordinasikan tim IT dalam pelaksanaan kegiatan teknologi informasi selama KKL.",
      "Melakukan perbaikan dan pembaruan website desa untuk meningkatkan tampilan serta fungsionalitas sistem informasi publik.",
      "Menulis dan mempublikasikan artikel kegiatan desa melalui website resmi.",
      "Menangani troubleshooting perangkat komputer dan jaringan di kantor Balai Desa untuk memastikan kelancaran operasional.",
    ],
  },
  {
    company: "Yayasan Dicoding Indonesia (Bangkit Academy)",
    position: "Studi Independen – Cloud Computing",
    period: "Aug 2023 - Jan 2024",
    responsibilities: [
      "Mempelajari arsitektur dan implementasi sistem berbasis Google Cloud Platform (GCP).",
      "Menguasai konsep serta penerapan teknologi Cloud Computing untuk pengembangan aplikasi terintegrasi.",
      "Mengembangkan aplikasi web berbasis cloud menggunakan Docker, Kubernetes, dan CI/CD pipeline.",
      "Merancang dan membangun API untuk aplikasi Fertile Egg Detector sebagai bagian dari proyek akhir.",
      "Berkolaborasi dalam proyek capstone lintas bidang bersama tim Mobile Development dan Machine Learning untuk menciptakan solusi berbasis teknologi cloud.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">
            Work History
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/30" />

            {/* Timeline items */}
            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                    <Briefcase className="w-3 h-3 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="group p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 hover:bg-card transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-primary font-medium">
                          {exp.position}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono bg-muted/50 px-3 py-1 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li 
                          key={respIndex}
                          className="text-muted-foreground text-sm flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
