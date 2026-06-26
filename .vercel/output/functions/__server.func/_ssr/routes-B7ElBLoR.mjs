import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Layout, t as CtaButton } from "./Layout-DlHL_R3D.mjs";
import { n as Menu, r as ArrowRight, t as X } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B7ElBLoR.js
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 78 18",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		className: cn("h-5 w-auto", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M3 0H5V18H3V0ZM13 0H15V18H13V0ZM18 3V5H0V3H18ZM0 15V13H18V15H0Z",
				fill: "url(#logo-gradient)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M27.06 7.054V12.239C27.06 12.5903 27.1393 12.8453 27.298 13.004C27.468 13.1513 27.7513 13.225 28.148 13.225H29.338V14.84H27.808C26.9353 14.84 26.2667 14.636 25.802 14.228C25.3373 13.82 25.105 13.157 25.105 12.239V7.054H24V5.473H25.105V3.144H27.06V5.473H29.338V7.054H27.06ZM30.4782 10.114C30.4782 9.17333 30.6709 8.34033 31.0562 7.615C31.4529 6.88967 31.9855 6.32867 32.6542 5.932C33.3342 5.524 34.0822 5.32 34.8982 5.32C35.6349 5.32 36.2752 5.46733 36.8192 5.762C37.3745 6.04533 37.8165 6.40233 38.1452 6.833V5.473H40.1002V14.84H38.1452V13.446C37.8165 13.888 37.3689 14.2563 36.8022 14.551C36.2355 14.8457 35.5895 14.993 34.8642 14.993C34.0595 14.993 33.3229 14.789 32.6542 14.381C31.9855 13.9617 31.4529 13.3837 31.0562 12.647C30.6709 11.899 30.4782 11.0547 30.4782 10.114ZM38.1452 10.148C38.1452 9.502 38.0092 8.941 37.7372 8.465C37.4765 7.989 37.1309 7.62633 36.7002 7.377C36.2695 7.12767 35.8049 7.003 35.3062 7.003C34.8075 7.003 34.3429 7.12767 33.9122 7.377C33.4815 7.615 33.1302 7.972 32.8582 8.448C32.5975 8.91267 32.4672 9.468 32.4672 10.114ZM32.4672 10.114C32.4672 10.76 32.5975 11.3267 32.8582 11.814C33.1302 12.3013 33.4815 12.6753 33.9122 12.936C34.3542 13.1853 34.8189 13.31 35.3062 13.31C35.8049 13.31 36.2695 13.1853 36.7002 12.936C37.1309 12.6867 37.4765 12.324 37.7372 11.848C38.0092 11.3607 38.1452 10.794 38.1452 10.148ZM43.6317 4.232C43.2803 4.232 42.9857 4.113 42.7477 3.875C42.5097 3.637 42.3907 3.34233 42.3907 2.991C42.3907 2.63967 42.5097 2.345 42.7477 2.107C42.9857 1.869 43.2803 1.75 43.6317 1.75C43.9717 1.75 44.2607 1.869 44.4987 2.107C44.7367 2.345 44.8557 2.63967 44.8557 2.991C44.8557 3.34233 44.7367 3.637 44.4987 3.875C44.2607 4.113 43.9717 4.232 43.6317 4.232ZM44.5837 5.473V14.84H42.6457V5.473H44.5837ZM49.0661 2.26V14.84H47.1281V2.26H49.0661ZM50.9645 10.114C50.9645 9.17333 51.1572 8.34033 51.5425 7.615C51.9392 6.88967 52.4719 6.32867 53.1405 5.932C53.8205 5.524 54.5685 5.32 55.3845 5.32C56.1212 5.32 56.7615 5.46733 57.3055 5.762C57.8609 6.04533 58.3029 6.40233 58.6315 6.833V5.473H60.5865V14.84H58.6315V13.446C58.3029 13.888 57.8552 14.2563 57.2885 14.551C56.7219 14.8457 56.0759 14.993 55.3505 14.993C54.5459 14.993 53.8092 14.789 53.1405 14.381C52.4719 13.9617 51.9392 13.3837 51.5425 12.647C51.1572 11.899 50.9645 11.0547 50.9645 10.114ZM58.6315 10.148C58.6315 9.502 58.4955 8.941 58.2235 8.465C57.9629 7.989 57.6172 7.62633 57.1865 7.377C56.7559 7.12767 56.2912 7.003 55.7925 7.003C55.2939 7.003 54.8292 7.12767 54.3985 7.377C53.9679 7.615 53.6165 7.972 53.3445 8.448C53.0839 8.91267 52.9535 9.468 52.9535 10.114C52.9535 10.76 53.0839 11.3267 53.3445 11.814C53.6165 12.3013 53.9679 12.6753 54.3985 12.936C54.8405 13.1853 55.3052 13.31 55.7925 13.31C56.2912 13.31 56.7559 13.1853 57.1865 12.936C57.6172 12.6867 57.9629 12.324 58.2235 11.848C58.4955 11.3607 58.6315 10.794 58.6315 10.148ZM65.07 6.833C65.3533 6.357 65.7273 5.98867 66.192 5.728C66.668 5.456 67.229 5.32 67.875 5.32V7.326H67.382C66.6227 7.326 66.0447 7.51867 65.648 7.904C65.2627 8.28933 65.07 8.958 65.07 9.91V14.84H63.132V5.473H65.07V6.833ZM73.3624 10.165L77.6804 14.84H75.0624L71.5944 10.811V14.84H69.6564V2.26H71.5944V9.57L74.9944 5.473H77.6804L73.3624 10.165Z",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "logo-gradient",
				x1: "10",
				y1: "0",
				x2: "10",
				y2: "20",
				gradientUnits: "userSpaceOnUse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#9B99FE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "1",
					stopColor: "#2BC8B7"
				})]
			}) })
		]
	});
};
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
function ArrowPathIcon({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" })
	});
}
function ArrowTrendingUpIcon({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" })
	});
}
function ChartPieIcon({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" })]
	});
}
function Cog8ToothIcon({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" })]
	});
}
function Cube16SolidIcon({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 16 16",
		fill: "currentColor",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" })
	});
}
function LinkSolidIcon({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fillRule: "evenodd",
			d: "M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037a.75.75 0 0 1-.646 1.353a5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353a5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037a.75.75 0 0 1-.354-1Z",
			clipRule: "evenodd"
		})
	});
}
function LinkIcon({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" })
	});
}
function ChevronDownIcon({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m19.5 8.25l-7.5 7.5l-7.5-7.5" })
	});
}
function ChevronLeftIcon({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15.75 19.5L8.25 12l7.5-7.5" })
	});
}
function ChevronRightIcon({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m8.25 4.5l7.5 7.5l-7.5 7.5" })
	});
}
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-white/15" }), "SOC 2 · HIPAA · ISO 27001"]
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
		s: "AES-256 · HIPAA",
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
									" · ",
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
											" · ",
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
				symbol: "€",
				factor: .92
			},
			INR: {
				symbol: "₹",
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
								children: "−20%"
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
									children: "EUR €"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "INR",
									children: "INR ₹"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-arctic/50",
							children: "▾"
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
		a: "Yes — HIPAA, HITRUST, SOC 2 Type II and ISO 27001. We sign BAAs with every customer on Pro and Enterprise plans."
	},
	{
		q: "How long does deployment take?",
		a: "Most teams ship their first production workflow in under 14 days. Enterprise federations average 6–8 weeks with our solutions team."
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
