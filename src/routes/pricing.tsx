import { createFileRoute } from "@tanstack/react-router";
import { Layout, CtaButton } from "@/components/Layout";
import { Seo } from '@/components/Seo';
import { useState, useRef, useEffect } from "react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Calculator â€” ARMORY" },
      {
        name: "description",
        content: "Calculate your ARMORY edge VM runtimes and select custom healthcare compliance billing cycles.",
      },
    ],
  }),
  component: PricingPage,
});

/* ---------- Pricing Configuration Matrix ---------- */
const BASE_PRICING = {
  Developer: { USD: 0, EUR: 0, INR: 0 },
  Professional: { USD: 149, EUR: 139, INR: 12500 },
  Enterprise: { USD: 499, EUR: 469, INR: 41900 },
};

const SYMBOLS = {
  USD: "$",
  EUR: "â‚¬",
  INR: "â‚¹",
};

const FEATURE_COMPARISON = [
  { feature: "Monthly claims volume", dev: "1,000", pro: "50,000", ent: "Unlimited" },
  { feature: "Edge compute nodes", dev: "Shared", pro: "Dedicated", ent: "Isolated hardware" },
  { feature: "Model providers", dev: "3", pro: "12", ent: "Unlimited + custom" },
  { feature: "SSO / SAML", dev: "â€”", pro: "âœ“", ent: "âœ“" },
  { feature: "Audit log retention", dev: "7 days", pro: "90 days", ent: "Unlimited" },
  { feature: "BAA agreement", dev: "â€”", pro: "âœ“", ent: "âœ“" },
  { feature: "SLA guarantee", dev: "â€”", pro: "99.9%", ent: "99.99%" },
  { feature: "Support level", dev: "Community", pro: "24/7 chat", ent: "Dedicated engineer" },
  { feature: "Custom compliance policies", dev: "â€”", pro: "â€”", ent: "âœ“" },
  { feature: "On-premise deployment", dev: "â€”", pro: "â€”", ent: "âœ“" },
];

const PRICING_FAQS = [
  { q: "Can I switch plans at any time?", a: "Yes. Upgrades take effect immediately, and downgrades apply at the end of your current billing cycle. No penalties or lock-in contracts." },
  { q: "What counts as a 'claim'?", a: "A claim is any single workflow execution, regardless of how many pipeline stages it passes through. Batch operations count as one claim per payload item." },
  { q: "Do you offer volume discounts?", a: "Enterprise plans include custom volume pricing. Contact our sales team for a tailored quote based on your projected throughput." },
  { q: "Is there a free trial for Pro?", a: "Yes â€” all new accounts get 14 days of Professional features free. No credit card required to start." },
];

/* ---------- Isolated Price Component ---------- */
function PriceValue({ tier }: { tier: keyof typeof BASE_PRICING }) {
  const [curr, setCurr] = useState<"USD" | "EUR" | "INR">("USD");
  const [bill, setBill] = useState<"monthly" | "annual">("monthly");

  useEffect(() => {
    const handler = (e: Event) => {
      const { currency, billing } = (e as CustomEvent).detail;
      setCurr(currency);
      setBill(billing);
    };
    window.addEventListener("pricing-update", handler);
    return () => window.removeEventListener("pricing-update", handler);
  }, []);

  const discount = bill === "annual" ? 0.8 : 1.0;
  const base = BASE_PRICING[tier][curr];
  if (base === 0) return "Free";
  const discounted = Math.round(base * discount);
  return `${SYMBOLS[curr]}${discounted.toLocaleString()}`;
}

