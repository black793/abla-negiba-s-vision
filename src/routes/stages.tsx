import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Rocket, GraduationCap } from "lucide-react";
import stagePrimary from "@/assets/stage-primary.jpg";
import stagePrep from "@/assets/stage-prep.jpg";
import stageSecondary from "@/assets/stage-secondary.jpg";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/stages")({
  head: () => ({
    meta: [
      { title: "المراحل التعليمية — أبلة نجيبة" },
      { name: "description", content: "كل المواد لكل المراحل من الابتدائية للثانوية العامة." },
      { property: "og:title", content: "المراحل التعليمية — أبلة نجيبة" },
      { property: "og:description", content: "مواد ومنهج لكل المراحل التعليمية." },
      { property: "og:url", content: "/stages" },
    ],
    links: [{ rel: "canonical", href: "/stages" }],
  }),
  component: StagesPage,
});

const data = [
  {
    key: "primary", name: "المرحلة الابتدائية", range: "الصف الأول - السادس", icon: BookOpen, image: stagePrimary,
    desc: "تعلم ممتع بقُرب القلب مع أنشطة تفاعلية ومحفزات على الاستيعاب.",
    subjects: ["لغة عربية", "لغة إنجليزية", "رياضيات", "علوم", "دراسات"],
  },
  {
    key: "prep", name: "المرحلة الإعدادية", range: "الصف الأول - الثالث", icon: Rocket, image: stagePrep,
    desc: "بناء أساس قوي في المواد الأساسية للاستعداد للثانوية العامة.",
    subjects: ["رياضيات", "علوم", "لغة عربية", "لغة إنجليزية", "دراسات", "كمبيوتر"],
  },
  {
    key: "secondary", name: "المرحلة الثانوية", range: "الصف الأول - الثالث", icon: GraduationCap, image: stageSecondary,
    desc: "تحضير احترافي للثانوية العامة مع مراجعات وامتحانات دورية.",
    subjects: ["رياضيات", "فيزياء", "كيمياء", "أحياء", "لغة عربية", "لغة إنجليزية"],
  },
];

function StagesPage() {
  return (
    <div>
      <section className="gradient-primary text-primary-foreground py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-black">المراحل التعليمية</h1>
          <p className="mt-3 text-primary-foreground/80 max-w-2xl mx-auto">
            من الصف الأول الابتدائي وحتى الثانوية العامة — كل المواد بأفضل المدرسين.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 space-y-16">
        {data.map((s, i) => (
          <Reveal key={s.key}>
            <div className={`grid gap-8 md:grid-cols-2 items-center ${i % 2 === 1 ? "md:[direction:ltr] md:[&>*]:[direction:rtl]" : ""}`}>
              <div className="rounded-3xl overflow-hidden shadow-elegant">
                <img src={s.image} alt={s.name} loading="lazy" className="w-full aspect-[16/11] object-cover" />
              </div>
              <div>
                <div className="inline-flex h-12 w-12 rounded-2xl gradient-primary items-center justify-center text-primary-foreground mb-4">
                  <s.icon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold">{s.name}</h2>
                <p className="text-primary font-semibold mt-1">{s.range}</p>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.subjects.map((sub) => (
                    <span key={sub} className="rounded-full bg-accent text-accent-foreground text-sm font-semibold px-3 py-1">{sub}</span>
                  ))}
                </div>
                <Link
                  to="/courses"
                  className="mt-6 inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-soft hover:scale-105 transition-transform"
                >
                  استعرض الكورسات <ArrowLeft className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}