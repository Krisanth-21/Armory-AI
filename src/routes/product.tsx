import { createFileRoute } from "@tanstack/react-router";
import { Layout, CtaButton } from "@/components/Layout";
import { Seo } from '@/components/Seo';
import { useState, useEffect } from "react";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product & Architecture â€” ARMORY" },
      {
        name: "description",
        content: "Deep dive into ARMORY's four core primitives: Zero-trust runtime, Composable agents, Edge-native compute, and Federated intelligence.",
      },
    ],
  }),
  component: ProductPage,
});

const PRIMITIVES = [
  {
    n: "01",
    t: "Zero-Trust Runtime",
    d: "All workflows execute in cryptographically isolated micro-virtual machines. Features dynamic PHI redaction, localized model execution, and hardware-level IAM sandboxing.",
    s: "HIPAA Compliant Â· PHI Redaction Â· AES-256",
    icon: (
      <svg className="w-8 h-8 text-forsythia mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16" r="1.5" />
      </svg>
    )
  },
  {
    n: "02",
    t: "Composable Agents",
    d: "Build complex reasoning workflows by chaining models, tools, and human review steps. Control threshold variables and decision graphs via simple, declarative JSON configurations.",
    s: "Dynamic Routing Â· Human-in-the-Loop Â· Model Agnostic",
    icon: (
      <svg className="w-8 h-8 text-forsythia mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="5" r="3" />
        <circle cx="5" cy="19" r="3" />
        <circle cx="19" cy="19" r="3" />
        <path d="M12 8v8M7 17l3.5-3.5M17 17l-3.5-3.5" />
      </svg>
    )
  },
  {
    n: "03",
    t: "Edge-Native Compute",
    d: "Deploy pipelines directly to regional edge nodes located close to your local clinical datacenters. Ensures ultra-low latency execution and prevents data leaving regional compliance boundaries.",
    s: "Sub-50ms Latency Â· Regional Locks Â· Edge VMs",
    icon: (
      <svg className="w-8 h-8 text-forsythia mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    n: "04",
    t: "Federated Intelligence",
    d: "Query siloed systems (EHR databases, claim queues, historical telemetry logs) securely. Compile and extract insights without centralizing raw compliance data.",
    s: "FHIR HL7 Streams Â· Federated Queries Â· Audit Logs",
    icon: (
      <svg className="w-8 h-8 text-forsythia mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
      </svg>
    )
  },
];

const INTEGRATIONS = [
  { n: "OpenAI GPT-4", c: "LLM", s: "8.2T params" },
  { n: "Anthropic Claude 3", c: "LLM", s: "200K context" },
  { n: "Perplexity Sonar", c: "Search", s: "Live web" },
  { n: "Google Gemini 1.5", c: "LLM", s: "Multimodal" },
  { n: "Epic EHR", c: "EHR", s: "FHIR R4" },
  { n: "Cerner Oracle", c: "EHR", s: "HL7 v2" },
  { n: "AWS HealthLake", c: "Cloud", s: "HIPAA" },
  { n: "Azure Health", c: "Cloud", s: "DICOM" },
];

function ProductPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [timestamp, setTimestamp] = useState<string>("");

  useEffect(() => {
    setTimestamp(new Date().toISOString());
  }, []);

  const steps = [
    { id: 1, title: "FHIR Claim Input", desc: "HL7 claim payload received at Edge node." },
    { id: 2, title: "PHI Redaction", desc: "Redacting patient name, SSN, and details." },
    { id: 3, title: "LLM Medical Review", desc: "Analyzing procedure codes against policy." },
    { id: 4, title: "Compliance Check", desc: "Verifying HIPAA audit signatures." },
    { id: 5, title: "Adjudication Trigger", desc: "Pushing approved response to clearinghouse." },
  ];

  return (
    <Layout>
      <Seo
        title='ARMORY - AI-Powered Enterprise Automation'
        description='Deploy secure AI agents, data pipelines, and workflow automation for demanding enterprise ecosystems.'
        path='/' />
      <Seo
        title="ARMORY - AI-Powered Enterprise Automation"
        description="Deploy secure AI agents, data pipelines, and workflow automation for demanding enterprise ecosystems."
        path="/" />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 border-b border-white/5 bg-grid">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-60" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-forsythia/25 bg-forsythia/5 px-3 py-1 font-mono-tech text-[10px] uppercase tracking-wider text-forsythia animate-boot">
            // Core Architecture
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-tight text-arctic md:text-7xl animate-boot text-gradient">
            Four Primitives. <br />
            Infinite Workflows.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-arctic/75 leading-relaxed animate-boot">
            ARMORY separates data automation into four discrete compliance layers,
            giving healthcare developers the ability to ship secure AI reasoning systems
            without the architectural complexity.
          </p>
        </div>
      </section>

      {/* Primitives Grid */}
      <section className="py-24 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {PRIMITIVES.map((p) => (
              <div 
                key={p.n}
                className="reveal group border border-white/10 bg-noir/40 p-8 rounded-2xl glow-card"
              >
                <div className="flex items-center justify-between">
                  {p.icon}
                  <span className="font-mono-tech text-xs text-forsythia/40">PRIMITIVE {p.n}</span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-arctic">{p.t}</h3>
                <p className="mt-4 text-sm text-arctic/60 leading-relaxed">{p.d}</p>
                <div className="mt-6 border-t border-white/5 pt-4 text-xs font-mono-tech text-saffron">
                  {p.s}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-24 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center reveal">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia">// System Architecture</div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">The Four-Layer Stack</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-arctic/60">
              Each layer operates independently, allowing teams to customize specific stages 
              without disrupting the rest of the pipeline.
            </p>
          </div>

          <div className="mt-16 grid gap-0 md:grid-cols-4">
            {[
              { layer: "L1", name: "Runtime", desc: "Micro-VM isolation & IAM", color: "from-forsythia/20 to-forsythia/5" },
              { layer: "L2", name: "Agents", desc: "Reasoning & orchestration", color: "from-saffron/20 to-saffron/5" },
              { layer: "L3", name: "Edge", desc: "Regional compute nodes", color: "from-forsythia/15 to-forsythia/5" },
              { layer: "L4", name: "Intelligence", desc: "Federated data queries", color: "from-saffron/15 to-saffron/5" },
            ].map((l, i) => (
              <div key={l.layer} className={`reveal stagger-${i + 1} relative group`}>
                <div className={`p-8 border border-white/10 bg-gradient-to-b ${l.color} text-center transition-all duration-300 hover:border-forsythia/40 ${i === 0 ? 'rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none' : ''} ${i === 3 ? 'rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none' : ''}`}>
                  <div className="font-mono-tech text-[10px] uppercase tracking-wider text-forsythia/60">{l.layer}</div>
                  <div className="mt-3 text-xl font-semibold text-arctic group-hover:text-forsythia transition-colors">{l.name}</div>
                  <div className="mt-2 text-xs text-arctic/50">{l.desc}</div>
                </div>
                {i < 3 && (
                  <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-6 h-6 rounded-full bg-noir border border-forsythia/30 items-center justify-center">
                    <svg className="w-3 h-3 text-forsythia" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m8.25 4.5l7.5 7.5l-7.5 7.5" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Pipeline Showcase */}
      <section className="py-24 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center reveal">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia">// Real-Time Orchestration</div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Visualizing the Pipeline Flow</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-arctic/60">
              Interactive demonstration of ARMORY's live processing chain. Click nodes to simulate stage-by-stage data automation.
            </p>
          </div>

          {/* Interactive Pipeline Visualizer */}
          <div className="mt-16 border border-white/10 bg-noir/60 rounded-2xl p-6 md:p-12 backdrop-blur relative overflow-hidden reveal-scale">
            {/* Animated SVG connecting lines */}
            <div className="absolute top-[88px] left-[10%] right-[10%] h-8 hidden md:block z-0 pointer-events-none">
              <svg className="w-full h-full" fill="none">
                <path d="M 0 4 H 1000" stroke="rgba(241,246,244,0.06)" strokeWidth="4" strokeLinecap="round" />
                <path 
                  d={`M 0 4 H ${activeStep * 200 + 100}`} 
                  stroke="var(--color-forsythia)" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                  className="animate-dash"
                />
              </svg>
            </div>

            <div className="grid gap-6 md:grid-cols-5 relative z-10">
              {steps.map((step, idx) => {
                const isActive = idx === activeStep;
                const isCompleted = idx < activeStep;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    className="relative flex flex-col items-center text-center focus:outline-none group cursor-pointer"
                  >
                    <div 
                      className={`w-14 h-14 rounded-full flex items-center justify-center border font-mono-tech text-sm transition-all duration-300 relative ${
                        isActive
                          ? "bg-forsythia border-forsythia text-noir scale-110 shadow-[0_0_20px_rgba(255,200,1,0.4)]"
                          : isCompleted
                          ? "bg-emerald-500/10 border-emerald-500 text-emerald-400"
                          : "bg-noir border-white/15 text-arctic/40 group-hover:border-forsythia/50"
                      }`}
                    >
                      {isCompleted ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : `0${step.id}`}
                      
                      {isActive && (
                        <span className="absolute -inset-1.5 rounded-full border border-forsythia/40 animate-ping pointer-events-none" />
                      )}
                    </div>
                    
                    <div className={`mt-4 font-semibold text-sm transition-colors duration-200 ${isActive ? "text-forsythia" : "text-arctic group-hover:text-forsythia"}`}>
                      {step.title}
                    </div>
                    <div className="mt-1.5 text-xs text-arctic/50 max-w-[150px] mx-auto leading-relaxed">
                      {step.desc}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Current State Log Viewer */}
            <div className="mt-12 border border-white/5 bg-noir/80 rounded-xl p-5 font-mono text-xs text-left text-arctic/80 shadow-inner">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
                <span className="text-[10px] text-forsythia uppercase tracking-wider font-mono-tech">// STAGE STATUS LOG</span>
                <span className="text-[10px] text-arctic/40">ID: workflow-run-749e</span>
              </div>
              <div className="space-y-1">
                <div><span className="text-arctic/40">Timestamp:</span> {timestamp}</div>
                <div><span className="text-arctic/40">Active Node:</span> 0{activeStep + 1} - {steps[activeStep].title}</div>
                <div><span className="text-arctic/40">Operation:</span> {steps[activeStep].desc}</div>
                <div className={activeStep === 4 ? "text-emerald-400" : "text-forsythia"}>
                  Status: {activeStep === 4 ? "[FINISHED] Pipeline completed successfully." : "[PROCESSING] Awaiting node response..."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-24 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center reveal">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia">// Ecosystem</div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Integration Partners</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-arctic/60">
              ARMORY connects natively to the models, EHR systems, and cloud providers your teams already trust.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {INTEGRATIONS.map((int, i) => (
              <div key={int.n} className={`reveal stagger-${(i % 4) + 1} border border-white/10 bg-noir/40 p-6 rounded-xl glow-card text-center`}>
                <div className="font-mono-tech text-[10px] uppercase tracking-wider text-saffron">{int.c}</div>
                <div className="mt-3 text-lg font-semibold text-arctic">{int.n}</div>
                <div className="mt-2 font-mono-tech text-xs text-arctic/50">{int.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="reveal-scale gradient-border rounded-2xl bg-gradient-to-b from-[#12222d] to-noir p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-glow opacity-40 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl font-semibold md:text-5xl text-arctic">
                Ready to build your <span className="text-gradient">first pipeline</span>?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-sm text-arctic/60 leading-relaxed">
                Get started in minutes with our developer sandbox. Deploy production workflows 
                to regional edge nodes with zero infrastructure overhead.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <CtaButton>Start Building Free</CtaButton>
                <CtaButton variant="ghost" to="/docs">Read the Docs</CtaButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
