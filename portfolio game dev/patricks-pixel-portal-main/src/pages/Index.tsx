
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, ExternalLink, Gamepad2, Code, PenTool, Download, Send } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-muted text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/uploads/dab44f01-c09f-48c2-b223-879af741796d.png')] bg-center bg-cover opacity-20" />
        <div className="container mx-auto px-4 z-10">
          <div className="text-center space-y-8">
            <div className="relative inline-block">
              <Avatar className="w-32 h-32 border-4 border-secondary shadow-lg shadow-secondary/20">
                <AvatarImage src="/uploads/f4cb19b9-b9fa-4104-8c2e-38f489c0650b.png" alt="Patrick" />
                <AvatarFallback>PK</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-secondary inline-block mb-2">Game Developer</span>
              <br />
              <span className="text-accent inline-block">Pixel Artist</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Crafting immersive gaming experiences through code and pixels
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/80 text-white group"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>View My Work</span>
                <ExternalLink className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Contact Me</span>
                <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-y-[-2px]" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-muted to-muted/80">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Gamepad2 className="text-secondary mr-3 h-8 w-8" />
            <h2 className="text-3xl font-bold text-secondary">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pixel Adventure",
                icon: <Gamepad2 className="text-secondary w-5 h-5" />,
                description: "A retro-inspired platformer with hand-crafted pixel art and challenging gameplay mechanics.",
                tags: ["Unity", "C#", "Pixel Art"]
              },
              {
                title: "Space Survivors",
                icon: <Code className="text-secondary w-5 h-5" />,
                description: "Survive waves of alien attacks in this procedurally generated space shooter with unique weapon systems.",
                tags: ["Unreal Engine", "C++", "3D Modeling"]
              },
              {
                title: "Neon Nights",
                icon: <PenTool className="text-secondary w-5 h-5" />,
                description: "A noir detective adventure set in a cyberpunk world with branching narrative and puzzle elements.",
                tags: ["Godot", "GDScript", "Sound Design"]
              }
            ].map((project, index) => (
              <Card key={index} className="bg-muted/50 border border-accent/20 hover:border-secondary transition-colors group overflow-hidden">
                <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-secondary/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    {project.icon}
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group-hover:border-secondary group-hover:text-secondary transition-colors">
                    Learn More
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-muted/80 to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Code className="text-secondary mr-3 h-7 w-7" />
              <h2 className="text-3xl font-bold text-secondary">About Me</h2>
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
              <Avatar className="w-32 h-32 border-2 border-accent shadow-lg shadow-accent/20 flex-shrink-0">
                <AvatarImage src="//f4cb19b9-b9fa-4104-8c2e-38f489c0650b.png" alt="Patrick" />
                <AvatarFallback>PK</AvatarFallback>
              </Avatar>
              
              <div className="space-y-4">
                <p className="text-lg">
                  I'm Patrick, a passionate game developer with a love for pixel art and creating immersive gaming experiences.
                  My journey in game development started with a fascination for retro games and has evolved into crafting modern
                  experiences with a classic touch.
                </p>
                <p className="text-lg">
                  With expertise in multiple game engines and a keen eye for visual design, I bring unique worlds to life through
                  code and creativity. I believe games are the ultimate medium for storytelling and player expression.
                </p>
                
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 group">
                  <Download className="mr-2 w-5 h-5" />
                  <span>Download Resume</span>
                </Button>
              </div>
            </div>
            
            <div className="bg-muted/30 border border-accent/10 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 border border-accent/10 rounded-lg bg-muted/50 hover:border-secondary transition-all">
                <Gamepad2 className="text-secondary w-10 h-10 mb-4" />
                <h3 className="text-lg font-bold mb-2">Game Development</h3>
                <p className="text-gray-400">Creating engaging gameplay mechanics and systems</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 border border-accent/10 rounded-lg bg-muted/50 hover:border-secondary transition-all">
                <PenTool className="text-secondary w-10 h-10 mb-4" />
                <h3 className="text-lg font-bold mb-2">Pixel Art</h3>
                <p className="text-gray-400">Crafting detailed visuals with a retro aesthetic</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 border border-accent/10 rounded-lg bg-muted/50 hover:border-secondary transition-all">
                <Code className="text-secondary w-10 h-10 mb-4" />
                <h3 className="text-lg font-bold mb-2">Engine Optimization</h3>
                <p className="text-gray-400">Building efficient systems for smooth gameplay</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-t from-muted to-muted/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8">
              <Mail className="text-secondary mr-3 h-7 w-7" />
              <h2 className="text-3xl font-bold text-secondary">Get in Touch</h2>
            </div>
            <p className="text-lg mb-8">
              Interested in collaborating or have a project in mind? Let's create something amazing together.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="p-3 bg-muted/50 rounded-full border border-accent/20 hover:border-secondary transition-all hover:scale-110">
                <Github className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="p-3 bg-muted/50 rounded-full border border-accent/20 hover:border-secondary transition-all hover:scale-110">
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="p-3 bg-muted/50 rounded-full border border-accent/20 hover:border-secondary transition-all hover:scale-110">
                <Mail className="w-6 h-6 text-white" />
              </a>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
