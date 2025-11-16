import { Card } from "@/components/ui/card";
import { TrendingUp, Zap, Users } from "lucide-react";

export default function MetricsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-primary to-chart-2 text-primary-foreground p-8 border-0" data-testid="card-metric-activation">
            <TrendingUp className="h-8 w-8 mb-4 opacity-90" />
            <div className="text-4xl font-bold mb-2">3x</div>
            <div className="text-sm opacity-90">Avg. user activation for our SaaS clients</div>
          </Card>

          <Card className="p-8 hover-elevate" data-testid="card-case-study-startup">
            <Users className="h-6 w-6 text-primary mb-3" />
            <h4 className="font-semibold text-foreground font-heading">Startup X</h4>
            <p className="text-sm text-muted-foreground mt-2">Built MVP in 6 weeks. Series A ready.</p>
          </Card>

          <Card className="p-8 hover-elevate" data-testid="card-case-study-automation">
            <Zap className="h-6 w-6 text-chart-2 mb-3" />
            <h4 className="font-semibold text-foreground font-heading">Automated workflows</h4>
            <p className="text-sm text-muted-foreground mt-2">Saved 200+ hours/month via AI automation</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
