import { createFileRoute } from "@tanstack/react-router";
import { Layout, CtaButton } from "@/components/Layout";
import { Seo } from '@/components/Seo';
import { useState } from "react";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "API Reference & Documentation â€” ARMORY" },
      {
        name: "description",
        content: "Explore the ARMORY workflow engine API specifications and developer integrations.",
      },
    ],
  }),
  component: DocsPage,
});

const CODE_EXAMPLES = {
  curl: `curl -X POST https://api.armory.ai/v1/workflows \\
  -H "Authorization: Bearer $ARMORY_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "pipeline": "hl7-claims-processor",
    "payload": {
      "claim_id": "clm_92b8A1",
      "patient_ehr": "fhir://pat_02194f",
      "adjudication_threshold": 0.85
    }
  }'`,
  python: `import armory

client = armory.Client(api_key="am_sk_...")

response = client.workflows.run(
    pipeline="hl7-claims-processor",
    payload={
        "claim_id": "clm_92b8A1",
        "patient_ehr": "fhir://pat_02194f",
        "adjudication_threshold": 0.85
    }
)

print(f"Workflow initiated: {response.id}")`,
  node: `import { Armory } from '@armory/sdk';

const armory = new Armory({ apiKey: 'am_sk_...' });

const response = await armory.workflows.run({
  pipeline: 'hl7-claims-processor',
  payload: {
    claimId: 'clm_92b8A1',
    patientEhr: 'fhir://pat_02194f',
    adjudicationThreshold: 0.85
  }
});

console.log(\`Workflow running: \${response.id}\`);`
};

const RESPONSE_EXAMPLE = `{
  "id": "wf_run_7k9x2mP4",
  "status": "running",
  "pipeline": "hl7-claims-processor",
  "created_at": "2026-06-26T10:30:00Z",
  "edge_node": "us-east-1-edge-04",
  "stages": {
    "phi_redaction": "completed",
    "llm_review": "in_progress",
    "compliance_check": "pending",
    "adjudication": "pending"
  },
  "audit_hash": "sha256:9f4a2b81..."
}`;

const STATUS_CODES = [
  { code: "200", desc: "Workflow created and running", color: "text-emerald-400" },
  { code: "201", desc: "Resource created successfully", color: "text-emerald-400" },
  { code: "400", desc: "Invalid payload or missing fields", color: "text-saffron" },
  { code: "401", desc: "Authentication failed â€” invalid API key", color: "text-red-400" },
  { code: "403", desc: "IAM policy denied â€” insufficient permissions", color: "text-red-400" },
  { code: "429", desc: "Rate limit exceeded â€” retry after backoff", color: "text-saffron" },
  { code: "500", desc: "Internal server error â€” contact support", color: "text-red-400" },
];

const RATE_LIMITS = [
  { plan: "Developer", rpm: "60", rpd: "1,000", burst: "10" },
  { plan: "Professional", rpm: "600", rpd: "50,000", burst: "100" },
  { plan: "Enterprise", rpm: "6,000", rpd: "Unlimited", burst: "1,000" },
];

const SDKS = [
  { name: "Python SDK", version: "v2.4.1", install: "pip install armory-sdk", lang: "python" },
  { name: "Node.js SDK", version: "v3.1.0", install: "npm install @armory/sdk", lang: "javascript" },
  { name: "Go SDK", version: "v1.8.2", install: "go get armory.ai/sdk", lang: "go" },
  { name: "REST API", version: "v1", install: "https://api.armory.ai/v1", lang: "curl" },
];

