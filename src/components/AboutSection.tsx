import { User, MapPin, Briefcase, GraduationCap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const infoItems = [
  { icon: User, label: "Name", value: "Fathin Cahyo Ramadhan" },
  { icon: MapPin, label: "Location", value: "Duren Tiga, Pancoran, Indonesia" },
  { icon: Briefcase, label: "Interest", value: "Data Science, IT Support, Web Development" },
  { icon: GraduationCap, label: "Education", value: "S1 Teknologi Informasi" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">
            Get To Know Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Personal Information
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Profile Image Placeholder */}
          <div className="relative group">
            <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden gradient-border bg-card">
              <img 
                src={profilePhoto} 
                alt="Fathin Cahyo Ramadhan" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
          </div>

          {/* Right - Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Fresh Graduate S1 Teknologi Informasi
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Fresh Graduate Teknologi Informasi dengan minat yang kuat di bidang Data Science, 
                IT Support, dan Web Development. Memiliki ketertarikan dalam mengolah data menjadi 
                insight yang bernilai serta mengembangkan solusi digital yang efektif dan responsif. 
                Berpengalaman dalam analisis data, eksplorasi tren, serta pengembangan aplikasi web 
                menggunakan Django, dengan pendekatan problem-solving yang terstruktur dan berbasis data.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Saat ini memiliki pengalaman dalam bidang IT sebagai IT Helpdesk dan IT Support, 
                termasuk menangani ticketing system, troubleshooting hardware dan software, serta 
                mendukung operasional teknologi sehari-hari. Memiliki semangat belajar yang tinggi, 
                adaptif terhadap teknologi baru, serta mampu bekerja secara mandiri maupun dalam tim.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {infoItems.map((item, index) => (
                <div
                  key={item.label}
                  className="group p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 hover:bg-card transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
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

export default AboutSection;
