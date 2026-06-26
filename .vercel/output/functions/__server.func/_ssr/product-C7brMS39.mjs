import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Layout, t as CtaButton } from "./Layout-DlHL_R3D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-C7brMS39.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PRIMITIVES = [
	{
		n: "01",
		t: "Zero-Trust Runtime",
		d: "All workflows execute in cryptographically isolated micro-virtual machines. Features dynamic PHI redaction, localized model execution, and hardware-level IAM sandboxing.",
		s: "HIPAA Compliant · PHI Redaction · AES-256",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "w-8 h-8 text-forsythia mb-4",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "3",
					y: "11",
					width: "18",
					height: "11",
					rx: "2",
					ry: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "12",
					cy: "16",
					r: "1.5"
				})
			]
		})
	},
	{
		n: "02",
		t: "Composable Agents",
		d: "Build complex reasoning workflows by chaining models, tools, and human review steps. Control threshold variables and decision graphs via simple, declarative JSON configurations.",
		s: "Dynamic Routing · Human-in-the-Loop · Model Agnostic",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "w-8 h-8 text-forsythia mb-4",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "12",
					cy: "5",
					r: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "5",
					cy: "19",
					r: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "19",
					cy: "19",
					r: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 8v8M7 17l3.5-3.5M17 17l-3.5-3.5" })
			]
		})
	},
	{
		n: "03",
		t: "Edge-Native Compute",
		d: "Deploy pipelines directly to regional edge nodes located close to your local clinical datacenters. Ensures ultra-low latency execution and prevents data leaving regional compliance boundaries.",
		s: "Sub-50ms Latency · Regional Locks · Edge VMs",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			className: "w-8 h-8 text-forsythia mb-4",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" })
		})
	},
	{
		n: "04",
		t: "Federated Intelligence",
		d: "Query siloed systems (EHR databases, claim queues, historical telemetry logs) securely. Compile and extract insights without centralizing raw compliance data.",
		s: "FHIR HL7 Streams · Federated Queries · Audit Logs",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "w-8 h-8 text-forsythia mb-4",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "12",
					cy: "5",
					rx: "9",
					ry: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" })
			]
		})
	}
];
var INTEGRATIONS = [
	{
		n: "OpenAI GPT-4",
		c: "LLM",
		s: "8.2T params"
	},
	{
		n: "Anthropic Claude 3",
		c: "LLM",
		s: "200K context"
	},
	{
		n: "Perplexity Sonar",
		c: "Search",
		s: "Live web"
	},
	{
		n: "Google Gemini 1.5",
		c: "LLM",
		s: "Multimodal"
	},
	{
		n: "Epic EHR",
		c: "EHR",
		s: "FHIR R4"
	},
	{
		n: "Cerner Oracle",
		c: "EHR",
		s: "HL7 v2"
	},
	{
		n: "AWS HealthLake",
		c: "Cloud",
		s: "HIPAA"
	},
	{
		n: "Azure Health",
		c: "Cloud",
		s: "DICOM"
	}
];
function ProductPage() {
	const [activeStep, setActiveStep] = (0, import_react.useState)(0);
	const [timestamp, setTimestamp] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setTimestamp((/* @__PURE__ */ new Date()).toISOString());
	}, []);
	const steps = [
		{
			id: 1,
			title: "FHIR Claim Input",
			desc: "HL7 claim payload received at Edge node."
		},
		{
			id: 2,
			title: "PHI Redaction",
			desc: "Redacting patient name, SSN, and details."
		},
		{
			id: 3,
			title: "LLM Medical Review",
			desc: "Analyzing procedure codes against policy."
		},
		{
			id: 4,
			title: "Compliance Check",
			desc: "Verifying HIPAA audit signatures."
		},
		{
			id: 5,
			title: "Adjudication Trigger",
			desc: "Pushing approved response to clearinghouse."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden py-24 border-b border-white/5 bg-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow pointer-events-none opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-5xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-forsythia/25 bg-forsythia/5 px-3 py-1 font-mono-tech text-[10px] uppercase tracking-wider text-forsythia animate-boot",
						children: "// Core Architecture"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 text-5xl font-semibold leading-tight text-arctic md:text-7xl animate-boot text-gradient",
						children: [
							"Four Primitives. ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Infinite Workflows."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl text-base text-arctic/75 leading-relaxed animate-boot",
						children: "ARMORY separates data automation into four discrete compliance layers, giving healthcare developers the ability to ship secure AI reasoning systems without the architectural complexity."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 border-b border-white/5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-8 md:grid-cols-2",
					children: PRIMITIVES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal group border border-white/10 bg-noir/40 p-8 rounded-2xl glow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [p.icon, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono-tech text-xs text-forsythia/40",
									children: ["PRIMITIVE ", p.n]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-2xl font-semibold text-arctic",
								children: p.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-arctic/60 leading-relaxed",
								children: p.d
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 border-t border-white/5 pt-4 text-xs font-mono-tech text-saffron",
								children: p.s
							})
						]
					}, p.n))
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
							children: "// System Architecture"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl font-semibold md:text-5xl",
							children: "The Four-Layer Stack"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-2xl text-sm text-arctic/60",
							children: "Each layer operates independently, allowing teams to customize specific stages without disrupting the rest of the pipeline."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-0 md:grid-cols-4",
					children: [
						{
							layer: "L1",
							name: "Runtime",
							desc: "Micro-VM isolation & IAM",
							color: "from-forsythia/20 to-forsythia/5"
						},
						{
							layer: "L2",
							name: "Agents",
							desc: "Reasoning & orchestration",
							color: "from-saffron/20 to-saffron/5"
						},
						{
							layer: "L3",
							name: "Edge",
							desc: "Regional compute nodes",
							color: "from-forsythia/15 to-forsythia/5"
						},
						{
							layer: "L4",
							name: "Intelligence",
							desc: "Federated data queries",
							color: "from-saffron/15 to-saffron/5"
						}
					].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `reveal stagger-${i + 1} relative group`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `p-8 border border-white/10 bg-gradient-to-b ${l.color} text-center transition-all duration-300 hover:border-forsythia/40 ${i === 0 ? "rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none" : ""} ${i === 3 ? "rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono-tech text-[10px] uppercase tracking-wider text-forsythia/60",
									children: l.layer
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 text-xl font-semibold text-arctic group-hover:text-forsythia transition-colors",
									children: l.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-xs text-arctic/50",
									children: l.desc
								})
							]
						}), i < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-6 h-6 rounded-full bg-noir border border-forsythia/30 items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "w-3 h-3 text-forsythia",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m8.25 4.5l7.5 7.5l-7.5 7.5" })
							})
						})]
					}, l.layer))
				})]
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
							children: "// Real-Time Orchestration"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl font-semibold md:text-5xl",
							children: "Visualizing the Pipeline Flow"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-2xl text-sm text-arctic/60",
							children: "Interactive demonstration of ARMORY's live processing chain. Click nodes to simulate stage-by-stage data automation."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 border border-white/10 bg-noir/60 rounded-2xl p-6 md:p-12 backdrop-blur relative overflow-hidden reveal-scale",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-[88px] left-[10%] right-[10%] h-8 hidden md:block z-0 pointer-events-none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								className: "w-full h-full",
								fill: "none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M 0 4 H 1000",
									stroke: "rgba(241,246,244,0.06)",
									strokeWidth: "4",
									strokeLinecap: "round"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: `M 0 4 H ${activeStep * 200 + 100}`,
									stroke: "var(--color-forsythia)",
									strokeWidth: "4",
									strokeLinecap: "round",
									className: "animate-dash"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-6 md:grid-cols-5 relative z-10",
							children: steps.map((step, idx) => {
								const isActive = idx === activeStep;
								const isCompleted = idx < activeStep;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setActiveStep(idx),
									className: "relative flex flex-col items-center text-center focus:outline-none group cursor-pointer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `w-14 h-14 rounded-full flex items-center justify-center border font-mono-tech text-sm transition-all duration-300 relative ${isActive ? "bg-forsythia border-forsythia text-noir scale-110 shadow-[0_0_20px_rgba(255,200,1,0.4)]" : isCompleted ? "bg-emerald-500/10 border-emerald-500 text-emerald-400" : "bg-noir border-white/15 text-arctic/40 group-hover:border-forsythia/50"}`,
											children: [isCompleted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "w-5 h-5",
												fill: "none",
												stroke: "currentColor",
												strokeWidth: "2.5",
												viewBox: "0 0 24 24",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "20 6 9 17 4 12" })
											}) : `0${step.id}`, isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -inset-1.5 rounded-full border border-forsythia/40 animate-ping pointer-events-none" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `mt-4 font-semibold text-sm transition-colors duration-200 ${isActive ? "text-forsythia" : "text-arctic group-hover:text-forsythia"}`,
											children: step.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1.5 text-xs text-arctic/50 max-w-[150px] mx-auto leading-relaxed",
											children: step.desc
										})
									]
								}, step.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 border border-white/5 bg-noir/80 rounded-xl p-5 font-mono text-xs text-left text-arctic/80 shadow-inner",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-white/5 pb-2 mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-forsythia uppercase tracking-wider font-mono-tech",
									children: "// STAGE STATUS LOG"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-arctic/40",
									children: "ID: workflow-run-749e"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-arctic/40",
											children: "Timestamp:"
										}),
										" ",
										timestamp
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-arctic/40",
											children: "Active Node:"
										}),
										" 0",
										activeStep + 1,
										" - ",
										steps[activeStep].title
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-arctic/40",
											children: "Operation:"
										}),
										" ",
										steps[activeStep].desc
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: activeStep === 4 ? "text-emerald-400" : "text-forsythia",
										children: ["Status: ", activeStep === 4 ? "[FINISHED] Pipeline completed successfully." : "[PROCESSING] Awaiting node response..."]
									})
								]
							})]
						})
					]
				})]
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
							children: "// Ecosystem"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl font-semibold md:text-5xl",
							children: "Integration Partners"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-2xl text-sm text-arctic/60",
							children: "ARMORY connects natively to the models, EHR systems, and cloud providers your teams already trust."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4",
					children: INTEGRATIONS.map((int, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `reveal stagger-${i % 4 + 1} border border-white/10 bg-noir/40 p-6 rounded-xl glow-card text-center`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono-tech text-[10px] uppercase tracking-wider text-saffron",
								children: int.c
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 text-lg font-semibold text-arctic",
								children: int.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 font-mono-tech text-xs text-arctic/50",
								children: int.s
							})
						]
					}, int.n))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-5xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal-scale gradient-border rounded-2xl bg-gradient-to-b from-[#12222d] to-noir p-12 md:p-16 text-center relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-40 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-3xl font-semibold md:text-5xl text-arctic",
								children: [
									"Ready to build your ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "first pipeline"
									}),
									"?"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-6 max-w-xl text-sm text-arctic/60 leading-relaxed",
								children: "Get started in minutes with our developer sandbox. Deploy production workflows to regional edge nodes with zero infrastructure overhead."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap items-center justify-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, { children: "Start Building Free" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
									variant: "ghost",
									to: "/docs",
									children: "Read the Docs"
								})]
							})
						]
					})]
				})
			})
		})
	] });
}
//#endregion
export { ProductPage as component };
