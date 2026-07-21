import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Star, Play, Clock, Users, CheckCircle2, Lock, ChevronDown, ArrowLeft } from "lucide-react";
import { getCourse, getTeacher, courses, type Course } from "@/data/mock";
import { CourseCard } from "@/components/course-card";
import { Reveal } from "@/components/reveal";
import { useState } from "react";

export const Route = createFileRoute("/courses/$courseId")({
  loader: ({ params }) => {
    const course = getCourse(params.courseId);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "الكورس غير موجود" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${loaderData.course.title} — أبلة نجيبة` },
        { name: "description", content: loaderData.course.description },
        { property: "og:title", content: loaderData.course.title },
        { property: "og:description", content: loaderData.course.description },
        { property: "og:type", content: "product" },
        { property: "og:image", content: loaderData.course.image },
        { property: "og:url", content: `/courses/${params.courseId}` },
      ],
      links: [{ rel: "canonical", href: `/courses/${params.courseId}` }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-2xl font-bold">الكورس غير موجود</h1>
      <Link to="/courses" className="mt-6 inline-flex text-primary underline">كل الكورسات</Link>
    </div>
  ),
  component: CourseDetail,
});

function CourseDetail() {
  const { course } = Route.useLoaderData() as { course: Course };
  const teacher = getTeacher(course.teacherId);
  const related = courses.filter((c) => c.id !== course.id && c.subject === course.subject).slice(0, 4);

  return (
    <div>
      <section className="gradient-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1fr_400px] items-start">
          <div>
            <nav className="text-xs opacity-80 mb-4">
              <Link to="/" className="hover:underline">الرئيسية</Link>
              <span className="mx-2">/</span>
              <Link to="/courses" className="hover:underline">الكورسات</Link>
              <span className="mx-2">/</span>
              <span>{course.subject}</span>
            </nav>
            <div className="text-sm opacity-80 mb-2">{course.subject}</div>
            <h1 className="text-3xl md:text-4xl font-black leading-tight">{course.title}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm opacity-90">
              <span className="inline-flex items-center gap-1">
                <Star className="h-4 w-4 fill-gold text-gold" /> {course.rating} تقييم
              </span>
              <span className="inline-flex items-center gap-1">
                <Users className="h-4 w-4" /> +1200 طالب
              </span>
              <span>{course.grade}</span>
            </div>
            <p className="mt-4 text-primary-foreground/85 max-w-2xl">{course.description}</p>
          </div>

          <Reveal>
            <div className="rounded-3xl bg-card text-foreground p-5 shadow-elegant">
              <div className="aspect-video rounded-2xl overflow-hidden relative">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                  <div className="h-16 w-16 rounded-full bg-primary-foreground text-primary flex items-center justify-center shadow-elegant">
                    <Play className="h-6 w-6 fill-current mr-0.5" />
                  </div>
                </button>
              </div>
              <div className="mt-5">
                <div className="text-3xl font-black">{course.price} <span className="text-base font-medium text-muted-foreground">جنيه</span></div>
                <div className="text-xs text-muted-foreground mt-1">اشترك واحصل على:</div>
                <ul className="mt-3 space-y-2 text-sm">
                  {course.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-5 w-full rounded-2xl gradient-primary py-3.5 font-bold text-primary-foreground shadow-soft hover:scale-[1.02] transition-transform">
                  اشترك الآن
                </button>
                <div className="mt-3 text-xs text-center text-muted-foreground">ضمان استرداد خلال 7 أيام</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="space-y-10">
          <Reveal>
            <h2 className="text-2xl font-extrabold mb-4">هتتعلم إيه في الكورس؟</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {course.outcomes.map((o) => (
                <div key={o} className="flex items-start gap-2 rounded-2xl border border-border bg-card p-4">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{o}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl font-extrabold mb-4">محتوى الكورس</h2>
            <div className="rounded-2xl border border-border overflow-hidden bg-card">
              {course.content.map((item, i) => (
                <div key={i} className="flex items-center justify-between gap-3 px-5 py-4 border-b border-border last:border-0 hover:bg-accent/40 transition-colors">
                  <div className="flex items-center gap-3">
                    {item.free ? <Play className="h-4 w-4 text-primary" /> : <Lock className="h-4 w-4 text-muted-foreground" />}
                    <span className="font-medium text-sm">{item.title}</span>
                    {item.free && <span className="rounded-full bg-primary/10 text-primary text-xs font-bold px-2 py-0.5">معاينة مجانية</span>}
                  </div>
                  <span className="text-xs text-muted-foreground inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {item.duration}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl font-extrabold mb-4">تقييمات الطلاب</h2>
            <div className="rounded-2xl border border-border bg-card p-6 flex flex-col md:flex-row items-center gap-8">
              <div className="text-center">
                <div className="text-5xl font-black text-primary">{course.rating}</div>
                <div className="flex justify-center gap-0.5 mt-1">
                  {[1,2,3,4,5].map((i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
                </div>
                <div className="text-xs text-muted-foreground mt-1">1206 تقييم</div>
              </div>
              <div className="flex-1 w-full space-y-1.5">
                {[95, 62, 22, 8, 3].map((v, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <span className="w-4">{5-i}</span>
                    <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full gradient-primary" style={{ width: `${v}%` }} />
                    </div>
                    <span className="w-8 text-muted-foreground">{v}%</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl font-extrabold mb-4">الأسئلة الشائعة</h2>
            <Faq />
          </Reveal>
        </div>

        {teacher && (
          <aside>
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-5 shadow-soft sticky top-24">
                <img src={teacher.image} alt={teacher.name} className="w-full aspect-square rounded-2xl object-cover" />
                <div className="mt-4 text-center">
                  <div className="text-xs text-muted-foreground">المدرس</div>
                  <h3 className="font-extrabold text-lg mt-1">{teacher.name}</h3>
                  <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                  <div className="mt-3 flex justify-center gap-4 text-xs">
                    <div><b className="text-foreground">{teacher.rating}</b> تقييم</div>
                    <div><b className="text-foreground">{teacher.studentsCount}</b> طالب</div>
                    <div><b className="text-foreground">{teacher.yearsExperience}</b> سنة</div>
                  </div>
                  <Link
                    to="/teachers/$teacherId"
                    params={{ teacherId: teacher.id }}
                    className="mt-4 inline-flex items-center gap-1 text-primary font-bold text-sm hover:underline"
                  >
                    ملف المدرس <ArrowLeft className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </aside>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold mb-6">كورسات مشابهة قد تهمك</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((c) => <CourseCard key={c.id} course={c} />)}
        </div>
      </section>
    </div>
  );
}

function Faq() {
  const items = [
    { q: "هل الكورس مناسب للمبتدئين؟", a: "نعم، الكورس مبني من الصفر ويناسب كل المستويات." },
    { q: "هل يمكنني مشاهدة الدروس بعد انتهائها؟", a: "طبعاً، الدروس متاحة طوال فترة اشتراكك." },
    { q: "كيف يمكنني التواصل مع المدرس؟", a: "من خلال مجموعة واتساب خاصة بالكورس." },
    { q: "ما هي سياسة الاسترجاع؟", a: "خلال 7 أيام من تاريخ الاشتراك بدون أسئلة." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      {items.map((it, i) => (
        <div key={i} className="border-b border-border last:border-0">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-3 px-5 py-4 text-right font-semibold hover:bg-accent/40 transition-colors"
          >
            <span>{it.q}</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{it.a}</div>}
        </div>
      ))}
    </div>
  );
}