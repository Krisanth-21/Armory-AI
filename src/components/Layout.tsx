import { useState, useEffect, useRef, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

import { SearchIcon, XMarkIcon, ChevronUpIcon, ChevronUpSolidIcon } from "./Svgs";

export { SearchIcon, XMarkIcon, ChevronUpIcon, ChevronUpSolidIcon };

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2 ${className}`}>
      <span className="font-mono-tech text-sm font-semibold tracking-[0.18em] text-arctic">
        ARMORY
      </span>
    </Link>
  );
}

/* ---------- Buttons ---------- */
export function CtaButton({
  children,
  full,
  variant = "primary",
  to = "/docs",
}: {
  children: ReactNode;
  full?: boolean;
  variant?: "primary" | "ghost";
  to?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-mono-tech text-xs uppercase tracking-wider transition-all duration-200 ease-out cursor-pointer";
  const v =
    variant === "primary"
      ? "bg-forsythia text-noir hover:bg-saffron hover:scale-[1.02]"
      : "border border-white/15 text-arctic hover:border-forsythia hover:text-forsythia";
  return (
    <Link to={to as any} className={`${base} ${v} px-5 py-2.5 ${full ? "w-full" : ""}`}>
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}

/* ---------- Scroll Reveal Hook ---------- */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/* ---------- Global Layout Items ---------- */
const NAV_ITEMS = [
  { name: "Product", to: "/product" },
  { name: "Security", to: "/security" },
  { name: "API Reference", to: "/docs" },
  { name: "Pricing", to: "/pricing" },
  { name: "About", to: "/about" },
  { name: "Changelog", to: "/changelog" },
];

const FOOTER_COLS = [
  {
    h: "Platform",
    l: [
      { n: "Product Primitives", t: "/product" },
      { n: "Security Auditing", t: "/security" },
      { n: "Pricing & Calculator", t: "/pricing" },
      { n: "API Docs & Sandbox", t: "/docs" },
    ],
  },
  { h: "Company", l: [{ n: "About Us", t: "/about" }, { n: "Changelog", t: "/changelog" }, { n: "Careers", t: "/" }, { n: "Contact", t: "/" }] },
  { h: "Resources", l: [{ n: "Documentation", t: "/docs" }, { n: "System Status", t: "/" }, { n: "Compliance Certs", t: "/security" }] },
  { h: "Legal", l: [{ n: "Privacy Policy", t: "/" }, { n: "Terms of Service", t: "/" }, { n: "HIPAA BAA Policy", t: "/" }] },
];

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const scrollProgressRef = useRef<HTMLDivElement | null>(null);

  // Activate scroll-reveal observer
  useScrollReveal();

  useEffect(() => {
    document.body.style.overflow = (open || searchOpen) ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, searchOpen]);

  // Handle Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Back to top scroll listener + scroll progress
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      // Update scroll progress bar
      if (scrollProgressRef.current) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        scrollProgressRef.current.style.width = `${progress}%`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const searchResults = [
    { title: "AI Strategy (FAQ)", href: "/#faq", desc: "Our platform's strategic model alignment and data handling." },
    { title: "Custom Agents (Product)", href: "/product", desc: "Drag-drop reasoning graphs chaining tools, models, and humans." },
    { title: "Process Automation (Pricing)", href: "/pricing", desc: "Pricing matrix and plans for configuring your edge network." },
    { title: "API Reference (Docs)", href: "/docs", desc: "Sitemap, SDK usage parameters, and shell testing." },
    { title: "HIPAA Security Standards", href: "/security", desc: "Zero-trust encryption models, logs, and redaction features." },
    { title: "About ARMORY", href: "/about", desc: "Our mission, team, and the story behind the platform." },
    { title: "Changelog", href: "/changelog", desc: "Latest platform updates, features, and release notes." },
  ].filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0c1a24] text-arctic select-none flex flex-col justify-between">
      {/* Scroll Progress Bar */}
      <div ref={scrollProgressRef} className="scroll-progress" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-noir/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Logo />
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.to as any}
                activeProps={{ className: "text-forsythia" }}
                inactiveProps={{ className: "text-arctic/70 hover:text-forsythia" }}
                className="font-mono-tech text-xs uppercase tracking-wider transition-colors duration-150 ease-out"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 font-mono-tech text-[10px] uppercase tracking-wider text-arctic/60 transition-colors hover:border-forsythia hover:text-forsythia cursor-pointer"
            >
              <SearchIcon className="h-3.5 w-3.5 text-forsythia" />
              <span>Search</span>
              <kbd className="ml-1 rounded bg-white/5 px-1.5 py-0.5 text-[9px] text-arctic/40">Ctrl+K</kbd>
            </button>
            <CtaButton>Build a Workflow</CtaButton>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Open Search"
              className="rounded p-2 text-arctic/70 hover:text-forsythia cursor-pointer"
            >
              <SearchIcon className="h-5 w-5 text-forsythia" />
            </button>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative h-9 w-9"
            >
              <span
                className={`absolute left-1.5 right-1.5 top-3.5 h-0.5 bg-arctic transition-transform duration-300 ease-in-out ${
                  open ? "translate-y-1 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-1.5 right-1.5 top-5 h-0.5 bg-arctic transition-transform duration-300 ease-in-out ${
                  open ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
        
        {/* Mobile drawer */}
        <div
          className={`lg:hidden ${open ? "visible" : "invisible"} transition-[visibility] duration-300`}
          aria-hidden={!open}
        >
          <div
            className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="min-h-0">
              <div className="space-y-1 border-t border-white/5 bg-noir px-6 py-6">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to as any}
                    onClick={() => setOpen(false)}
                    className="block font-mono-tech text-sm uppercase tracking-wider text-arctic/80 py-3 hover:text-forsythia"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-3">
                  <button
                    onClick={() => {
                      setOpen(false);
                      setSearchOpen(true);
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] py-2.5 font-mono-tech text-xs uppercase tracking-wider text-arctic/80"
                  >
                    <SearchIcon className="h-4 w-4 text-forsythia" />
                    <span>Search Platform</span>
                  </button>
                  <CtaButton full>Build a Workflow</CtaButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Command Palette Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-noir/80 p-4 pt-[15vh] backdrop-blur-md">
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#12222d] shadow-2xl animate-boot">
            <div className="flex items-center gap-3 border-b border-white/5 px-4 py-3">
              <SearchIcon className="h-4 w-4 text-forsythia" />
              <input
                autoFocus
                type="text"
                placeholder="Search command palette... (Esc to exit)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-arctic placeholder-arctic/40 outline-none"
              />
              <button 
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                className="rounded p-1 text-arctic/60 transition hover:bg-white/5 hover:text-arctic cursor-pointer"
              >
                <XMarkIcon className="h-4 w-4 text-saffron" />
              </button>
            </div>
            
            <div className="max-h-[300px] overflow-y-auto p-2">
              {searchResults.length > 0 ? (
                <div className="space-y-1">
                  {searchResults.map((res) => (
                    <Link
                      key={res.title}
                      to={res.href as any}
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="block rounded-lg px-3 py-2.5 transition hover:bg-white/[0.03] group"
                    >
                      <div className="flex items-center justify-between text-xs font-semibold text-arctic group-hover:text-forsythia">
                        <span>{res.title}</span>
                        <span className="font-mono-tech text-[10px] text-saffron">Open →</span>
                      </div>
                      <div className="mt-0.5 text-xs text-arctic/60">{res.desc}</div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-6 text-center text-xs text-arctic/40">
                  No commands found matching "{searchQuery}"
                </div>
              )}
            </div>
            <div className="flex items-center justify-between border-t border-white/5 bg-noir/30 px-4 py-2 font-mono-tech text-[10px] text-arctic/40">
              <span>Type keyword to search sections</span>
              <span>ESC to close</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Body */}
      <main className="flex-1 w-full bg-[#0c1a24]">
        {children}
      </main>

      {/* Reusable Footer */}
      <footer className="bg-noir pt-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(4,1fr)]">
            <div>
  
              <p className="mt-4 max-w-xs text-sm text-arctic/60">
                ARMORY is the AI automation platform engineered for the world's
                most demanding enterprise ecosystems.
              </p>
              <div className="mt-6 flex items-center gap-2 font-mono-tech text-[11px] uppercase tracking-wider text-arctic/40">
                <span className="h-1.5 w-1.5 rounded-full bg-forsythia animate-pulse-dot" />
                All systems operational
              </div>
            </div>
            {FOOTER_COLS.map((col) => (
              <div key={col.h}>
                <div className="font-mono-tech text-[11px] uppercase tracking-wider text-forsythia">
                  {col.h}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-arctic/70">
                  {col.l.map((i) => (
                    <li key={i.n}>
                      <Link
                        to={i.t as any}
                        className="transition-colors duration-150 hover:text-forsythia"
                      >
                        {i.n}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 py-6 md:flex-row md:items-center">
            <div className="font-mono-tech text-[11px] uppercase tracking-wider text-arctic/40">
              © 2026 ARMORY Systems Inc. · All rights reserved.
            </div>
            <div className="font-mono-tech text-[11px] uppercase tracking-wider text-arctic/40">
              v4.2.1 · build #28104
            </div>
          </div>
        </div>
        
        {/* Bold logomark */}
        <div aria-hidden className="select-none overflow-hidden pt-4 leading-none">
          <div
            className="whitespace-nowrap text-center font-mono-tech font-semibold tracking-tighter text-forsythia/90"
            style={{ fontSize: "clamp(72px, 18vw, 240px)" }}
          >
            ARMORY
          </div>
        </div>
      </footer>

      {/* Floating scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-noir/90 text-forsythia shadow-2xl backdrop-blur-md transition-all duration-200 hover:border-forsythia hover:scale-110 cursor-pointer animate-boot"
        >
          {isHovered ? (
            <ChevronUpSolidIcon className="h-5 w-5 text-saffron" />
          ) : (
            <ChevronUpIcon className="h-5 w-5 text-forsythia" />
          )}
        </button>
      )}
    </div>
  );
}
