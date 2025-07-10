import React from 'react';
import Image from 'next/image'; // For optimized images in Next.js
import Link from 'next/link'; // For internal links if applicable
import { ExternalLink } from 'lucide-react'; // For an external link icon
import { cn } from '@/lib/utils'; // Assuming you have this utility for conditional classes

// Assuming you have these UI components from your setup (like Shadcn UI)
import { Badge } from '@/components/ui/badge'; // Adjust path based on your setup
import { buttonVariants } from '@/components/ui/button'; // Adjust path based on your setup

interface ProjectCardProps {
  title: string;
  image: string; // URL to the image
  description: string;
  website: string; // URL to the project website
  scope: string;   // e.g., "Frontend,UXUI Design" - we can split this into multiple badges
}

export default function ProjectCard({
  title,
  image,
  description,
  website,
  scope,
}: ProjectCardProps) {
  // Split the scope string into an array for individual badges
  const scopesArray = scope.split(',').map(s => s.trim());

  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden rounded-lg border", // Card container styling
        "bg-card text-card-foreground shadow-sm", // Shadcn card colors
        "group transition-all duration-300 hover:shadow-lg hover:border-primary" // Hover effects
      )}
    >
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        {image && ( // Only render if image URL is provided
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize image loading
          />
        )}
        {!image && ( // Placeholder if no image
          <div className="flex h-full items-center justify-center text-muted-foreground">
            No Image
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground flex-grow mb-4 line-clamp-3">
          {description}
        </p>

        {/* Scope Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {scopesArray.map((s, idx) => (
            <Badge key={idx} variant="secondary">
              {s}
            </Badge>
          ))}
        </div>

        {/* Website Link (Button) */}
        <div className="mt-auto"> {/* Push button to bottom */}
          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default", size: "sm" }), "w-full")}
          >
            Visit Website <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}