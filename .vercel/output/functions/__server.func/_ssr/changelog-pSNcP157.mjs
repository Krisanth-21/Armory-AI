import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Seo } from "./Seo-CUUaP3E4.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { l as Cube16SolidIcon, u as Layout } from "./Layout-BrSet1XS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/changelog-pSNcP157.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RELEASES = [
	{
		version: "4.2.1",
		date: "June 24, 2026",
		tag: "latest",
		items: [
			{
				type: "feature",
				title: "Multi-region failover orchestration",
				desc: "Automatic pipeline failover across edge regions with zero-downtime during node migrations."
			},
			{
				type: "improvement",
				title: "60% faster PHI redaction engine",
				desc: "Optimized NLP tokenizer reduces PHI detection latency from 12ms to 4.8ms per payload."
			},
			{
				type: "security",
				title: "TLS 1.3 enforced on all endpoints",
				desc: "Deprecated TLS 1.2 support. All API and webhook connections now require TLS 1.3."
			}
		]
	},
	{
		version: "4.2.0",
		date: "June 10, 2026",
		items: [
			{
				type: "feature",
				title: "Composable agent decision graphs",
				desc: "Visual drag-and-drop interface for building multi-step reasoning workflows with branching logic."
			},
			{
				type: "feature",
				title: "Python SDK v2.4 release",
				desc: "Added async pipeline execution, streaming audit logs, and type-safe response models."
			},
			{
				type: "improvement",
				title: "Dashboard performance optimization",
				desc: "Reduced initial load time by 40% with lazy-loaded telemetry widgets."
			},
			{
				type: "fix",
				title: "Fixed edge node reconnection logic",
				desc: "Resolved an issue where disconnected edge nodes would not properly re-register with the orchestrator."
			}
		]
	},
	{
		version: "4.1.8",
		date: "May 28, 2026",
		items: [
			{
				type: "security",
				title: "SOC 2 Type II audit completed",
				desc: "Successfully passed annual SOC 2 Type II audit with zero material findings."
			},
			{
				type: "improvement",
				title: "Expanded FHIR R4 support",
				desc: "Added support for 18 additional FHIR resource types including AllergyIntolerance and MedicationRequest."
			},
			{
				type: "fix",
				title: "Corrected INR currency rounding",
				desc: "Fixed pricing calculator rounding errors for Indian Rupee denominations on annual billing."
			}
		]
	},
	{
		version: "4.1.5",
		date: "May 14, 2026",
		items: [
			{
				type: "feature",
				title: "Webhook event subscriptions",
				desc: "Subscribe to real-time webhook notifications for pipeline completions, failures, and audit events."
			},
			{
				type: "feature",
				title: "Custom compliance policy builder",
				desc: "Enterprise customers can now define custom compliance rules and validation checks."
			},
			{
				type: "improvement",
				title: "Audit log search improvements",
				desc: "Full-text search across audit logs with regex support and date range filtering."
			}
		]
	},
	{
		version: "4.1.0",
		date: "April 30, 2026",
		items: [
			{
				type: "feature",
				title: "Edge region: Mumbai (ap-south-1)",
				desc: "New edge compute region in Mumbai to serve Indian healthcare customers with sub-20ms latency."
			},
			{
				type: "security",
				title: "HITRUST CSF certification",
				desc: "Achieved HITRUST Common Security Framework certification for all production environments."
			},
			{
				type: "improvement",
				title: "API rate limit transparency",
				desc: "Rate limit headers now included in all API responses with remaining quota and reset timestamps."
			},
			{
				type: "fix",
				title: "Fixed annual billing discount display",
				desc: "Corrected UI issue where annual discount was not reflected in the pricing comparison table."
			}
		]
	}
];
var TYPE_CONFIG = {
	feature: {
		label: "Feature",
		color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
	},
	improvement: {
		label: "Improvement",
		color: "bg-forsythia/10 border-forsythia/30 text-forsythia"
	},
	security: {
		label: "Security",
		color: "bg-saffron/10 border-saffron/30 text-saffron"
	},
	fix: {
		label: "Bug Fix",
		color: "bg-red-400/10 border-red-400/30 text-red-400"
	}
};
function ChangelogPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const filteredReleases = RELEASES.map((release) => ({
		...release,
		items: filter === "all" ? release.items : release.items.filter((item) => item.type === filter)
	})).filter((release) => release.items.length > 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seo, {
			title: "Changelog - ARMORY",
			description: "Stay up to date with the latest ARMORY platform updates, features, and improvements.",
			path: "/changelog"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden py-24 border-b border-white/5 bg-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-5xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-saffron/25 bg-saffron/5 px-3 py-1 font-mono-tech text-[10px] uppercase tracking-wider text-saffron animate-boot",
						children: "// Platform Updates"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 text-5xl font-semibold leading-tight text-arctic md:text-7xl text-gradient animate-boot",
						children: "Changelog"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl text-base text-arctic/75 leading-relaxed animate-boot",
						children: "Every improvement, feature, and fix shipped to the ARMORY platform. We release continuously and document everything."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-white/5 bg-noir/40 py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-4xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono-tech text-[10px] uppercase tracking-wider text-arctic/40 mr-2",
						children: "Filter:"
					}), [
						"all",
						"feature",
						"improvement",
						"security",
						"fix"
					].map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setFilter(cat),
						className: `rounded-full px-3 py-1.5 font-mono-tech text-[10px] uppercase tracking-wider transition-all cursor-pointer ${filter === cat ? "bg-forsythia text-noir font-semibold" : "text-arctic/50 hover:text-arctic border border-white/10"}`,
						children: cat === "all" ? "All" : TYPE_CONFIG[cat].label
					}, cat))]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-forsythia/30 via-saffron/15 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-16",
						children: filteredReleases.map((release, ri) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 mb-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-noir border-2 border-forsythia/50",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cube16SolidIcon, { className: "w-4 h-4 text-forsythia" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "text-2xl font-semibold text-arctic",
										children: ["v", release.version]
									}), release.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-2.5 py-0.5 font-mono-tech text-[9px] uppercase tracking-wider",
										children: release.tag
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono-tech text-xs text-arctic/40 mt-1",
									children: release.date
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "ml-14 space-y-4",
								children: release.items.map((item, ii) => {
									const typeConf = TYPE_CONFIG[item.type];
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `stagger-${Math.min(ii + 1, 5)} border border-white/10 bg-noir/40 p-5 rounded-xl glow-card`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-center gap-3 mb-2",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `inline-flex items-center rounded-full border px-2 py-0.5 font-mono-tech text-[9px] uppercase tracking-wider ${typeConf.color}`,
													children: typeConf.label
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-sm font-semibold text-arctic",
												children: item.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1.5 text-xs text-arctic/50 leading-relaxed",
												children: item.desc
											})
										]
									}, ii);
								})
							})]
						}, release.version))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-noir/40 px-5 py-2.5 font-mono-tech text-[11px] uppercase tracking-wider text-arctic/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-arctic/20" }), "Showing latest 5 releases Â· 48 total releases"]
					})
				})]
			})
		})
	] });
}
//#endregion
export { ChangelogPage as component };
