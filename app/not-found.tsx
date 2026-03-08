import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-dark text-light overflow-hidden">
      {/* Massive Background Watermark */}
      <h1 className="text-[20rem] md:text-[40rem] font-black tracking-tighter leading-none opacity-5 absolute select-none pointer-events-none uppercase">
        404
      </h1>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tight mb-4">
          lost <span className="text-semilight">link.</span>
        </h2>
        
        <p className="text-xl md:text-2xl font-light opacity-60 mb-12 max-w-md leading-relaxed">
          The path you requested doesn't exist. Stop doing this with my website.
        </p>

        <Link 
          href="/" 
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-mid/30 text-semilight font-black uppercase tracking-widest hover:bg-semilight hover:text-dark transition-all duration-500"
        >
          Return Home
          <span className="group-hover:translate-x-2 transition-transform duration-500 text-2xl">→</span>
        </Link>
      </div>

      {/* Decorative Corner Element */}
      <div className="absolute bottom-10 right-10 opacity-20 hidden md:block">
          <div className="flex flex-col items-end gap-2 font-mono text-[10px] tracking-[0.5em] uppercase">
              <div className="h-[1px] w-24 bg-light/50" />
              <span>Error Code: NULL_POINTER_EXIT</span>
          </div>
      </div>
    </main>
  )
}