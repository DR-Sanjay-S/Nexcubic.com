import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Smartphone, Sparkles, Palette, TrendingUp, Lightbulb, ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Fast, scalable web applications that drive growth and engagement.",
    features: [
      "React & Next.js development",
      "Responsive, mobile-first design",
      "SEO optimization & performance",
      "API integration & backend setup",
    ],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile apps that users love.",
    features: [
      "iOS & Android development",
      "React Native & Flutter",
      "App Store optimization",
      "Push notifications & analytics",
    ],
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    description: "Intelligent automation workflows that save time and reduce costs.",
    features: [
      "AI chatbots & assistants",
      "Workflow automation",
      "Data processing pipelines",
      "Machine learning integration",
    ],
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description: "User-centered design that drives engagement and conversion.",
    features: [
      "User research & testing",
      "Wireframing & prototyping",
      "Design systems & components",
      "Interaction design",
    ],
  },
  {
    icon: TrendingUp,
    title: "Marketing & Advertising",
    description: "Growth marketing strategies that maximize ROI.",
    features: [
      "Digital marketing campaigns",
      "SEO & content strategy",
      "Social media marketing",
      "Analytics & optimization",
    ],
  },
  {
    icon: Lightbulb,
    title: "Tech Consultancy",
    description: "Strategic technology guidance for informed product decisions.",
    features: [
      "Technology stack selection",
      "Architecture planning",
      "Technical due diligence",
      "CTO advisory services",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground font-heading mb-4" data-testid="text-services-page-heading">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive tech solutions to help startups build, grow, and scale successfully.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="p-8 hover-elevate" data-testid={`card-service-detail-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 rounded-lg bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground font-heading">{service.title}</h2>
                </div>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-chart-2/10 border-primary/20 p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground font-heading mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build and grow your product.
          </p>
          <Link href="/contact" className="inline-block">
            <Button size="lg" className="bg-gradient-to-r from-primary to-chart-2" data-testid="button-get-in-touch">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
