export default function TermsPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground font-heading mb-8" data-testid="text-terms-heading">
          Terms of Service
        </h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: November 16, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground font-heading mb-4">Agreement to Terms</h2>
            <p className="text-foreground mb-4">
              By accessing or using NexCubic's services, you agree to be bound by these Terms of Service. If you disagree with any
              part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground font-heading mb-4">Services</h2>
            <p className="text-foreground mb-4">
              NexCubic provides technology consulting, web and mobile application development, AI automation, UI/UX design, and
              marketing services for startups and businesses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground font-heading mb-4">Intellectual Property</h2>
            <p className="text-foreground mb-4">
              Unless otherwise agreed upon in writing, all intellectual property rights in deliverables created by NexCubic shall be
              owned by the client upon full payment. NexCubic retains the right to showcase work in our portfolio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground font-heading mb-4">Payment Terms</h2>
            <p className="text-foreground mb-4">
              Payment terms will be specified in individual service agreements. Late payments may result in suspension of services
              and additional fees.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground font-heading mb-4">Limitation of Liability</h2>
            <p className="text-foreground mb-4">
              NexCubic shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from
              your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground font-heading mb-4">Contact</h2>
            <p className="text-foreground mb-4">
              For questions about these Terms, please contact us at:{" "}
              <a href="mailto:legal@nexcubic.com" className="text-primary hover:underline">
                legal@nexcubic.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
