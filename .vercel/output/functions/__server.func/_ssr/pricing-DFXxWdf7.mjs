import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Layout, t as CtaButton } from "./Layout-DlHL_R3D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-DFXxWdf7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BASE_PRICING = {
	Developer: {
		USD: 0,
		EUR: 0,
		INR: 0
	},
	Professional: {
		USD: 149,
		EUR: 139,
		INR: 12500
	},
	Enterprise: {
		USD: 499,
		EUR: 469,
		INR: 41900
	}
};
var SYMBOLS = {
	USD: "$",
	EUR: "€",
	INR: "₹"
};
var FEATURE_COMPARISON = [
	{
		feature: "Monthly claims volume",
		dev: "1,000",
		pro: "50,000",
		ent: "Unlimited"
	},
	{
		feature: "Edge compute nodes",
		dev: "Shared",
		pro: "Dedicated",
		ent: "Isolated hardware"
	},
	{
		feature: "Model providers",
		dev: "3",
		pro: "12",
		ent: "Unlimited + custom"
	},
	{
		feature: "SSO / SAML",
		dev: "—",
		pro: "✓",
		ent: "✓"
	},
	{
		feature: "Audit log retention",
		dev: "7 days",
		pro: "90 days",
		ent: "Unlimited"
	},
	{
		feature: "BAA agreement",
		dev: "—",
		pro: "✓",
		ent: "✓"
	},
	{
		feature: "SLA guarantee",
		dev: "—",
		pro: "99.9%",
		ent: "99.99%"
	},
	{
		feature: "Support level",
		dev: "Community",
		pro: "24/7 chat",
		ent: "Dedicated engineer"
	},
	{
		feature: "Custom compliance policies",
		dev: "—",
		pro: "—",
		ent: "✓"
	},
	{
		feature: "On-premise deployment",
		dev: "—",
		pro: "—",
		ent: "✓"
	}
];
var PRICING_FAQS = [
	{
		q: "Can I switch plans at any time?",
		a: "Yes. Upgrades take effect immediately, and downgrades apply at the end of your current billing cycle. No penalties or lock-in contracts."
	},
	{
		q: "What counts as a 'claim'?",
		a: "A claim is any single workflow execution, regardless of how many pipeline stages it passes through. Batch operations count as one claim per payload item."
	},
	{
		q: "Do you offer volume discounts?",
		a: "Enterprise plans include custom volume pricing. Contact our sales team for a tailored quote based on your projected throughput."
	},
	{
		q: "Is there a free trial for Pro?",
		a: "Yes — all new accounts get 14 days of Professional features free. No credit card required to start."
	}
];
function PriceValue({ tier }) {
	const [curr, setCurr] = (0, import_react.useState)("USD");
	const [bill, setBill] = (0, import_react.useState)("monthly");
	(0, import_react.useEffect)(() => {
		const handler = (e) => {
			const { currency, billing } = e.detail;
			setCurr(currency);
			setBill(billing);
		};
		window.addEventListener("pricing-update", handler);
		return () => window.removeEventListener("pricing-update", handler);
	}, []);
	const discount = bill === "annual" ? .8 : 1;
	const base = BASE_PRICING[tier][curr];
	if (base === 0) return "Free";
	const discounted = Math.round(base * discount);
	return `${SYMBOLS[curr]}${discounted.toLocaleString()}`;
}
function PricingPage() {
	const currentBillingRef = (0, import_react.useRef)("monthly");
	const currentCurrencyRef = (0, import_react.useRef)("USD");
	const [faqOpen, setFaqOpen] = (0, import_react.useState)(0);
	const setBilling = (billing) => {
		currentBillingRef.current = billing;
		window.dispatchEvent(new CustomEvent("pricing-update", { detail: {
			currency: currentCurrencyRef.current,
			billing
		} }));
		const monthlyBtn = document.getElementById("billing-monthly");
		const annualBtn = document.getElementById("billing-annual");
		if (monthlyBtn && annualBtn) if (billing === "monthly") {
			monthlyBtn.className = "rounded-full px-4 py-1.5 text-xs font-mono-tech uppercase tracking-wider bg-forsythia text-noir font-semibold cursor-pointer";
			annualBtn.className = "rounded-full px-4 py-1.5 text-xs font-mono-tech uppercase tracking-wider text-arctic/60 hover:text-arctic cursor-pointer";
		} else {
			monthlyBtn.className = "rounded-full px-4 py-1.5 text-xs font-mono-tech uppercase tracking-wider text-arctic/60 hover:text-arctic cursor-pointer";
			annualBtn.className = "rounded-full px-4 py-1.5 text-xs font-mono-tech uppercase tracking-wider bg-forsythia text-noir font-semibold cursor-pointer";
		}
	};
	const setCurrency = (currency) => {
		currentCurrencyRef.current = currency;
		window.dispatchEvent(new CustomEvent("pricing-update", { detail: {
			currency,
			billing: currentBillingRef.current
		} }));
		[
			"USD",
			"EUR",
			"INR"
		].forEach((c) => {
			const btn = document.getElementById(`currency-${c}`);
			if (btn) if (c === currency) btn.className = "rounded-full px-3.5 py-1.5 text-xs font-mono-tech uppercase tracking-wider bg-forsythia text-noir font-semibold cursor-pointer";
			else btn.className = "rounded-full px-3.5 py-1.5 text-xs font-mono-tech uppercase tracking-wider text-arctic/60 hover:text-arctic cursor-pointer";
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden py-24 border-b border-white/5 bg-grid",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-radial-glow opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-5xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-forsythia/25 bg-forsythia/5 px-3 py-1 font-mono-tech text-[10px] uppercase tracking-wider text-forsythia animate-boot",
						children: "// Simple Billing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 text-5xl font-semibold leading-tight text-arctic md:text-7xl text-gradient animate-boot",
						children: [
							"Flexible Plans. ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Predictable Costs."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl text-base text-arctic/75 leading-relaxed animate-boot",
						children: "Choose a plan tailored to your transaction throughput. Scale edge virtual machines dynamically as operations grow."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 flex flex-wrap items-center justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex rounded-full border border-white/10 bg-noir p-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								id: "billing-monthly",
								onClick: () => setBilling("monthly"),
								className: "rounded-full px-4 py-1.5 text-xs font-mono-tech uppercase tracking-wider bg-forsythia text-noir font-semibold cursor-pointer",
								children: "monthly"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								id: "billing-annual",
								onClick: () => setBilling("annual"),
								className: "rounded-full px-4 py-1.5 text-xs font-mono-tech uppercase tracking-wider text-arctic/60 hover:text-arctic cursor-pointer",
								children: "annual (-20%)"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex rounded-full border border-white/10 bg-noir p-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									id: "currency-USD",
									onClick: () => setCurrency("USD"),
									className: "rounded-full px-3.5 py-1.5 text-xs font-mono-tech uppercase tracking-wider bg-forsythia text-noir font-semibold cursor-pointer",
									children: "USD"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									id: "currency-EUR",
									onClick: () => setCurrency("EUR"),
									className: "rounded-full px-3.5 py-1.5 text-xs font-mono-tech uppercase tracking-wider text-arctic/60 hover:text-arctic cursor-pointer",
									children: "EUR"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									id: "currency-INR",
									onClick: () => setCurrency("INR"),
									className: "rounded-full px-3.5 py-1.5 text-xs font-mono-tech uppercase tracking-wider text-arctic/60 hover:text-arctic cursor-pointer",
									children: "INR"
								})
							]
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 border-b border-white/5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							id: "card-Developer",
							className: "reveal stagger-1 border border-forsythia/80 shadow-[0_0_20px_rgba(255,200,1,0.2)] bg-noir/40 p-8 rounded-2xl flex flex-col justify-between transition-all duration-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-semibold text-arctic",
									children: "Developer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 text-4xl font-semibold text-forsythia",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceValue, { tier: "Developer" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-arctic/60",
									children: "Ideal for testing pipelines and building local medical agent graphs."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-6 space-y-2 text-xs text-arctic/70 font-mono-tech",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ 1,000 free claims/mo" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ Shared edge compute nodes" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ Community support channels" })
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "mt-8 w-full border border-white/10 bg-white/[0.02] hover:border-forsythia hover:text-forsythia rounded-full py-2.5 text-xs uppercase tracking-wider font-mono-tech cursor-pointer transition",
								children: "Start Free"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							id: "card-Professional",
							className: "reveal stagger-2 border border-white/10 bg-noir/40 p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -top-3 left-8 rounded-full bg-forsythia px-3 py-1 font-mono-tech text-[10px] uppercase tracking-wider text-noir font-semibold",
									children: "Most Popular"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-semibold text-arctic",
										children: "Professional"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 text-4xl font-semibold text-forsythia",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceValue, { tier: "Professional" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-arctic/40 font-mono-tech font-normal",
											children: " / mo"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm text-arctic/60",
										children: "Engineered for growing clinics and healthcare teams automate billing workflow."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-6 space-y-2 text-xs text-arctic/70 font-mono-tech",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ 50,000 claims/mo" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ Dedicated edge VM instances" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ Business Associate Agreement (BAA)" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ 24/7 technical assistance" })
										]
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "mt-8 w-full bg-forsythia text-noir hover:bg-saffron rounded-full py-2.5 text-xs uppercase tracking-wider font-mono-tech cursor-pointer transition font-semibold",
									children: "Upgrade Professional"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							id: "card-Enterprise",
							className: "reveal stagger-3 border border-white/10 bg-noir/40 p-8 rounded-2xl flex flex-col justify-between transition-all duration-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-semibold text-arctic",
									children: "Enterprise"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 text-4xl font-semibold text-forsythia",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceValue, { tier: "Enterprise" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-arctic/40 font-mono-tech font-normal",
										children: " / mo"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-arctic/60",
									children: "For large hospitals and networks demanding dedicated regional nodes."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-6 space-y-2 text-xs text-arctic/70 font-mono-tech",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ Unlimited transaction volume" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ Isolated edge hardware VMs" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ Custom compliance SLA" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ Dedicated solutions engineer" })
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "mt-8 w-full border border-white/10 bg-white/[0.02] hover:border-forsythia hover:text-forsythia rounded-full py-2.5 text-xs uppercase tracking-wider font-mono-tech cursor-pointer transition",
								children: "Contact Enterprise"
							})]
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 border-b border-white/5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia",
						children: "// Feature Matrix"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-semibold md:text-5xl",
						children: "Compare Plans"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 border border-white/10 rounded-2xl overflow-hidden reveal-scale",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-white/5 bg-noir/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-left font-mono-tech text-[10px] uppercase tracking-wider text-arctic/50",
									children: "Feature"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-center font-mono-tech text-[10px] uppercase tracking-wider text-arctic/50",
									children: "Developer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-center font-mono-tech text-[10px] uppercase tracking-wider text-forsythia",
									children: "Professional"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-center font-mono-tech text-[10px] uppercase tracking-wider text-arctic/50",
									children: "Enterprise"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: FEATURE_COMPARISON.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-white/5 last:border-0 hover:bg-white/[0.015] transition",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-3.5 text-arctic/80 font-medium text-xs",
									children: row.feature
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-3.5 text-center text-arctic/50 font-mono-tech text-xs",
									children: row.dev
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-3.5 text-center text-forsythia font-mono-tech text-xs font-semibold",
									children: row.pro
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-3.5 text-center text-arctic/50 font-mono-tech text-xs",
									children: row.ent
								})
							]
						}, row.feature)) })]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 border-b border-white/5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-12 reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia",
							children: "// Capacity Estimator"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl font-semibold md:text-5xl",
							children: "Scale Calculator"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-xl text-sm text-arctic/60",
							children: "Drag the slider to estimate monthly volume usage. Calculations and pricing highlights are performed locally to prevent re-renders."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeCalculator, {})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 border-b border-white/5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia",
						children: "// Billing FAQ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-semibold md:text-5xl",
						children: "Common Questions"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 divide-y divide-white/10 border-y border-white/10",
					children: PRICING_FAQS.map((f, i) => {
						const isOpen = faqOpen === i;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setFaqOpen(isOpen ? null : i),
							className: "flex w-full items-center justify-between gap-6 py-6 text-left cursor-pointer",
							"aria-expanded": isOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base font-medium text-arctic hover:text-forsythia transition-colors",
								children: f.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `shrink-0 text-forsythia transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`,
								children: "+"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid transition-[grid-template-rows] duration-400 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "min-h-0 overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "pb-6 pr-10 text-sm text-arctic/70 leading-relaxed",
									children: f.a
								})
							})
						})] }, f.q);
					})
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono-tech text-[11px] uppercase tracking-wider text-saffron mb-4",
								children: "// Enterprise"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-3xl font-semibold md:text-5xl text-arctic",
								children: [
									"Need a ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "custom solution"
									}),
									"?"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-6 max-w-xl text-sm text-arctic/60 leading-relaxed",
								children: "Our enterprise team will design a tailored deployment plan with dedicated edge infrastructure, custom SLAs, and on-premise options for your organization."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap items-center justify-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
									to: "/",
									children: "Talk to Sales"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
									variant: "ghost",
									to: "/security",
									children: "Security Overview"
								})]
							})
						]
					})]
				})
			})
		})
	] });
}
function VolumeCalculator() {
	const [claims, setClaims] = (0, import_react.useState)(1e4);
	const costTextRef = (0, import_react.useRef)(null);
	const calculateCost = (val) => {
		const rawCost = val <= 1e3 ? 0 : 50 + (val - 1e3) * .004;
		return `$${Math.round(rawCost).toLocaleString()}`;
	};
	const updateCardHighlight = (val) => {
		const devCard = document.getElementById("card-Developer");
		const profCard = document.getElementById("card-Professional");
		const entCard = document.getElementById("card-Enterprise");
		[
			devCard,
			profCard,
			entCard
		].forEach((c) => {
			if (c) {
				c.style.borderColor = "";
				c.style.boxShadow = "";
			}
		});
		const highlight = (card) => {
			if (card) {
				card.style.borderColor = "rgba(255, 200, 1, 0.8)";
				card.style.boxShadow = "0 0 20px rgba(255, 200, 1, 0.2)";
			}
		};
		if (val <= 1e4) highlight(devCard);
		else if (val <= 5e4) highlight(profCard);
		else highlight(entCard);
	};
	const handleSliderChange = (e) => {
		const val = parseInt(e.target.value);
		setClaims(val);
		updateCardHighlight(val);
		if (costTextRef.current) costTextRef.current.innerText = calculateCost(val);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "reveal-scale border border-white/10 bg-noir/50 p-8 rounded-2xl backdrop-blur max-w-2xl mx-auto shadow-2xl relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-24 h-24 bg-forsythia/5 rounded-full blur-2xl pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-6 relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between text-xs font-mono-tech text-arctic/50 uppercase tracking-wider mb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Claims processed / mo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-forsythia font-bold text-sm",
					children: [claims.toLocaleString(), " claims"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "range",
				min: "1000",
				max: "100000",
				step: "1000",
				value: claims,
				onChange: handleSliderChange,
				className: "w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-forsythia"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-t border-white/5 pt-6 mt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] text-arctic/40 font-mono-tech uppercase",
					children: "ESTIMATED RUNTIME COST"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: costTextRef,
					className: "text-4xl font-semibold text-forsythia mt-1 font-mono",
					children: calculateCost(claims)
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] text-arctic/40 font-mono-tech uppercase",
						children: "VM RUNTIME ENVIRONMENT"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold text-saffron mt-1 uppercase font-mono-tech",
						children: claims <= 25e3 ? "Edge Shared VM" : "Edge Dedicated VM"
					})]
				})]
			})]
		})]
	});
}
//#endregion
export { PricingPage as component };
