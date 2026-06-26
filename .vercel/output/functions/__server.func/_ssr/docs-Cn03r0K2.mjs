import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Layout } from "./Layout-DlHL_R3D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/docs-Cn03r0K2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CODE_EXAMPLES = {
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
var RESPONSE_EXAMPLE = `{
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
var STATUS_CODES = [
	{
		code: "200",
		desc: "Workflow created and running",
		color: "text-emerald-400"
	},
	{
		code: "201",
		desc: "Resource created successfully",
		color: "text-emerald-400"
	},
	{
		code: "400",
		desc: "Invalid payload or missing fields",
		color: "text-saffron"
	},
	{
		code: "401",
		desc: "Authentication failed — invalid API key",
		color: "text-red-400"
	},
	{
		code: "403",
		desc: "IAM policy denied — insufficient permissions",
		color: "text-red-400"
	},
	{
		code: "429",
		desc: "Rate limit exceeded — retry after backoff",
		color: "text-saffron"
	},
	{
		code: "500",
		desc: "Internal server error — contact support",
		color: "text-red-400"
	}
];
var RATE_LIMITS = [
	{
		plan: "Developer",
		rpm: "60",
		rpd: "1,000",
		burst: "10"
	},
	{
		plan: "Professional",
		rpm: "600",
		rpd: "50,000",
		burst: "100"
	},
	{
		plan: "Enterprise",
		rpm: "6,000",
		rpd: "Unlimited",
		burst: "1,000"
	}
];
var SDKS = [
	{
		name: "Python SDK",
		version: "v2.4.1",
		install: "pip install armory-sdk",
		lang: "python"
	},
	{
		name: "Node.js SDK",
		version: "v3.1.0",
		install: "npm install @armory/sdk",
		lang: "javascript"
	},
	{
		name: "Go SDK",
		version: "v1.8.2",
		install: "go get armory.ai/sdk",
		lang: "go"
	},
	{
		name: "REST API",
		version: "v1",
		install: "https://api.armory.ai/v1",
		lang: "curl"
	}
];
function DocsPage() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("curl");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [copiedResponse, setCopiedResponse] = (0, import_react.useState)(false);
	const handleCopy = () => {
		navigator.clipboard.writeText(CODE_EXAMPLES[activeTab]);
		setCopied(true);
		setTimeout(() => setCopied(false), 2e3);
	};
	const handleCopyResponse = () => {
		navigator.clipboard.writeText(RESPONSE_EXAMPLE);
		setCopiedResponse(true);
		setTimeout(() => setCopiedResponse(false), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-[240px_1fr_1.2fr]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-6 text-sm border-r border-white/5 pr-6 hidden md:block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono-tech text-[10px] uppercase text-forsythia tracking-wider mb-3",
						children: "// GETTING STARTED"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-arctic/60 font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-l-2 border-forsythia pl-3 text-forsythia font-semibold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#intro",
								children: "Introduction"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-l-2 border-transparent pl-3 hover:border-forsythia/40 hover:text-forsythia transition-all",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#auth",
								children: "Authentication"
							})
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono-tech text-[10px] uppercase text-forsythia tracking-wider mb-3",
						children: "// PIPELINES API"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-arctic/60 font-medium",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-l-2 border-transparent pl-3 hover:border-forsythia/40 hover:text-forsythia transition-all",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#run",
									children: "Run Workflow"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-l-2 border-transparent pl-3 hover:border-forsythia/40 hover:text-forsythia transition-all",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#response",
									children: "Response Format"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-l-2 border-transparent pl-3 hover:border-forsythia/40 hover:text-forsythia transition-all",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#status-codes",
									children: "Status Codes"
								})
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono-tech text-[10px] uppercase text-forsythia tracking-wider mb-3",
						children: "// REFERENCE"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-arctic/60 font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-l-2 border-transparent pl-3 hover:border-forsythia/40 hover:text-forsythia transition-all",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#rate-limits",
								children: "Rate Limits"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-l-2 border-transparent pl-3 hover:border-forsythia/40 hover:text-forsythia transition-all",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#sdks",
								children: "SDKs"
							})
						})]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "intro",
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-4xl font-semibold text-arctic text-gradient",
							children: "API Reference"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-arctic/75 leading-relaxed",
							children: "The ARMORY workflow engine API allows developers to programmatically launch, control, and audit neural data pipelines on our regional edge network."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "auth",
						className: "space-y-4 border-t border-white/5 pt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-semibold text-arctic",
								children: "Authentication"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-arctic/75 leading-relaxed",
								children: "Authenticate API requests by including a bearer token in the HTTP authorization headers. Tokens can be rotated or generated in the admin telemetry console."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-noir p-4 rounded-xl border border-white/5 font-mono text-xs text-saffron shadow-inner",
								children: "Authorization: Bearer $ARMORY_API_KEY"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "run",
						className: "space-y-4 border-t border-white/5 pt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono-tech uppercase tracking-wider px-3 py-1 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.1)]",
									children: "POST"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-sm text-arctic/80",
									children: "/v1/workflows"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-semibold text-arctic",
								children: "Run Workflow"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-arctic/75 leading-relaxed",
								children: "Launches an isolated VM workflow pipeline runner. The payload is automatically parsed and passed through PHI compliance filters at the target edge node before routing to neural models."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "response",
						className: "space-y-4 border-t border-white/5 pt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block bg-forsythia/10 border border-forsythia/30 text-forsythia text-[10px] font-mono-tech uppercase tracking-wider px-3 py-1 rounded-full",
									children: "RESPONSE"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-sm text-arctic/80",
									children: "200 OK"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-semibold text-arctic",
								children: "Response Format"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-arctic/75 leading-relaxed",
								children: "The API returns a JSON object containing the workflow run ID, current status, and stage-by-stage progress of the pipeline execution."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border border-white/10 bg-[#09131a]/50 rounded-xl overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between bg-noir/40 border-b border-white/5 px-4 py-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono-tech text-[10px] uppercase text-arctic/40",
											children: "JSON Response"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: handleCopyResponse,
											className: "font-mono-tech text-[10px] text-arctic/40 hover:text-forsythia transition cursor-pointer",
											children: copiedResponse ? "Copied!" : "Copy"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
										className: "p-5 font-mono text-[11px] text-arctic/85 overflow-x-auto whitespace-pre leading-relaxed",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: RESPONSE_EXAMPLE })
									})]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "status-codes",
						className: "space-y-4 border-t border-white/5 pt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-semibold text-arctic",
							children: "Status Codes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border border-white/10 rounded-xl overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-white/5 bg-noir/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 text-left font-mono-tech text-[10px] uppercase tracking-wider text-forsythia",
										children: "Code"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 text-left font-mono-tech text-[10px] uppercase tracking-wider text-forsythia",
										children: "Description"
									})]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: STATUS_CODES.map((sc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: `px-4 py-3 font-mono font-semibold ${sc.color}`,
										children: sc.code
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-arctic/70",
										children: sc.desc
									})]
								}, sc.code)) })]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "rate-limits",
						className: "space-y-4 border-t border-white/5 pt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-semibold text-arctic",
								children: "Rate Limits"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-arctic/75 leading-relaxed",
								children: "Rate limits are enforced per API key. Exceeding limits returns a 429 status code with a Retry-After header."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border border-white/10 rounded-xl overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-b border-white/5 bg-noir/40",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3 text-left font-mono-tech text-[10px] uppercase tracking-wider text-forsythia",
												children: "Plan"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3 text-left font-mono-tech text-[10px] uppercase tracking-wider text-forsythia",
												children: "Req/Min"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3 text-left font-mono-tech text-[10px] uppercase tracking-wider text-forsythia",
												children: "Req/Day"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-4 py-3 text-left font-mono-tech text-[10px] uppercase tracking-wider text-forsythia",
												children: "Burst"
											})
										]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: RATE_LIMITS.map((rl) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-4 py-3 font-semibold text-arctic",
												children: rl.plan
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-4 py-3 text-arctic/70 font-mono",
												children: rl.rpm
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-4 py-3 text-arctic/70 font-mono",
												children: rl.rpd
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-4 py-3 text-arctic/70 font-mono",
												children: rl.burst
											})
										]
									}, rl.plan)) })]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "sdks",
						className: "space-y-4 border-t border-white/5 pt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-semibold text-arctic",
							children: "SDKs & Libraries"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: SDKS.map((sdk) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-white/10 bg-noir/40 p-5 rounded-xl glow-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-semibold text-arctic",
										children: sdk.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono-tech text-[10px] text-forsythia",
										children: sdk.version
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 bg-noir/60 rounded-lg px-3 py-2 font-mono text-[11px] text-saffron border border-white/5",
									children: sdk.install
								})]
							}, sdk.name))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "sticky top-24 self-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-white/10 bg-noir/90 rounded-2xl overflow-hidden shadow-2xl glow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between bg-noir/40 border-b border-white/5 px-4 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2",
							children: [
								"curl",
								"python",
								"node"
							].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActiveTab(tab),
								className: `font-mono-tech text-[10px] uppercase px-3 py-1.5 rounded transition-all duration-200 cursor-pointer ${activeTab === tab ? "bg-forsythia text-noir font-bold shadow-md shadow-forsythia/10" : "text-arctic/40 hover:text-arctic/85"}`,
								children: tab === "node" ? "Node.js" : tab
							}, tab))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: handleCopy,
							className: "font-mono-tech text-[10px] text-arctic/40 hover:text-forsythia transition cursor-pointer flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								className: "w-3.5 h-3.5",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "9",
									y: "9",
									width: "13",
									height: "13",
									rx: "2",
									ry: "2"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })]
							}), copied ? "Copied!" : "Copy"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "p-5 font-mono text-[11px] text-left text-arctic/85 overflow-x-auto whitespace-pre leading-relaxed h-[320px] bg-[#09131a]/50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: CODE_EXAMPLES[activeTab] })
					})]
				})
			})
		]
	}) });
}
//#endregion
export { DocsPage as component };
