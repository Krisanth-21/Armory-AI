import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useState } from "react";

export const Route = createFileRoute("/changelog")({
  head: () => ({
    meta: [
      { title: "Changelog — ARMORY" },
      {
        name: "description",
        content: "Stay up to date with the latest ARMORY platform updates, features, and improvements.",
      },
    ],
  }),
  component: ChangelogPage,
});

type Category = "all" | "feature" | "improvement" | "security" | "fix";

const RELEASES = [
  {
    version: "4.2.1",
    date: "June 24, 2026",
    tag: "latest",
    items: [
      { type: "feature" as const, title: "Multi-region failover orchestration", desc: "Automatic pipeline failover across edge regions with zero-downtime during node migrations." },
      { type: "improvement" as const, title: "60% faster PHI redaction engine", desc: "Optimized NLP tokenizer reduces PHI detection latency from 12ms to 4.8ms per payload." },
      { type: "security" as const, title: "TLS 1.3 enforced on all endpoints", desc: "Deprecated TLS 1.2 support. All API and webhook connections now require TLS 1.3." },
    ],
  },
  {
    version: "4.2.0",
    date: "June 10, 2026",
    items: [
      { type: "feature" as const, title: "Composable agent decision graphs", desc: "Visual drag-and-drop interface for building multi-step reasoning workflows with branching logic." },
      { type: "feature" as const, title: "Python SDK v2.4 release", desc: "Added async pipeline execution, streaming audit logs, and type-safe response models." },
      { type: "improvement" as const, title: "Dashboard performance optimization", desc: "Reduced initial load time by 40% with lazy-loaded telemetry widgets." },
      { type: "fix" as const, title: "Fixed edge node reconnection logic", desc: "Resolved an issue where disconnected edge nodes would not properly re-register with the orchestrator." },
    ],
  },
  {
    version: "4.1.8",
    date: "May 28, 2026",
    items: [
      { type: "security" as const, title: "SOC 2 Type II audit completed", desc: "Successfully passed annual SOC 2 Type II audit with zero material findings." },
      { type: "improvement" as const, title: "Expanded FHIR R4 support", desc: "Added support for 18 additional FHIR resource types including AllergyIntolerance and MedicationRequest." },
      { type: "fix" as const, title: "Corrected INR currency rounding", desc: "Fixed pricing calculator rounding errors for Indian Rupee denominations on annual billing." },
    ],
  },
  {
    version: "4.1.5",
    date: "May 14, 2026",
    items: [
      { type: "feature" as const, title: "Webhook event subscriptions", desc: "Subscribe to real-time webhook notifications for pipeline completions, failures, and audit events." },
      { type: "feature" as const, title: "Custom compliance policy builder", desc: "Enterprise customers can now define custom compliance rules and validation checks." },
      { type: "improvement" as const, title: "Audit log search improvements", desc: "Full-text search across audit logs with regex support and date range filtering." },
    ],
  },
  {
    version: "4.1.0",
    date: "April 30, 2026",
    items: [
      { type: "feature" as const, title: "Edge region: Mumbai (ap-south-1)", desc: "New edge compute region in Mumbai to serve Indian healthcare customers with sub-20ms latency." },
      { type: "security" as const, title: "HITRUST CSF certification", desc: "Achieved HITRUST Common Security Framework certification for all production environments." },
      { type: "improvement" as const, title: "API rate limit transparency", desc: "Rate limit headers now included in all API responses with remaining quota and reset timestamps." },
      { type: "fix" as const, title: "Fixed annual billing discount display", desc: "Corrected UI issue where annual discount was not reflected in the pricing comparison table." },
    ],
  },
];

const TYPE_CONFIG = {
  feature: { label: "Feature", color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" },
  improvement: { label: "Improvement", color: "bg-forsythia/10 border-forsythia/30 text-forsythia" },
  security: { label: "Security", color: "bg-saffron/10 border-saffron/30 text-saffron" },
  fix: { label: "Bug Fix", color: "bg-red-400/10 border-red-400/30 text-red-400" },
};

function ChangelogPage() {
  const [filter, setFilter] = useState<Category>("all");

  const filteredReleases = RELEASES.map((release) => ({
    ...release,
    items: filter === "all" ? release.items : release.items.filter((item) => item.type === filter),
  })).filter((release) => release.items.length > 0);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 border-b border-white/5 bg-grid">
        <div className="absolute inset-0 bg-radial-glow opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-saffron/25 bg-saffron/5 px-3 py-1 font-mono-tech text-[10px] uppercase tracking-wider text-saffron animate-boot">
            // Platform Updates
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-tight text-arctic md:text-7xl text-gradient animate-boot">
            Changelog
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-arctic/75 leading-relaxed animate-boot">
            Every improvement, feature, and fix shipped to the ARMORY platform. 
            We release continuously and document everything.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-b border-white/5 bg-noir/40 py-4">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono-tech text-[10px] uppercase tracking-wider text-arctic/40 mr-2">Filter:</span>
            {(["all", "feature", "improvement", "security", "fix"] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-3 py-1.5 font-mono-tech text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-forsythia text-noir font-semibold"
                    : "text-arctic/50 hover:text-arctic border border-white/10"
                }`}
              >
                {cat === "all" ? "All" : TYPE_CONFIG[cat].label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Release Timeline */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-forsythia/30 via-saffron/15 to-transparent" />

            <div className="space-y-16">
              {filteredReleases.map((release, ri) => (
                <div key={release.version} className="reveal relative">
                  {/* Version node */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-noir border-2 border-forsythia/50">
                      <svg className="w-4 h-4 text-forsythia" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-semibold text-arctic">v{release.version}</h2>
                        {release.tag && (
                          <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-2.5 py-0.5 font-mono-tech text-[9px] uppercase tracking-wider">
                            {release.tag}
                          </span>
                        )}
                      </div>
                      <div className="font-mono-tech text-xs text-arctic/40 mt-1">{release.date}</div>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="ml-14 space-y-4">
                    {release.items.map((item, ii) => {
                      const typeConf = TYPE_CONFIG[item.type];
                      return (
                        <div key={ii} className={`stagger-${Math.min(ii + 1, 5)} border border-white/10 bg-noir/40 p-5 rounded-xl glow-card`}>
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`inline-flex items-center rounded-full border px-2 py-0.5 font-mono-tech text-[9px] uppercase tracking-wider ${typeConf.color}`}>
                              {typeConf.label}
                            </span>
                          </div>
                          <h3 className="text-sm font-semibold text-arctic">{item.title}</h3>
                          <p className="mt-1.5 text-xs text-arctic/50 leading-relaxed">{item.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Load more indicator */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-noir/40 px-5 py-2.5 font-mono-tech text-[11px] uppercase tracking-wider text-arctic/40">
              <span className="h-1.5 w-1.5 rounded-full bg-arctic/20" />
              Showing latest 5 releases · 48 total releases
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
