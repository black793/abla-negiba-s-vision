import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "سياسة الخصوصية — أبلة نجيبة" },
      { name: "description", content: "كيف نجمع ونحمي بياناتك الشخصية." },
      { property: "og:title", content: "سياسة الخصوصية — أبلة نجيبة" },
      { property: "og:description", content: "سياسة الخصوصية والاستخدام." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div>
      <section className="gradient-primary text-primary-foreground py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-black">سياسة الخصوصية</h1>
        <p className="mt-2 opacity-80 text-sm">آخر تحديث: 1 يناير 2026</p>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 space-y-6 text-foreground/85 leading-loose">
        <p>هذه الصفحة يحرّرها فريق أبلة نجيبة لتوضيح كيف نجمع ونستخدم ونحمي بياناتك عند استخدام منصتنا. هذه السياسة قابلة للتحديث بشكل دوري لتعكس أفضل الممارسات.</p>

        <h2 className="text-xl font-extrabold text-foreground mt-8">البيانات التي نجمعها</h2>
        <p>نجمع البيانات التي تُقدّمها لنا مباشرة (الاسم، البريد، رقم الهاتف، المرحلة الدراسية) بالإضافة إلى بيانات الاستخدام (الكورسات التي تشترك فيها، درجات الاختبارات، مدة المشاهدة).</p>

        <h2 className="text-xl font-extrabold text-foreground mt-8">كيف نستخدم بياناتك</h2>
        <ul className="list-disc pr-6 space-y-2">
          <li>لتقديم الخدمة التعليمية وتحسين تجربة الطالب.</li>
          <li>لإرسال تقارير الأداء لولي الأمر عبر البريد أو واتساب.</li>
          <li>لتحسين المحتوى وأساليب التدريس بناءً على المؤشرات.</li>
          <li>للتواصل معك بخصوص الاشتراكات والعروض.</li>
        </ul>

        <h2 className="text-xl font-extrabold text-foreground mt-8">حماية البيانات</h2>
        <p>نستخدم تشفيراً حديثاً لحماية بياناتك، ولا نشاركها مع أي جهة خارجية إلا بموافقتك أو بناءً على متطلبات قانونية.</p>

        <h2 className="text-xl font-extrabold text-foreground mt-8">حقوقك</h2>
        <p>لك الحق في طلب الاطلاع على بياناتك أو تعديلها أو حذفها في أي وقت. للتواصل: <span dir="ltr">privacy@abla-nagiba.com</span></p>

        <h2 className="text-xl font-extrabold text-foreground mt-8">الكوكيز</h2>
        <p>نستخدم ملفات الكوكيز الأساسية فقط لتشغيل المنصة وتذكّر تفضيلاتك. لا نستخدم كوكيز إعلانية.</p>
      </section>
    </div>
  );
}