import { Briefcase } from "lucide-react";

const experienceData = [
  {
    company: 'PT Satria Antaran Prima Tbk. ("SAP Express")',
    position: "Information Technology – Magang",
    period: "Nov 2025 - Saat ini",
    responsibilities: [
      "Menangani troubleshooting hardware dan jaringan (printer, LAN/internet, dan PC) guna meminimalkan downtime serta meningkatkan efisiensi kerja pengguna.",
      "Mengelola dan menyelesaikan 200+ ticket per minggu (±1100+ per bulan) melalui sistem CoreSys secara tepat waktu.",
      "Melakukan maintenance rutin pada perangkat IT (PC, jaringan, dan periferal) untuk memastikan performa sistem tetap optimal.",
    ],
  },
  {
    company: "Koperasi Rahmi S*Mart",
    position: "Cashier – Kontrak",
    period: "Sep 2025 - Nov 2025",
    responsibilities: [
      "Mengelola transaksi penjualan harian menggunakan sistem kasir.",
      "Melakukan pencatatan keuangan, pengecekan stok barang, dan penyetoran akhir hari.",
      "Memberikan pelayanan ramah dan solutif kepada pelanggan.",
      "Menjaga ketelitian dalam penghitungan uang dan pengelolaan transaksi.",
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
  {
    company: "Kelompok Penyelenggara Pemungutan Suara (KPPS)",
    position: "Anggota KPPS – Komisi Pemilihan Umum Republik Indonesia (KPU RI)",
    period: "Feb 2024 - Mar 2024",
    responsibilities: [
      "Bertugas dalam pelaksanaan pemungutan dan penghitungan suara di TPS.",
      "Memastikan proses pemilu berjalan tertib, transparan, dan sesuai regulasi.",
      "Melayani pemilih serta mengelola administrasi dokumen pemilu.",
      "Bekerja secara koordinatif dengan anggota KPPS lain untuk menjaga integritas proses pemilihan.",
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
