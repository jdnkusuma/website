import Link from 'next/link';

export default function Hero() {
    return (
        <section className="min-h-[80vh] flex items-center px-6 md:px-24">
            <div className="max-w-4xl animate-fade-in">
                <h1 className="text-7xl md:text-9xl font-black mb-6 leading-tight">
                    hello <br/> <span className="text-semilight">world</span>
                </h1>
                <p className="text-xl md:text-2xl font-light mb-10 max-w-2xl opacity-90">
                    I'm <span className="font-bold border-b-2 border-mid">Jayden Kusuma</span>. 
                    Building digital experiences and crafting melodies from my bedroom studio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/projects" className="bg-mid hover:bg-semilight text-light hover:text-dark font-bold py-4 px-10 rounded-full transition-all duration-300 text-center">
                        view projects
                    </Link>
                    <Link href="/about" className="border-2 border-mid hover:bg-mid/20 py-4 px-10 rounded-full transition-all duration-300 text-center">
                        more about me
                    </Link>
                </div>
            </div>
        </section>
    );
}