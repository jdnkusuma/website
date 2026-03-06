export default function QuickAbout() {
    return (
        <section className="w-full max-w-7xl px-8 md:px-24 my-32 animate-fade-in">
            <div className="border-l-4 border-semilight pl-6 md:pl-12">
                <h2 className="text-7xl md:text-[10rem] font-black mb-10 tracking-tighter leading-none opacity-20">
                    tech<span className="text-mid">&</span>music
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                    <p className="text-xl md:text-3xl font-medium leading-relaxed">
                        I&apos;m a tech enthusiast and musician. I enjoy exploring new software and 
                        <span className="text-semilight"> play music</span>. 
                        From video games to betting sites, I build what I imagine.
                    </p>
                    <p className="text-lg md:text-2xl opacity-80 font-light flex items-end">
                        This is my digital journal and portfolio, my space for showcasing my 
                        coding and music projects.
                    </p>
                </div>
            </div>
        </section>
    );
}