import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="p-6 hover-elevate active-elevate-2 transition-all cursor-pointer" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-primary/10">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-semibold text-foreground font-heading">{title}</h3>
      </div>
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
}
