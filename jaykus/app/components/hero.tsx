import Link from 'next/link';
export default function Hero() {
    return (
        <section className="flex">
            <div className="text-left p-4 md:p-24 mt-8">
                <h1 className="text-6xl md:text-9xl font-bold mb-4">pleasant greetings friends</h1>
                <p className="text-lg mb-8">thank you for taking the time to view my humbly created website.</p>
                <Link href="/get-started" className="bg-mid hover:bg-semilight text-light hover:text-dark font-bold py-4 px-8 rounded transition-all duration-500 w-full text-center block">
                    learn more
                </Link>
            </div>
        </section>
    );
}