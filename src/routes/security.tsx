import { createFileRoute } from "@tanstack/react-router";
import { Layout, CtaButton } from "@/components/Layout";
import { Seo } from '@/components/Seo';
import { useState, useEffect } from "react";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security & Compliance â€” ARMORY" },
      {
        name: "description",
        content: "ARMORY is engineered with zero-trust architecture to satisfy HIPAA, SOC 2 Type II, and enterprise healthcare compliance standards.",
      },
    ],
  }),
  component: SecurityPage,
});

const COMPLIANCE_ITEMS = [
  {
    n: "HIPAA Compliant",
    d: "Full HIPAA compliance alignment with support for Business Associate Agreements (BAAs). Automate health claim audits and clinical operations securely.",
  },
  {
    n: "SOC 2 Type II",
    d: "Verified control architectures governing client isolation, encryption standards, and process telemetry safeguards.",
  },
  {
    n: "ISO 27001",
    d: "Governed by strict information security management system parameters, maintaining structured vulnerability audits and risk evaluation cycles.",
  },
];

const CERTIFICATIONS = [
  { name: "HIPAA", desc: "Health Insurance Portability & Accountability", status: "Certified", year: "2024" },
  { name: "SOC 2 Type II", desc: "Service Organization Control Audit", status: "Certified", year: "2025" },
  { name: "ISO 27001", desc: "Information Security Management", status: "Certified", year: "2024" },
  { name: "HITRUST CSF", desc: "Health Information Trust Alliance", status: "Certified", year: "2025" },
  { name: "GDPR", desc: "General Data Protection Regulation", status: "Compliant", year: "2024" },
  { name: "FedRAMP", desc: "Federal Risk Authorization Program", status: "In Progress", year: "2026" },
];

const DATA_FLOW_STEPS = [
  { step: "01", name: "Data Ingress", desc: "Encrypted TLS 1.3 channel receives payload at regional edge node", icon: "â†“" },
  { step: "02", name: "PHI Detection", desc: "NLP scanner identifies and flags protected health information fields", icon: "âŠ›" },
  { step: "03", name: "Token Redaction", desc: "PHI tokens replaced with reversible cryptographic hashes (AES-256)", icon: "â—ˆ" },
  { step: "04", name: "Isolated Processing", desc: "Redacted payload processed in micro-VM with no network egress", icon: "â¬¡" },
  { step: "05", name: "Audit Commit", desc: "Cryptographically signed audit log committed to immutable ledger", icon: "âœ“" },
];

