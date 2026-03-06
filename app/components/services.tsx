export default function Services() {
    return (
        <section className="w-full max-w-7xl px-8 md:px-24 my-32">
            <h2 className="text-7xl md:text-[10rem] font-black mb-12 tracking-tighter leading-none text-right opacity-20">
                services
            </h2>
            
            <div className="bg-mid/10 border border-mid/30 p-10 md:p-20 rounded-[2rem] hover:bg-mid/20 transition-all duration-500 group">
                <div className="max-w-3xl">
                    <h3 className="text-4xl md:text-6xl font-bold mb-6 group-hover:text-semilight transition-colors">
                        need a website?
                    </h3>
                    <p className="text-xl md:text-3xl mb-10 opacity-90">
                        Whether you need a sleek portfolio or a custom application, I&apos;m open for 
                        collaborations and freelance projects. Let&apos;s build something together.
                    </p>
                    
                    <a 
                        href="mailto:your-email@example.com" 
                        className="inline-block bg-semilight text-dark px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform"
                    >
                        get in touch →
                    </a>
                </div>
            </div>
        </section>
    );
}