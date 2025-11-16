import InternshipCard from '../InternshipCard'

export default function InternshipCardExample() {
  return (
    <div className="p-8 bg-muted/30 space-y-4">
      <InternshipCard
        title="Frontend Intern — 3 months"
        type="internship"
        location="Bangalore"
        mode="Hybrid"
        stipend={true}
      />
      <InternshipCard
        title="AI for Product Teams"
        type="seminar"
        date="Nov 30, 2025"
        description="A hands-on workshop for product managers and students."
      />
    </div>
  )
}
