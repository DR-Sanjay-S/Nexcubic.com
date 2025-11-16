import { useState } from "react";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertApplication } from "@shared/schema";
import { ArrowLeft, Upload } from "lucide-react";
import { Link } from "wouter";

export default function ApplicationPage() {
  const [, params] = useRoute("/careers/apply/:position");
  const { toast } = useToast();
  const position = params?.position?.replace(/-/g, ' ') || "";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position,
    resume: "",
    coverLetter: "",
  });

  const applicationMutation = useMutation({
    mutationFn: async (data: InsertApplication) => {
      return await apiRequest("POST", "/api/applications", data);
    },
    onSuccess: () => {
      toast({
        title: "Application submitted!",
        description: "We'll review your application and get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        position,
        resume: "",
        coverLetter: "",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    applicationMutation.mutate(formData);
  };

  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/careers" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8" data-testid="link-back-to-careers">
          <ArrowLeft className="h-4 w-4" />
          Back to Careers
        </Link>

        <h1 className="text-4xl font-extrabold tracking-tight text-foreground font-heading mb-4" data-testid="text-application-heading">
          Apply for {params?.position?.replace(/-/g, ' ') || 'Position'}
        </h1>
        <p className="text-muted-foreground mb-8">
          Fill out the form below to apply for this position. We'll review your application and get back to you within a week.
        </p>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-application">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  data-testid="input-applicant-name"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  data-testid="input-applicant-email"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone || ""}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                data-testid="input-applicant-phone"
              />
            </div>

            <div>
              <Label htmlFor="resume">Resume / CV URL</Label>
              <div className="flex gap-2">
                <Input
                  id="resume"
                  type="url"
                  placeholder="https://drive.google.com/..."
                  value={formData.resume || ""}
                  onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                  data-testid="input-applicant-resume"
                />
                <Button type="button" variant="outline" size="icon" disabled>
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Provide a link to your resume (Google Drive, Dropbox, etc.)</p>
            </div>

            <div>
              <Label htmlFor="coverLetter">Cover Letter / Why you're interested</Label>
              <Textarea
                id="coverLetter"
                rows={6}
                placeholder="Tell us why you're a great fit for this position..."
                value={formData.coverLetter || ""}
                onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                data-testid="input-applicant-cover-letter"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={applicationMutation.isPending}
              data-testid="button-submit-application"
            >
              {applicationMutation.isPending ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
