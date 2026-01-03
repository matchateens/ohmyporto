import { User, MapPin, Briefcase, GraduationCap } from "lucide-react";

const infoItems = [
  { icon: User, label: "Name", value: "Your Full Name" },
  { icon: MapPin, label: "Location", value: "Jakarta, Indonesia" },
  { icon: Briefcase, label: "Experience", value: "3+ Years" },
  { icon: GraduationCap, label: "Education", value: "Computer Science" },
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
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <User size={64} className="text-primary" />
                  </div>
                  <p className="text-muted-foreground">Your Photo Here</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
          </div>

          {/* Right - Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Hi! I'm a passionate developer
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a creative developer with a passion for building beautiful and 
                functional web applications. With expertise in modern technologies, 
                I craft digital experiences that users love.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying a good cup of coffee.
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
