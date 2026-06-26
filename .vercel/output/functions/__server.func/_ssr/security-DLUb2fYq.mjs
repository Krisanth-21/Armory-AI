import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Seo } from "./Seo-CUUaP3E4.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { c as CtaButton, u as Layout } from "./Layout-BrSet1XS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/security-DLUb2fYq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COMPLIANCE_ITEMS = [
	{
		n: "HIPAA Compliant",
		d: "Full HIPAA compliance alignment with support for Business Associate Agreements (BAAs). Automate health claim audits and clinical operations securely."
	},
	{
		n: "SOC 2 Type II",
		d: "Verified control architectures governing client isolation, encryption standards, and process telemetry safeguards."
	},
	{
		n: "ISO 27001",
		d: "Governed by strict information security management system parameters, maintaining structured vulnerability audits and risk evaluation cycles."
	}
];
var CERTIFICATIONS = [
	{
		name: "HIPAA",
		desc: "Health Insurance Portability & Accountability",
		status: "Certified",
		year: "2024"
	},
	{
		name: "SOC 2 Type II",
		desc: "Service Organization Control Audit",
		status: "Certified",
		year: "2025"
	},
	{
		name: "ISO 27001",
		desc: "Information Security Management",
		status: "Certified",
		year: "2024"
	},
	{
		name: "HITRUST CSF",
		desc: "Health Information Trust Alliance",
		status: "Certified",
		year: "2025"
	},
	{
		name: "GDPR",
		desc: "General Data Protection Regulation",
		status: "Compliant",
		year: "2024"
	},
	{
		name: "FedRAMP",
		desc: "Federal Risk Authorization Program",
		status: "In Progress",
		year: "2026"
	}
];
var DATA_FLOW_STEPS = [
	{
		step: "01",
		name: "Data Ingress",
		desc: "Encrypted TLS 1.3 channel receives payload at regional edge node",
		icon: "â†“"
	},
	{
		step: "02",
		name: "PHI Detection",
		desc: "NLP scanner identifies and flags protected health information fields",
		icon: "âŠ›"
	},
	{
		step: "03",
		name: "Token Redaction",
		desc: "PHI tokens replaced with reversible cryptographic hashes (AES-256)",
		icon: "â—ˆ"
	},
	{
		step: "04",
		name: "Isolated Processing",
		desc: "Redacted payload processed in micro-VM with no network egress",
		icon: "â¬¡"
	},
	{
		step: "05",
		name: "Audit Commit",
		desc: "Cryptographically signed audit log committed to immutable ledger",
		icon: "âœ“"
	}
];
function SecurityPage() {
	const [logs, setLogs] = (0, import_react.useState)([
		"[09:42:01] [BOOT] Compliance runtime v4.2.1 initialized.",
		"[09:42:05] [KEY] Rotated workspace AES-256 wrapping key.",
		"[09:42:12] [IAM] Authenticated cigna-bot node interface."
	]);
	(0, import_react.useEffect)(() => {
		const modules = [
			"EHR",
			"PHI-REDACT",
			"COMPLIANCE",
			"VM-RUNTIME"
		];
		const actions = [
			"Tokenized patient record index #891.",
			"Redacted SSN and patient names in claims stream.",
			"Committed encrypted audit check hash: SHA-256.",
			"Isolated VM process runtime thread #19.",
			"Rotated ephemeral TLS keys for edge-node-3."
		];
		const interval = setInterval(() => {
			const randomModule = modules[Math.floor(Math.random() * modules.length)];
			const randomAction = actions[Math.floor(Math.random() * actions.length)];
			const timestamp = (/* @__PURE__ */ new Date()).toTimeString().split(" ")[0];
			setLogs((prev) => {
				const next = [...prev, `[${timestamp}] [${randomModule}] ${randomAction}`];
				if (next.length > 8) next.shift();
				return next;
			});
		}, 2500);
		return () => clearInterval(interval);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seo, {
			title: "Security & Compliance - ARMORY",
			description: "ARMORY is engineered with zero-trust architecture to satisfy HIPAA, SOC 2 Type II, and enterprise healthcare compliance standards.",
			path: "/security"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden py-24 border-b border-white/5 bg-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-5xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-saffron/25 bg-saffron/5 px-3 py-1 font-mono-tech text-[10px] uppercase tracking-wider text-saffron animate-boot",
						children: "// Trust & Integrity"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 text-5xl font-semibold leading-tight text-arctic md:text-7xl text-gradient",
						children: [
							"Zero-Trust. ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Compliance Engineered."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl text-base text-arctic/75 leading-relaxed",
						children: "ARMORY is designed for environments where compliance is non-negotiable. Encrypt, isolate, and audit every process token at the edge."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 border-b border-white/5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 md:grid-cols-[1.2fr_1fr] items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6",
						children: COMPLIANCE_ITEMS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `reveal stagger-${i + 1} border border-white/10 bg-noir/40 p-6 rounded-2xl glow-card`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-lg font-semibold text-arctic flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-saffron inline-block" }), item.n]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-arctic/60 leading-relaxed",
								children: item.d
							})]
						}, item.n))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal-scale border border-white/10 bg-noir/50 p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-40 h-40 rounded-full border-[8px] border-white/5 border-t-saffron border-r-saffron border-b-saffron border-l-saffron flex flex-col items-center justify-center relative transition-all duration-1000",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center justify-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-3xl font-bold font-mono text-saffron",
										children: "100%"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9px] font-mono-tech uppercase tracking-wider text-arctic/40 mt-1",
										children: "Audit Ready"
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 text-sm font-semibold text-arctic",
								children: "HIPAA & SOC 2 Verified"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-arctic/50 mt-1",
								children: "Audit Checksum: 0x9fA2...2810"
							})
						]
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 border-b border-white/5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia",
							children: "// Data Flow"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl font-semibold md:text-5xl",
							children: "Zero-Trust Pipeline"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-2xl text-sm text-arctic/60",
							children: "Every data point passes through five security stages before reaching your models. No exceptions. No shortcuts."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-forsythia/40 via-saffron/20 to-transparent hidden md:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-8 md:space-y-12",
						children: DATA_FLOW_STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `reveal stagger-${i + 1} flex flex-col md:flex-row items-start gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border border-white/10 bg-noir/40 p-6 rounded-2xl glow-card",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3 mb-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex h-8 w-8 items-center justify-center rounded-lg bg-forsythia/10 border border-forsythia/20 text-forsythia text-sm",
													children: step.icon
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-mono-tech text-[10px] uppercase tracking-wider text-forsythia",
													children: ["Stage ", step.step]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-lg font-semibold text-arctic",
												children: step.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-xs text-arctic/60 leading-relaxed",
												children: step.desc
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-noir border-2 border-forsythia/30 items-center justify-center z-10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono-tech text-[10px] text-forsythia",
										children: step.step
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 hidden md:block" })
							]
						}, step.step))
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 border-b border-white/5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono-tech text-[11px] uppercase tracking-[0.25em] text-saffron",
						children: "// Certifications"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-semibold md:text-5xl",
						children: "Compliance Portfolio"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3",
					children: CERTIFICATIONS.map((cert, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `reveal stagger-${i % 3 + 1} border border-white/10 bg-noir/40 p-6 rounded-2xl glow-card`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-mono-tech uppercase tracking-wider ${cert.status === "Certified" ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400" : cert.status === "Compliant" ? "bg-forsythia/10 border border-forsythia/30 text-forsythia" : "bg-saffron/10 border border-saffron/30 text-saffron"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 w-1.5 rounded-full ${cert.status === "Certified" ? "bg-emerald-400" : cert.status === "Compliant" ? "bg-forsythia" : "bg-saffron"}` }), cert.status]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono-tech text-[10px] text-arctic/30",
									children: cert.year
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-semibold text-arctic",
								children: cert.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-arctic/50",
								children: cert.desc
							})
						]
					}, cert.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 md:grid-cols-[1fr_1.2fr] items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia",
								children: "// System Transparency"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-3xl font-semibold md:text-5xl",
								children: "Live Audit Logs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm text-arctic/60 leading-relaxed",
								children: "ARMORY records cryptographically signed audit logs for every operation. Our compliance engine automatically captures EHR transactions, redactions, and VM lifecycle changes for HIPAA record keeping."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex items-center gap-3 font-mono-tech text-[11px] uppercase text-arctic/50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" }), "Live compliance telemetry active"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
									to: "/docs",
									children: "View Security Docs"
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal-right border border-[#114c5a]/40 bg-[#07131a] rounded-2xl p-5 font-mono text-xs text-left text-emerald-400/90 shadow-2xl relative overflow-hidden scanlines",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-emerald-500/10 pb-3 mb-4 relative z-20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] text-emerald-400/40 tracking-wider font-mono-tech uppercase",
								children: "armory-compliance-console"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2 h-[220px] overflow-y-auto relative z-20",
							children: logs.map((log, index) => {
								const isKey = log.includes("[KEY]");
								const isIam = log.includes("[IAM]");
								const isRedact = log.includes("Redacted") || log.includes("PHI");
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `transition-all duration-300 ${isKey ? "text-saffron font-semibold" : isIam ? "text-forsythia font-semibold" : isRedact ? "text-emerald-300 font-semibold" : "text-emerald-400/80"}`,
									children: log
								}, index);
							})
						})]
					})]
				})
			})
		})
	] });
}
//#endregion
export { SecurityPage as component };
