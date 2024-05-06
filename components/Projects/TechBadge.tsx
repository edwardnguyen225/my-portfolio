import React from "react";

export default function TechBadge({ tech }: { tech: string }) {
  return (
    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-cyan-600 text-white text-primary-foreground hover:bg-primary/80">
      {tech}
    </div>
  );
}
