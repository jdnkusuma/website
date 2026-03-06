import Link from "next/link";
import { 
    ArrowUpRight, 
    Code, 
    ExternalLink, 
    Guitar, 
    Search, 
    Gamepad2, 
    Trophy, 
    Terminal, // This was missing from your imports!
    History, 
    Ghost, 
    Zap 
} from "lucide-react";

const PROJECT_DATA = [
    {
        name: "Andra Ramadhan Official",
        role: "Lead Developer",
        description: "Built the official digital home for the legendary Indonesian guitarist of DEWA 19 and Andra & The Backbone.",
        tags: ["Next.js", "Tailwind CSS", "CMS"],
        href: "https://andraramadhan.com",
        icon: Guitar,
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&h=800&auto=format&fit=crop" 
    },
    {
        name: "SapaMarket",
        role: "Co-Founder / Creator",
        description: "A prediction market simulator for local school events. Gained hundreds of unique trades within the first few days of beta launch.",
        tags: ["PWA", "Real-time DB", "Social"],
        href: "https://sapamarket.com",
        icon: Search,
        image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1200&h=800&auto=format&fit=crop"
    },
    {
        name: "Hiendguitar.com",
        role: "Web Manager / Heir",
        description: "Managing the online presence of the largest guitar store in Southeast Asia, specializing in PRS and premium boutique instruments.",
        tags: ["Management", "SEO", "E-commerce"],
        href: "https://hiendguitar.com",
        icon: Guitar,
        image: "https://images.unsplash.com/photo-1550985543-f47f38aeee65?q=80&w=1200&h=800&auto=format&fit=crop"
    },
    {
        name: "USA2INDO",
        role: "Creator / Architect",
        description: "Developed the import platform facilitating millions of dollars in total revenue for online USA to Indonesia commerce.",
        tags: ["Architecture", "Logistics", "FinTech"],
        href: "https://usa2indo.com",
        icon: Code,
        image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1200&h=800&auto=format&fit=crop"
    },
];

const GAME_DATA = [
    { name: "BB-9", icon: Terminal, genre: "Action / Arcade", status: "Published" },
    { name: "Bean's Unreal Stuff", icon: Zap, genre: "Experimental", status: "Published" },
    { name: "Chaos", icon: Ghost, genre: "Action / Chaos", status: "Published" },
    { name: "Helpo Friendo", icon: Trophy, genre: "Puzzle / Jam", status: "Published" },
    { name: "Joined", icon: Zap, genre: "Puzzle", status: "Published" },
    { name: "Rewindable", icon: History, genre: "Mechanic-heavy", status: "Published" },
];

