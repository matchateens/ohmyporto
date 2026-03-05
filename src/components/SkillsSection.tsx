import { useState } from "react";
import capcutIcon from "@/assets/icons/capcut.png";

const skillCategories = [
  {
    name: "Programming",
    skills: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    ],
  },
  {
    name: "Design & Productivity",
    skills: [
      { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Premiere Pro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" },
      { name: "CapCut", icon: capcutIcon },
      { name: "Word", icon: "https://img.icons8.com/color/96/microsoft-word-2019--v2.png" },
      { name: "Excel", icon: "https://img.icons8.com/color/96/microsoft-excel-2019--v1.png" },
    ],
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">
            What I Know
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Skills & Expertise
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden ${
                activeCategory === index
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(185_100%_47%/0.4)]"
                  : "bg-card/50 text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid with Icons */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-card/30 border border-border hover:border-primary/50 hover:bg-card/60 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-[0_10px_30px_hsl(185_100%_47%/0.2)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-14 h-14 object-contain filter drop-shadow-lg"
                    loading="lazy"
                  />
                </div>
                
                {/* Name */}
                <span className="font-medium text-foreground group-hover:text-primary transition-colors text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* All Skills Overview */}
        <div className="mt-16">
          <p className="text-center text-muted-foreground mb-8">All my skills at a glance</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skillCategories.flatMap(cat => cat.skills).map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border hover:border-primary/50 hover:bg-card transition-all duration-300 cursor-pointer group"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-5 h-5 object-contain"
                  loading="lazy"
                />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
