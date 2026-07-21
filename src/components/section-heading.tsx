import type { ReactNode } from "react";

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  action,
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  action?: ReactNode;
}) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : "flex items-end justify-between gap-4"}`}>
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">{title}</h2>
        {align === "center" && (
          <div className="mt-3 flex justify-center">
            <span className="inline-block h-1 w-16 rounded-full gradient-primary" />
          </div>
        )}
        {subtitle && (
          <p className={`mt-3 text-muted-foreground max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
            {subtitle}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}