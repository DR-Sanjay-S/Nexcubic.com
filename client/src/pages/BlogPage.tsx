import BlogCard from "@/components/BlogCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import startupImage from "@assets/generated_images/Startup_tips_blog_thumbnail_b2f7b78a.png";
import aiImage from "@assets/generated_images/AI_automation_blog_thumbnail_f31e6060.png";

const blogPosts = [
  {
    slug: "validate-mvp-quickly",
    image: startupImage,
    category: "Startup Tips",
    readTime: "3 min",
    title: "How to validate your MVP quickly",
    excerpt: "A streamlined playbook for early validation without wasting time or money on features nobody wants.",
  },
  {
    slug: "ai-automation-guide",
    image: aiImage,
    category: "AI & Automation",
    readTime: "5 min",
    title: "Complete guide to AI automation for startups",
    excerpt: "Learn how to implement AI workflows that save time and reduce operational costs by 10× or more.",
  },
  {
    slug: "product-development-tips",
    image: startupImage,
    category: "Product Dev",
    readTime: "4 min",
    title: "10 product development tips from Y Combinator",
    excerpt: "Key lessons from successful YC startups on building products that users actually want and pay for.",
  },
  {
    slug: "student-guide-tech",
    image: aiImage,
    category: "Student Guides",
    readTime: "6 min",
    title: "Student's guide to breaking into tech",
    excerpt: "Everything you need to know about internships, skills, and landing your first tech role.",
  },
  {
    slug: "mvp-mistakes",
    image: startupImage,
    category: "Startup Tips",
    readTime: "4 min",
    title: "5 common MVP mistakes to avoid",
    excerpt: "Learn from others' mistakes and save months of wasted effort on your startup journey.",
  },
  {
    slug: "ai-chatbots-business",
    image: aiImage,
    category: "AI & Automation",
    readTime: "7 min",
    title: "Building AI chatbots for your business",
    excerpt: "A practical guide to implementing conversational AI that actually helps your customers.",
  },
];

const categories = ["All", "Startup Tips", "AI & Automation", "Product Dev", "Student Guides"];

export default function BlogPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground font-heading mb-4" data-testid="text-blog-page-heading">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground">
            Insights on startups, product development, AI automation, and tech careers.
          </p>
        </div>

        <Tabs defaultValue="All" className="mb-12">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} data-testid={`tab-${category.toLowerCase().replace(/\s+/g, '-')}`}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                  .filter((post) => category === "All" || post.category === category)
                  .map((post) => (
                    <BlogCard key={post.slug} {...post} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
