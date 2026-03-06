'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <header className="sticky top-0 z-[100] flex items-center justify-between px-6 md:px-16 py-6 transition-all duration-300 ease-in-out">
            {/* Logo */}
            <Link href="/" className="text-3xl font-bold tracking-tighter hover:text-semilight transition-colors z-[110]">
                jaykus<span className="text-semilight">.</span>
            </Link>

            <nav>
                {/* Mobile Toggle Button */}
                <button 
                    className="md:hidden text-3xl z-[110] relative focus:outline-none p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                {/* Navigation Links Overlay */}
                <div className={`
                    fixed inset-0 z-[105] flex flex-col items-center justify-center transition-all duration-500 ease-in-out
                    /* Mobile Styles: Solid Background & Blur */
                    bg-dark/95 backdrop-blur-xl md:backdrop-blur-none
                    /* Desktop Reset: Back to normal flow */
                    md:static md:flex-row md:bg-transparent md:translate-x-0 md:h-auto md:w-auto
                    ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 md:opacity-100'}
                `}>
                    <ul className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 text-2xl md:text-lg">
                        {["home", "about", "projects", "contact"].map((item) => (
                            <li key={item} className="overflow-hidden">
                                <Link
                                    href={item === "home" ? "/" : `/${item}`}
                                    onClick={() => setIsOpen(false)}
                                    className="capitalize block hover:text-semilight transition-all duration-300 border-b-2 border-transparent hover:border-semilight py-1"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    
                    {/* Social links visible only on mobile menu for extra utility */}
                    <div className="md:hidden mt-12 flex space-x-6 opacity-60">
                        <span className="text-sm uppercase tracking-widest">Connect with me</span>
                    </div>
                </div>
            </nav>

            {/* Backdrop Dimmer for Desktop (Optional, but looks pro) */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/20 z-[102] md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </header>
    );
}