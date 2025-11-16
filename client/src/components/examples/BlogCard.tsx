import BlogCard from '../BlogCard'
import blogImage from '@assets/generated_images/Startup_tips_blog_thumbnail_b2f7b78a.png'

export default function BlogCardExample() {
  return (
    <div className="p-8 max-w-sm bg-background">
      <BlogCard
        slug="validate-mvp-quickly"
        image={blogImage}
        category="Startup Tips"
        readTime="3 min"
        title="How to validate your MVP quickly"
        excerpt="A streamlined playbook for early validation without wasting time or money on features nobody wants."
      />
    </div>
  )
}
