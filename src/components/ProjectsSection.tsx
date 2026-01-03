import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with cart, payments, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management with real-time updates and team features.",
    tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Chat Assistant",
    description: "Intelligent chatbot powered by machine learning for customer support.",
    tags: ["Python", "TensorFlow", "FastAPI", "React"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio with animations and interactive elements.",
    tags: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather data visualization with forecasts and alerts.",
    tags: ["Vue.js", "D3.js", "Weather API"],
    github: "#",
    demo: "#",
  },
  {
    title: "Social Media App",
    description: "Feature-rich social platform with posts, stories, and messaging.",
    tags: ["React Native", "Firebase", "Redux"],
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Folder size={24} />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:text-primary hover:scale-110 transition-all"
                    >
                      <Github size={20} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:text-primary hover:scale-110 transition-all"
                    >
                      <ExternalLink size={20} />
                    </Button>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-muted/50 text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom glow effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
