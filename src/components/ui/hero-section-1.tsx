import React from 'react'
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'

// Compatibility Link wrapper for next/link
const Link = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ href, children, ...props }, ref) => {
    return (
      <a href={href} ref={ref} {...props}>
        {children}
      </a>
    )
  }
)
Link.displayName = 'Link'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSection({ includeHeader = true }: { includeHeader?: boolean } = {}) {
    return (
        <>
            {includeHeader && <HeroHeader />}
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">

                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#link"
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                        <span className="text-foreground text-sm">Introducing Support for AI Models</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                        
                                    <h1
                                        className="mt-8 max-w-4xl mx-auto text-balance text-6xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                        Power your future <br className="hidden sm:inline" />
                                        with <span className="text-forsythia">AI</span><span className="text-saffron">.</span>
                                    </h1>
                                    <p
                                        className="mx-auto mt-8 max-w-2xl text-balance text-lg text-arctic/75 leading-relaxed">
                                        ARMORY orchestrates custom agents, secure data pipelines, and process automation for the most demanding enterprise ecosystems.
                                    </p>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[14px] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base">
                                            <Link href="#link">
                                                <span className="text-nowrap">Start Building</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5">
                                        <Link href="#link">
                                            <span className="text-nowrap">Request a demo</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative mt-8 px-2 sm:mt-12 md:mt-20 mx-auto max-w-5xl">
                                <div className="aspect-[16/9] w-full bg-[#0c1a24]/90 rounded-xl border border-white/10 p-4 font-mono text-left text-xs text-arctic/80 overflow-hidden flex flex-col shadow-2xl">
                                    {/* Top bar with buttons */}
                                    <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
                                        <div className="flex gap-1.5 animate-pulse-dot">
                                            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                                            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                                            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                                        </div>
                                        <div className="text-[10px] text-arctic/40 font-mono-tech tracking-wider uppercase">armory-workflow-agent.sh</div>
                                        <div className="w-10"></div>
                                    </div>
                                    
                                    {/* Dashboard grid showing active nodes and logs */}
                                    <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 flex-1 overflow-hidden">
                                        {/* Sidebar */}
                                        <div className="hidden md:flex flex-col gap-2.5 border-r border-white/5 pr-4 text-[11px] text-arctic/50">
                                            <div className="font-semibold text-forsythia/80 tracking-wide">// AGENTS</div>
                                            <div className="flex items-center gap-2 text-arctic"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>Claims Processor</div>
                                            <div className="flex items-center gap-2">EHR Integrator</div>
                                            <div className="flex items-center gap-2">Compliance Guard</div>
                                            <div className="mt-4 font-semibold text-forsythia/80 tracking-wide">// CONNECTIONS</div>
                                            <div className="text-arctic/60 font-mono-tech text-[10px] uppercase">SOC 2 · HIPAA</div>
                                        </div>
                                        
                                        {/* Terminal outputs */}
                                        <div className="flex flex-col gap-1.5 font-mono text-[11px] overflow-y-auto text-arctic/90">
                                            <div className="text-forsythia/60">armory-runtime:~$ <span className="text-arctic">run-pipeline --config ./care-agent.json</span></div>
                                            <div className="text-emerald-400/80">[INIT] Booting neural compiler v4.2.1 on edge-node-14...</div>
                                            <div className="text-emerald-400/80">[OK] Edge instance verified in region us-east-1 (ping: 12ms)</div>
                                            <div className="text-arctic/40">[EHR] Subscribed to HL7 FHIR claim streams.</div>
                                            <div className="text-saffron/80">[REDACT] Found PHI pattern (Medicare ID) at log #248. Redacting with AES-256...</div>
                                            <div className="text-emerald-400/80">[AGENT] Routing payload to Cigna custom LLM gateway...</div>
                                            <div className="text-arctic/40">[AGENT] Token sequence: 4,096 in / 512 out. Processing in 140ms.</div>
                                            <div className="text-forsythia/80">[SUCCESS] Claim pre-authorized. Auto-routing token returned: auth_83bF2a.</div>
                                            <div className="mt-3 flex items-center gap-3 bg-white/[0.02] border border-white/5 p-3 rounded-lg">
                                                <div className="flex-1">
                                                    <div className="text-[10px] text-arctic/40 font-mono-tech uppercase">Real-time stats</div>
                                                    <div className="text-lg font-semibold text-forsythia mt-0.5">14,280 tps</div>
                                                </div>
                                                <div className="w-px h-8 bg-white/10"></div>
                                                <div className="flex-1">
                                                    <div className="text-[10px] text-arctic/40 font-mono-tech uppercase">P99 Latency</div>
                                                    <div className="text-lg font-semibold text-saffron mt-0.5">42ms</div>
                                                </div>
                                                <div className="w-px h-8 bg-white/10"></div>
                                                <div className="flex-1">
                                                    <div className="text-[10px] text-arctic/40 font-mono-tech uppercase">System Load</div>
                                                    <div className="text-lg font-semibold text-emerald-400 mt-0.5">99.98%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Features', href: '#link' },
    { name: 'Solution', href: '#link' },
    { name: 'Pricing', href: '#link' },
    { name: 'About', href: '#link' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="#">
                                        <span>Login</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden')}>
                                    <Link href="#">
                                        <span>Sign Up</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <Link href="#">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <span className={cn("font-mono-tech text-sm font-semibold tracking-[0.18em] text-arctic", className)}>
            ARMORY
        </span>
    )
}
