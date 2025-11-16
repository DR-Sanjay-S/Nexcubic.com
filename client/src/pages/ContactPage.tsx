import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground font-heading mb-4" data-testid="text-contact-page-heading">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Let's talk about how we can help you build and grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground font-heading mb-6">Send us a message</h2>
              <ContactForm />
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6" data-testid="card-contact-email">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground font-heading mb-1">Email</h3>
                  <a href="mailto:hello@nexcubic.com" className="text-muted-foreground hover:text-primary transition-colors">
                    hello@nexcubic.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6" data-testid="card-contact-location">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground font-heading mb-1">Location</h3>
                  <p className="text-muted-foreground">Bangalore, India</p>
                </div>
              </div>
            </Card>

            <Card className="p-6" data-testid="card-contact-hours">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground font-heading mb-1">Response Time</h3>
                  <p className="text-muted-foreground">We typically respond within 24-48 hours</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-chart-2/10 border-primary/20 p-6">
              <h3 className="font-semibold text-foreground font-heading mb-2">Looking for partnerships?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We're always open to collaboration opportunities with agencies and tech partners.
              </p>
              <a href="mailto:partnerships@nexcubic.com" className="text-sm text-primary hover:underline">
                partnerships@nexcubic.com
              </a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
