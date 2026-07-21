import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "الأسعار والباقات — أبلة نجيبة" },
      { name: "description", content: "باقات مرنة تناسب احتياج كل طالب." },
      { property: "og:title", content: "الأسعار والباقات — أبلة نجيبة" },
      { property: "og:description", content: "اختر الباقة المناسبة لك." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const plans = [
  { name: "التجربة", price: 0, period: "مجاناً", desc: "ابدأ ومعاينة الدروس المجانية.", features: ["معاينة الدروس المجانية", "تصفح كل المدرسين", "دخول لمكتبة الأسئلة"], cta: "ابدأ الآن" },
  { name: "المميّز", price: 199, period: "شهرياً", popular: true, desc: "لطالب واحد لكل المواد.", features: ["كل الدروس المسجّلة", "الحصص المباشرة", "اختبارات وتقييم", "تقارير أسبوعية", "دعم واتساب"], cta: "اشترك الآن" },
  { name: "العائلة", price: 349, period: "شهرياً", desc: "حتى 3 طلاب مع تقارير موحّدة.", features: ["كل مميزات المميّز", "3 حسابات طلاب", "تقارير لولي الأمر", "أولوية الدعم"], cta: "ابدأ الاشتراك" },
];

function PricingPage() {
  return (
    <div>
      <section className="gradient-primary text-primary-foreground py-14 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl md:text-4xl font-black">باقات مرنة تناسب كل طالب</h1>
          <p className="mt-3 opacity-80">ادفع بشكل شهري بدون التزامات طويلة، وارقى في أي وقت.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className={`relative rounded-3xl p-7 h-full flex flex-col ${p.popular ? "gradient-primary text-primary-foreground shadow-elegant scale-[1.03]" : "bg-card border border-border shadow-soft"}`}>
                {p.popular && (
                  <div className="absolute -top-3 right-6 rounded-full bg-gold px-3 py-1 text-xs font-black text-primary-deep inline-flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> الأكثر شعبية
                  </div>
                )}
                <h3 className="text-xl font-extrabold">{p.name}</h3>
                <p className={`text-sm mt-1 ${p.popular ? "opacity-80" : "text-muted-foreground"}`}>{p.desc}</p>
                <div className="mt-5">
                  <span className="text-5xl font-black">{p.price}</span>
                  <span className={`text-sm ${p.popular ? "opacity-80" : "text-muted-foreground"}`}> ج.م / {p.period}</span>
                </div>
                <ul className={`mt-6 space-y-2 flex-1 text-sm ${p.popular ? "" : "text-foreground/85"}`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check className={`h-4 w-4 shrink-0 mt-0.5 ${p.popular ? "" : "text-primary"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/auth"
                  className={`mt-7 rounded-full py-3 text-sm font-bold text-center transition-transform hover:scale-[1.02] ${
                    p.popular ? "bg-primary-foreground text-primary-deep" : "gradient-primary text-primary-foreground"
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          كل الأسعار بالجنيه المصري وشاملة الضرائب. يمكنك إلغاء الاشتراك في أي وقت.
        </p>
      </section>
    </div>
  );
}