'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
    Linkedin, 
    Instagram, 
    Youtube, 
    Github, 
    Music, // Using Music for TikTok as we did in the footer
    LucideIcon 
} from "lucide-react";

// Keeping the data structure consistent with your footer
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

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <header className="sticky top-0 z-[100] w-full bg-dark/80 backdrop-blur-md border-b border-mid/10">
            <div className="flex items-center justify-between px-6 md:px-16 py-6 max-w-7xl mx-auto">
                {/* Logo */}
                <Link 
                    href="/" 
                    className="text-3xl font-bold tracking-tighter hover:text-semilight transition-colors z-[120]"
                    onClick={() => setIsOpen(false)}
                >
                    jaykus<span className="text-semilight">.</span>
                </Link>

                <nav>
                    {/* Mobile Toggle Button */}
                    <button 
                        className="md:hidden text-3xl z-[120] relative focus:outline-none p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>

                    {/* Navigation Links Overlay */}
                    <div className={`
                        fixed inset-0 h-screen w-screen flex flex-col items-center justify-center transition-all duration-500 ease-in-out
                        bg-dark/98 backdrop-blur-2xl
                        ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
                        md:static md:h-auto md:w-auto md:bg-transparent md:backdrop-blur-none md:translate-y-0 md:opacity-100 md:pointer-events-auto
                        z-[115]
                    `}>
                        {/* Main Nav Links */}
                        <ul className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 text-4xl md:text-lg font-bold md:font-medium">
                            {["home", "about", "projects", "blog", "contact"].map((item) => (
                            <li key={item} className="relative group">
                                <Link
                                    href={item === "home" ? "/" : `/${item}`}
                                    onClick={() => setIsOpen(false)}
                                    className="capitalize hover:text-semilight transition-all md:border-b-2 border-transparent hover:border-semilight py-1 px-2 flex items-center gap-1"
                                >
                                    {item}
                                    {item === 'blog' && (
                                        <span className="h-1.5 w-1.5 rounded-full bg-semilight animate-pulse hidden md:block" />
                                    )}
                                </Link>
                            </li>
                        ))}
                        </ul>
                        
                        {/* Social Links - Mobile Only */}
                        <div className="md:hidden mt-20 flex flex-col items-center gap-8">
                            <div className="flex gap-6">
                                {SOCIAL_LINKS.map((social) => {
                                    const SocialIcon = social.icon;
                                    return (
                                        <Link 
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-xl bg-mid/10 text-semilight hover:bg-mid hover:text-white transition-all"
                                            aria-label={social.name}
                                        >
                                            <SocialIcon size={24} strokeWidth={1.5} />
                                        </Link>
                                    );
                                })}
                            </div>
                            <div className="flex flex-col items-center gap-2 opacity-30">
                                <div className="h-[1px] w-12 bg-light/50 mb-2" />
                                <span className="text-[10px] uppercase tracking-[0.5em] font-black">Jakarta, ID</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}