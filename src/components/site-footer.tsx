import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-primary-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="inline-block bg-background rounded-2xl px-3 py-2">
              <Logo />
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              منصة تعليمية مصرية نهدف لتقديم محتوى تعليمي ممتع لكل الطلاب والمعلمين لتطوير مهاراتهم خطوة بخطوة.
            </p>
            <div className="flex gap-2">
              {[
                { icon: MessageCircle, label: "واتساب" },
                { icon: Facebook, label: "فيسبوك" },
                { icon: Instagram, label: "انستجرام" },
                { icon: Youtube, label: "يوتيوب" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-colors hover:bg-primary-foreground hover:text-primary-deep"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-base font-bold">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/" className="hover:text-primary-foreground transition-colors">الرئيسية</Link></li>
              <li><Link to="/courses" className="hover:text-primary-foreground transition-colors">الكورسات</Link></li>
              <li><Link to="/teachers" className="hover:text-primary-foreground transition-colors">المدرسون</Link></li>
              <li><Link to="/stages" className="hover:text-primary-foreground transition-colors">المراحل</Link></li>
              <li><Link to="/pricing" className="hover:text-primary-foreground transition-colors">الأسعار</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-bold">لولي الأمر</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/guidelines" className="hover:text-primary-foreground transition-colors">نصائح للمذاكرة</Link></li>
              <li><Link to="/guidelines" className="hover:text-primary-foreground transition-colors">تقارير الأداء</Link></li>
              <li><Link to="/privacy" className="hover:text-primary-foreground transition-colors">سياسة الخصوصية</Link></li>
              <li><Link to="/help" className="hover:text-primary-foreground transition-colors">مركز المساعدة</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-bold">تواصل معنا</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span dir="ltr">0100 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@abla-nagiba.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                القاهرة – مصر
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/60">
          © 2026 أبلة نجيبة. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}