import ServiceCard from "./ServiceCard";
import { Code2, Smartphone, Sparkles, Palette, TrendingUp, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Fast, scalable React & Next.js applications tailored for product-market fit.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile apps that users love, built with modern frameworks.",
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    description: "Intelligent automation workflows that save time and reduce operational costs by 10×.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description: "User-centered design that drives engagement and conversion through intuitive interfaces.",
  },
  {
    icon: TrendingUp,
    title: "Marketing & Advertising",
    description: "Growth marketing strategies and campaigns that acquire users and maximize ROI.",
  },
  {
    icon: Lightbulb,
    title: "Tech Consultancy",
    description: "Strategic technology guidance to help you make the right decisions for your product.",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-foreground font-heading" data-testid="text-services-heading">Services</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl" data-testid="text-services-description">
          Product-focused engineering and growth services for startups and SMBs.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
