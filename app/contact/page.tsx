export default function Contact () {
    return (
        <section className="bg-semilight text-mid flex flex-col p-8 md:p-24">
            <h2 className="text-6xl md:text-9xl font-bold mb-4">contact</h2>
            <div className="text-lg md:text-3xl space-y-6 mb-24">
                <p>for inquiries, services, or opportunities, email to
                    <a href="mailto:jdnkusuma@gmail.com" className="mx-1 underline hover:text-semilight transition-all duration-500">
                         jdnkusuma@gmail.com
                    </a>
                    <br/>
                    social calls accepted as well.
                </p>
            </div>
        </section>
    );
}