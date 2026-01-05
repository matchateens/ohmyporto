const educationData = [
  {
    institution: "Universitas Amikom Purwokerto",
    major: "Teknologi Informasi",
    period: "2021 - 2025",
  },
  {
    institution: "SMK Negeri 2 Purwokerto",
    major: "Multimedia",
    period: "2019 - 2021",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Education
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/30" />

            {/* Timeline items */}
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  {/* Content */}
                  <div className="group p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 hover:bg-card transition-all duration-300">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {edu.major} | {edu.period}
                    </p>
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

export default EducationSection;