export default function Projects() {
    return (
        <section className="min-h-screen bg-dark text-light pb-32">
            {/* Massive Header Section */}
            <div className="relative px-8 md:px-24 pt-20 mb-32">
                <h1 className="text-8xl md:text-[15rem] font-black tracking-tighter leading-none opacity-10 absolute -top-10 left-8 select-none">
                    PROJECTS
                </h1>
                <h2 className="text-6xl md:text-9xl font-bold relative z-10 pt-10 mb-8">
                    digital <span className="text-semilight">impact.</span>
                </h2>
                <p className="text-xl md:text-2xl max-w-3xl opacity-70 font-light leading-relaxed">
                    Proof that I am indeed somewhat competent in technology. These platforms range from personal passion projects to high-revenue e-commerce ecosystems.
                </p>
            </div>

            {/* Main Projects Grid */}
            <div className="px-8 md:px-24 grid md:grid-cols-2 gap-x-12 gap-y-20">
                {PROJECT_DATA.map((project, index) => {
                    const ProjectIcon = project.icon;
                    return (
                        <div key={index} className="group space-y-6">
                            <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] bg-mid/10 border border-mid/20">
                                <img 
                                    src={project.image} 
                                    alt={`Screenshot of ${project.name}`}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent" />
                                <div className="absolute top-6 left-6 p-4 rounded-full bg-dark/60 backdrop-blur-md border border-light/10 text-semilight">
                                    <ProjectIcon size={20} strokeWidth={1.5}/>
                                </div>
                            </div>

                            <div className="px-2">
                                <div className="flex flex-col gap-1 mb-4">
                                    <span className="text-xs uppercase tracking-[0.3em] text-mid font-bold">{project.role}</span>
                                    <h3 className="text-4xl font-bold tracking-tight">{project.name}</h3>
                                </div>
                                <p className="text-lg opacity-80 leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-mid/20">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full text-xs font-bold bg-semilight text-dark uppercase tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Link 
                                        href={project.href} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="ml-auto flex items-center gap-2 text-sm font-bold text-mid hover:text-light transition-colors"
                                    >
                                        Visit Live <ExternalLink size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Sheet Music Subsection */}
            <div className="mt-40 px-8 md:px-24 border-t border-mid/20 pt-24">
                <div className="max-w-4xl space-y-12">
                    <h2 className="text-6xl font-black text-mid/30 tracking-tight">Sheet Music</h2>
                    
                    {[
                        { name: "Cuphead - Inkwell Isle 1", pdf: "/sheet_music/inkwell-isle-one.pdf", description: "Transcription for advanced piano." },
                    ].map((sheet, index) => (
                        <div key={index} className="grid sm:grid-cols-12 gap-6 items-center bg-mid/5 p-8 rounded-2xl border border-mid/20 hover:bg-mid/10 transition-colors">
                            <div className="sm:col-span-6">
                                <h3 className="text-2xl font-bold">{sheet.name}</h3>
                                <p className="opacity-70 mt-1">{sheet.description}</p>
                            </div>
                            <div className="sm:col-span-6 flex sm:justify-end gap-3">
                                <a
                                    href={sheet.pdf}
                                    download
                                    className="bg-mid hover:bg-semilight text-light hover:text-dark px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2"
                                >
                                    Download PDF <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                    <p className="text-sm opacity-50 font-light mt-8">Note: This section is undergoing big reconstruction. More transcriptions coming soon.</p>
                </div>
            </div>

            {/* Game Dev Section */}
            <div className="mt-40 px-8 md:px-24 border-t border-mid/20 pt-24 pb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <h2 className="text-6xl font-black text-semilight tracking-tight">Game Dev</h2>
                        <p className="text-xl opacity-60 font-light mt-4 italic">
                            &quot;My games look like sh*t. I will not further disclose this.&quot;
                        </p>
                    </div>
                    <Link 
                        href="https://jayden-kusuma.itch.io" 
                        target="_blank"
                        className="flex items-center gap-2 text-mid font-bold hover:text-light transition-colors"
                    >
                        View on Itch.io <ExternalLink size={18} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {GAME_DATA.map((game, index) => {
                        const GameIcon = game.icon;
                        return (
                            <div 
                                key={index} 
                                className="group relative bg-mid/5 border border-mid/20 p-8 rounded-3xl hover:bg-mid/20 hover:border-mid/40 transition-all duration-300"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-dark/40 rounded-xl text-semilight">
                                        <GameIcon size={24} />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-green-500/20 text-green-400 rounded">
                                        {game.status}
                                    </span>
                                </div>
                                
                                <h3 className="text-2xl font-bold mb-1 group-hover:text-semilight transition-colors">
                                    {game.name}
                                </h3>
                                <p className="text-sm opacity-50 mb-6">{game.genre}</p>
                                
                                <Link 
                                    href={`https://jayden-kusuma.itch.io/${game.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    Play Game <ArrowUpRight size={14} />
                                </Link>
                        
                                <div className="absolute bottom-4 right-4 text-[8px] font-mono opacity-10 select-none">
                                    DEV_BUILD_0{index + 1}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 p-6 border border-dashed border-mid/30 rounded-2xl text-center">
                    <p className="text-xs opacity-40 uppercase tracking-[0.2em]">
                        Warning: Visual fidelity is not a priority. Gameplay satisfaction not guaranteed.
                    </p>
                </div>
            </div>
        </section>
    );
}