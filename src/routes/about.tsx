import { createFileRoute } from "@tanstack/react-router";
import { Heart, Target, Trophy, Users } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن — أبلة نجيبة" },
      { name: "description", content: "قصتنا ورسالتنا في تقديم تعليم عصري ومتميّز." },
      { property: "og:title", content: "من نحن — أبلة نجيبة" },
      { property: "og:description", content: "قصة أبلة نجيبة ورسالتها." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "بحب الطلاب", desc: "نتعامل مع كل طالب بحب واحترام كأنه ابننا." },
  { icon: Target, title: "بأهداف واضحة", desc: "كل درس له هدف محدد ومقياس نتيجة واضح." },
  { icon: Trophy, title: "بمعايير عالية", desc: "نختار أفضل المدرسين ونطوّرهم باستمرار." },
  { icon: Users, title: "بمجتمع تعليمي", desc: "الطالب مش لوحده — معاه مدرس وأهل ومنصة." },
];

function AboutPage() {
  return (
    <div>
      <section className="gradient-primary text-primary-foreground py-14 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl md:text-4xl font-black">قصة أبلة نجيبة</h1>
          <p className="mt-3 opacity-80">منصة تعليمية مصرية بدأت من إيمان بسيط: التعلم لازم يكون ممتع ومفهوم.</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-lg text-foreground/85 leading-loose">
            أبلة نجيبة اتأسست سنة 2023 على إيدين مجموعة من المعلمين والمهندسين اللي اتحدوا حول فكرة واحدة: نبني منصة تعليمية مصرية تفهم الطالب، وتساعده يتفوّق، وتطمن ولي الأمر على تقدّم ابنه. النهاردة، خدمنا آلاف الطلاب في كل مراحل التعليم من الابتدائية للثانوية العامة، وبنعمل كل يوم على تطوير المحتوى والخدمة عشان نوصل لكل بيت مصري.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="rounded-3xl border border-border bg-card p-6 h-full">
                <div className="h-11 w-11 rounded-2xl gradient-primary text-primary-foreground flex items-center justify-center">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-extrabold">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[["+10K", "طالب"], ["+50", "مدرس"], ["+300", "كورس"], ["4.9", "تقييم"]].map(([n, l]) => (
            <div key={l} className="rounded-3xl bg-accent/40 p-6 text-center">
              <div className="text-3xl font-black gradient-primary bg-clip-text text-transparent">{n}</div>
              <div className="text-sm text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}