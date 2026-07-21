import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Search, UserRound, Sparkles } from "lucide-react";
import { Logo } from "./logo";

const nav = [
  { to: "/", label: "الرئيسية" },
  { to: "/courses", label: "الكورسات" },
  { to: "/teachers", label: "المدرسون" },
  { to: "/stages", label: "المراحل" },
  { to: "/pricing", label: "الأسعار" },
  { to: "/about", label: "من نحن" },
  { to: "/help", label: "مركز المساعدة" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary [&.active]:text-primary"
              activeProps={{ className: "active" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary opacity-0 transition-opacity [.active_&]:opacity-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="بحث"
            className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Search className="h-4.5 w-4.5" />
          </button>
          <Link
            to="/auth"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
          >
            <UserRound className="h-4 w-4" />
            دخول الطلاب
          </Link>
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 rounded-full gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
          >
            <Sparkles className="h-4 w-4" />
            ابدأ التعلم
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="القائمة"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-accent"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-in slide-in-from-top-2 duration-200">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-primary [&.active]:bg-accent [&.active]:text-primary"
                activeProps={{ className: "active" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}