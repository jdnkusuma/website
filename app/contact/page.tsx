'use client'
import { useState } from 'react';
import { Mail, Send, MessageSquare, ArrowRight } from 'lucide-react';

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        
        // REPLACE THIS URL with your Formspree endpoint
        const response = await fetch("https://formspree.io/f/mwvrkklo", {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            setStatus("success");
            (e.target as HTMLFormElement).reset();
        } else {
            setStatus("error");
        }
    }

    return (
        <section className="min-h-screen bg-dark text-light pb-24">
            {/* Background Branding */}
            <div className="relative px-8 md:px-24 pt-20 mb-16">
                <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter leading-none opacity-10 absolute -top-10 left-8 select-none">
                    CONNECT
                </h1>
                <h2 className="text-6xl md:text-9xl font-bold relative z-10 pt-10 mb-8">
                    get in <span className="text-semilight">touch.</span>
                </h2>
                <p className="text-xl md:text-3xl max-w-2xl opacity-70 font-light">
                    For inquiries, services, or opportunities. Social calls are accepted as well—just don&apos;t be weird about it.
                </p>
            </div>

            <div className="px-8 md:px-24 grid lg:grid-cols-2 gap-16 items-start">
                
                {/* Left Side: Info */}
                <div className="space-y-12">
                    <div className="group">
                        <span className="text-xs uppercase tracking-[0.3em] text-mid font-bold mb-4 block">Email Me Directly</span>
                        <a 
                            href="mailto:jdnkusuma@gmail.com" 
                            className="text-2xl md:text-4xl font-medium hover:text-semilight transition-colors break-words"
                        >
                            jdnkusuma@gmail.com
                        </a>
                    </div>

                    <div className="p-8 rounded-[2rem] bg-mid/5 border border-mid/20">
                        <MessageSquare className="text-semilight mb-4" size={32} />
                        <h3 className="text-2xl font-bold mb-2">Project Inquiries</h3>
                        <p className="opacity-60">
                            Looking for a developer or musician? Briefly describe your project and budget. 
                            I usually respond within 48 hours unless I&apos;m stuck in a practice room.
                        </p>
                    </div>
                </div>

                {/* Right Side: The Form */}
                <form 
                    onSubmit={handleSubmit}
                    className="bg-light text-dark p-8 md:p-12 rounded-[2.5rem] space-y-6 shadow-2xl"
                >
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-xs uppercase font-bold tracking-widest opacity-50 ml-2">Name</label>
                        <input 
                            type="text" name="name" id="name" required
                            className="w-full bg-dark/5 border-b-2 border-dark/10 p-4 focus:border-mid outline-none transition-all rounded-xl"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-xs uppercase font-bold tracking-widest opacity-50 ml-2">Email Address</label>
                        <input 
                            type="email" name="email" id="email" required
                            className="w-full bg-dark/5 border-b-2 border-dark/10 p-4 focus:border-mid outline-none transition-all rounded-xl"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-xs uppercase font-bold tracking-widest opacity-50 ml-2">Message</label>
                        <textarea 
                            name="message" id="message" rows={4} required
                            className="w-full bg-dark/5 border-b-2 border-dark/10 p-4 focus:border-mid outline-none transition-all rounded-xl resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <button 
                        type="submit" 
                        disabled={status === "loading"}
                        className="w-full bg-dark text-light py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-mid transition-all active:scale-95 disabled:opacity-50"
                    >
                        {status === "loading" ? "Sending..." : "Send Message"}
                        <Send size={18} />
                    </button>

                    {status === "success" && (
                        <p className="text-center text-green-600 font-bold animate-fade-in">
                            Message sent! I&apos;ll get back to you soon.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="text-center text-red-500 font-bold animate-fade-in">
                            Something went wrong. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}