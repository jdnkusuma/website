import Link from 'next/link';
export default function Hero() {
    return (
        <section className="flex">
            <div className="text-left p-4 md:p-24 mt-8">
                <h1 className="text-6xl md:text-9xl font-bold mb-4">hello world</h1>
                <p className="text-lg mb-8">this is the website made by and for jayden kusuma. </p>
                <Link href="/get-started" className="bg-mid hover:bg-semilight text-light hover:text-dark font-bold py-4 px-8 rounded transition-all duration-500 w-full text-center block">
                    learn more
                </Link>
            </div>
        </section>
    );
}