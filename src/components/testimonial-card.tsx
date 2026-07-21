import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/mock";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1">
      <Quote className="h-6 w-6 text-primary/40 rotate-180" />
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground">{t.quote}</p>
      <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
        <img src={t.image} alt={t.name} loading="lazy" className="h-11 w-11 rounded-full object-cover" />
        <div>
          <div className="text-sm font-bold text-foreground">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.grade}</div>
        </div>
      </div>
    </div>
  );
}