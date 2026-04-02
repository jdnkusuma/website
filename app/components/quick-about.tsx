export default function QuickAbout() {
    return (
        <section className="w-full max-w-7xl px-8 md:px-24 my-32 animate-fade-in">
            <div className="border-l-4 border-semilight pl-6 md:pl-12">
                <h2 className="text-7xl md:text-[10rem] font-black mb-10 tracking-tighter leading-none opacity-20">
                    tech<span className="text-mid">&</span>music
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                    <p className="text-xl md:text-3xl font-medium leading-relaxed">
                        I&apos;m a software enthusiast and musician. I enjoy exploring new software, staying updated to recent tech news (thanks fireship) and 
                        <span className="text-semilight"> play music</span>. 
                        Video games, websites, mobile applications, I try to build everything I have an interest in.
                    </p>
                    <p className="text-lg md:text-2xl opacity-80 font-light flex items-end">
                        This website functions as my digital journal and portfolio, my space for showcasing my 
                        projects.
                    </p>
                </div>
            </div>
        </section>
    );
}