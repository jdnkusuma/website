'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-dark text-light overflow-hidden px-6">
      {/* Massive Background Watermark */}
      <h1 className="text-[15rem] md:text-[30rem] font-black tracking-tighter leading-none opacity-5 absolute select-none pointer-events-none uppercase text-red-500/20">
        CRASH
      </h1>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-6 px-3 py-1 border border-mid/30 text-mid font-mono text-[10px] uppercase tracking-[0.4em]">
          Exception Caught // {error.digest || "RUNTIME_ERR"}
        </div>

        <h2 className="text-5xl md:text-8xl font-bold tracking-tight mb-4">
          something <span className="text-semilight">broke.</span>
        </h2>
        
        <p className="text-xl md:text-2xl font-light opacity-60 mb-12 max-w-lg leading-relaxed">
          An unexpected error occurred while executing the request. The system is still stable, but this page isn't.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={() => reset()}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-semilight text-dark font-black uppercase tracking-widest hover:bg-white transition-all duration-300"
          >
            Try to Recover
            <span className="group-hover:rotate-180 transition-transform duration-500">↻</span>
          </button>

          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-8 py-4 border border-mid/30 text-semilight font-black uppercase tracking-widest hover:bg-mid/10 transition-all duration-300"
          >
            Emergency Exit
          </Link>
        </div>
      </div>

      {/* Technical Footer Decoration */}
      <div className="absolute bottom-10 right-10 opacity-20 hidden md:block text-right">
          <div className="font-mono text-[10px] tracking-[0.3em] uppercase">
              <p>Stack trace logged to console</p>
              <div className="h-[1px] w-full bg-light/30 my-2" />
              <p className="text-semilight">Jaykus.Recovery.Protocol</p>
          </div>
      </div>
    </main>
  )
}