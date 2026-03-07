export const metadata = {
  title: 'Terms of Service',
  description: 'The terms and conditions governing your use of this website.',
  robots: {
    index: false, // You generally don't want your legal pages competing for SEO rank
    follow: true,
  },
}
export default function TermsOfService() {
    return (
        <section className="min-h-screen bg-dark text-light pb-24">
            {/* Header */}
            <div className="relative px-8 md:px-24 pt-20 mb-32">
                <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter leading-none opacity-10 absolute -top-10 left-8 select-none uppercase">
                    Legal
                </h1>
                <h2 className="text-6xl md:text-9xl font-bold relative z-10 pt-10">
                    terms of <span className="text-semilight">service.</span>
                </h2>
            </div>

            <div className="px-8 md:px-24 max-w-4xl space-y-16 text-lg md:text-xl opacity-80 font-light leading-relaxed">
                <div>
                    <h3 className="text-2xl font-bold text-semilight uppercase tracking-widest mb-4">01. Acceptance of Terms</h3>
                    <p>
                        By accessing or using this website (jaykus.com), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-semilight uppercase tracking-widest mb-4">02. Intellectual Property</h3>
                    <p>
                        The content on this website—including code, design, text, and transcriptions—is the property of Jayden Kusuma unless otherwise stated. You may not reproduce, distribute, or create derivative works from this content without express written permission. 
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-semilight uppercase tracking-widest mb-4">03. Use License</h3>
                    <p>
                        Permission is granted to temporarily view the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not use the materials for any commercial purpose or public display.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-semilight uppercase tracking-widest mb-4">04. Disclaimer of Liability</h3>
                    <p>
                        The materials on this website are provided on an &apos;as is&apos; basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties of merchantability or fitness for a particular purpose. Further, I do not warrant the accuracy or reliability of the materials on this site.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-semilight uppercase tracking-widest mb-4">05. Governing Law</h3>
                    <p>
                        Any claim relating to this website shall be governed by the laws of the Republic of Indonesia without regard to its conflict of law provisions.
                    </p>
                </div>

                <div className="pt-12 border-t border-mid/20">
                    <p className="text-sm opacity-50 uppercase tracking-widest">
                        Last Modified: March 2026 — Jakarta, ID
                    </p>
                </div>
            </div>
        </section>
    );
}