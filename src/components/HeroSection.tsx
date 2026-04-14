import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(185_100%_47%/0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(185_51%_41%/0.1)_0%,_transparent_50%)]" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-mono text-lg mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            👋 Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="gradient-text">Fathin Cahyo Ramadhan</span>
          </h1>
          
          {/* Title with typing effect */}
          <div className="h-12 mb-8 overflow-hidden">
          <p className="text-xl md:text-2xl text-muted-foreground font-mono animate-typing inline-block">
              Data Science | IT Support | Web Development
            </p>
          </div>
          
          {/* Description */}
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            Fresh Graduate Teknologi Informasi dengan minat yang kuat di bidang Data Science, IT Support, dan Web Development. 
            Berpengalaman dalam analisis data, eksplorasi tren, serta pengembangan aplikasi web menggunakan Django.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '1s' }}>
            <a href="#projects">
              <Button variant="glow" size="lg">
                View My Work
              </Button>
            </a>
            <a href="#about">
              <Button variant="outline" size="lg">
                About Me
              </Button>
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <a href="https://github.com/matchateens" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
                <Github size={24} />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/fatin-cahya/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
                <Linkedin size={24} />
              </Button>
            </a>
            <a href="https://www.instagram.com/fatin.cahyo_" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
                <Instagram size={24} />
              </Button>
            </a>
            <a href="mailto:fatincahya69@gmail.com">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
                <Mail size={24} />
              </Button>
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
