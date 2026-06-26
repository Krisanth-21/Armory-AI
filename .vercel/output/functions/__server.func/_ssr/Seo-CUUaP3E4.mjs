import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Seo-CUUaP3E4.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Seo – lightweight SEO helper for ARMORY.
*
* Meta tags (title, description, OG, Twitter) are handled by TanStack Router's
* `head()` in each route config. This component adds **only** the pieces that
* `head()` cannot inject natively:
*   • JSON-LD structured data
*
* Drop <Seo /> anywhere in your page JSX – it renders an invisible <script>.
*/
var SITE_URL = "https://armoryweb.vercel.app";
function Seo({ title, description, path = "/", schemaType = "WebPage" }) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": schemaType,
		name: title,
		description,
		url: `${SITE_URL}${path}`,
		publisher: {
			"@type": "Organization",
			name: "ARMORY",
			url: SITE_URL
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) }
	});
}
/** Helper to build a canonical link entry for head().links */
function canonicalLink(path) {
	return {
		rel: "canonical",
		href: `${SITE_URL}${path}`
	};
}
//#endregion
export { canonicalLink as n, Seo as t };
