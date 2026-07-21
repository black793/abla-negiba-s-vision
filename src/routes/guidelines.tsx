import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Clock, ListChecks, Coffee, Brain, Trophy } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/guidelines")({
  head: () => ({
    meta: [
      { title: "نصائح للمذاكرة — أبلة نجيبة" },
      { name: "description", content: "إرشادات ونصائح عملية لمذاكرة أفضل ونتائج أعلى." },
      { property: "og:title", content: "نصائح للمذاكرة — أبلة نجيبة" },
      { property: "og:description", content: "نصائح عملية للطلاب وأولياء الأمور." },
      { property: "og:url", content: "/guidelines" },
    ],
    links: [{ rel: "canonical", href: "/guidelines" }],
  }),
  component: GuidelinesPage,
});

const tips = [
  { icon: Clock, title: "قسّم وقتك", desc: "ذاكر 25 دقيقة وارتاح 5 (تقنية بومودورو) — أثبتت فعاليتها في التركيز." },
  { icon: ListChecks, title: "خطّط قبل ما تبدأ", desc: "اكتب قائمة صغيرة بالمواضيع اللي هتخلّصها اليوم واحدة واحدة." },
  { icon: Brain, title: "افهم مش احفظ", desc: "المفهوم اللي فاهمه بيثبت أكتر بكتير من اللي حافظه بس." },
  { icon: Coffee, title: "خد نفسك", desc: "النوم الكويس والأكل الصحي جزء أساسي من المذاكرة، مش رفاهية." },
  { icon: Lightbulb, title: "علّم غيرك", desc: "لو قدرت تشرح المعلومة لحد تاني، يبقى فعلاً فهمتها." },
  { icon: Trophy, title: "احتفل بالإنجازات", desc: "كل إنجاز صغير يستاهل احتفال — ده اللي بيدّيك دافع تكمّل." },
];

function GuidelinesPage() {
  return (
    <div>
      <section className="gradient-primary text-primary-foreground py-14 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl md:text-4xl font-black">إرشادات ونصائح للمذاكرة</h1>
          <p className="mt-3 opacity-80">مجموعة من النصائح العملية اللي جربناها مع آلاف الطلاب.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tips.map((t, i) => (
            <Reveal key={t.title} delay={i * 60}>
              <div className="rounded-3xl border border-border bg-card p-6 h-full hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 rounded-2xl gradient-primary text-primary-foreground flex items-center justify-center">
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-extrabold text-lg">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="rounded-3xl bg-accent/40 p-8 md:p-10">
            <h2 className="text-2xl font-extrabold">نصيحة لولي الأمر</h2>
            <p className="mt-3 text-foreground/85 leading-relaxed">
              أولادنا محتاجين تشجيع أكتر من المراقبة. اسأله عن يومه، شاركه اهتماماته، وامدحه لما يبذل مجهود حتى لو النتيجة لسه مش زي ما كنت متوقع. الثقة والدعم النفسي بيصنعوا فرق حقيقي في التحصيل الدراسي.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}