function DocsPage() {
  const [activeTab, setActiveTab] = useState<"curl" | "python" | "node">("curl");
  const [copied, setCopied] = useState(false);
  const [copiedResponse, setCopiedResponse] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_EXAMPLES[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyResponse = () => {
    navigator.clipboard.writeText(RESPONSE_EXAMPLE);
    setCopiedResponse(true);
    setTimeout(() => setCopiedResponse(false), 2000);
  };

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
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-[240px_1fr_1.2fr]">
        {/* Left Sidebar Navigation */}
        <aside className="space-y-6 text-sm border-r border-white/5 pr-6 hidden md:block">
          <div>
            <div className="font-mono-tech text-[10px] uppercase text-forsythia tracking-wider mb-3">// GETTING STARTED</div>
            <ul className="space-y-2 text-arctic/60 font-medium">
              <li className="border-l-2 border-forsythia pl-3 text-forsythia font-semibold">
                <a href="#intro">Introduction</a>
              </li>
              <li className="border-l-2 border-transparent pl-3 hover:border-forsythia/40 hover:text-forsythia transition-all">
                <a href="#auth">Authentication</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-mono-tech text-[10px] uppercase text-forsythia tracking-wider mb-3">// PIPELINES API</div>
            <ul className="space-y-2 text-arctic/60 font-medium">
              <li className="border-l-2 border-transparent pl-3 hover:border-forsythia/40 hover:text-forsythia transition-all">
                <a href="#run">Run Workflow</a>
              </li>
              <li className="border-l-2 border-transparent pl-3 hover:border-forsythia/40 hover:text-forsythia transition-all">
                <a href="#response">Response Format</a>
              </li>
              <li className="border-l-2 border-transparent pl-3 hover:border-forsythia/40 hover:text-forsythia transition-all">
                <a href="#status-codes">Status Codes</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-mono-tech text-[10px] uppercase text-forsythia tracking-wider mb-3">// REFERENCE</div>
            <ul className="space-y-2 text-arctic/60 font-medium">
              <li className="border-l-2 border-transparent pl-3 hover:border-forsythia/40 hover:text-forsythia transition-all">
                <a href="#rate-limits">Rate Limits</a>
              </li>
              <li className="border-l-2 border-transparent pl-3 hover:border-forsythia/40 hover:text-forsythia transition-all">
                <a href="#sdks">SDKs</a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Documentation Content */}
        <section className="space-y-12">
          <div id="intro" className="space-y-4">
            <h1 className="text-4xl font-semibold text-arctic text-gradient">API Reference</h1>
            <p className="text-sm text-arctic/75 leading-relaxed">
              The ARMORY workflow engine API allows developers to programmatically launch, 
              control, and audit neural data pipelines on our regional edge network.
            </p>
          </div>

          <div id="auth" className="space-y-4 border-t border-white/5 pt-8">
            <h2 className="text-2xl font-semibold text-arctic">Authentication</h2>
            <p className="text-sm text-arctic/75 leading-relaxed">
              Authenticate API requests by including a bearer token in the HTTP authorization headers. 
              Tokens can be rotated or generated in the admin telemetry console.
            </p>
            <div className="bg-noir p-4 rounded-xl border border-white/5 font-mono text-xs text-saffron shadow-inner">
              Authorization: Bearer $ARMORY_API_KEY
            </div>
          </div>

          <div id="run" className="space-y-4 border-t border-white/5 pt-8">
            <div className="flex items-center gap-3">
              <span className="inline-block bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono-tech uppercase tracking-wider px-3 py-1 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                POST
              </span>
              <span className="font-mono text-sm text-arctic/80">/v1/workflows</span>
            </div>
            <h2 className="text-2xl font-semibold text-arctic">Run Workflow</h2>
            <p className="text-sm text-arctic/75 leading-relaxed">
              Launches an isolated VM workflow pipeline runner. The payload is automatically 
              parsed and passed through PHI compliance filters at the target edge node before routing to neural models.
            </p>
          </div>

          {/* Response Format */}
          <div id="response" className="space-y-4 border-t border-white/5 pt-8">
            <div className="flex items-center gap-3">
              <span className="inline-block bg-forsythia/10 border border-forsythia/30 text-forsythia text-[10px] font-mono-tech uppercase tracking-wider px-3 py-1 rounded-full">
                RESPONSE
              </span>
              <span className="font-mono text-sm text-arctic/80">200 OK</span>
            </div>
            <h2 className="text-2xl font-semibold text-arctic">Response Format</h2>
            <p className="text-sm text-arctic/75 leading-relaxed">
              The API returns a JSON object containing the workflow run ID, current status, 
              and stage-by-stage progress of the pipeline execution.
            </p>
            <div className="relative">
              <div className="border border-white/10 bg-[#09131a]/50 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between bg-noir/40 border-b border-white/5 px-4 py-2">
                  <span className="font-mono-tech text-[10px] uppercase text-arctic/40">JSON Response</span>
                  <button 
                    onClick={handleCopyResponse}
                    className="font-mono-tech text-[10px] text-arctic/40 hover:text-forsythia transition cursor-pointer"
                  >
                    {copiedResponse ? "Copied!" : "Copy"}
                  </button>
                </div>
                <pre className="p-5 font-mono text-[11px] text-arctic/85 overflow-x-auto whitespace-pre leading-relaxed">
                  <code>{RESPONSE_EXAMPLE}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Status Codes */}
          <div id="status-codes" className="space-y-4 border-t border-white/5 pt-8">
            <h2 className="text-2xl font-semibold text-arctic">Status Codes</h2>
            <div className="border border-white/10 rounded-xl overflow-hidden">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/5 bg-noir/40">
                    <th className="px-4 py-3 text-left font-mono-tech text-[10px] uppercase tracking-wider text-forsythia">Code</th>
                    <th className="px-4 py-3 text-left font-mono-tech text-[10px] uppercase tracking-wider text-forsythia">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {STATUS_CODES.map((sc) => (
                    <tr key={sc.code} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition">
                      <td className={`px-4 py-3 font-mono font-semibold ${sc.color}`}>{sc.code}</td>
                      <td className="px-4 py-3 text-arctic/70">{sc.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Rate Limits */}
          <div id="rate-limits" className="space-y-4 border-t border-white/5 pt-8">
            <h2 className="text-2xl font-semibold text-arctic">Rate Limits</h2>
            <p className="text-sm text-arctic/75 leading-relaxed">
              Rate limits are enforced per API key. Exceeding limits returns a 429 status code with a Retry-After header.
            </p>
            <div className="border border-white/10 rounded-xl overflow-hidden">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-white/5 bg-noir/40">
                    <th className="px-4 py-3 text-left font-mono-tech text-[10px] uppercase tracking-wider text-forsythia">Plan</th>
                    <th className="px-4 py-3 text-left font-mono-tech text-[10px] uppercase tracking-wider text-forsythia">Req/Min</th>
                    <th className="px-4 py-3 text-left font-mono-tech text-[10px] uppercase tracking-wider text-forsythia">Req/Day</th>
                    <th className="px-4 py-3 text-left font-mono-tech text-[10px] uppercase tracking-wider text-forsythia">Burst</th>
                  </tr>
                </thead>
                <tbody>
                  {RATE_LIMITS.map((rl) => (
                    <tr key={rl.plan} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition">
                      <td className="px-4 py-3 font-semibold text-arctic">{rl.plan}</td>
                      <td className="px-4 py-3 text-arctic/70 font-mono">{rl.rpm}</td>
                      <td className="px-4 py-3 text-arctic/70 font-mono">{rl.rpd}</td>
                      <td className="px-4 py-3 text-arctic/70 font-mono">{rl.burst}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SDKs */}
          <div id="sdks" className="space-y-4 border-t border-white/5 pt-8">
            <h2 className="text-2xl font-semibold text-arctic">SDKs & Libraries</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {SDKS.map((sdk) => (
                <div key={sdk.name} className="border border-white/10 bg-noir/40 p-5 rounded-xl glow-card">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-arctic">{sdk.name}</h3>
                    <span className="font-mono-tech text-[10px] text-forsythia">{sdk.version}</span>
                  </div>
                  <div className="mt-3 bg-noir/60 rounded-lg px-3 py-2 font-mono text-[11px] text-saffron border border-white/5">
                    {sdk.install}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Playground */}
        <section className="sticky top-24 self-start">
          <div className="border border-white/10 bg-noir/90 rounded-2xl overflow-hidden shadow-2xl glow-card">
            {/* Header Tabs */}
            <div className="flex items-center justify-between bg-noir/40 border-b border-white/5 px-4 py-2">
              <div className="flex gap-2">
                {(["curl", "python", "node"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`font-mono-tech text-[10px] uppercase px-3 py-1.5 rounded transition-all duration-200 cursor-pointer ${
                      activeTab === tab ? "bg-forsythia text-noir font-bold shadow-md shadow-forsythia/10" : "text-arctic/40 hover:text-arctic/85"
                    }`}
                  >
                    {tab === "node" ? "Node.js" : tab}
                  </button>
                ))}
              </div>
              <button 
                onClick={handleCopy}
                className="font-mono-tech text-[10px] text-arctic/40 hover:text-forsythia transition cursor-pointer flex items-center gap-1"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Code Content */}
            <pre className="p-5 font-mono text-[11px] text-left text-arctic/85 overflow-x-auto whitespace-pre leading-relaxed h-[320px] bg-[#09131a]/50">
              <code>{CODE_EXAMPLES[activeTab]}</code>
            </pre>
          </div>
        </section>
      </div>
    </Layout>
  );
}
