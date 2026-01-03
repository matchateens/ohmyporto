import { useState } from "react";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Vue.js", level: 70 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 75 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "GraphQL", level: 70 },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Figma", level: 85 },
      { name: "AWS", level: 65 },
      { name: "Linux", level: 75 },
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

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group p-4 rounded-xl bg-card/30 border border-border hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-sm font-mono text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="h-2 rounded-full bg-muted/30 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-1000 ease-out relative"
                    style={{ width: `${skill.level}%` }}
                  >
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Tech Icons */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Redux", "Jest", "Webpack", "Sass", "Firebase", "Vercel", "Supabase", "Prisma"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-card/50 border border-border text-sm font-mono text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
