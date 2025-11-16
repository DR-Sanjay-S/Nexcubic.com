import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_section_tech_illustration_17d18559.png";

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="lg:flex-1">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full" data-testid="text-eyebrow">
              <Sparkles className="h-3 w-3" />
              NexCubic · Startup & Scaleup Tech
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground font-heading" data-testid="text-hero-heading">
              Build faster. Automate smarter. Grow stronger.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed" data-testid="text-hero-description">
              Web & mobile apps, AI automation, UI/UX and growth marketing — productized engineering and strategic tech consultancy for startups.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="/contact" className="inline-block">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-chart-2 hover:opacity-90 shadow-lg transition-all hover:shadow-xl group" 
                  data-testid="button-work-with-us"
                >
                  Work with us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-view-services">
                View services →
              </a>
            </div>
            <div className="mt-8 text-sm text-muted-foreground" data-testid="text-trust-indicator">
              Trusted by <span className="font-semibold text-foreground">20+</span> startups
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Tech illustration showing web development and AI automation" 
                className="w-full rounded-2xl shadow-2xl"
                data-testid="img-hero"
              />
              <div className="absolute -bottom-6 left-6 p-4 bg-card rounded-2xl shadow-lg border border-card-border max-w-xs animate-in slide-in-from-bottom-4 duration-700" data-testid="card-floating-metric">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">AI Automation</div>
                    <div className="text-xs text-muted-foreground">Reduce manual work 10×</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
