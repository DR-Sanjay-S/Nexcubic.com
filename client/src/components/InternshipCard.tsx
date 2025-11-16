import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Calendar } from "lucide-react";
import { Link } from "wouter";

interface InternshipCardProps {
  title: string;
  type: "internship" | "seminar";
  location?: string;
  mode?: string;
  stipend?: boolean;
  date?: string;
  description?: string;
  slug?: string;
}

export default function InternshipCard({ title, type, location, mode, stipend, date, description, slug }: InternshipCardProps) {
  const applyUrl = slug ? `/careers/apply/${slug}` : "/careers/apply/position";

  return (
    <Card className="p-6 flex flex-col md:flex-row justify-between md:items-center gap-4" data-testid={`card-${type}-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex-1">
        <h4 className="font-semibold text-foreground font-heading mb-2" data-testid={`text-${type}-title`}>{title}</h4>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          {stipend && (
            <span className="inline-flex items-center gap-1">
              <Briefcase className="h-3 w-3" />
              Stipend
            </span>
          )}
          {location && (
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {location}
            </span>
          )}
          {mode && <span>· {mode}</span>}
          {date && (
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {date}
            </span>
          )}
        </div>
        {description && (
          <p className="text-sm text-muted-foreground mt-2">{description}</p>
        )}
      </div>
      {type === "internship" ? (
        <Link href={applyUrl} className="inline-block shrink-0">
          <Button variant="default" className="bg-primary hover:bg-primary/90" data-testid={`button-apply-${type}`}>
            Apply
          </Button>
        </Link>
      ) : (
        <Button variant="default" className="bg-primary hover:bg-primary/90 shrink-0" data-testid={`button-apply-${type}`}>
          Register
        </Button>
      )}
    </Card>
  );
}
