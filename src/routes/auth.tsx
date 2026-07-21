import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Lock, UserRound, ArrowLeft } from "lucide-react";
import { Logo } from "@/components/logo";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "دخول الطلاب — أبلة نجيبة" },
      { name: "description", content: "سجّل دخولك أو أنشئ حساب جديد." },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "/auth" },
    ],
    links: [{ rel: "canonical", href: "/auth" }],
  }),
  component: AuthPage,
});

function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  return (
    <div className="min-h-[calc(100vh-4rem)] grid lg:grid-cols-2">
      <div className="hidden lg:flex gradient-primary text-primary-foreground p-12 items-center justify-center">
        <div className="max-w-md">
          <div className="bg-background rounded-2xl inline-block p-3">
            <Logo />
          </div>
          <h2 className="mt-8 text-4xl font-black leading-tight">مرحباً بيك في رحلة التفوّق</h2>
          <p className="mt-4 opacity-85">
            انضم لآلاف الطلاب اللي بيتعلموا مع أفضل المدرسين ويحققوا نتائج حقيقية.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {["أفضل مدرسين مصر في مكان واحد", "متابعة ذكية وتقارير أسبوعية", "دعم مستمر عبر واتساب"].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary-foreground" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8"><Logo /></div>
          <h1 className="text-2xl font-black">{mode === "login" ? "تسجيل الدخول" : "إنشاء حساب جديد"}</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {mode === "login" ? "ادخل بياناتك للوصول لحسابك" : "املأ البيانات لإنشاء حسابك المجاني"}
          </p>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            {mode === "signup" && (
              <Field icon={UserRound} placeholder="الاسم الكامل" />
            )}
            <Field icon={Mail} placeholder="البريد الإلكتروني" type="email" />
            <Field icon={Lock} placeholder="كلمة المرور" type="password" />
            <button
              type="submit"
              className="w-full rounded-2xl gradient-primary py-3.5 font-bold text-primary-foreground shadow-soft hover:scale-[1.01] transition-transform"
            >
              {mode === "login" ? "دخول" : "إنشاء حساب"}
            </button>
          </form>

          <div className="mt-6 text-sm text-center text-muted-foreground">
            {mode === "login" ? "ليس لديك حساب؟" : "لديك حساب بالفعل؟"}{" "}
            <button
              className="text-primary font-bold hover:underline"
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
            >
              {mode === "login" ? "أنشئ حساب" : "سجّل الدخول"}
            </button>
          </div>

          <Link to="/" className="mt-8 flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-3 w-3" /> الرجوع للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

function Field({ icon: Icon, ...rest }: { icon: typeof Mail } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <Icon className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <input
        {...rest}
        className="w-full rounded-2xl bg-muted px-11 py-3.5 text-sm outline-none focus:ring-2 focus:ring-primary/50"
      />
    </div>
  );
}