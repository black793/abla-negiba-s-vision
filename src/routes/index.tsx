import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Play, ShieldCheck, Video, ClipboardCheck, LineChart, Sparkles, BellRing, Calendar } from "lucide-react";
import heroStudent from "@/assets/hero-student.jpg";
import stagePrimary from "@/assets/stage-primary.jpg";
import stagePrep from "@/assets/stage-prep.jpg";
import stageSecondary from "@/assets/stage-secondary.jpg";
import reportsMock from "@/assets/reports-mock.jpg";
import { courses, teachers, testimonials } from "@/data/mock";
import { CourseCard } from "@/components/course-card";
import { TeacherCard } from "@/components/teacher-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "أبلة نجيبة — منصة تعليمية للطلاب" },
      { name: "description", content: "التعلّم اللي يفهمك.. مش يحفظك. مدرسون موثوقون، دروس مباشرة ومسجّلة، اختبارات ذكية، وتقارير للأهل." },
      { property: "og:title", content: "أبلة نجيبة — منصة تعليمية للطلاب" },
      { property: "og:description", content: "منصة تعليمية مصرية مع أفضل المدرسين ومتابعة ذكية." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const features = [
  { icon: ShieldCheck, title: "مدرسون تم التحقق منهم", desc: "خبرة حقيقية وأساليب تدريس فعّالة." },
  { icon: Video, title: "دروس مباشرة ومسجّلة", desc: "تابع في وقتك ومن أي مكان." },
  { icon: ClipboardCheck, title: "اختبارات ومتابعة ذكية", desc: "تقيس مستواك وتحدّد نقاط التحسين." },
  { icon: LineChart, title: "تقارير واضحة لولي الأمر", desc: "اطمئن على تقدّم ابنك خطوة بخطوة." },
];

const stagesList = [
  { title: "الابتدائية", range: "الصف 1 - الصف 6", desc: "تعلم ممتع بقُرب القلب.", image: stagePrimary },
  { title: "الإعدادية", range: "الصف 1 - الصف 3", desc: "بناء أساس قوي للمستقبل.", image: stagePrep },
  { title: "الثانوية", range: "الصف 1 - الصف 3", desc: "تحضير للثانوية العامة.", image: stageSecondary },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            <Reveal className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 rounded-[3rem] bg-primary/10 blur-3xl" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-elegant animate-floaty">
                  <img
                    src={heroStudent}
                    alt="طالب يذاكر"
                    width={1200}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
                {/* Floating badges */}
                <div className="hidden md:flex absolute -top-4 -right-4 rounded-2xl bg-background shadow-elegant p-3 items-center gap-2">
                  <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    85%
                  </div>
                  <div className="text-xs">
                    <div className="font-bold">تقدمك هذا الأسبوع</div>
                    <div className="text-muted-foreground">ممتاز! استمر</div>
                  </div>
                </div>
                <div className="hidden md:flex absolute -bottom-4 -left-4 rounded-2xl bg-background shadow-elegant p-3 items-center gap-2">
                  <div className="h-10 w-10 rounded-xl bg-gold/20 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-gold" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold">الحصة القادمة</div>
                    <div className="text-muted-foreground">الرياضيات · الأحد 8:00 م</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className="order-1 lg:order-2 text-center lg:text-right">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary mb-6">
                <Sparkles className="h-3.5 w-3.5" />
                منصة تعليمية مصرية
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground">
                التعلُّم اللي <span className="gradient-primary bg-clip-text text-transparent">يفهمك</span>..
                <br />
                مش <span className="relative inline-block">يحفظك<span className="absolute inset-x-0 -bottom-2 h-3 gradient-primary opacity-20 rounded-full" /></span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                مدرسون موثوقون، شرح مبسّط، ومتابعة ذكية تساعدك تتفوّق خطوة بخطوة.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  to="/courses"
                  className="inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-elegant transition-transform hover:scale-105"
                >
                  استكشف الكورسات
                  <ArrowLeft className="h-4 w-4" />
                </Link>
                <button className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-background px-7 py-3.5 text-sm font-bold text-foreground transition-all hover:border-primary hover:text-primary">
                  <Play className="h-4 w-4 fill-current" />
                  شاهد التجربة
                </button>
              </div>
            </Reveal>
          </div>

          {/* Feature bar */}
          <Reveal delay={200} className="mt-14">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <div className="grid gap-6 md:grid-cols-4">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <div className="h-11 w-11 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-sm">{f.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stages */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title="اختر مرحلتك التعليمية" subtitle="تعرّف على كل المراحل والمواد." />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {stagesList.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <Link
                to="/stages"
                className="group block overflow-hidden rounded-3xl shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="aspect-[16/11] overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5 bg-card">
                  <h3 className="text-xl font-extrabold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.range}</p>
                  <p className="mt-2 text-sm text-foreground/80">{s.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">
                    استعرض الكورسات <ArrowLeft className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured courses */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title="كورسات مميزة لك" subtitle="أفضل الكورسات مختارة من أمهر المدرسين." />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {courses.slice(0, 4).map((c, i) => (
            <Reveal key={c.id} delay={i * 80}>
              <CourseCard course={c} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 px-6 py-3 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            عرض كل الكورسات <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Teachers */}
      <section className="bg-accent/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading title="تعلّم مع أفضل المدرسين" subtitle="نخبة من المدرسين ذوي الخبرة الحقيقية." />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {teachers.slice(0, 5).map((t, i) => (
              <Reveal key={t.id} delay={i * 60}>
                <TeacherCard teacher={t} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/teachers"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 px-6 py-3 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              عرض كل المدرسين <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-primary/10 blur-3xl" />
              <img src={reportsMock} alt="تقارير الأداء" loading="lazy" className="relative rounded-3xl shadow-elegant w-full" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              اطمئن على تقدّم ابنك
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              تقارير مفصّلة تصلك على واتساب مع تحليلات بسيطة تساعدك تتابع تقدّم ابنك، درجاته، الحضور، وخطة المذاكرة بكل سهولة.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
                <LineChart className="h-4 w-4" /> نقاط القوة والضعف
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
                <BellRing className="h-4 w-4" /> ملخص أسبوعي وشهري
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
                <Sparkles className="h-4 w-4" /> توصيات للمذاكرة
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading title="آراء طلابنا" subtitle="تجارب حقيقية من طلاب أبلة نجيبة." />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 80}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] gradient-cta p-10 md:p-14 text-center">
            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-primary-glow/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-black text-primary-foreground">
                جاهز تبدأ رحلتك نحو التفوُّق؟
              </h2>
              <p className="mt-3 text-primary-foreground/80 max-w-2xl mx-auto">
                انضم لآلاف الطلاب اللي اختاروا أبلة نجيبة وتعلّم بثقة.
              </p>
              <Link
                to="/auth"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-4 text-sm font-black text-primary-deep shadow-glow transition-transform hover:scale-105"
              >
                ابدأ الآن مجاناً
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
