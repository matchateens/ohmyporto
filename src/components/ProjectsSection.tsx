import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Figma } from "lucide-react";

// Project images - Sky Jobs
import skyjobsLoading from "@/assets/projects/skyjobs-loading.png";
import skyjobsLogin from "@/assets/projects/skyjobs-preview.png";
import skyjobsDetail from "@/assets/projects/skyjobs-detail.png";

// Project images - KitsuMax
import kitsumaxLoading from "@/assets/projects/kitsumax-loading.png";
import kitsumaxHome from "@/assets/projects/kitsumax-home.png";
import kitsumaxPlayer from "@/assets/projects/kitsumax-player.png";

interface Project {
  title: string;
  description: string;
  images?: string[];
  tags: string[];
  github?: string;
  figma?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Sky Jobs",
    description: "Aplikasi pencarian kerja dengan antarmuka modern yang memudahkan pengguna untuk menemukan, menyimpan, dan melamar pekerjaan. Dilengkapi fitur misi harian dan leaderboard untuk meningkatkan interaksi serta motivasi pengguna.",
    images: [skyjobsLoading, skyjobsLogin, skyjobsDetail],
    tags: ["UI/UX Design", "Figma", "2022"],
    figma: "https://www.figma.com/design/K0CIWgTN9lBozn7fgj3MVz/Untitled?node-id=0-1&p=f&t=lcyDtlv0vG2LJ7Zd-0",
  },
  {
    title: "KitsuMax",
    description: "KITSUMAX adalah aplikasi streaming anime dengan desain modern dan navigasi mudah, menampilkan fitur login cepat, pilihan genre, profil pengguna, dan tampilan visual yang menarik untuk pengalaman menonton yang nyaman.",
    images: [kitsumaxLoading, kitsumaxHome, kitsumaxPlayer],
    tags: ["UI/UX Design", "Figma", "2023"],
    figma: "https://www.figma.com/design/KHPbDMGh1pf1kcOZxDdmI7/Untitled?node-id=0-1&p=f&t=9ZR3D9VlC6LFM3zk-0",
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
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image Preview - 3 images in one frame */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-4">
                  {project.images && project.images.length > 0 ? (
                    <div className="flex gap-2 h-full items-center justify-center">
                      {project.images.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative h-full flex-1 rounded-lg overflow-hidden shadow-lg border border-border/50 group-hover:scale-[1.02] transition-transform duration-500"
                          style={{ animationDelay: `${imgIndex * 50}ms` }}
                        >
                          <img
                            src={img}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-muted-foreground/50 text-sm">No Preview</span>
                    </div>
                  )}
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Header with links */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-1">
                      {"github" in project && project.github && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:text-primary hover:scale-110 transition-all h-8 w-8"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={18} />
                          </a>
                        </Button>
                      )}
                      {"figma" in project && project.figma && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:text-primary hover:scale-110 transition-all h-8 w-8"
                          asChild
                        >
                          <a href={project.figma} target="_blank" rel="noopener noreferrer">
                            <Figma size={18} />
                          </a>
                        </Button>
                      )}
                      {"demo" in project && project.demo && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:text-primary hover:scale-110 transition-all h-8 w-8"
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={18} />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
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
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Projects coming soon...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
