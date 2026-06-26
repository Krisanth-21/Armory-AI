import { createFileRoute } from "@tanstack/react-router";
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type ReactNode,
} from "react";
import { HeroSection } from "@/components/ui/hero-section-1";
import { Layout, CtaButton } from "@/components/Layout";
import { Seo, canonicalLink } from "@/components/Seo";
import {
  SearchIcon,
  XMarkIcon,
  ArrowPathIcon,
  ArrowTrendingUpIcon,
  ChartPieIcon,
  Cog8ToothIcon,
  Cube16SolidIcon,
  LinkSolidIcon,
  LinkIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/Svgs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARMORY - Power your future with AI" },
      {
        name: "description",
        content:
          "ARMORY is the AI automation platform for healthcare. Build agents, automate processes and ship secure neural workflows.",
      },
      { property: "og:title", content: "ARMORY - Power your future with AI" },
      {
        property: "og:description",
        content:
          "Build secure AI workflows, custom agents and process automation for modern healthcare.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ARMORY - Power your future with AI" },
      { name: "twitter:description", content: "Build secure AI workflows, custom agents and process automation for modern healthcare." },
    ],
    links: [canonicalLink('/')],
  }),
  component: ArmoryLanding,
});

/* ---------- Hero ---------- */
const CLIENT_LOGOS = ["AETNA", "CIGNA", "ANTHEM", "HUMANA", "KAISER", "UNITED"];

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-radial-glow" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 md:pt-32">
        <div className="animate-boot flex items-center gap-2 font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-forsythia animate-pulse-dot" />
          Neural Infrastructure // v4.2.1
        </div>
        <h1 className="animate-boot mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-arctic md:text-7xl">
          Power your future <br />
          with{" "}
          <span className="text-forsythia">AI</span>
          <span className="text-saffron">.</span>
        </h1>
        <p className="animate-boot mt-6 max-w-xl text-base leading-relaxed text-arctic/70 md:text-lg">
          ARMORY orchestrates custom agents, secure data pipelines, and
          process automation for the most demanding healthcare ecosystems on
          the planet.
        </p>

        <div className="animate-boot mt-10 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
          <CtaButton>Build a Workflow</CtaButton>
          <div className="flex items-center gap-3 font-mono-tech text-[11px] uppercase tracking-wider text-arctic/50">
            <span className="h-px w-8 bg-white/15" />
            SOC 2 Â· HIPAA Â· ISO 27001
          </div>
        </div>

        {/* Workflow action card */}
        <div className="animate-boot mt-14 grid gap-4 rounded-2xl border border-white/10 bg-noir/60 p-5 backdrop-blur md:grid-cols-3">
          {[
            { k: "01", t: "Ingest", d: "Connect EHR, claims & telemetry" },
            { k: "02", t: "Reason", d: "Route through GPT-4 / Claude 3" },
            { k: "03", t: "Act", d: "Trigger agents across your stack" },
          ].map((s) => (
            <div
              key={s.k}
              className="group rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:border-forsythia/40"
            >
              <div className="font-mono-tech text-[11px] tracking-wider text-forsythia">
                {s.k}
              </div>
              <div className="mt-2 text-lg font-semibold">{s.t}</div>
              <div className="mt-1 text-sm text-arctic/60">{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Logo marquee */}
      <div className="relative border-y border-white/5 bg-noir/40 py-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#0c1a24] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#0c1a24] to-transparent" />
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-16 pr-16">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((l, i) => (
              <span
                key={i}
                className="font-mono-tech text-2xl tracking-[0.3em] text-arctic/40"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Integration callout ---------- */
function Integrations() {
  return (
    <section className="border-b border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia">
          // Integrations
        </div>
        <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
          Native alignment with the most capable{" "}
          <span className="text-saffron">language models</span> on Earth.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-3">
          {[
            { n: "GPT-4", v: "OpenAI", m: "8.2T params" },
            { n: "Claude 3", v: "Anthropic", m: "200K context" },
            { n: "Perplexity", v: "Sonar Pro", m: "Live web" },
          ].map((m) => (
            <div key={m.n} className="bg-noir p-8">
              <div className="font-mono-tech text-[11px] uppercase tracking-wider text-arctic/40">
                {m.v}
              </div>
              <div className="mt-3 text-2xl font-semibold">{m.n}</div>
              <div className="mt-1 font-mono-tech text-sm text-forsythia">
                {m.m}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Feature: Bento â†” Accordion w/ state continuity ---------- */
const FEATURES = [
  {
    k: "Secure Guard",
    t: "Zero-trust runtime",
    d: "End-to-end encryption, PHI redaction and per-agent IAM enforced at every hop.",
    s: "AES-256 Â· HIPAA",
    icon: (className?: string) => <LinkSolidIcon className={className} />,
  },
  {
    k: "Agent Build",
    t: "Composable agents",
    d: "Drag-drop reasoning graphs that chain tools, retrieval, and human review.",
    s: "12 model providers",
    icon: (className?: string) => <Cog8ToothIcon className={className} />,
  },
  {
    k: "Cloud Scale",
    t: "Edge-native compute",
    d: "Autoscaling inference across 14 regions with sub-50ms P99 latency.",
    s: "14 regions",
    icon: (className?: string) => <Cube16SolidIcon className={className} />,
  },
  {
    k: "Data Mining",
    t: "Federated intelligence",
    d: "Mine structured + unstructured signals across siloed clinical systems.",
    s: "+2.4M docs/hr",
    icon: (className?: string) => <ChartPieIcon className={className} />,
  },
];

function useIsMobile(bp = 768) {
  const [m, setM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${bp - 1}px)`);
    const f = () => setM(mq.matches);
    f();
    mq.addEventListener("change", f);
    return () => mq.removeEventListener("change", f);
  }, [bp]);
  return m;
}

function FeatureArchitecture() {
  const [active, setActive] = useState(0);
  const isMobile = useIsMobile();

  return (
    <section id="custom-agents" className="border-b border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia">
              // Core Services
            </div>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight md:text-5xl text-arctic">
              Four primitives.
              <br />
              Infinite workflows.
            </h2>
          </div>
          <div className="hidden font-mono-tech text-[11px] uppercase tracking-wider text-arctic/40 md:block">
            [04 modules]
          </div>
        </div>

        {isMobile ? (
          <div className="mt-10 space-y-2">
            {FEATURES.map((f, i) => {
              const open = i === active;
              return (
                <div
                  key={f.k}
                  className="overflow-hidden rounded-xl border border-white/10 bg-noir/60"
                >
                  <button
                    onClick={() => setActive(i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={open}
                  >
                    <span className="flex items-center gap-2 font-mono-tech text-[11px] uppercase tracking-wider text-forsythia">
                      <span className="flex h-6 w-6 items-center justify-center rounded bg-forsythia/10 text-forsythia">
                        {f.icon("h-3.5 w-3.5")}
                      </span>
                      0{i + 1} Â· {f.k}
                    </span>
                    <span
                      className={`transition-transform duration-300 ease-in-out ${
                        open ? "rotate-45" : ""
                      } text-arctic/60`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-400 ease-in-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="px-5 pb-5">
                        <div className="text-lg font-semibold text-arctic">{f.t}</div>
                        <div className="mt-1 text-sm text-arctic/60">
                          {f.d}
                        </div>
                        <div className="mt-3 font-mono-tech text-[11px] uppercase tracking-wider text-saffron">
                          {f.s}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-12 gap-4">
            {FEATURES.map((f, i) => {
              const isActive = i === active;
              const span =
                i === 0
                  ? "col-span-7 row-span-2"
                  : i === 1
                  ? "col-span-5"
                  : i === 2
                  ? "col-span-5"
                  : "col-span-7";
              return (
                <div
                  key={f.k}
                  onMouseEnter={() => setActive(i)}
                  className={`group relative ${span} overflow-hidden rounded-2xl border bg-noir/60 p-8 transition-all duration-200 ease-out hover:-translate-y-0.5 ${
                    isActive
                      ? "border-forsythia/50 bg-[#12222d]"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
                        isActive ? "border-forsythia bg-forsythia/10 text-forsythia" : "border-white/10 bg-white/[0.02] text-arctic/40"
                      }`}>
                        {f.icon("h-5 w-5")}
                      </div>
                      <span
                        className={`font-mono-tech text-[11px] uppercase tracking-wider transition-colors duration-200 ${
                          isActive ? "text-forsythia" : "text-arctic/40"
                        }`}
                      >
                        0{i + 1} Â· {f.k}
                      </span>
                    </div>
                    <span className="font-mono-tech text-[11px] text-arctic/30">{f.s}</span>
                  </div>
                  
                  <div className="mt-12 text-2xl font-semibold md:text-3xl text-arctic group-hover:text-forsythia transition-colors duration-200">
                    {f.t}
                  </div>
                  <div className="mt-3 max-w-md text-sm text-arctic/60 leading-relaxed">
                    {f.d}
                  </div>
                  
                  {/* Subtle decorative grid backing or side line glow */}
                  <div
                    className={`pointer-events-none absolute inset-x-0 bottom-0 h-[2px] transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #FFC801, #FF9932, transparent)",
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- Real-time telemetry ---------- */
function Telemetry() {
  const [metrics, setMetrics] = useState({
    inference: 72,
    retrieval: 41,
    action: 88,
    audit: 23,
    latency: 12,
    throughput: 10.4,
    uptime: 99.98,
  });
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setMetrics({
        inference: Math.floor(Math.random() * 30) + 60,
        retrieval: Math.floor(Math.random() * 40) + 30,
        action: Math.floor(Math.random() * 25) + 70,
        audit: Math.floor(Math.random() * 15) + 15,
        latency: Math.floor(Math.random() * 6) + 8,
        throughput: parseFloat((Math.random() * 4 + 8).toFixed(1)),
        uptime: parseFloat((99.9 + Math.random() * 0.09).toFixed(2)),
      });
      setRefreshing(false);
    }, 600);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        ...prev,
        inference: Math.max(50, Math.min(95, prev.inference + (Math.random() > 0.5 ? 3 : -3))),
        retrieval: Math.max(25, Math.min(85, prev.retrieval + (Math.random() > 0.5 ? 4 : -4))),
        action: Math.max(65, Math.min(98, prev.action + (Math.random() > 0.5 ? 2 : -2))),
        audit: Math.max(10, Math.min(45, prev.audit + (Math.random() > 0.5 ? 1 : -1))),
        latency: Math.max(7, Math.min(18, prev.latency + (Math.random() > 0.6 ? 1 : -1))),
        throughput: parseFloat(Math.max(6, Math.min(14, prev.throughput + (Math.random() > 0.5 ? 0.2 : -0.2))).toFixed(1)),
      }));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="telemetry" className="border-b border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia">
              // Real-time telemetry
            </div>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl text-arctic">
              Watch the grid breathe.
            </h2>
          </div>
          <div>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 font-mono-tech text-[11px] uppercase tracking-wider text-arctic/85 transition-all hover:border-forsythia hover:text-forsythia hover:scale-[1.02] cursor-pointer disabled:opacity-50"
            >
              <ArrowPathIcon className={`h-4 w-4 text-forsythia ${refreshing ? "animate-spin" : ""}`} />
              <span>{refreshing ? "Syncing..." : "Sync System Log"}</span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-12">
          {/* Main dashboard load gauges */}
          <div className="md:col-span-7 rounded-2xl border border-white/10 bg-noir/60 p-6 backdrop-blur">
            <div className="flex items-center justify-between">
              <div className="font-mono-tech text-[11px] uppercase tracking-wider text-arctic/50">
                system load
              </div>
              <div className="flex items-center gap-2 font-mono-tech text-[11px] uppercase text-forsythia">
                <span className="h-1.5 w-1.5 rounded-full bg-forsythia animate-pulse-dot" />
                live feed
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { l: "Inference cluster", v: metrics.inference },
                { l: "Retrieval pipeline", v: metrics.retrieval },
                { l: "Action runners", v: metrics.action },
                { l: "Audit ledger", v: metrics.audit },
              ].map((m) => (
                <div key={m.l}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-arctic/70">{m.l}</span>
                    <span className="font-mono-tech text-arctic/50">
                      {m.v}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full transition-all duration-500 ease-out"
                      style={{
                        width: `${m.v}%`,
                        background:
                          "linear-gradient(90deg,#FFC801,#FF9932)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Metrics grid */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            {[
              { l: "Latency", v: `${metrics.latency}`, u: "ms", icon: null },
              { 
                l: "Throughput", 
                v: `${metrics.throughput}`, 
                u: "x", 
                icon: <ArrowTrendingUpIcon className="h-4 w-4 text-forsythia animate-pulse" />
              },
              { l: "Uptime", v: `${metrics.uptime}`, u: "%", icon: null },
              { l: "Regions", v: "14", u: "//", icon: null },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-white/10 bg-noir/60 p-5 flex flex-col justify-between hover:border-forsythia/30 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="font-mono-tech text-[11px] uppercase tracking-wider text-arctic/50">
                    {s.l}
                  </div>
                  {s.icon}
                </div>
                <div className="mt-4 flex items-baseline gap-1 font-mono-tech">
                  <span className="text-4xl font-semibold text-forsythia transition-all duration-300">
                    {s.v}
                  </span>
                  <span className="text-sm text-saffron">{s.u}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Case studies ---------- */
const CASES = [
  {
    c: "Cigna Smart Health Systems",
    t: "Claims triage cut from 6 days to 4 hours.",
    quote: "The zero-trust setup allowed us to route PHI securely without any latency impact. Outstanding execution.",
    m: [
      { k: "Auto-resolved", v: "78%" },
      { k: "Cost saved", v: "$24M" },
    ],
  },
  {
    c: "Aetna Health Data Ecosystem",
    t: "Federated patient graph across 312 facilities.",
    quote: "Unifying 82M patient records across hundreds of facilities seemed impossible until we loaded the Armory federated graph.",
    m: [
      { k: "Records unified", v: "82M" },
      { k: "Match accuracy", v: "99.4%" },
    ],
  },
  {
    c: "Anthem Neural Care Network",
    t: "Care-pathway agent serving 11M members.",
    quote: "We deflected over 60% of support calls within the first month. Our members get answers in seconds now.",
    m: [
      { k: "Calls deflected", v: "61%" },
      { k: "CSAT", v: "+38pt" },
    ],
  },
];

function CaseStudies() {
  const [active, setActive] = useState(0);

  const prev = () => {
    setActive((curr) => (curr === 0 ? CASES.length - 1 : curr - 1));
  };

  const next = () => {
    setActive((curr) => (curr === CASES.length - 1 ? 0 : curr + 1));
  };

  const currentCase = CASES[active];

  return (
    <section id="case-studies" className="border-b border-white/5 py-24 bg-noir/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia">
              // Deployments
            </div>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl text-arctic">
              Shipping outcomes inside healthcare.
            </h2>
          </div>
          
          {/* Slider controls */}
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs text-arctic/50">
              0{active + 1} <span className="text-saffron">/</span> 0{CASES.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous Case Study"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-arctic/80 transition hover:border-forsythia hover:text-forsythia cursor-pointer"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next Case Study"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-arctic/80 transition hover:border-forsythia hover:text-forsythia cursor-pointer"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Sliding card */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#12222d] to-[#0d1c24] p-8 md:p-12 relative">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] select-none pointer-events-none">
            <LinkSolidIcon className="h-32 w-32" />
          </div>
          
          <div className="grid gap-8 md:grid-cols-12 items-center">
            <div className="md:col-span-8 space-y-6">
              <div className="font-mono-tech text-xs uppercase tracking-widest text-saffron">
                Client Deployment Case study
              </div>
              <h3 className="text-2xl font-semibold md:text-4xl text-arctic tracking-tight">
                {currentCase.c}
              </h3>
              <p className="text-lg md:text-xl text-mint leading-relaxed italic">
                "{currentCase.quote}"
              </p>
              <p className="text-sm font-semibold text-forsythia font-mono-tech">
                // {currentCase.t}
              </p>
              
              <div className="pt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-wider text-arctic hover:text-forsythia transition"
                >
                  <span>Download Integration Ledger</span>
                  <LinkIcon className="h-4 w-4 text-saffron" />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-4 grid grid-cols-2 gap-4">
              {currentCase.m.map((m) => (
                <div
                  key={m.k}
                  className="rounded-xl border border-white/5 bg-white/[0.01] p-5 hover:border-forsythia/20 transition duration-300"
                >
                  <div className="font-mono-tech text-3xl font-bold text-forsythia">
                    {m.v}
                  </div>
                  <div className="mt-2 font-mono-tech text-[10px] uppercase tracking-wider text-arctic/50">
                    {m.k}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing: matrix-driven currency selector (isolated state) ---------- */
type Currency = "USD" | "EUR" | "INR";
const CURRENCY: Record<Currency, { sym: string; factor: number }> = {
  USD: { sym: "$", factor: 1 },
  EUR: { sym: "â‚¬", factor: 0.92 },
  INR: { sym: "â‚¹", factor: 83 },
};

const PLANS = [
  {
    n: "Starter System",
    base: 99,
    d: "For builders prototyping their first agent.",
    f: ["3 active agents", "10k inferences / mo", "Community support"],
  },
  {
    n: "Pro Neural Link",
    base: 499,
    d: "Production neural workflows with SLA.",
    f: [
      "Unlimited agents",
      "1M inferences / mo",
      "SSO + audit logs",
      "Priority support",
    ],
    featured: true,
  },
  {
    n: "Enterprise Grid",
    base: 2400,
    d: "Federated deployment across regions.",
    f: [
      "Dedicated tenancy",
      "Unlimited inferences",
      "On-prem / VPC",
      "24/7 incident desk",
    ],
  },
];

function Pricing() {
  const PRICING_MATRIX = {
    baseRates: [99, 499, 2400],
    regions: {
      USD: { symbol: "$", factor: 1.0 },
      EUR: { symbol: "â‚¬", factor: 0.92 },
      INR: { symbol: "â‚¹", factor: 83.0 }
    }
  };

  const stateRef = useRef<{ currency: Currency; annual: boolean }>({
    currency: "USD",
    annual: false,
  });

  const priceRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const cycleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const monthlyBtnRef = useRef<HTMLButtonElement | null>(null);
  const annualBtnRef = useRef<HTMLButtonElement | null>(null);

  const updatePricingDOM = useCallback(() => {
    const { currency, annual } = stateRef.current;
    
    PRICING_MATRIX.baseRates.forEach((baseRate, i) => {
      const priceSpan = priceRefs.current[i];
      if (priceSpan) {
        const { symbol, factor } = PRICING_MATRIX.regions[currency];
        const discountMultiplier = annual ? 0.8 : 1.0;
        const calculatedPrice = baseRate * factor * discountMultiplier;
        
        const roundedPrice = currency === "INR" 
          ? Math.round(calculatedPrice / 10) * 10
          : Math.round(calculatedPrice);
          
        priceSpan.textContent = `${symbol}${roundedPrice.toLocaleString()}`;
      }
      
      const cycleSpan = cycleRefs.current[i];
      if (cycleSpan) {
        cycleSpan.textContent = annual ? "/yr" : "/mo";
      }
    });

    const activeBtnClass = "rounded-full px-4 py-1.5 transition-colors duration-200 bg-forsythia text-noir cursor-pointer";
    const inactiveBtnClass = "rounded-full px-4 py-1.5 transition-colors duration-200 text-arctic/70 hover:text-arctic cursor-pointer";
    
    if (monthlyBtnRef.current && annualBtnRef.current) {
      if (annual) {
        monthlyBtnRef.current.className = inactiveBtnClass;
        annualBtnRef.current.className = activeBtnClass;
      } else {
        monthlyBtnRef.current.className = activeBtnClass;
        annualBtnRef.current.className = inactiveBtnClass;
      }
    }
  }, []);

  useEffect(() => {
    updatePricingDOM();
  }, [updatePricingDOM]);

  const handleCycleChange = (isAnnual: boolean) => {
    stateRef.current.annual = isAnnual;
    updatePricingDOM();
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    stateRef.current.currency = e.target.value as Currency;
    updatePricingDOM();
  };

  return (
    <section id="process-automation" className="border-b border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia">
              // Pricing matrix
            </div>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight md:text-5xl text-arctic">
              Configure your grid.
            </h2>
          </div>

          {/* Local toggle panel */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex rounded-full border border-white/10 bg-noir/60 p-1 font-mono-tech text-[11px] uppercase tracking-wider">
              <button
                ref={monthlyBtnRef}
                onClick={() => handleCycleChange(false)}
                className="rounded-full px-4 py-1.5 transition-colors duration-200 bg-forsythia text-noir cursor-pointer"
              >
                Monthly
              </button>
              <button
                ref={annualBtnRef}
                onClick={() => handleCycleChange(true)}
                className="rounded-full px-4 py-1.5 transition-colors duration-200 text-arctic/70 hover:text-arctic cursor-pointer"
              >
                Annual <span className="text-saffron">âˆ’20%</span>
              </button>
            </div>
            <div className="relative">
              <select
                defaultValue="USD"
                onChange={handleCurrencyChange}
                className="appearance-none rounded-full border border-white/10 bg-noir/60 px-4 py-2 pr-8 font-mono-tech text-[11px] uppercase tracking-wider text-arctic outline-none transition-colors duration-200 hover:border-forsythia cursor-pointer"
              >
                <option value="USD">USD $</option>
                <option value="EUR">EUR â‚¬</option>
                <option value="INR">INR â‚¹</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-arctic/50">
                â–¾
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {PLANS.map((p, i) => (
            <div
              key={p.n}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-200 ease-out hover:-translate-y-1 ${
                p.featured
                  ? "border-forsythia/50 bg-gradient-to-b from-noir to-[#0c1a24]"
                  : "border-white/10 bg-noir/60"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-8 rounded-full bg-forsythia px-3 py-1 font-mono-tech text-[10px] uppercase tracking-wider text-noir">
                  Most adopted
                </div>
              )}
              <div className="font-mono-tech text-[11px] uppercase tracking-wider text-saffron">
                0{i + 1}
              </div>
              <div className="mt-3 text-xl font-semibold text-arctic">{p.n}</div>
              <div className="mt-2 text-sm text-arctic/60">{p.d}</div>

              <div className="mt-6 flex items-baseline gap-1 font-mono-tech">
                <span
                  ref={(el) => {
                    priceRefs.current[i] = el;
                  }}
                  className="text-5xl font-semibold text-arctic"
                >
                  $0
                </span>
                <span
                  ref={(el) => {
                    cycleRefs.current[i] = el;
                  }}
                  className="text-sm text-arctic/50"
                >
                  /mo
                </span>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-arctic/70">
                {p.f.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-forsythia" />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <CtaButton variant={p.featured ? "primary" : "ghost"} full>
                  {p.featured ? "Deploy now" : "Select plan"}
                </CtaButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  {
    q: "Where is data processed and stored?",
    a: "All inference runs inside your designated region (US, EU, IN, APAC). PHI never leaves the tenancy boundary you select and is encrypted at rest with AES-256.",
  },
  {
    q: "Which models can I route to?",
    a: "Out of the box: GPT-4, Claude 3, Perplexity Sonar, Gemini 1.5, Llama 3, Mistral Large and your own self-hosted endpoints. Routing rules are per-agent.",
  },
  {
    q: "Is ARMORY HIPAA compliant?",
    a: "Yes â€” HIPAA, HITRUST, SOC 2 Type II and ISO 27001. We sign BAAs with every customer on Pro and Enterprise plans.",
  },
  {
    q: "How long does deployment take?",
    a: "Most teams ship their first production workflow in under 14 days. Enterprise federations average 6â€“8 weeks with our solutions team.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const [search, setSearch] = useState("");

  const filteredFaqs = FAQS.filter(
    (f) =>
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="ai-strategy" className="border-b border-white/5 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia">
              // FAQ
            </div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl text-arctic">
              Infrastructure inquiries.
            </h2>
          </div>
          
          {/* FAQ Interactive Search input */}
          <div className="relative w-full max-w-xs">
            <SearchIcon className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-forsythia" />
            <input
              type="text"
              placeholder="Search inquiries..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setOpen(0);
              }}
              className="w-full rounded-full border border-white/10 bg-noir/40 py-2 pl-10 pr-8 font-mono-tech text-xs text-arctic outline-none focus:border-forsythia focus:bg-noir transition"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-arctic/40 hover:text-arctic cursor-pointer"
              >
                <XMarkIcon className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-medium md:text-xl text-arctic hover:text-forsythia transition-colors">{f.q}</span>
                    <span className="shrink-0 text-forsythia bg-white/[0.02] border border-white/15 h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 hover:border-forsythia hover:scale-[1.05]">
                      <ChevronDownIcon
                        className={`h-4 w-4 transition-transform duration-350 ${
                          isOpen ? "rotate-180 text-saffron" : ""
                        }`}
                      />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-400 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="pb-6 pr-10 text-arctic/70 leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-12 text-center font-mono-tech text-sm text-arctic/40">
              No matching inquiries found. Try another term.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
function ArmoryLanding() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Layout>
      <Seo
        title="ARMORY - Power your future with AI"
        description="ARMORY is the AI automation platform for healthcare. Build agents, automate processes and ship secure neural workflows."
        path="/"
        schemaType="WebSite"
      />
      {mounted ? <HeroSection includeHeader={false} /> : <Hero />}
      <Integrations />
      <FeatureArchitecture />
      <Telemetry />
      <CaseStudies />
      <Pricing />
      <FAQ />
    </Layout>
  );
}
