import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Sparkles, ChevronDown, ArrowLeft } from "lucide-react";
import { CourseCard } from "@/components/course-card";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { courses, stages, subjects, type Stage } from "@/data/mock";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "الكورسات — أبلة نجيبة" },
      { name: "description", content: "كل الكورسات لكل المراحل والمواد مع أفضل المدرسين." },
      { property: "og:title", content: "الكورسات — أبلة نجيبة" },
      { property: "og:description", content: "اختر الكورس المناسب وابدأ التفوّق." },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  const [stage, setStage] = useState<Stage | "all">("all");
  const [subject, setSubject] = useState<string>("all");
  const [q, setQ] = useState("");

  const filtered = courses.filter((c) => {
    if (stage !== "all" && c.stage !== stage) return false;
    if (subject !== "all" && c.subject !== subject) return false;
    if (q && !c.title.includes(q) && !c.description.includes(q)) return false;
    return true;
  });

  return (
    <div>
      <section className="gradient-primary text-primary-foreground py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-xs opacity-80 mb-4">
            <Link to="/" className="hover:underline">الرئيسية</Link>
            <span className="mx-2">/</span>
            <span>الكورسات</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black">اختر الكورس المناسب وابدأ التفوّق</h1>
          <p className="mt-3 text-primary-foreground/80 max-w-2xl">
            اكتشف أفضل الكورسات مع أمهر المدرسين ثم مبتدأ متابعة دقيقة ونتائج حقيقية.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-card border border-border shadow-soft p-4 md:p-5 flex flex-col md:flex-row gap-3 items-stretch md:items-center">
          <div className="relative flex-1">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="ابحث عن كورس أو مدرس"
              className="w-full rounded-2xl bg-muted px-11 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <FilterSelect value={subject} onChange={setSubject} label="كل المواد" options={["all", ...subjects]} labels={{ all: "كل المواد" }} />
          <FilterSelect value={stage} onChange={(v) => setStage(v as Stage | "all")} label="كل المراحل" options={["all", ...stages]} labels={{ all: "كل المراحل" }} />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {(["all", ...stages] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStage(s)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
                stage === s ? "gradient-primary text-primary-foreground shadow-soft" : "bg-accent text-accent-foreground hover:bg-accent/80"
              }`}
            >
              {s === "all" ? "كل الكورسات" : s}
            </button>
          ))}
        </div>

        <div className="mt-4 text-sm text-muted-foreground">عرض {filtered.length} من {courses.length} كورس</div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((c, i) => (
            <Reveal key={c.id} delay={i * 50}>
              <CourseCard course={c} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-soft">
            <div className="h-20 w-20 shrink-0 rounded-3xl gradient-primary flex items-center justify-center text-primary-foreground">
              <Sparkles className="h-9 w-9" />
            </div>
            <div className="flex-1 text-center md:text-right">
              <h3 className="text-xl font-extrabold">مش عارف تختار؟</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                خلينا نرشح لك الأنسب. جاوب على شوية أسئلة بسيطة ومنصة أبلة نجيبة هتقترح لك كورسات تناسب مستواك وهدفك.
              </p>
            </div>
            <Link
              to="/help"
              className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-soft hover:scale-105 transition-transform"
            >
              ساعدني اختار <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-16">
          <SectionHeading title="المواد الأكثر طلباً" align="center" />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {subjects.map((s) => (
              <Link
                key={s}
                to="/courses"
                className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
              >
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-black">
                  {s.charAt(0)}
                </div>
                <div className="text-sm font-bold">{s}</div>
                <div className="text-xs text-muted-foreground">{courses.filter((c) => c.subject === s).length} كورس</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FilterSelect({
  value, onChange, options, labels = {},
}: {
  value: string;
  onChange: (v: string) => void;
  label: string;
  options: readonly string[];
  labels?: Record<string, string>;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-2xl bg-muted px-5 pl-10 py-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-primary/50 min-w-[180px]"
      >
        {options.map((o) => (
          <option key={o} value={o}>{labels[o] ?? o}</option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    </div>
  );
}