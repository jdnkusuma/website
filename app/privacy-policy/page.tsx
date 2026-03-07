export const metadata = {
  title: 'Privacy Policy',
  description: 'How Jayden Kusuma (Jaykus) handles your data. I only use it to reply to your emails.',
  robots: {
    index: false, // You generally don't want your legal pages competing for SEO rank
    follow: true,
  },
}

export default function PrivacyPolicy() {
    return (
        <section className="min-h-screen bg-dark text-light pb-24">
            {/* Header */}
            <div className="relative px-8 md:px-24 pt-20 mb-32">
                <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter leading-none opacity-10 absolute -top-10 left-8 select-none uppercase">
                    Privacy
                </h1>
                <h2 className="text-6xl md:text-9xl font-bold relative z-10 pt-10">
                    the <span className="text-semilight">fine print.</span>
                </h2>
            </div>

            <div className="px-8 md:px-24 max-w-4xl space-y-16 text-lg md:text-xl opacity-80 font-light leading-relaxed">
                <div>
                    <h3 className="text-2xl font-bold text-semilight uppercase tracking-widest mb-4">01. Data Collection</h3>
                    <p>
                        I used to say there was no data collection. Then I added a contact form. 
                        If you use the form on the <span className="text-white font-medium">Contact</span> page, I collect your 
                        <span className="italic"> name, email address, and whatever message</span> you send me.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-semilight uppercase tracking-widest mb-4">02. Third Parties</h3>
                    <p>
                        I don&apos;t have a database because I have better things to do. Your messages are processed via 
                        <span className="text-white font-medium"> Formspree</span> (or a similar service) and delivered straight to my inbox. 
                        By clicking send, you agree to their privacy terms as well.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-semilight uppercase tracking-widest mb-4">03. Usage</h3>
                    <p>
                        I only use your data to reply to your inquiries. I won&apos;t sell your email to spam bots, 
                        and I won&apos;t put you on a newsletter list because I don&apos;t have one. 
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-semilight uppercase tracking-widest mb-4">04. Cookies</h3>
                    <p>
                        This site is hosted on <span className="text-white font-medium">Vercel</span>. 
                        They might use basic functional cookies to keep the lights on, but I am not personally tracking your 
                        every move across the internet.
                    </p>
                </div>

                <div className="pt-12 border-t border-mid/20">
                    <p className="text-sm opacity-50 uppercase tracking-widest">
                        Last Updated: March 2026 — Jakarta, ID
                    </p>
                </div>
            </div>
        </section>
    );
}