import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 group ${className}`} aria-label="أبلة نجيبة">
      <div className="relative h-11 w-11 rounded-2xl gradient-primary flex items-center justify-center shadow-soft transition-transform group-hover:scale-105">
        <span className="text-primary-foreground font-black text-lg">ن</span>
        <span className="absolute -top-1 -left-1 h-3 w-3 rounded-full bg-gold ring-2 ring-background" />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-lg font-extrabold text-foreground">أبلة نجيبة</span>
        <span className="text-[10px] font-medium tracking-widest text-muted-foreground uppercase">ABLA NAGEEBA</span>
      </div>
    </Link>
  );
}