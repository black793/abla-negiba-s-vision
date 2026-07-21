import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { TeacherCard } from "@/components/teacher-card";
import { Reveal } from "@/components/reveal";
import { teachers, stages, subjects, type Stage } from "@/data/mock";

export const Route = createFileRoute("/teachers")({
  head: () => ({
    meta: [
      { title: "المدرسون — أبلة نجيبة" },
      { name: "description", content: "نخبة من المدرسين ذوي الخبرة في كل المواد والمراحل." },
      { property: "og:title", content: "المدرسون — أبلة نجيبة" },
      { property: "og:description", content: "اختر أفضل مدرس يناسبك." },
      { property: "og:url", content: "/teachers" },
    ],
    links: [{ rel: "canonical", href: "/teachers" }],
  }),
  component: TeachersPage,
});

function TeachersPage() {
  const [stage, setStage] = useState<Stage | "all">("all");
  const [subject, setSubject] = useState<string>("all");

  const filtered = teachers.filter((t) => {
    if (stage !== "all" && !t.stages.includes(stage)) return false;
    if (subject !== "all" && t.subject !== subject) return false;
    return true;
  });

  return (
    <div>
      <section className="gradient-primary text-primary-foreground py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-black">تعلّم مع أفضل المدرسين</h1>
          <p className="mt-3 text-primary-foreground/80 max-w-2xl mx-auto">
            مدرسون تم التحقق من خبراتهم وأساليبهم لضمان أفضل تجربة تعليمية لأولادكم.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {(["all", ...stages] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStage(s)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
                stage === s ? "gradient-primary text-primary-foreground" : "bg-accent text-accent-foreground"
              }`}
            >
              {s === "all" ? "كل المراحل" : s}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {(["all", ...subjects] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSubject(s)}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                subject === s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {s === "all" ? "كل المواد" : s}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((t, i) => (
            <Reveal key={t.id} delay={i * 50}>
              <TeacherCard teacher={t} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}