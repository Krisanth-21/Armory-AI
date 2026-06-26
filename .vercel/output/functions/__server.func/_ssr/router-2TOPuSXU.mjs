import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { M as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-2TOPuSXU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-B-acrcns.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ARMORY — Power your future with AI" },
			{
				name: "description",
				content: "ARMORY is the AI automation platform for healthcare. Build agents, automate processes and ship secure neural workflows."
			},
			{
				name: "author",
				content: "ARMORY"
			},
			{
				property: "og:title",
				content: "ARMORY — Power your future with AI"
			},
			{
				property: "og:description",
				content: "Build secure AI workflows, custom agents and process automation for modern healthcare."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@armory"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$6 = () => import("./security-DIeVYQpd.mjs");
var Route$6 = createFileRoute("/security")({
	head: () => ({ meta: [{ title: "Security & Compliance — ARMORY" }, {
		name: "description",
		content: "ARMORY is engineered with zero-trust architecture to satisfy HIPAA, SOC 2 Type II, and enterprise healthcare compliance standards."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./product-C7brMS39.mjs");
var Route$5 = createFileRoute("/product")({
	head: () => ({ meta: [{ title: "Product & Architecture — ARMORY" }, {
		name: "description",
		content: "Deep dive into ARMORY's four core primitives: Zero-trust runtime, Composable agents, Edge-native compute, and Federated intelligence."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./pricing-DFXxWdf7.mjs");
var Route$4 = createFileRoute("/pricing")({
	head: () => ({ meta: [{ title: "Pricing & Calculator — ARMORY" }, {
		name: "description",
		content: "Calculate your ARMORY edge VM runtimes and select custom healthcare compliance billing cycles."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./docs-Cn03r0K2.mjs");
var Route$3 = createFileRoute("/docs")({
	head: () => ({ meta: [{ title: "API Reference & Documentation — ARMORY" }, {
		name: "description",
		content: "Explore the ARMORY workflow engine API specifications and developer integrations."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./changelog-BcYBh5Pe.mjs");
var Route$2 = createFileRoute("/changelog")({
	head: () => ({ meta: [{ title: "Changelog — ARMORY" }, {
		name: "description",
		content: "Stay up to date with the latest ARMORY platform updates, features, and improvements."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-BKORY_0c.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About ARMORY — Our Mission" }, {
		name: "description",
		content: "Learn about ARMORY's mission to build the most secure AI automation platform for healthcare."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-B7ElBLoR.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "ARMORY — Power your future with AI" },
		{
			name: "description",
			content: "ARMORY is the AI automation platform for healthcare. Build agents, automate processes and ship secure neural workflows."
		},
		{
			property: "og:title",
			content: "ARMORY — Power your future with AI"
		},
		{
			property: "og:description",
			content: "Build secure AI workflows, custom agents and process automation for modern healthcare."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SecurityRoute = Route$6.update({
	id: "/security",
	path: "/security",
	getParentRoute: () => Route$7
});
var ProductRoute = Route$5.update({
	id: "/product",
	path: "/product",
	getParentRoute: () => Route$7
});
var PricingRoute = Route$4.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$7
});
var DocsRoute = Route$3.update({
	id: "/docs",
	path: "/docs",
	getParentRoute: () => Route$7
});
var ChangelogRoute = Route$2.update({
	id: "/changelog",
	path: "/changelog",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute,
	ChangelogRoute,
	DocsRoute,
	PricingRoute,
	ProductRoute,
	SecurityRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
