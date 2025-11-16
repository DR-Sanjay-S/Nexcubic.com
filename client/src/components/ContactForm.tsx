import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContact } from "@shared/schema";

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24-48 hours.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" data-testid="form-contact">
      <div>
        <Label htmlFor="name" className="sr-only">Name</Label>
        <Input
          id="name"
          required
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          data-testid="input-name"
        />
      </div>

      <div>
        <Label htmlFor="email" className="sr-only">Email</Label>
        <Input
          id="email"
          type="email"
          required
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          data-testid="input-email"
        />
      </div>

      <div>
        <Label htmlFor="company" className="sr-only">Company</Label>
        <Input
          id="company"
          placeholder="Company (optional)"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          data-testid="input-company"
        />
      </div>

      <div>
        <Label htmlFor="message" className="sr-only">Message</Label>
        <Textarea
          id="message"
          rows={4}
          required
          placeholder="Tell us about your project"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          data-testid="input-message"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <Button 
          type="submit" 
          size="lg" 
          className="bg-primary hover:bg-primary/90" 
          disabled={contactMutation.isPending}
          data-testid="button-send-message"
        >
          {contactMutation.isPending ? "Sending..." : "Send message"}
        </Button>
        <div className="text-sm text-muted-foreground">We reply in 24–48 hrs</div>
      </div>
    </form>
  );
}