function SecurityPage() {
  const [logs, setLogs] = useState<string[]>([
    "[09:42:01] [BOOT] Compliance runtime v4.2.1 initialized.",
    "[09:42:05] [KEY] Rotated workspace AES-256 wrapping key.",
    "[09:42:12] [IAM] Authenticated cigna-bot node interface.",
  ]);

  useEffect(() => {
    const modules = ["EHR", "PHI-REDACT", "COMPLIANCE", "VM-RUNTIME"];
    const actions = [
      "Tokenized patient record index #891.",
      "Redacted SSN and patient names in claims stream.",
      "Committed encrypted audit check hash: SHA-256.",
      "Isolated VM process runtime thread #19.",
      "Rotated ephemeral TLS keys for edge-node-3.",
    ];

    const interval = setInterval(() => {
      const randomModule = modules[Math.floor(Math.random() * modules.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      const timestamp = new Date().toTimeString().split(" ")[0];
      
      setLogs((prev) => {
        const next = [...prev, `[${timestamp}] [${randomModule}] ${randomAction}`];
        if (next.length > 8) next.shift();
        return next;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 border-b border-white/5 bg-grid">
        <div className="absolute inset-0 bg-radial-glow opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-saffron/25 bg-saffron/5 px-3 py-1 font-mono-tech text-[10px] uppercase tracking-wider text-saffron animate-boot">
            // Trust & Integrity
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-tight text-arctic md:text-7xl text-gradient">
            Zero-Trust. <br />
            Compliance Engineered.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-arctic/75 leading-relaxed">
            ARMORY is designed for environments where compliance is non-negotiable.
            Encrypt, isolate, and audit every process token at the edge.
          </p>
        </div>
      </section>

      {/* Compliance Grid with custom progress ring */}
      <section className="py-24 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] items-center">
            <div className="grid gap-6">
              {COMPLIANCE_ITEMS.map((item, i) => (
                <div 
                  key={item.n}
                  className={`reveal stagger-${i + 1} border border-white/10 bg-noir/40 p-6 rounded-2xl glow-card`}
                >
                  <h3 className="text-lg font-semibold text-arctic flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron inline-block"></span>
                    {item.n}
                  </h3>
                  <p className="mt-3 text-xs text-arctic/60 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>

            {/* Compliance Circular Gauge */}
            <div className="reveal-scale border border-white/10 bg-noir/50 p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg relative">
              <svg className="w-40 h-40 transform -rotate-90">
                <circle cx="80" cy="80" r="70" stroke="rgba(241,246,244,0.04)" strokeWidth="8" fill="transparent" />
                <circle 
                  cx="80" 
                  cy="80" 
                  r="70" 
                  stroke="var(--color-saffron)" 
                  strokeWidth="8" 
                  fill="transparent" 
                  strokeDasharray="440"
                  strokeDashoffset="0"
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
                <span className="text-3xl font-bold font-mono text-saffron">100%</span>
                <span className="text-[9px] font-mono-tech uppercase tracking-wider text-arctic/40 mt-1">Audit Ready</span>
              </div>
              <div className="mt-6 text-sm font-semibold text-arctic">HIPAA & SOC 2 Verified</div>
              <div className="text-xs text-arctic/50 mt-1">Audit Checksum: 0x9fA2...2810</div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Flow Visualization */}
      <section className="py-24 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center reveal">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia">// Data Flow</div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Zero-Trust Pipeline</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-arctic/60">
              Every data point passes through five security stages before reaching your models.
              No exceptions. No shortcuts.
            </p>
          </div>

          <div className="mt-16 relative">
            {/* Connecting line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-forsythia/40 via-saffron/20 to-transparent hidden md:block" />
            
            <div className="space-y-8 md:space-y-12">
              {DATA_FLOW_STEPS.map((step, i) => (
                <div key={step.step} className={`reveal stagger-${i + 1} flex flex-col md:flex-row items-start gap-6 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                    <div className="border border-white/10 bg-noir/40 p-6 rounded-2xl glow-card">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-forsythia/10 border border-forsythia/20 text-forsythia text-sm">
                          {step.icon}
                        </span>
                        <span className="font-mono-tech text-[10px] uppercase tracking-wider text-forsythia">Stage {step.step}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-arctic">{step.name}</h3>
                      <p className="mt-2 text-xs text-arctic/60 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  
                  {/* Center node */}
                  <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-noir border-2 border-forsythia/30 items-center justify-center z-10">
                    <span className="font-mono-tech text-[10px] text-forsythia">{step.step}</span>
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-24 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center reveal">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-saffron">// Certifications</div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Compliance Portfolio</h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {CERTIFICATIONS.map((cert, i) => (
              <div key={cert.name} className={`reveal stagger-${(i % 3) + 1} border border-white/10 bg-noir/40 p-6 rounded-2xl glow-card`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-mono-tech uppercase tracking-wider ${
                    cert.status === "Certified" 
                      ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                      : cert.status === "Compliant"
                      ? "bg-forsythia/10 border border-forsythia/30 text-forsythia"
                      : "bg-saffron/10 border border-saffron/30 text-saffron"
                  }`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${
                      cert.status === "Certified" ? "bg-emerald-400" : cert.status === "Compliant" ? "bg-forsythia" : "bg-saffron"
                    }`} />
                    {cert.status}
                  </span>
                  <span className="font-mono-tech text-[10px] text-arctic/30">{cert.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-arctic">{cert.name}</h3>
                <p className="mt-2 text-xs text-arctic/50">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time Audit Console */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] items-center">
            <div className="reveal-left">
              <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia">
                // System Transparency
              </div>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Live Audit Logs</h2>
              <p className="mt-6 text-sm text-arctic/60 leading-relaxed">
                ARMORY records cryptographically signed audit logs for every operation. 
                Our compliance engine automatically captures EHR transactions, redactions, 
                and VM lifecycle changes for HIPAA record keeping.
              </p>
              <div className="mt-8 flex items-center gap-3 font-mono-tech text-[11px] uppercase text-arctic/50">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Live compliance telemetry active
              </div>
              <div className="mt-8">
                <CtaButton to="/docs">View Security Docs</CtaButton>
              </div>
            </div>

            {/* Simulated Live Console with scanline effect */}
            <div className="reveal-right border border-[#114c5a]/40 bg-[#07131a] rounded-2xl p-5 font-mono text-xs text-left text-emerald-400/90 shadow-2xl relative overflow-hidden scanlines">
              <div className="flex items-center justify-between border-b border-emerald-500/10 pb-3 mb-4 relative z-20">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
                </div>
                <div className="text-[10px] text-emerald-400/40 tracking-wider font-mono-tech uppercase">armory-compliance-console</div>
              </div>
              
              <div className="space-y-2 h-[220px] overflow-y-auto relative z-20">
                {logs.map((log, index) => {
                  const isKey = log.includes("[KEY]");
                  const isIam = log.includes("[IAM]");
                  const isRedact = log.includes("Redacted") || log.includes("PHI");
                  
                  return (
                    <div 
                      key={index} 
                      className={`transition-all duration-300 ${
                        isKey ? "text-saffron font-semibold" : isIam ? "text-forsythia font-semibold" : isRedact ? "text-emerald-300 font-semibold" : "text-emerald-400/80"
                      }`}
                    >
                      {log}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
