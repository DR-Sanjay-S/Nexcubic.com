import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Clock } from "lucide-react";

interface BlogCardProps {
  slug: string;
  image: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
}

export default function BlogCard({ slug, image, category, readTime, title, excerpt }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block h-full">
      <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all h-full" data-testid={`card-blog-${slug}`}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-40 object-cover" 
          data-testid={`img-blog-${slug}`}
        />
        <div className="p-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2" data-testid={`text-blog-meta-${slug}`}>
            <span className="text-primary font-medium">{category}</span>
            <span>·</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readTime}
            </div>
          </div>
          <h3 className="font-semibold text-foreground font-heading mb-2" data-testid={`text-blog-title-${slug}`}>{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2" data-testid={`text-blog-excerpt-${slug}`}>{excerpt}</p>
        </div>
      </Card>
    </Link>
  );
}
