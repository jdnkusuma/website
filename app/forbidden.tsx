import Link from 'next/link'

export default function Forbidden() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-dark text-light overflow-hidden">
      {/* Massive Background Watermark */}
      <h1 className="text-[18rem] md:text-[35rem] font-black tracking-tighter leading-none opacity-5 absolute select-none pointer-events-none uppercase text-red-500/20">
        HALT
      </h1>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div className="mb-6 px-3 py-1 border border-red-500/50 text-red-500 font-mono text-xs uppercase tracking-[0.3em] animate-pulse">
          Access Denied // 403
        </div>

        <h2 className="text-5xl md:text-8xl font-bold tracking-tight mb-4">
          restricted <span className="text-semilight">area.</span>
        </h2>
        
        <p className="text-xl md:text-2xl font-light opacity-60 mb-12 max-w-md leading-relaxed">
          You are not authorized to access this resource. Stop trying to peek behind the curtain.
        </p>

        <Link 
          href="/" 
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-mid/30 text-semilight font-black uppercase tracking-widest hover:bg-semilight hover:text-dark transition-all duration-500"
        >
          Back to Safety
          <span className="group-hover:translate-x-2 transition-transform duration-500 text-2xl">→</span>
        </Link>
      </div>

      {/* Security Metadata Decoration */}
      <div className="absolute bottom-10 left-10 opacity-20 hidden md:block">
          <div className="flex flex-col items-start gap-2 font-mono text-[10px] tracking-[0.5em] uppercase text-red-500">
              <span>Security Protocol: active</span>
              <div className="h-[1px] w-24 bg-red-500/50" />
              <span>Unauthorized Attempt Logged</span>
          </div>
      </div>
    </main>
  )
}