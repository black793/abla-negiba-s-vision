import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import type { Teacher } from "@/data/mock";

export function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <Link
      to="/teachers/$teacherId"
      params={{ teacherId: teacher.id }}
      className="group block overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-300 hover:shadow-elegant hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={teacher.image}
          alt={teacher.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-3 right-3 rounded-full bg-background/90 backdrop-blur px-2.5 py-1 text-xs font-bold flex items-center gap-1">
          <Star className="h-3 w-3 fill-gold text-gold" />
          {teacher.rating}
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{teacher.name}</h3>
        <p className="mt-0.5 text-sm text-muted-foreground">{teacher.subject}</p>
        <div className="mt-3 flex flex-wrap justify-center gap-1">
          {teacher.stages.map((s) => (
            <span key={s} className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
              {s}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}