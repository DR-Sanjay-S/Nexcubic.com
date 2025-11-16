import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Target, Zap, Users, CheckCircle } from "lucide-react";

const team = [
  { name: "Arjun Sharma", role: "Founder & CEO", initials: "AS" },
  { name: "Priya Patel", role: "Head of Engineering", initials: "PP" },
  { name: "Rahul Kumar", role: "Lead Designer", initials: "RK" },
  { name: "Ananya Singh", role: "Growth Lead", initials: "AS" },
];

const timeline = [
  { year: "2023", event: "NexCubic founded", description: "Started with a vision to help startups build better products" },
  { year: "2024", event: "20+ clients served", description: "Expanded team and launched AI automation services" },
  { year: "2025", event: "Series A partnerships", description: "Helped 3 clients reach Series A funding" },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're passionate about helping startups succeed and build products that matter.",
  },
  {
    icon: Zap,
    title: "Move Fast",
    description: "Speed is critical for startups. We deliver quality work without unnecessary delays.",
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    description: "We're not just vendors—we're invested in your success and growth.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground font-heading mb-4" data-testid="text-about-page-heading">
            About NexCubic
          </h1>
          <p className="text-lg text-muted-foreground">
            We're a team of engineers, designers, and growth experts helping startups build products that users love.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground font-heading mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="p-8 text-center hover-elevate" data-testid={`card-value-${value.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="inline-flex p-4 rounded-lg bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-heading mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground font-heading mb-8 text-center">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6 mb-8 last:mb-0" data-testid={`timeline-item-${item.year}`}>
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  {index < timeline.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <div className="text-sm font-semibold text-primary mb-1">{item.year}</div>
                  <h3 className="text-xl font-bold text-foreground font-heading mb-2">{item.event}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground font-heading mb-8 text-center">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="p-6 text-center hover-elevate" data-testid={`card-team-${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <Avatar className="h-20 w-20 mx-auto mb-4">
                  <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">{member.initials}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-foreground font-heading mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
