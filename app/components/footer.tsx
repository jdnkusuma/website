import Link from "next/link";
import { 
    Linkedin, 
    Instagram, 
    Youtube, 
    Github, 
    Music, // For TikTok
    LucideIcon 
} from "lucide-react";

interface SocialLink {
    name: string;
    href: string;
    icon: LucideIcon;
}

const SOCIAL_LINKS: SocialLink[] = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jayden-kusuma-81670b238/', icon: Linkedin },
    { name: 'Instagram', href: 'https://www.instagram.com/jayden.kusuma/', icon: Instagram },
    { name: 'YouTube', href: 'https://www.youtube.com/@jayden-the-kus-kus', icon: Youtube },
    { name: 'TikTok', href: 'https://www.tiktok.com/@jayden.kuskus', icon: Music },
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
                        <p className="max-w-xs text-sm opacity-60 font-light leading-relaxed">
                            Tech enthusiast & musician building digital experiences.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex flex-wrap gap-4">
                        {SOCIAL_LINKS.map((social) => {
                            const Icon = social.icon;
                            return (
                                <Link 
                                    key={social.name}
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-2xl bg-mid/5 border border-mid/10 text-mid hover:bg-mid hover:text-white hover:border-transparent transition-all duration-300 group"
                                    aria-label={social.name}
                                >
                                    <Icon size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Legal */}
                <div className="mt-16 pt-8 border-t border-mid/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em]">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 opacity-30">
                        <p>© 2026 JAYDEN KUSUMA</p>
                        <p className="hidden md:block text-[8px] opacity-50">|</p>
                        <p>ELITE Vibe Coder</p>
                    </div>

                    <div className="flex gap-6 opacity-40 hover:opacity-100 transition-opacity">
                        <Link href="/privacy-policy" className="hover:text-semilight transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="hover:text-semilight transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}