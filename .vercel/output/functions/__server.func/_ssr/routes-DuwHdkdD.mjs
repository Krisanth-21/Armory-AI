import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Seo } from "./Seo-CUUaP3E4.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as ChevronLeftIcon, c as CtaButton, d as LinkIcon, f as LinkSolidIcon, i as ChevronDownIcon, l as Cube16SolidIcon, m as XMarkIcon, n as ArrowTrendingUpIcon, o as ChevronRightIcon, p as SearchIcon, r as ChartPieIcon, s as Cog8ToothIcon, t as ArrowPathIcon, u as Layout } from "./Layout-BrSet1XS.mjs";
import { n as Menu, r as ArrowRight, t as X } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DuwHdkdD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
			outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-10 px-4 py-2",
			sm: "h-9 rounded-md px-3",
			lg: "h-11 rounded-md px-8",
			icon: "h-10 w-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var defaultContainerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: .1 }
	}
};
var defaultItemVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 }
};
var presetVariants = {
	fade: {
		container: defaultContainerVariants,
		item: {
			hidden: { opacity: 0 },
			visible: { opacity: 1 }
		}
	},
	slide: {
		container: defaultContainerVariants,
		item: {
			hidden: {
				opacity: 0,
				y: 20
			},
			visible: {
				opacity: 1,
				y: 0
			}
		}
	},
	scale: {
		container: defaultContainerVariants,
		item: {
			hidden: {
				opacity: 0,
				scale: .8
			},
			visible: {
				opacity: 1,
				scale: 1
			}
		}
	},
	blur: {
		container: defaultContainerVariants,
		item: {
			hidden: {
				opacity: 0,
				filter: "blur(4px)"
			},
			visible: {
				opacity: 1,
				filter: "blur(0px)"
			}
		}
	},
	"blur-slide": {
		container: defaultContainerVariants,
		item: {
			hidden: {
				opacity: 0,
				filter: "blur(4px)",
				y: 20
			},
			visible: {
				opacity: 1,
				filter: "blur(0px)",
				y: 0
			}
		}
	},
	zoom: {
		container: defaultContainerVariants,
		item: {
			hidden: {
				opacity: 0,
				scale: .5
			},
			visible: {
				opacity: 1,
				scale: 1,
				transition: {
					type: "spring",
					stiffness: 300,
					damping: 20
				}
			}
		}
	},
	flip: {
		container: defaultContainerVariants,
		item: {
			hidden: {
				opacity: 0,
				rotateX: -90
			},
			visible: {
				opacity: 1,
				rotateX: 0,
				transition: {
					type: "spring",
					stiffness: 300,
					damping: 20
				}
			}
		}
	},
	bounce: {
		container: defaultContainerVariants,
		item: {
			hidden: {
				opacity: 0,
				y: -50
			},
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					type: "spring",
					stiffness: 400,
					damping: 10
				}
			}
		}
	},
	rotate: {
		container: defaultContainerVariants,
		item: {
			hidden: {
				opacity: 0,
				rotate: -180
			},
			visible: {
				opacity: 1,
				rotate: 0,
				transition: {
					type: "spring",
					stiffness: 200,
					damping: 15
				}
			}
		}
	},
	swing: {
		container: defaultContainerVariants,
		item: {
			hidden: {
				opacity: 0,
				rotate: -10
			},
			visible: {
				opacity: 1,
				rotate: 0,
				transition: {
					type: "spring",
					stiffness: 300,
					damping: 8
				}
			}
		}
	}
};
function AnimatedGroup({ children, className, variants, preset }) {
	const selectedVariants = preset ? presetVariants[preset] : {
		container: defaultContainerVariants,
		item: defaultItemVariants
	};
	const containerVariants = variants?.container || selectedVariants.container;
	const itemVariants = variants?.item || selectedVariants.item;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: "hidden",
		animate: "visible",
		variants: containerVariants,
		className: cn(className),
		children: import_react.Children.map(children, (child, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			variants: itemVariants,
			children: child
		}, index))
	});
}
var Link = import_react.forwardRef(({ href, children, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		ref,
		...props,
		children
	});
});
Link.displayName = "Link";
var transitionVariants = { item: {
	hidden: {
		opacity: 0,
		filter: "blur(12px)",
		y: 12
	},
	visible: {
		opacity: 1,
		filter: "blur(0px)",
		y: 0,
		transition: {
			type: "spring",
			bounce: .3,
			duration: 1.5
		}
	}
} };
function HeroSection({ includeHeader = true } = {}) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [includeHeader && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative pt-24 md:pt-36",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center sm:mx-auto lg:mr-auto lg:mt-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedGroup, {
							variants: transitionVariants,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									href: "#link",
									className: "hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground text-sm",
											children: "Introducing Support for AI Models"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex size-6",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "m-auto size-3" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex size-6",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "m-auto size-3" })
												})]
											})
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-8 max-w-4xl mx-auto text-balance text-6xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:mt-16 xl:text-[5.25rem]",
									children: [
										"Power your future ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:inline" }),
										"with ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-forsythia",
											children: "AI"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-saffron",
											children: "."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-8 max-w-2xl text-balance text-lg text-arctic/75 leading-relaxed",
									children: "ARMORY orchestrates custom agents, secure data pipelines, and process automation for the most demanding enterprise ecosystems."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedGroup, {
							variants: {
								container: { visible: { transition: {
									staggerChildren: .05,
									delayChildren: .75
								} } },
								...transitionVariants
							},
							className: "mt-12 flex flex-col items-center justify-center gap-2 md:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-foreground/10 rounded-[14px] border p-0.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "rounded-xl px-5 text-base",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										href: "#link",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-nowrap",
											children: "Start Building"
										})
									})
								})
							}, 1), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "ghost",
								className: "h-10.5 rounded-xl px-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									href: "#link",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-nowrap",
										children: "Request a demo"
									})
								})
							}, 2)]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedGroup, {
					variants: {
						container: { visible: { transition: {
							staggerChildren: .05,
							delayChildren: .75
						} } },
						...transitionVariants
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mt-8 px-2 sm:mt-12 md:mt-20 mx-auto max-w-5xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "aspect-[16/9] w-full bg-[#0c1a24]/90 rounded-xl border border-white/10 p-4 font-mono text-left text-xs text-arctic/80 overflow-hidden flex flex-col shadow-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pb-3 border-b border-white/5 mb-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-1.5 animate-pulse-dot",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-3 h-3 rounded-full bg-red-500/80 inline-block" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-3 h-3 rounded-full bg-yellow-500/80 inline-block" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-3 h-3 rounded-full bg-green-500/80 inline-block" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] text-arctic/40 font-mono-tech tracking-wider uppercase",
										children: "armory-workflow-agent.sh"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 flex-1 overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden md:flex flex-col gap-2.5 border-r border-white/5 pr-4 text-[11px] text-arctic/50",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-forsythia/80 tracking-wide",
											children: "// AGENTS"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-arctic",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" }), "Claims Processor"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-2",
											children: "EHR Integrator"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center gap-2",
											children: "Compliance Guard"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4 font-semibold text-forsythia/80 tracking-wide",
											children: "// CONNECTIONS"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-arctic/60 font-mono-tech text-[10px] uppercase",
											children: "SOC 2 · HIPAA"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1.5 font-mono text-[11px] overflow-y-auto text-arctic/90",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-forsythia/60",
											children: ["armory-runtime:~$ ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-arctic",
												children: "run-pipeline --config ./care-agent.json"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-emerald-400/80",
											children: "[INIT] Booting neural compiler v4.2.1 on edge-node-14..."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-emerald-400/80",
											children: "[OK] Edge instance verified in region us-east-1 (ping: 12ms)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-arctic/40",
											children: "[EHR] Subscribed to HL7 FHIR claim streams."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-saffron/80",
											children: "[REDACT] Found PHI pattern (Medicare ID) at log #248. Redacting with AES-256..."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-emerald-400/80",
											children: "[AGENT] Routing payload to Cigna custom LLM gateway..."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-arctic/40",
											children: "[AGENT] Token sequence: 4,096 in / 512 out. Processing in 140ms."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-forsythia/80",
											children: "[SUCCESS] Claim pre-authorized. Auto-routing token returned: auth_83bF2a."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 flex items-center gap-3 bg-white/[0.02] border border-white/5 p-3 rounded-lg",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[10px] text-arctic/40 font-mono-tech uppercase",
														children: "Real-time stats"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-lg font-semibold text-forsythia mt-0.5",
														children: "14,280 tps"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-8 bg-white/10" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[10px] text-arctic/40 font-mono-tech uppercase",
														children: "P99 Latency"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-lg font-semibold text-saffron mt-0.5",
														children: "42ms"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-8 bg-white/10" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[10px] text-arctic/40 font-mono-tech uppercase",
														children: "System Load"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-lg font-semibold text-emerald-400 mt-0.5",
														children: "99.98%"
													})]
												})
											]
										})
									]
								})]
							})]
						})
					})
				})
			]
		}) })]
	})] });
}
var menuItems = [
	{
		name: "Features",
		href: "#link"
	},
	{
		name: "Solution",
		href: "#link"
	},
	{
		name: "Pricing",
		href: "#link"
	},
	{
		name: "About",
		href: "#link"
	}
];
var HeroHeader = () => {
	const [menuState, setMenuState] = import_react.useState(false);
	const [isScrolled, setIsScrolled] = import_react.useState(false);
	import_react.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"data-state": menuState && "active",
		className: "fixed z-20 w-full px-2 group",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12", isScrolled && "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-full justify-between lg:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							href: "/",
							"aria-label": "home",
							className: "flex items-center space-x-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setMenuState(!menuState),
							"aria-label": menuState == true ? "Close Menu" : "Open Menu",
							className: "relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 m-auto hidden size-fit lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex gap-8 text-sm",
							children: menuItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								href: item.href,
								className: "text-muted-foreground hover:text-accent-foreground block duration-150",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.name })
							}) }, index))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-6 text-base",
								children: menuItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									href: item.href,
									className: "text-muted-foreground hover:text-accent-foreground block duration-150",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.name })
								}) }, index))
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									size: "sm",
									className: cn(isScrolled && "lg:hidden"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										href: "#",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Login" })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "sm",
									className: cn(isScrolled && "lg:hidden"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										href: "#",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sign Up" })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "sm",
									className: cn(isScrolled ? "lg:inline-flex" : "hidden"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										href: "#",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Get Started" })
									})
								})
							]
						})]
					})
				]
			})
		})
	}) });
};
var Logo = ({ className }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("font-mono-tech text-sm font-semibold tracking-[0.18em] text-arctic", className),
		children: "ARMORY"
	});
};
var CLIENT_LOGOS = [
	"AETNA",
	"CIGNA",
	"ANTHEM",
	"HUMANA",
	"KAISER",
	"UNITED"
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-grid opacity-60",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-radial-glow",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 pb-20 pt-24 md:pt-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-boot flex items-center gap-2 font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-forsythia animate-pulse-dot" }), "Neural Infrastructure // v4.2.1"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "animate-boot mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-arctic md:text-7xl",
						children: [
							"Power your future ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"with",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-forsythia",
								children: "AI"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-saffron",
								children: "."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "animate-boot mt-6 max-w-xl text-base leading-relaxed text-arctic/70 md:text-lg",
						children: "ARMORY orchestrates custom agents, secure data pipelines, and process automation for the most demanding healthcare ecosystems on the planet."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-boot mt-10 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, { children: "Build a Workflow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 font-mono-tech text-[11px] uppercase tracking-wider text-arctic/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-white/15" }), "SOC 2 Â· HIPAA Â· ISO 27001"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "animate-boot mt-14 grid gap-4 rounded-2xl border border-white/10 bg-noir/60 p-5 backdrop-blur md:grid-cols-3",
						children: [
							{
								k: "01",
								t: "Ingest",
								d: "Connect EHR, claims & telemetry"
							},
							{
								k: "02",
								t: "Reason",
								d: "Route through GPT-4 / Claude 3"
							},
							{
								k: "03",
								t: "Act",
								d: "Trigger agents across your stack"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:border-forsythia/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono-tech text-[11px] tracking-wider text-forsythia",
									children: s.k
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-lg font-semibold",
									children: s.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-sm text-arctic/60",
									children: s.d
								})
							]
						}, s.k))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative border-y border-white/5 bg-noir/40 py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#0c1a24] to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#0c1a24] to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex shrink-0 animate-marquee gap-16 pr-16",
							children: [
								...CLIENT_LOGOS,
								...CLIENT_LOGOS,
								...CLIENT_LOGOS
							].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono-tech text-2xl tracking-[0.3em] text-arctic/40",
								children: l
							}, i))
						})
					})
				]
			})
		]
	});
}
function Integrations() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-white/5 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia",
					children: "// Integrations"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl",
					children: [
						"Native alignment with the most capable",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-saffron",
							children: "language models"
						}),
						" on Earth."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-3",
					children: [
						{
							n: "GPT-4",
							v: "OpenAI",
							m: "8.2T params"
						},
						{
							n: "Claude 3",
							v: "Anthropic",
							m: "200K context"
						},
						{
							n: "Perplexity",
							v: "Sonar Pro",
							m: "Live web"
						}
					].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-noir p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono-tech text-[11px] uppercase tracking-wider text-arctic/40",
								children: m.v
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 text-2xl font-semibold",
								children: m.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 font-mono-tech text-sm text-forsythia",
								children: m.m
							})
						]
					}, m.n))
				})
			]
		})
	});
}
var FEATURES = [
	{
		k: "Secure Guard",
		t: "Zero-trust runtime",
		d: "End-to-end encryption, PHI redaction and per-agent IAM enforced at every hop.",
		s: "AES-256 Â· HIPAA",
		icon: (className) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkSolidIcon, { className })
	},
	{
		k: "Agent Build",
		t: "Composable agents",
		d: "Drag-drop reasoning graphs that chain tools, retrieval, and human review.",
		s: "12 model providers",
		icon: (className) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cog8ToothIcon, { className })
	},
	{
		k: "Cloud Scale",
		t: "Edge-native compute",
		d: "Autoscaling inference across 14 regions with sub-50ms P99 latency.",
		s: "14 regions",
		icon: (className) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cube16SolidIcon, { className })
	},
	{
		k: "Data Mining",
		t: "Federated intelligence",
		d: "Mine structured + unstructured signals across siloed clinical systems.",
		s: "+2.4M docs/hr",
		icon: (className) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartPieIcon, { className })
	}
];
function useIsMobile(bp = 768) {
	const [m, setM] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia(`(max-width: ${bp - 1}px)`);
		const f = () => setM(mq.matches);
		f();
		mq.addEventListener("change", f);
		return () => mq.removeEventListener("change", f);
	}, [bp]);
	return m;
}
function FeatureArchitecture() {
	const [active, setActive] = (0, import_react.useState)(0);
	const isMobile = useIsMobile();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "custom-agents",
		className: "border-b border-white/5 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia",
					children: "// Core Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 max-w-2xl text-3xl font-semibold leading-tight md:text-5xl text-arctic",
					children: [
						"Four primitives.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Infinite workflows."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden font-mono-tech text-[11px] uppercase tracking-wider text-arctic/40 md:block",
					children: "[04 modules]"
				})]
			}), isMobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-2",
				children: FEATURES.map((f, i) => {
					const open = i === active;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-xl border border-white/10 bg-noir/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActive(i),
							className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
							"aria-expanded": open,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2 font-mono-tech text-[11px] uppercase tracking-wider text-forsythia",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-6 w-6 items-center justify-center rounded bg-forsythia/10 text-forsythia",
										children: f.icon("h-3.5 w-3.5")
									}),
									"0",
									i + 1,
									" Â· ",
									f.k
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `transition-transform duration-300 ease-in-out ${open ? "rotate-45" : ""} text-arctic/60`,
								"aria-hidden": true,
								children: "+"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid transition-[grid-template-rows] duration-400 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "min-h-0 overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "px-5 pb-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-lg font-semibold text-arctic",
											children: f.t
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 text-sm text-arctic/60",
											children: f.d
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 font-mono-tech text-[11px] uppercase tracking-wider text-saffron",
											children: f.s
										})
									]
								})
							})
						})]
					}, f.k);
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-12 gap-4",
				children: FEATURES.map((f, i) => {
					const isActive = i === active;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onMouseEnter: () => setActive(i),
						className: `group relative ${i === 0 ? "col-span-7 row-span-2" : i === 1 ? "col-span-5" : i === 2 ? "col-span-5" : "col-span-7"} overflow-hidden rounded-2xl border bg-noir/60 p-8 transition-all duration-200 ease-out hover:-translate-y-0.5 ${isActive ? "border-forsythia/50 bg-[#12222d]" : "border-white/10 hover:border-white/20"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${isActive ? "border-forsythia bg-forsythia/10 text-forsythia" : "border-white/10 bg-white/[0.02] text-arctic/40"}`,
										children: f.icon("h-5 w-5")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: `font-mono-tech text-[11px] uppercase tracking-wider transition-colors duration-200 ${isActive ? "text-forsythia" : "text-arctic/40"}`,
										children: [
											"0",
											i + 1,
											" Â· ",
											f.k
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono-tech text-[11px] text-arctic/30",
									children: f.s
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-12 text-2xl font-semibold md:text-3xl text-arctic group-hover:text-forsythia transition-colors duration-200",
								children: f.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 max-w-md text-sm text-arctic/60 leading-relaxed",
								children: f.d
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `pointer-events-none absolute inset-x-0 bottom-0 h-[2px] transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`,
								style: { background: "linear-gradient(90deg, transparent, #FFC801, #FF9932, transparent)" }
							})
						]
					}, f.k);
				})
			})]
		})
	});
}
function Telemetry() {
	const [metrics, setMetrics] = (0, import_react.useState)({
		inference: 72,
		retrieval: 41,
		action: 88,
		audit: 23,
		latency: 12,
		throughput: 10.4,
		uptime: 99.98
	});
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const handleRefresh = (0, import_react.useCallback)(() => {
		setRefreshing(true);
		setTimeout(() => {
			setMetrics({
				inference: Math.floor(Math.random() * 30) + 60,
				retrieval: Math.floor(Math.random() * 40) + 30,
				action: Math.floor(Math.random() * 25) + 70,
				audit: Math.floor(Math.random() * 15) + 15,
				latency: Math.floor(Math.random() * 6) + 8,
				throughput: parseFloat((Math.random() * 4 + 8).toFixed(1)),
				uptime: parseFloat((99.9 + Math.random() * .09).toFixed(2))
			});
			setRefreshing(false);
		}, 600);
	}, []);
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setMetrics((prev) => ({
				...prev,
				inference: Math.max(50, Math.min(95, prev.inference + (Math.random() > .5 ? 3 : -3))),
				retrieval: Math.max(25, Math.min(85, prev.retrieval + (Math.random() > .5 ? 4 : -4))),
				action: Math.max(65, Math.min(98, prev.action + (Math.random() > .5 ? 2 : -2))),
				audit: Math.max(10, Math.min(45, prev.audit + (Math.random() > .5 ? 1 : -1))),
				latency: Math.max(7, Math.min(18, prev.latency + (Math.random() > .6 ? 1 : -1))),
				throughput: parseFloat(Math.max(6, Math.min(14, prev.throughput + (Math.random() > .5 ? .2 : -.2))).toFixed(1))
			}));
		}, 4500);
		return () => clearInterval(interval);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "telemetry",
		className: "border-b border-white/5 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia",
					children: "// Real-time telemetry"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl text-arctic",
					children: "Watch the grid breathe."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: handleRefresh,
					disabled: refreshing,
					className: "flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 font-mono-tech text-[11px] uppercase tracking-wider text-arctic/85 transition-all hover:border-forsythia hover:text-forsythia hover:scale-[1.02] cursor-pointer disabled:opacity-50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowPathIcon, { className: `h-4 w-4 text-forsythia ${refreshing ? "animate-spin" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: refreshing ? "Syncing..." : "Sync System Log" })]
				}) })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-7 rounded-2xl border border-white/10 bg-noir/60 p-6 backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono-tech text-[11px] uppercase tracking-wider text-arctic/50",
							children: "system load"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 font-mono-tech text-[11px] uppercase text-forsythia",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-forsythia animate-pulse-dot" }), "live feed"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-4",
						children: [
							{
								l: "Inference cluster",
								v: metrics.inference
							},
							{
								l: "Retrieval pipeline",
								v: metrics.retrieval
							},
							{
								l: "Action runners",
								v: metrics.action
							},
							{
								l: "Audit ledger",
								v: metrics.audit
							}
						].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-arctic/70",
								children: m.l
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono-tech text-arctic/50",
								children: [m.v, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full transition-all duration-500 ease-out",
								style: {
									width: `${m.v}%`,
									background: "linear-gradient(90deg,#FFC801,#FF9932)"
								}
							})
						})] }, m.l))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-5 grid grid-cols-2 gap-4",
					children: [
						{
							l: "Latency",
							v: `${metrics.latency}`,
							u: "ms",
							icon: null
						},
						{
							l: "Throughput",
							v: `${metrics.throughput}`,
							u: "x",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowTrendingUpIcon, { className: "h-4 w-4 text-forsythia animate-pulse" })
						},
						{
							l: "Uptime",
							v: `${metrics.uptime}`,
							u: "%",
							icon: null
						},
						{
							l: "Regions",
							v: "14",
							u: "//",
							icon: null
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-white/10 bg-noir/60 p-5 flex flex-col justify-between hover:border-forsythia/30 transition-colors duration-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono-tech text-[11px] uppercase tracking-wider text-arctic/50",
								children: s.l
							}), s.icon]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-baseline gap-1 font-mono-tech",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-4xl font-semibold text-forsythia transition-all duration-300",
								children: s.v
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-saffron",
								children: s.u
							})]
						})]
					}, s.l))
				})]
			})]
		})
	});
}
var CASES = [
	{
		c: "Cigna Smart Health Systems",
		t: "Claims triage cut from 6 days to 4 hours.",
		quote: "The zero-trust setup allowed us to route PHI securely without any latency impact. Outstanding execution.",
		m: [{
			k: "Auto-resolved",
			v: "78%"
		}, {
			k: "Cost saved",
			v: "$24M"
		}]
	},
	{
		c: "Aetna Health Data Ecosystem",
		t: "Federated patient graph across 312 facilities.",
		quote: "Unifying 82M patient records across hundreds of facilities seemed impossible until we loaded the Armory federated graph.",
		m: [{
			k: "Records unified",
			v: "82M"
		}, {
			k: "Match accuracy",
			v: "99.4%"
		}]
	},
	{
		c: "Anthem Neural Care Network",
		t: "Care-pathway agent serving 11M members.",
		quote: "We deflected over 60% of support calls within the first month. Our members get answers in seconds now.",
		m: [{
			k: "Calls deflected",
			v: "61%"
		}, {
			k: "CSAT",
			v: "+38pt"
		}]
	}
];
function CaseStudies() {
	const [active, setActive] = (0, import_react.useState)(0);
	const prev = () => {
		setActive((curr) => curr === 0 ? CASES.length - 1 : curr - 1);
	};
	const next = () => {
		setActive((curr) => curr === CASES.length - 1 ? 0 : curr + 1);
	};
	const currentCase = CASES[active];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "case-studies",
		className: "border-b border-white/5 py-24 bg-noir/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia",
					children: "// Deployments"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl text-arctic",
					children: "Shipping outcomes inside healthcare."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono-tech text-xs text-arctic/50",
						children: [
							"0",
							active + 1,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-saffron",
								children: "/"
							}),
							" 0",
							CASES.length
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: prev,
							"aria-label": "Previous Case Study",
							className: "flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-arctic/80 transition hover:border-forsythia hover:text-forsythia cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeftIcon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: next,
							"aria-label": "Next Case Study",
							className: "flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-arctic/80 transition hover:border-forsythia hover:text-forsythia cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRightIcon, { className: "h-5 w-5" })
						})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#12222d] to-[#0d1c24] p-8 md:p-12 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-0 right-0 p-8 opacity-[0.03] select-none pointer-events-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkSolidIcon, { className: "h-32 w-32" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 md:grid-cols-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-8 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono-tech text-xs uppercase tracking-widest text-saffron",
								children: "Client Deployment Case study"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-semibold md:text-4xl text-arctic tracking-tight",
								children: currentCase.c
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-lg md:text-xl text-mint leading-relaxed italic",
								children: [
									"\"",
									currentCase.quote,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-semibold text-forsythia font-mono-tech",
								children: ["// ", currentCase.t]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#",
									className: "inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-wider text-arctic hover:text-forsythia transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Download Integration Ledger" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkIcon, { className: "h-4 w-4 text-saffron" })]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-4 grid grid-cols-2 gap-4",
						children: currentCase.m.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-white/5 bg-white/[0.01] p-5 hover:border-forsythia/20 transition duration-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono-tech text-3xl font-bold text-forsythia",
								children: m.v
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 font-mono-tech text-[10px] uppercase tracking-wider text-arctic/50",
								children: m.k
							})]
						}, m.k))
					})]
				})]
			})]
		})
	});
}
var PLANS = [
	{
		n: "Starter System",
		base: 99,
		d: "For builders prototyping their first agent.",
		f: [
			"3 active agents",
			"10k inferences / mo",
			"Community support"
		]
	},
	{
		n: "Pro Neural Link",
		base: 499,
		d: "Production neural workflows with SLA.",
		f: [
			"Unlimited agents",
			"1M inferences / mo",
			"SSO + audit logs",
			"Priority support"
		],
		featured: true
	},
	{
		n: "Enterprise Grid",
		base: 2400,
		d: "Federated deployment across regions.",
		f: [
			"Dedicated tenancy",
			"Unlimited inferences",
			"On-prem / VPC",
			"24/7 incident desk"
		]
	}
];
function Pricing() {
	const PRICING_MATRIX = {
		baseRates: [
			99,
			499,
			2400
		],
		regions: {
			USD: {
				symbol: "$",
				factor: 1
			},
			EUR: {
				symbol: "â‚¬",
				factor: .92
			},
			INR: {
				symbol: "â‚¹",
				factor: 83
			}
		}
	};
	const stateRef = (0, import_react.useRef)({
		currency: "USD",
		annual: false
	});
	const priceRefs = (0, import_react.useRef)([]);
	const cycleRefs = (0, import_react.useRef)([]);
	const monthlyBtnRef = (0, import_react.useRef)(null);
	const annualBtnRef = (0, import_react.useRef)(null);
	const updatePricingDOM = (0, import_react.useCallback)(() => {
		const { currency, annual } = stateRef.current;
		PRICING_MATRIX.baseRates.forEach((baseRate, i) => {
			const priceSpan = priceRefs.current[i];
			if (priceSpan) {
				const { symbol, factor } = PRICING_MATRIX.regions[currency];
				const discountMultiplier = annual ? .8 : 1;
				const calculatedPrice = baseRate * factor * discountMultiplier;
				priceSpan.textContent = `${symbol}${(currency === "INR" ? Math.round(calculatedPrice / 10) * 10 : Math.round(calculatedPrice)).toLocaleString()}`;
			}
			const cycleSpan = cycleRefs.current[i];
			if (cycleSpan) cycleSpan.textContent = annual ? "/yr" : "/mo";
		});
		const activeBtnClass = "rounded-full px-4 py-1.5 transition-colors duration-200 bg-forsythia text-noir cursor-pointer";
		const inactiveBtnClass = "rounded-full px-4 py-1.5 transition-colors duration-200 text-arctic/70 hover:text-arctic cursor-pointer";
		if (monthlyBtnRef.current && annualBtnRef.current) if (annual) {
			monthlyBtnRef.current.className = inactiveBtnClass;
			annualBtnRef.current.className = activeBtnClass;
		} else {
			monthlyBtnRef.current.className = activeBtnClass;
			annualBtnRef.current.className = inactiveBtnClass;
		}
	}, []);
	(0, import_react.useEffect)(() => {
		updatePricingDOM();
	}, [updatePricingDOM]);
	const handleCycleChange = (isAnnual) => {
		stateRef.current.annual = isAnnual;
		updatePricingDOM();
	};
	const handleCurrencyChange = (e) => {
		stateRef.current.currency = e.target.value;
		updatePricingDOM();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process-automation",
		className: "border-b border-white/5 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia",
					children: "// Pricing matrix"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-2xl text-3xl font-semibold leading-tight md:text-5xl text-arctic",
					children: "Configure your grid."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex rounded-full border border-white/10 bg-noir/60 p-1 font-mono-tech text-[11px] uppercase tracking-wider",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							ref: monthlyBtnRef,
							onClick: () => handleCycleChange(false),
							className: "rounded-full px-4 py-1.5 transition-colors duration-200 bg-forsythia text-noir cursor-pointer",
							children: "Monthly"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							ref: annualBtnRef,
							onClick: () => handleCycleChange(true),
							className: "rounded-full px-4 py-1.5 transition-colors duration-200 text-arctic/70 hover:text-arctic cursor-pointer",
							children: ["Annual ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-saffron",
								children: "âˆ’20%"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							defaultValue: "USD",
							onChange: handleCurrencyChange,
							className: "appearance-none rounded-full border border-white/10 bg-noir/60 px-4 py-2 pr-8 font-mono-tech text-[11px] uppercase tracking-wider text-arctic outline-none transition-colors duration-200 hover:border-forsythia cursor-pointer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "USD",
									children: "USD $"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "EUR",
									children: "EUR â‚¬"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "INR",
									children: "INR â‚¹"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-arctic/50",
							children: "â–¾"
						})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 md:grid-cols-3",
				children: PLANS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `relative flex flex-col rounded-2xl border p-8 transition-all duration-200 ease-out hover:-translate-y-1 ${p.featured ? "border-forsythia/50 bg-gradient-to-b from-noir to-[#0c1a24]" : "border-white/10 bg-noir/60"}`,
					children: [
						p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -top-3 left-8 rounded-full bg-forsythia px-3 py-1 font-mono-tech text-[10px] uppercase tracking-wider text-noir",
							children: "Most adopted"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-mono-tech text-[11px] uppercase tracking-wider text-saffron",
							children: ["0", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-xl font-semibold text-arctic",
							children: p.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-sm text-arctic/60",
							children: p.d
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-baseline gap-1 font-mono-tech",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								ref: (el) => {
									priceRefs.current[i] = el;
								},
								className: "text-5xl font-semibold text-arctic",
								children: "$0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								ref: (el) => {
									cycleRefs.current[i] = el;
								},
								className: "text-sm text-arctic/50",
								children: "/mo"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-2 text-sm text-arctic/70",
							children: p.f.map((feat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-forsythia" }), feat]
							}, feat))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
								variant: p.featured ? "primary" : "ghost",
								full: true,
								children: p.featured ? "Deploy now" : "Select plan"
							})
						})
					]
				}, p.n))
			})]
		})
	});
}
var FAQS = [
	{
		q: "Where is data processed and stored?",
		a: "All inference runs inside your designated region (US, EU, IN, APAC). PHI never leaves the tenancy boundary you select and is encrypted at rest with AES-256."
	},
	{
		q: "Which models can I route to?",
		a: "Out of the box: GPT-4, Claude 3, Perplexity Sonar, Gemini 1.5, Llama 3, Mistral Large and your own self-hosted endpoints. Routing rules are per-agent."
	},
	{
		q: "Is ARMORY HIPAA compliant?",
		a: "Yes â€” HIPAA, HITRUST, SOC 2 Type II and ISO 27001. We sign BAAs with every customer on Pro and Enterprise plans."
	},
	{
		q: "How long does deployment take?",
		a: "Most teams ship their first production workflow in under 14 days. Enterprise federations average 6â€“8 weeks with our solutions team."
	}
];
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	const [search, setSearch] = (0, import_react.useState)("");
	const filteredFaqs = FAQS.filter((f) => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "ai-strategy",
		className: "border-b border-white/5 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia",
					children: "// FAQ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-semibold leading-tight md:text-5xl text-arctic",
					children: "Infrastructure inquiries."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full max-w-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchIcon, { className: "absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-forsythia" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Search inquiries...",
							value: search,
							onChange: (e) => {
								setSearch(e.target.value);
								setOpen(0);
							},
							className: "w-full rounded-full border border-white/10 bg-noir/40 py-2 pl-10 pr-8 font-mono-tech text-xs text-arctic outline-none focus:border-forsythia focus:bg-noir transition"
						}),
						search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSearch(""),
							className: "absolute right-3 top-1/2 -translate-y-1/2 text-arctic/40 hover:text-arctic cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XMarkIcon, { className: "h-3.5 w-3.5" })
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 divide-y divide-white/10 border-y border-white/10",
				children: filteredFaqs.length > 0 ? filteredFaqs.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(isOpen ? null : i),
						className: "flex w-full items-center justify-between gap-6 py-6 text-left cursor-pointer",
						"aria-expanded": isOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg font-medium md:text-xl text-arctic hover:text-forsythia transition-colors",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 text-forsythia bg-white/[0.02] border border-white/15 h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 hover:border-forsythia hover:scale-[1.05]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDownIcon, { className: `h-4 w-4 transition-transform duration-350 ${isOpen ? "rotate-180 text-saffron" : ""}` })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid transition-[grid-template-rows] duration-400 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-h-0 overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pb-6 pr-10 text-arctic/70 leading-relaxed",
								children: f.a
							})
						})
					})] }, f.q);
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "py-12 text-center font-mono-tech text-sm text-arctic/40",
					children: "No matching inquiries found. Try another term."
				})
			})]
		})
	});
}
function ArmoryLanding() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seo, {
			title: "ARMORY - Power your future with AI",
			description: "ARMORY is the AI automation platform for healthcare. Build agents, automate processes and ship secure neural workflows.",
			path: "/",
			schemaType: "WebSite"
		}),
		mounted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, { includeHeader: false }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Integrations, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureArchitecture, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Telemetry, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStudies, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {})
	] });
}
//#endregion
export { ArmoryLanding as component };
