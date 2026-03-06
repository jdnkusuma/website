import Link from "next/link";
import { Linkedin, Instagram, Youtube, Github, Mail } from "lucide-react";

const SOCIAL_LINKS = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jayden-kusuma-81670b238/', icon: Linkedin },
    { name: 'Instagram', href: 'https://www.instagram.com/jayden.kusuma/', icon: Instagram },
    { name: 'YouTube', href: 'https://www.youtube.com/@jayden-the-kus-kus', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/jdnkusuma', icon: Github },
];

export default function Footer() {
    return (
        <footer className="w-full bg-dark text-light border-t border-mid/20 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-8 md:px-16">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <Link href="/" className="text-4xl font-black tracking-tighter hover:text-semilight transition-colors">
                            jaykus<span className="text-semilight">.</span>
                        </Link>
                        <p className="max-w-xs text-sm opacity-60 font-light">
                            Tech enthusiast & musician building digital experiences.
                        </p>
                    </div>

                    {/* Social Icons - Clean Version */}
                    <div className="flex flex-wrap gap-4">
                        {SOCIAL_LINKS.map((social) => {
                            const Icon = social.icon; // Capitalize to use as a component
                            return (
                                <Link 
                                    key={social.name}
                                    href={social.href} 
                                    target="_blank" 
                                    className="p-3 rounded-2xl bg-mid/5 border border-mid/10 text-mid hover:bg-mid hover:text-white hover:border-transparent transition-all duration-300 group"
                                    aria-label={social.name}
                                >
                                    <Icon size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-mid/10 flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-[0.3em] opacity-30">
                    <p>© 2025 JAYDEN KUSUMA</p>
                    <p>ELITE Vibe Coder</p>
                </div>
            </div>
        </footer>
    );
}