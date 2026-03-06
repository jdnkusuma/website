import { Music, Code2, Gamepad2, Guitar } from "lucide-react";

export default function About() {
    return (
        <section className="min-h-screen bg-dark text-light pb-24">
            {/* Hero Heading - Overlapping Layout */}
            <div className="relative px-8 md:px-24 pt-20 mb-32">
                <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter leading-none opacity-10 absolute -top-10 left-8 select-none">
                    IDENTITY
                </h1>
                <h2 className="text-6xl md:text-9xl font-bold relative z-10 pt-10">
                    who is <span className="text-semilight">jayden?</span>
                </h2>
            </div>

            {/* Tech & Engineering Section */}
            <div className="px-8 md:px-24 grid md:grid-cols-12 gap-12 mb-40">
                <div className="md:col-span-4 flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-full bg-mid flex items-center justify-center">
                        <Code2 size={24} />
                    </div>
                    <span className="uppercase tracking-[0.3em] text-sm text-mid font-bold">The Engineer</span>
                </div>
                <div className="md:col-span-8 text-xl md:text-3xl font-light space-y-10 leading-relaxed">
                    <p>
                        Hi, I&apos;m Jayden. A software engineer based in <span className="text-semilight font-medium">Jakarta</span>. I have a burning passion for crafting a great CV and appearing somewhat competent.
                    </p>
                    <p className="opacity-80">
                        I have experience in frontend development, though my designs are as beautiful as drying paint. Recently, I&apos;ve been descending into the <span className="italic">backend abyss</span>. 
                    </p>
                    <div className="p-8 border-l-2 border-mid bg-mid/5 italic text-lg md:text-xl opacity-70">
                        &quot;I was once a game developer participating in game jams. My games look like sh*t. I will not further disclose this.&quot;
                    </div>
                </div>
            </div>

            {/* Music Section */}
            <div className="bg-light text-dark py-32 px-8 md:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-6 mb-12">
                        <h2 className="text-6xl md:text-9xl font-black tracking-tighter">MUSIC</h2>
                        <Guitar size={60} className="text-mid hidden md:block" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8 text-lg md:text-2xl font-medium">
                            <p>
                                I play guitar, bass, piano, and drums. I am a decent instrumentalist with <span className="underline decoration-mid decoration-4 text-mid">little musical creativity</span>. I transcribe and arrange while working on creating &quot;listenable&quot; music.
                            </p>
                            <p className="text-base md:text-xl opacity-70 font-normal">
                                I avoid polluting the internet with my visual appearance. I will create more content once I look tolerable.
                            </p>
                        </div>

                        {/* The "Heir" Flex Box */}
                        <div className="bg-dark text-light p-10 rounded-[2rem] shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="flex items-center gap-4 mb-6 text-semilight">
                                <Music size={24} />
                                <span className="uppercase tracking-widest font-bold text-xs">Industry Access</span>
                            </div>
                            <h3 className="text-3xl font-bold mb-4">The Hiendguitar Legacy</h3>
                            <p className="text-lg opacity-80 leading-relaxed mb-6">
                                As the heir to Hiendguitar, I have unlimited access to the local music industry and the top guitars ever made. 
                            </p>
                            <p className="text-sm font-bold border-t border-light/20 pt-6 text-semilight">
                                Criticize my skills all you like, but 99% of you will never hold the instruments I do. 
                                <span className="block mt-2 text-white italic">If you hate the guitars, you&apos;re simply too poor.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}