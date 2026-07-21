import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { courses, teachers } from "@/data/mock";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = ["/", "/courses", "/teachers", "/stages", "/pricing", "/about", "/help", "/guidelines", "/privacy"];
        const entries = [
          ...staticPaths.map((p) => ({ path: p, changefreq: "weekly", priority: p === "/" ? "1.0" : "0.8" })),
          ...courses.map((c) => ({ path: `/courses/${c.id}`, changefreq: "monthly", priority: "0.7" })),
          ...teachers.map((t) => ({ path: `/teachers/${t.id}`, changefreq: "monthly", priority: "0.7" })),
        ];
        const urls = entries.map((e) => `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`);
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});