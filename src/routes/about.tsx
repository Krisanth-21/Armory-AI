import { createFileRoute } from "@tanstack/react-router";
import { Layout, CtaButton } from "@/components/Layout";
import { Seo, canonicalLink } from '@/components/Seo';
import {
  Cog8ToothIcon,
  Cube16SolidIcon,
  ArrowPathIcon,
  ArrowTrendingUpIcon,
} from "@/components/Svgs";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ARMORY - Our Mission" },
      {
        name: "description",
        content: "Learn about ARMORY's mission to build the most secure AI automation platform for healthcare.",
      },
      { property: "og:title", content: "About ARMORY - Our Mission" },
      { property: "og:description", content: "Learn about ARMORY's mission to build the most secure AI automation platform for healthcare." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About ARMORY - Our Mission" },
      { name: "twitter:description", content: "Learn about ARMORY's mission to build the most secure AI automation platform for healthcare." },
    ],
    links: [canonicalLink('/about')],
  }),
  component: AboutPage,
});

const STATS = [
  { value: "42", label: "Team members", suffix: "" },
  { value: "312", label: "Healthcare facilities", suffix: "+" },
  { value: "14", label: "Edge regions", suffix: "" },
  { value: "99.99", label: "Uptime SLA", suffix: "%" },
];

const VALUES = [
  {
    title: "Security First",
    desc: "Every line of code, every deployment, every decision is evaluated through the lens of patient data protection.",
    icon: <Cog8ToothIcon className="w-6 h-6 text-forsythia" />,
  },
  {
    title: "Developer Empathy",
    desc: "We build for developers who ship under pressure. Clean APIs, zero config overhead, and docs that actually help.",
    icon: <Cube16SolidIcon className="w-6 h-6 text-forsythia" />,
  },
  {
    title: "Radical Transparency",
    desc: "Open audit logs, public status pages, and compliance certificates available to every customer on every plan.",
    icon: <ArrowPathIcon className="w-6 h-6 text-forsythia" />,
  },
  {
    title: "Relentless Performance",
    desc: "Sub-50ms P99 latency isn't a target — it's a hard requirement. We optimize at the hardware level to deliver it.",
    icon: <ArrowTrendingUpIcon className="w-6 h-6 text-forsythia" />,
  },
];

const MILESTONES = [
  { year: "2022", title: "Founded", desc: "Three ex-Google engineers set out to fix healthcare data automation." },
  { year: "2023", title: "First Production Deploy", desc: "Launched zero-trust runtime at Cigna Smart Health Systems." },
  { year: "2024", title: "SOC 2 & HIPAA Certified", desc: "Achieved SOC 2 Type II and HIPAA compliance certification." },
  { year: "2025", title: "Series B â€” $48M", desc: "Raised Series B led by Sequoia to scale edge infrastructure globally." },
  { year: "2026", title: "14 Edge Regions Live", desc: "Expanded to 14 global edge regions serving 312+ healthcare facilities." },
];

const TEAM = [
  { name: "Sarah Chen", role: "CEO & Co-Founder", bio: "Ex-Google Health, 12 years in clinical data systems." },
  { name: "Marcus Webb", role: "CTO & Co-Founder", bio: "Former Stripe infrastructure lead, distributed systems expert." },
  { name: "Dr. Priya Sharma", role: "Chief Medical Officer", bio: "Board-certified physician, 8 years in health informatics." },
  { name: "James Park", role: "VP Engineering", bio: "Ex-AWS, built Lambda's edge compute orchestration layer." },
  { name: "Elena Rodriguez", role: "Head of Security", bio: "Former NSA cybersecurity analyst, HIPAA compliance architect." },
  { name: "David Liu", role: "Head of Product", bio: "Ex-Palantir, healthcare workflow automation specialist." },
];

