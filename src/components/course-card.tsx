import { Link } from "@tanstack/react-router";
import { Heart, Play, Star } from "lucide-react";
import type { Course } from "@/data/mock";

export function CourseCard({ course }: { course: Course }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-300 hover:shadow-elegant hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <button
          aria-label="حفظ"
          className="absolute top-3 left-3 h-9 w-9 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:text-destructive transition-colors"
        >
          <Heart className="h-4 w-4" />
        </button>
        <div className="absolute bottom-3 right-3 bg-background/85 backdrop-blur rounded-full px-3 py-1 text-xs font-bold text-foreground">
          {course.subject} · {course.grade}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-3 flex items-center justify-between text-xs">
          <span className="rounded-full bg-accent px-3 py-1 font-semibold text-accent-foreground">
            {course.stage}
          </span>
          <div className="flex items-center gap-3 text-muted-foreground">
            <span>{course.lessons} درس</span>
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-gold text-gold" />
              <span className="font-semibold text-foreground">{course.rating}</span>
            </span>
          </div>
        </div>
        <h3 className="mb-1 font-bold text-foreground line-clamp-2">{course.title}</h3>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{course.description}</p>
        <Link
          to="/courses/$courseId"
          params={{ courseId: course.id }}
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-2xl gradient-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
        >
          <Play className="h-4 w-4 fill-current" />
          ابدأ الآن
        </Link>
      </div>
    </div>
  );
}