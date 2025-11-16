import ServiceCard from '../ServiceCard'
import { Code2 } from 'lucide-react'

export default function ServiceCardExample() {
  return (
    <div className="p-8 bg-muted/50">
      <ServiceCard
        icon={Code2}
        title="Web Development"
        description="Fast, scalable React & Next.js applications tailored for product-market fit."
      />
    </div>
  )
}
