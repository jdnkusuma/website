'use client'
import Link from 'next/link'
export default function Header() {
    const menuToggle = () => {
        const mobileMenu = document.getElementsByClassName("absolute")[0];
        if (mobileMenu) {
            mobileMenu.classList.toggle("translate-x-full");
            mobileMenu.classList.toggle("translate-x-0");
        }
    };
    return (
    <header className="sticky top-0 flex items-center justify-between px-8 py-4 bg-dark text-light transition-all duration-500 ease-in-out">
        <Link href="/"className="text-3xl font-semibold">jaykus</Link>
        <nav>
            <div className="md:hidden">
                <button
                    className="text-2xl focus:outline-none"
                    onClick={menuToggle}
                >
                    ☰
                </button>
                    <div className="absolute w-full h-screen top-16 right-0 bg-dark text-light p-4 shadow-lg transition-all duration-500 transform translate-x-full">
                        <ul className="flex flex-col space-y-4 text-xl text-center">
                            {["home", "about", "contact", "projects"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === "home" ? "/" : `/pages/${item}`}
                                        className="block py-2 bg-dark hover:bg-light text-light hover:text-dark transition-all duration-300"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
            </div>
            <ul className="hidden md:flex space-x-4 text-2xl">
                {["home", "about", "contact", "projects"].map((item) => (
                    <li key={item}>
                        <Link
                            href={item === "home" ? "/" : `/pages/${item}`}
                            className="hover:text-mid transition-all duration-300"
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
        </header>
    );
}