function PricingPage() {
  const currentBillingRef = useRef<"monthly" | "annual">("monthly");
  const currentCurrencyRef = useRef<"USD" | "EUR" | "INR">("USD");
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const setBilling = (billing: "monthly" | "annual") => {
    currentBillingRef.current = billing;
    window.dispatchEvent(
      new CustomEvent("pricing-update", {
        detail: { currency: currentCurrencyRef.current, billing },
      })
    );
    const monthlyBtn = document.getElementById("billing-monthly");
    const annualBtn = document.getElementById("billing-annual");
    if (monthlyBtn && annualBtn) {
      if (billing === "monthly") {
        monthlyBtn.className = "rounded-full px-4 py-1.5 text-xs font-mono-tech uppercase tracking-wider bg-forsythia text-noir font-semibold cursor-pointer";
        annualBtn.className = "rounded-full px-4 py-1.5 text-xs font-mono-tech uppercase tracking-wider text-arctic/60 hover:text-arctic cursor-pointer";
      } else {
        monthlyBtn.className = "rounded-full px-4 py-1.5 text-xs font-mono-tech uppercase tracking-wider text-arctic/60 hover:text-arctic cursor-pointer";
        annualBtn.className = "rounded-full px-4 py-1.5 text-xs font-mono-tech uppercase tracking-wider bg-forsythia text-noir font-semibold cursor-pointer";
      }
    }
  };

  const setCurrency = (currency: "USD" | "EUR" | "INR") => {
    currentCurrencyRef.current = currency;
    window.dispatchEvent(
      new CustomEvent("pricing-update", {
        detail: { currency, billing: currentBillingRef.current },
      })
    );
    ["USD", "EUR", "INR"].forEach((c) => {
      const btn = document.getElementById(`currency-${c}`);
      if (btn) {
        if (c === currency) {
          btn.className = "rounded-full px-3.5 py-1.5 text-xs font-mono-tech uppercase tracking-wider bg-forsythia text-noir font-semibold cursor-pointer";
        } else {
          btn.className = "rounded-full px-3.5 py-1.5 text-xs font-mono-tech uppercase tracking-wider text-arctic/60 hover:text-arctic cursor-pointer";
        }
      }
    });
  };

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative overflow-hidden py-24 border-b border-white/5 bg-grid">
        <div className="absolute inset-0 bg-radial-glow opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-forsythia/25 bg-forsythia/5 px-3 py-1 font-mono-tech text-[10px] uppercase tracking-wider text-forsythia animate-boot">
            // Simple Billing
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-tight text-arctic md:text-7xl text-gradient animate-boot">
            Flexible Plans. <br />
            Predictable Costs.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-arctic/75 leading-relaxed animate-boot">
            Choose a plan tailored to your transaction throughput. Scale edge virtual machines
            dynamically as operations grow.
          </p>

          {/* Pricing Switchers */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex rounded-full border border-white/10 bg-noir p-1">
              <button
                id="billing-monthly"
                onClick={() => setBilling("monthly")}
                className="rounded-full px-4 py-1.5 text-xs font-mono-tech uppercase tracking-wider bg-forsythia text-noir font-semibold cursor-pointer"
              >
                monthly
              </button>
              <button
                id="billing-annual"
                onClick={() => setBilling("annual")}
                className="rounded-full px-4 py-1.5 text-xs font-mono-tech uppercase tracking-wider text-arctic/60 hover:text-arctic cursor-pointer"
              >
                annual (-20%)
              </button>
            </div>

            <div className="inline-flex rounded-full border border-white/10 bg-noir p-1">
              <button
                id="currency-USD"
                onClick={() => setCurrency("USD")}
                className="rounded-full px-3.5 py-1.5 text-xs font-mono-tech uppercase tracking-wider bg-forsythia text-noir font-semibold cursor-pointer"
              >
                USD
              </button>
              <button
                id="currency-EUR"
                onClick={() => setCurrency("EUR")}
                className="rounded-full px-3.5 py-1.5 text-xs font-mono-tech uppercase tracking-wider text-arctic/60 hover:text-arctic cursor-pointer"
              >
                EUR
              </button>
              <button
                id="currency-INR"
                onClick={() => setCurrency("INR")}
                className="rounded-full px-3.5 py-1.5 text-xs font-mono-tech uppercase tracking-wider text-arctic/60 hover:text-arctic cursor-pointer"
              >
                INR
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Matrix */}
      <section className="py-24 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Developer Card */}
            <div 
              id="card-Developer"
              className="reveal stagger-1 border border-forsythia/80 shadow-[0_0_20px_rgba(255,200,1,0.2)] bg-noir/40 p-8 rounded-2xl flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold text-arctic">Developer</h3>
                <div className="mt-4 text-4xl font-semibold text-forsythia">
                  <PriceValue tier="Developer" />
                </div>
                <p className="mt-4 text-sm text-arctic/60">
                  Ideal for testing pipelines and building local medical agent graphs.
                </p>
                <ul className="mt-6 space-y-2 text-xs text-arctic/70 font-mono-tech">
                  <li>âœ“ 1,000 free claims/mo</li>
                  <li>âœ“ Shared edge compute nodes</li>
                  <li>âœ“ Community support channels</li>
                </ul>
              </div>
              <button className="mt-8 w-full border border-white/10 bg-white/[0.02] hover:border-forsythia hover:text-forsythia rounded-full py-2.5 text-xs uppercase tracking-wider font-mono-tech cursor-pointer transition">
                Start Free
              </button>
            </div>

            {/* Professional Card */}
            <div 
              id="card-Professional"
              className="reveal stagger-2 border border-white/10 bg-noir/40 p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 relative"
            >
              <div className="absolute -top-3 left-8 rounded-full bg-forsythia px-3 py-1 font-mono-tech text-[10px] uppercase tracking-wider text-noir font-semibold">
                Most Popular
              </div>
              <div>
                <h3 className="text-xl font-semibold text-arctic">Professional</h3>
                <div className="mt-4 text-4xl font-semibold text-forsythia">
                  <PriceValue tier="Professional" />
                  <span className="text-xs text-arctic/40 font-mono-tech font-normal"> / mo</span>
                </div>
                <p className="mt-4 text-sm text-arctic/60">
                  Engineered for growing clinics and healthcare teams automate billing workflow.
                </p>
                <ul className="mt-6 space-y-2 text-xs text-arctic/70 font-mono-tech">
                  <li>âœ“ 50,000 claims/mo</li>
                  <li>âœ“ Dedicated edge VM instances</li>
                  <li>âœ“ Business Associate Agreement (BAA)</li>
                  <li>âœ“ 24/7 technical assistance</li>
                </ul>
              </div>
              <button className="mt-8 w-full bg-forsythia text-noir hover:bg-saffron rounded-full py-2.5 text-xs uppercase tracking-wider font-mono-tech cursor-pointer transition font-semibold">
                Upgrade Professional
              </button>
            </div>

            {/* Enterprise Card */}
            <div 
              id="card-Enterprise"
              className="reveal stagger-3 border border-white/10 bg-noir/40 p-8 rounded-2xl flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold text-arctic">Enterprise</h3>
                <div className="mt-4 text-4xl font-semibold text-forsythia">
                  <PriceValue tier="Enterprise" />
                  <span className="text-xs text-arctic/40 font-mono-tech font-normal"> / mo</span>
                </div>
                <p className="mt-4 text-sm text-arctic/60">
                  For large hospitals and networks demanding dedicated regional nodes.
                </p>
                <ul className="mt-6 space-y-2 text-xs text-arctic/70 font-mono-tech">
                  <li>âœ“ Unlimited transaction volume</li>
                  <li>âœ“ Isolated edge hardware VMs</li>
                  <li>âœ“ Custom compliance SLA</li>
                  <li>âœ“ Dedicated solutions engineer</li>
                </ul>
              </div>
              <button className="mt-8 w-full border border-white/10 bg-white/[0.02] hover:border-forsythia hover:text-forsythia rounded-full py-2.5 text-xs uppercase tracking-wider font-mono-tech cursor-pointer transition">
                Contact Enterprise
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-24 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center reveal">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia">// Feature Matrix</div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Compare Plans</h2>
          </div>

          <div className="mt-12 border border-white/10 rounded-2xl overflow-hidden reveal-scale">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5 bg-noir/60">
                  <th className="px-6 py-4 text-left font-mono-tech text-[10px] uppercase tracking-wider text-arctic/50">Feature</th>
                  <th className="px-6 py-4 text-center font-mono-tech text-[10px] uppercase tracking-wider text-arctic/50">Developer</th>
                  <th className="px-6 py-4 text-center font-mono-tech text-[10px] uppercase tracking-wider text-forsythia">Professional</th>
                  <th className="px-6 py-4 text-center font-mono-tech text-[10px] uppercase tracking-wider text-arctic/50">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {FEATURE_COMPARISON.map((row) => (
                  <tr key={row.feature} className="border-b border-white/5 last:border-0 hover:bg-white/[0.015] transition">
                    <td className="px-6 py-3.5 text-arctic/80 font-medium text-xs">{row.feature}</td>
                    <td className="px-6 py-3.5 text-center text-arctic/50 font-mono-tech text-xs">{row.dev}</td>
                    <td className="px-6 py-3.5 text-center text-forsythia font-mono-tech text-xs font-semibold">{row.pro}</td>
                    <td className="px-6 py-3.5 text-center text-arctic/50 font-mono-tech text-xs">{row.ent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Volume Calculator */}
      <section className="py-24 border-b border-white/5">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-12 reveal">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia">// Capacity Estimator</div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Scale Calculator</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-arctic/60">
              Drag the slider to estimate monthly volume usage. Calculations and pricing highlights are performed locally to prevent re-renders.
            </p>
          </div>
          
          <VolumeCalculator />
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-24 border-b border-white/5">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center reveal">
            <div className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-forsythia">// Billing FAQ</div>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Common Questions</h2>
          </div>

          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {PRICING_FAQS.map((f, i) => {
              const isOpen = faqOpen === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setFaqOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-medium text-arctic hover:text-forsythia transition-colors">{f.q}</span>
                    <span className={`shrink-0 text-forsythia transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-400 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="min-h-0 overflow-hidden">
                      <p className="pb-6 pr-10 text-sm text-arctic/70 leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="reveal-scale gradient-border rounded-2xl bg-gradient-to-b from-[#12222d] to-noir p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-radial-glow opacity-40 pointer-events-none" />
            <div className="relative z-10">
              <div className="font-mono-tech text-[11px] uppercase tracking-wider text-saffron mb-4">// Enterprise</div>
              <h2 className="text-3xl font-semibold md:text-5xl text-arctic">
                Need a <span className="text-gradient">custom solution</span>?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-sm text-arctic/60 leading-relaxed">
                Our enterprise team will design a tailored deployment plan with dedicated 
                edge infrastructure, custom SLAs, and on-premise options for your organization.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <CtaButton to="/">Talk to Sales</CtaButton>
                <CtaButton variant="ghost" to="/security">Security Overview</CtaButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

/* ---------- Localized Volume Calculator Component ---------- */
function VolumeCalculator() {
  const [claims, setClaims] = useState(10000);
  const costTextRef = useRef<HTMLDivElement>(null);

  const calculateCost = (val: number) => {
    const rawCost = val <= 1000 ? 0 : 50 + (val - 1000) * 0.004;
    return `$${Math.round(rawCost).toLocaleString()}`;
  };

  const updateCardHighlight = (val: number) => {
    const devCard = document.getElementById("card-Developer");
    const profCard = document.getElementById("card-Professional");
    const entCard = document.getElementById("card-Enterprise");
    
    [devCard, profCard, entCard].forEach((c) => {
      if (c) {
        c.style.borderColor = "";
        c.style.boxShadow = "";
      }
    });

    const highlight = (card: HTMLElement | null) => {
      if (card) {
        card.style.borderColor = "rgba(255, 200, 1, 0.8)";
        card.style.boxShadow = "0 0 20px rgba(255, 200, 1, 0.2)";
      }
    };

    if (val <= 10000) highlight(devCard);
    else if (val <= 50000) highlight(profCard);
    else highlight(entCard);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    setClaims(val);
    updateCardHighlight(val);
    if (costTextRef.current) {
      costTextRef.current.innerText = calculateCost(val);
    }
  };

  return (
    <div className="reveal-scale border border-white/10 bg-noir/50 p-8 rounded-2xl backdrop-blur max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-forsythia/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="flex flex-col gap-6 relative z-10">
        <div>
          <div className="flex items-center justify-between text-xs font-mono-tech text-arctic/50 uppercase tracking-wider mb-2">
            <span>Claims processed / mo</span>
            <span className="text-forsythia font-bold text-sm">{claims.toLocaleString()} claims</span>
          </div>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={claims}
            onChange={handleSliderChange}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-forsythia"
          />
        </div>

        <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-2">
          <div>
            <div className="text-[10px] text-arctic/40 font-mono-tech uppercase">ESTIMATED RUNTIME COST</div>
            <div 
              ref={costTextRef} 
              className="text-4xl font-semibold text-forsythia mt-1 font-mono"
            >
              {calculateCost(claims)}
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-arctic/40 font-mono-tech uppercase">VM RUNTIME ENVIRONMENT</div>
            <div className="text-sm font-semibold text-saffron mt-1 uppercase font-mono-tech">
              {claims <= 25000 ? "Edge Shared VM" : "Edge Dedicated VM"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
