import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, MessageCircle, Mail, Phone, Search } from "lucide-react";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "مركز المساعدة — أبلة نجيبة" },
      { name: "description", content: "أسئلة شائعة وطرق التواصل مع فريق الدعم." },
      { property: "og:title", content: "مركز المساعدة — أبلة نجيبة" },
      { property: "og:description", content: "احصل على المساعدة اللي محتاجها." },
      { property: "og:url", content: "/help" },
    ],
    links: [{ rel: "canonical", href: "/help" }],
  }),
  component: HelpPage,
});

const faqs = [
  { q: "إزاي أشترك في كورس؟", a: "من صفحة الكورس، اضغط 'اشترك الآن' وسدد المبلغ بأي طريقة دفع متاحة." },
  { q: "هل الفيديوهات متاحة أوفلاين؟", a: "الفيديوهات تُشاهد من خلال المنصة فقط، لكن يمكن تكرارها بلا حد أثناء فترة الاشتراك." },
  { q: "إزاي أتواصل مع المدرس؟", a: "من خلال مجموعة واتساب خاصة بكل كورس، بالإضافة لجلسة أسئلة أسبوعية." },
  { q: "طرق الدفع المتاحة؟", a: "فيزا، ماستركارد، فوري، فودافون كاش، إنستاباي." },
  { q: "هل يمكنني استرداد المبلغ؟", a: "نعم، خلال 7 أيام من الاشتراك بدون أسئلة." },
  { q: "كيف أحصل على تقارير أدائي؟", a: "التقارير تظهر في لوحة الطالب ويتم إرسال ملخّص أسبوعي على واتساب لولي الأمر." },
];

function HelpPage() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<number | null>(0);
  const filtered = faqs.filter((f) => !q || f.q.includes(q) || f.a.includes(q));

  return (
    <div>
      <section className="gradient-primary text-primary-foreground py-14 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl md:text-4xl font-black">إزاي نقدر نساعدك؟</h1>
          <p className="mt-3 opacity-80">ابحث في الأسئلة الشائعة أو تواصل معانا مباشرة.</p>
          <div className="mt-6 relative">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="ابحث عن سؤالك"
              className="w-full rounded-2xl bg-background text-foreground px-11 py-3.5 text-sm outline-none shadow-elegant"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold mb-6">الأسئلة الشائعة</h2>
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          {filtered.map((it, i) => (
            <div key={i} className="border-b border-border last:border-0">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-3 px-5 py-4 text-right font-semibold hover:bg-accent/40">
                <span>{it.q}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{it.a}</div>}
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {[
            { icon: MessageCircle, title: "واتساب", info: "0100 123 4567", href: "#" },
            { icon: Mail, title: "بريد إلكتروني", info: "help@abla-nagiba.com", href: "#" },
            { icon: Phone, title: "اتصال هاتفي", info: "من 10ص - 10م", href: "#" },
          ].map((c) => (
            <Reveal key={c.title}>
              <a href={c.href} className="block rounded-3xl bg-card border border-border p-6 text-center hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="mx-auto h-12 w-12 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-bold">{c.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{c.info}</div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}