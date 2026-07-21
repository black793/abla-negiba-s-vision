import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Star, Users, BadgeCheck, Calendar, ChevronDown, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { getTeacher, getCoursesByTeacher, type Teacher } from "@/data/mock";
import { CourseCard } from "@/components/course-card";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/teachers/$teacherId")({
  loader: ({ params }) => {
    const teacher = getTeacher(params.teacherId);
    if (!teacher) throw notFound();
    return { teacher };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "المدرس غير موجود" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${loaderData.teacher.name} — ${loaderData.teacher.subject} — أبلة نجيبة` },
        { name: "description", content: loaderData.teacher.bio },
        { property: "og:title", content: loaderData.teacher.name },
        { property: "og:description", content: loaderData.teacher.bio },
        { property: "og:image", content: loaderData.teacher.image },
        { property: "og:url", content: `/teachers/${params.teacherId}` },
      ],
      links: [{ rel: "canonical", href: `/teachers/${params.teacherId}` }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-2xl font-bold">المدرس غير موجود</h1>
      <Link to="/teachers" className="mt-6 inline-flex text-primary underline">كل المدرسين</Link>
    </div>
  ),
  component: TeacherDetail,
});

function TeacherDetail() {
  const { teacher } = Route.useLoaderData() as { teacher: Teacher };
  const teacherCourses = getCoursesByTeacher(teacher.id);

  return (
    <div>
      <section className="gradient-primary text-primary-foreground py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
          <img src={teacher.image} alt={teacher.name} className="h-40 w-40 md:h-52 md:w-52 rounded-3xl object-cover shadow-elegant border-4 border-primary-foreground/20" />
          <div className="flex-1 text-center md:text-right">
            <div className="text-sm opacity-80">المدرس</div>
            <h1 className="mt-1 text-3xl md:text-4xl font-black inline-flex items-center gap-2">
              {teacher.name}
              <BadgeCheck className="h-6 w-6 text-gold" />
            </h1>
            <p className="mt-1 opacity-90">{teacher.subject} · {teacher.stages.join(" · ")}</p>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
              <span className="rounded-full bg-primary-foreground/15 backdrop-blur px-4 py-1.5 text-sm inline-flex items-center gap-1">
                <Star className="h-4 w-4 fill-gold text-gold" /> {teacher.rating}
              </span>
              <span className="rounded-full bg-primary-foreground/15 backdrop-blur px-4 py-1.5 text-sm inline-flex items-center gap-1">
                <Users className="h-4 w-4" /> {teacher.studentsCount}+ طالب
              </span>
              <span className="rounded-full bg-primary-foreground/15 backdrop-blur px-4 py-1.5 text-sm inline-flex items-center gap-1">
                <Calendar className="h-4 w-4" /> {teacher.yearsExperience} سنة خبرة
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-2xl font-extrabold mb-3">أسلوبي في التدريس</h2>
          <ul className="space-y-2">
            {teacher.approach.map((a, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-foreground/85">{a}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-2xl font-extrabold mb-3">عن المدرس</h2>
          <div className="rounded-2xl bg-accent/40 p-5 text-foreground/85 leading-relaxed">{teacher.bio}</div>
        </Reveal>
      </section>

      <section className="bg-accent/30 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold mb-6">المؤهلات والخبرات</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {teacher.qualifications.map((q, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="rounded-2xl bg-card border border-border p-5 h-full">
                  <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">B</div>
                  <div className="mt-3 text-xs text-muted-foreground">{q.year}</div>
                  <div className="font-bold mt-1">{q.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{q.place}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold">كورسات المدرس</h2>
          <Link to="/courses" className="text-sm text-primary font-bold hover:underline inline-flex items-center gap-1">
            كل الكورسات <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teacherCourses.map((c) => <CourseCard key={c.id} course={c} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold mb-3">جدول الحصص المباشرة الأسبوعي</h2>
        <p className="text-muted-foreground mb-5 text-sm">حصص مباشرة تفاعلية يومياً مع إمكانية الرد على الأسئلة والمناقشة.</p>
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="bg-accent/60">
              <tr>
                <th className="p-4 text-right font-bold">اليوم</th>
                <th className="p-4 text-right font-bold">التوقيت</th>
                <th className="p-4 text-right font-bold">الموضوع</th>
              </tr>
            </thead>
            <tbody>
              {teacher.schedule.map((s, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="p-4 font-semibold">{s.day}</td>
                  <td className="p-4 text-muted-foreground">{s.time}</td>
                  <td className="p-4">{s.topic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold mb-4">الأسئلة الشائعة</h2>
        <TeacherFaq />
      </section>
    </div>
  );
}

function TeacherFaq() {
  const [open, setOpen] = useState<number | null>(0);
  const items = [
    { q: "هل تُوفّرون حصص مسجّلة؟", a: "نعم، كل الحصص مسجّلة ومتاحة للطلاب طوال فترة الاشتراك." },
    { q: "كيف أحجز حصة تجريبية؟", a: "من خلال زر 'احجز حصة تجريبية' أعلى الصفحة." },
  ];
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      {items.map((it, i) => (
        <div key={i} className="border-b border-border last:border-0">
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-3 px-5 py-4 text-right font-semibold hover:bg-accent/40">
            <span>{it.q}</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{it.a}</div>}
        </div>
      ))}
    </div>
  );
}