function AboutPage() {
  return (
    <Layout>
      <Seo
        title="About ARMORY - Our Mission"
        description="Learn about ARMORY's mission to build the most secure AI automation platform for healthcare."
        path="/about"
        schemaType="AboutPage"
      />
      {/* Hero */}
      <section className="relative overflow-hidden py-24 border-b border-white/5 bg-grid">
        <div className="absolute inset-0 bg-radial-glow opacity-40" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-forsythia/25 bg-forsythia/5 px-3 py-1 font-mono-tech text-[10px] uppercase tracking-wider text-forsythia animate-boot">
            // Our Story
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-tight text-arctic md:text-7xl text-gradient animate-boot">
            Building the future <br />
            of healthcare AI.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-arctic/75 leading-relaxed animate-boot">
            ARMORY was born from a simple observation: healthcare teams shouldn't need a PhD 
            in distributed systems to build secure AI workflows. We're here to change that.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-white/5 bg-noir/40 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <div key={stat.label} className={`reveal stagger-${i + 1} text-center`}>
                <div className="font-mono-tech text-4xl font-bold text-forsythia md:text-5xl">
                  {stat.value}<span className="text-saffron">{stat.suffix}</span>
                </div>
                <div className="mt-2 font-mono-tech text-[11px] uppercase tracking-wider text-arctic/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div className="reveal-left">
              <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia">// Mission</div>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl text-arctic leading-tight">
                Healthcare deserves <br />
                <span className="text-gradient">better infrastructure.</span>
              </h2>
              <p className="mt-6 text-sm text-arctic/60 leading-relaxed">
                We believe that the most critical industry in the world shouldn't be running 
                on the most fragile infrastructure. ARMORY provides the compliance-first, 
                developer-friendly platform that healthcare teams need to build AI systems 
                that actually ship â€” securely, reliably, and at scale.
              </p>
              <p className="mt-4 text-sm text-arctic/60 leading-relaxed">
                Our team has shipped infrastructure at Google, Stripe, AWS, and Palantir. 
                We've taken that expertise and focused it entirely on solving healthcare's 
                hardest automation challenges.
              </p>
            </div>

            {/* Values Grid */}
            <div className="reveal-right grid gap-4 sm:grid-cols-2">
              {VALUES.map((v, i) => (
                <div key={v.title} className={`stagger-${i + 1} border border-white/10 bg-noir/40 p-6 rounded-2xl glow-card`}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-forsythia/20 bg-forsythia/10 text-forsythia mb-4">
                    {v.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-arctic">{v.title}</h3>
                  <p className="mt-2 text-xs text-arctic/50 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 border-b border-white/5">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center reveal">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-saffron">// Milestones</div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Our Journey</h2>
          </div>

          <div className="mt-16 relative">
            {/* Vertical line */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-forsythia/40 via-saffron/20 to-transparent" />

            <div className="space-y-12">
              {MILESTONES.map((m, i) => (
                <div key={m.year} className={`reveal stagger-${Math.min(i + 1, 5)} flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 hidden md:block ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="border border-white/10 bg-noir/40 p-6 rounded-2xl glow-card inline-block">
                      <div className="font-mono-tech text-xs text-forsythia mb-2">{m.year}</div>
                      <h3 className="text-lg font-semibold text-arctic">{m.title}</h3>
                      <p className="mt-2 text-xs text-arctic/60 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-noir border-2 border-forsythia/40 flex items-center justify-center">
                      <span className="font-mono-tech text-[9px] text-forsythia">{m.year.slice(2)}</span>
                    </div>
                  </div>

                  {/* Mobile card */}
                  <div className="flex-1 md:hidden">
                    <div className="border border-white/10 bg-noir/40 p-5 rounded-2xl">
                      <div className="font-mono-tech text-xs text-forsythia mb-2">{m.year}</div>
                      <h3 className="text-base font-semibold text-arctic">{m.title}</h3>
                      <p className="mt-2 text-xs text-arctic/60">{m.desc}</p>
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center reveal">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia">// Leadership</div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">The Team</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-arctic/60">
              Infrastructure veterans from the world's best engineering organizations, 
              united by a mission to fix healthcare automation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {TEAM.map((person, i) => (
              <div key={person.name} className={`reveal stagger-${(i % 3) + 1} border border-white/10 bg-noir/40 p-6 rounded-2xl glow-card`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-forsythia/20 to-saffron/10 border border-forsythia/20 flex items-center justify-center font-mono-tech text-forsythia text-sm font-bold">
                    {person.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-arctic">{person.name}</h3>
                    <div className="font-mono-tech text-[10px] uppercase tracking-wider text-forsythia">{person.role}</div>
                  </div>
                </div>
                <p className="text-xs text-arctic/50 leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="reveal-scale gradient-border rounded-2xl bg-gradient-to-b from-[#12222d] to-noir p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-glow opacity-40 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl font-semibold md:text-5xl text-arctic">
                Want to <span className="text-gradient">join the mission</span>?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-sm text-arctic/60 leading-relaxed">
                We're hiring across engineering, security, and product. Remote-first, 
                competitive compensation, and the chance to build infrastructure that matters.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <CtaButton to="/">View Open Roles</CtaButton>
                <CtaButton variant="ghost" to="/">Contact Us</CtaButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
