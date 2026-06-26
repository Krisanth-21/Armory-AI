import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Layout-DlHL_R3D.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SearchIcon({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 20 20",
		fill: "currentColor",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" })
	});
}
function XMarkIcon({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 18L18 6M6 6l12 12" })
	});
}
function ChevronUpIcon({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m4.5 15.75l7.5-7.5l7.5 7.5" })
	});
}
function ChevronUpSolidIcon({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fillRule: "evenodd",
			d: "M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z",
			clipRule: "evenodd"
		})
	});
}
function Logo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: `inline-flex items-center gap-2 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 24 24",
			className: "h-6 w-6 text-forsythia",
			fill: "none",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 2L3 6v6c0 5 3.8 9.4 9 10 5.2-.6 9-5 9-10V6l-9-4z",
				stroke: "currentColor",
				strokeWidth: "1.6"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M13 7l-4 7h3l-1 5 4-7h-3l1-5z",
				fill: "currentColor"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono-tech text-sm font-semibold tracking-[0.18em] text-arctic",
			children: "ARMORY"
		})]
	});
}
function CtaButton({ children, full, variant = "primary", to = "/docs" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: `inline-flex items-center justify-center gap-2 rounded-full font-mono-tech text-xs uppercase tracking-wider transition-all duration-200 ease-out cursor-pointer ${variant === "primary" ? "bg-forsythia text-noir hover:bg-saffron hover:scale-[1.02]" : "border border-white/15 text-arctic hover:border-forsythia hover:text-forsythia"} px-5 py-2.5 ${full ? "w-full" : ""}`,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			children: "→"
		})]
	});
}
function useScrollReveal() {
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) entry.target.classList.add("revealed");
			});
		}, {
			threshold: .1,
			rootMargin: "0px 0px -40px 0px"
		});
		document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);
}
var NAV_ITEMS = [
	{
		name: "Product",
		to: "/product"
	},
	{
		name: "Security",
		to: "/security"
	},
	{
		name: "API Reference",
		to: "/docs"
	},
	{
		name: "Pricing",
		to: "/pricing"
	},
	{
		name: "About",
		to: "/about"
	},
	{
		name: "Changelog",
		to: "/changelog"
	}
];
var FOOTER_COLS = [
	{
		h: "Platform",
		l: [
			{
				n: "Product Primitives",
				t: "/product"
			},
			{
				n: "Security Auditing",
				t: "/security"
			},
			{
				n: "Pricing & Calculator",
				t: "/pricing"
			},
			{
				n: "API Docs & Sandbox",
				t: "/docs"
			}
		]
	},
	{
		h: "Company",
		l: [
			{
				n: "About Us",
				t: "/about"
			},
			{
				n: "Changelog",
				t: "/changelog"
			},
			{
				n: "Careers",
				t: "/"
			},
			{
				n: "Contact",
				t: "/"
			}
		]
	},
	{
		h: "Resources",
		l: [
			{
				n: "Documentation",
				t: "/docs"
			},
			{
				n: "System Status",
				t: "/"
			},
			{
				n: "Compliance Certs",
				t: "/security"
			}
		]
	},
	{
		h: "Legal",
		l: [
			{
				n: "Privacy Policy",
				t: "/"
			},
			{
				n: "Terms of Service",
				t: "/"
			},
			{
				n: "HIPAA BAA Policy",
				t: "/"
			}
		]
	}
];
function Layout({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [showScrollTop, setShowScrollTop] = (0, import_react.useState)(false);
	const [isHovered, setIsHovered] = (0, import_react.useState)(false);
	const scrollProgressRef = (0, import_react.useRef)(null);
	useScrollReveal();
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open || searchOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open, searchOpen]);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if ((e.ctrlKey || e.metaKey) && e.key === "k") {
				e.preventDefault();
				setSearchOpen((prev) => !prev);
			}
			if (e.key === "Escape") setSearchOpen(false);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setShowScrollTop(window.scrollY > 400);
			if (scrollProgressRef.current) {
				const scrollTop = window.scrollY;
				const docHeight = document.documentElement.scrollHeight - window.innerHeight;
				const progress = docHeight > 0 ? scrollTop / docHeight * 100 : 0;
				scrollProgressRef.current.style.width = `${progress}%`;
			}
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const searchResults = [
		{
			title: "AI Strategy (FAQ)",
			href: "/#faq",
			desc: "Our platform's strategic model alignment and data handling."
		},
		{
			title: "Custom Agents (Product)",
			href: "/product",
			desc: "Drag-drop reasoning graphs chaining tools, models, and humans."
		},
		{
			title: "Process Automation (Pricing)",
			href: "/pricing",
			desc: "Pricing matrix and plans for configuring your edge network."
		},
		{
			title: "API Reference (Docs)",
			href: "/docs",
			desc: "Sitemap, SDK usage parameters, and shell testing."
		},
		{
			title: "HIPAA Security Standards",
			href: "/security",
			desc: "Zero-trust encryption models, logs, and redaction features."
		},
		{
			title: "About ARMORY",
			href: "/about",
			desc: "Our mission, team, and the story behind the platform."
		},
		{
			title: "Changelog",
			href: "/changelog",
			desc: "Latest platform updates, features, and release notes."
		}
	].filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.desc.toLowerCase().includes(searchQuery.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#0c1a24] text-arctic select-none flex flex-col justify-between",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scrollProgressRef,
				className: "scroll-progress"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-50 border-b border-white/5 bg-noir/85 backdrop-blur-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-6 lg:flex",
							children: NAV_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								activeProps: { className: "text-forsythia" },
								inactiveProps: { className: "text-arctic/70 hover:text-forsythia" },
								className: "font-mono-tech text-xs uppercase tracking-wider transition-colors duration-150 ease-out",
								children: item.name
							}, item.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden items-center gap-4 lg:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setSearchOpen(true),
								className: "flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 font-mono-tech text-[10px] uppercase tracking-wider text-arctic/60 transition-colors hover:border-forsythia hover:text-forsythia cursor-pointer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchIcon, { className: "h-3.5 w-3.5 text-forsythia" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Search" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
										className: "ml-1 rounded bg-white/5 px-1.5 py-0.5 text-[9px] text-arctic/40",
										children: "Ctrl+K"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, { children: "Build a Workflow" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 lg:hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSearchOpen(true),
								"aria-label": "Open Search",
								className: "rounded p-2 text-arctic/70 hover:text-forsythia cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchIcon, { className: "h-5 w-5 text-forsythia" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-label": "Toggle menu",
								"aria-expanded": open,
								onClick: () => setOpen((v) => !v),
								className: "relative h-9 w-9",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute left-1.5 right-1.5 top-3.5 h-0.5 bg-arctic transition-transform duration-300 ease-in-out ${open ? "translate-y-1 rotate-45" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute left-1.5 right-1.5 top-5 h-0.5 bg-arctic transition-transform duration-300 ease-in-out ${open ? "-translate-y-1 -rotate-45" : ""}` })]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `lg:hidden ${open ? "visible" : "invisible"} transition-[visibility] duration-300`,
					"aria-hidden": !open,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-h-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1 border-t border-white/5 bg-noir px-6 py-6",
								children: [NAV_ITEMS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									onClick: () => setOpen(false),
									className: "block font-mono-tech text-sm uppercase tracking-wider text-arctic/80 py-3 hover:text-forsythia",
									children: item.name
								}, item.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-4 space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											setOpen(false);
											setSearchOpen(true);
										},
										className: "flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] py-2.5 font-mono-tech text-xs uppercase tracking-wider text-arctic/80",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchIcon, { className: "h-4 w-4 text-forsythia" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Search Platform" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
										full: true,
										children: "Build a Workflow"
									})]
								})]
							})
						})
					})
				})]
			}),
			searchOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-start justify-center bg-noir/80 p-4 pt-[15vh] backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#12222d] shadow-2xl animate-boot",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 border-b border-white/5 px-4 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchIcon, { className: "h-4 w-4 text-forsythia" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									autoFocus: true,
									type: "text",
									placeholder: "Search command palette... (Esc to exit)",
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									className: "w-full bg-transparent text-sm text-arctic placeholder-arctic/40 outline-none"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										setSearchOpen(false);
										setSearchQuery("");
									},
									className: "rounded p-1 text-arctic/60 transition hover:bg-white/5 hover:text-arctic cursor-pointer",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XMarkIcon, { className: "h-4 w-4 text-saffron" })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "max-h-[300px] overflow-y-auto p-2",
							children: searchResults.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-1",
								children: searchResults.map((res) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: res.href,
									onClick: () => {
										setSearchOpen(false);
										setSearchQuery("");
									},
									className: "block rounded-lg px-3 py-2.5 transition hover:bg-white/[0.03] group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs font-semibold text-arctic group-hover:text-forsythia",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: res.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono-tech text-[10px] text-saffron",
											children: "Open →"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-0.5 text-xs text-arctic/60",
										children: res.desc
									})]
								}, res.title))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-6 text-center text-xs text-arctic/40",
								children: [
									"No commands found matching \"",
									searchQuery,
									"\""
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-t border-white/5 bg-noir/30 px-4 py-2 font-mono-tech text-[10px] text-arctic/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Type keyword to search sections" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ESC to close" })]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 w-full bg-[#0c1a24]",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "bg-noir pt-20 border-t border-white/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 md:grid-cols-[1.4fr_repeat(4,1fr)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xs text-sm text-arctic/60",
								children: "ARMORY is the AI automation platform engineered for the world's most demanding enterprise ecosystems."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-2 font-mono-tech text-[11px] uppercase tracking-wider text-arctic/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-forsythia animate-pulse-dot" }), "All systems operational"]
							})
						] }), FOOTER_COLS.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono-tech text-[11px] uppercase tracking-wider text-forsythia",
							children: col.h
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2 text-sm text-arctic/70",
							children: col.l.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: i.t,
								className: "transition-colors duration-150 hover:text-forsythia",
								children: i.n
							}) }, i.n))
						})] }, col.h))]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 py-6 md:flex-row md:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono-tech text-[11px] uppercase tracking-wider text-arctic/40",
							children: "© 2026 ARMORY Systems Inc. · All rights reserved."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono-tech text-[11px] uppercase tracking-wider text-arctic/40",
							children: "v4.2.1 · build #28104"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "select-none overflow-hidden pt-4 leading-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "whitespace-nowrap text-center font-mono-tech font-semibold tracking-tighter text-forsythia/90",
						style: { fontSize: "clamp(72px, 18vw, 240px)" },
						children: "ARMORY"
					})
				})]
			}),
			showScrollTop && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: scrollToTop,
				onMouseEnter: () => setIsHovered(true),
				onMouseLeave: () => setIsHovered(false),
				"aria-label": "Back to top",
				className: "fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-noir/90 text-forsythia shadow-2xl backdrop-blur-md transition-all duration-200 hover:border-forsythia hover:scale-110 cursor-pointer animate-boot",
				children: isHovered ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUpSolidIcon, { className: "h-5 w-5 text-saffron" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUpIcon, { className: "h-5 w-5 text-forsythia" })
			})
		]
	});
}
//#endregion
export { Layout as n, CtaButton as t };
