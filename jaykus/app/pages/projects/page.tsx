export default function Projects() {
    return (
        <section className="p-8 bg-semilight md:p-24">
            <div>
                <h2 className="text-6xl md:text-9xl text-mid">sheet music</h2>
                <p>this page is undergoing big reconstruction</p>
                <div className="mt-8 space-y-6">
                    {[
                        { name: "Cuphead Inkwell Isle 1", pdf: "/sheet_music/inkwell-isle-one.pdf"},
                    ].map((sheet, index) => (
                        <div key={index} className="flex flex-col items-start space-y-4 md:space-y-0 md:space-x-6">
                            <div className="flex flex-row items-center space-x-4">
                                <h3 className="text-2xl font-semibold">{sheet.name}</h3>
                                <a
                                    href={sheet.pdf}
                                    download
                                    className="block bg-dark px-4 py-2 my-2 bg-primary text-white rounded hover:bg-primary-dark"
                                >
                                    Download PDF
                                </a>
                            </div>
                            <iframe src="/sheet_music/inkwell-isle-one.pdf" width="400" height="600" className="w-full h-128"/>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}