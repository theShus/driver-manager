import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col w-full bg-white">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center py-24 px-6 text-center lg:py-32 bg-zinc-50 border-b border-zinc-100">
                <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 mb-8">
                    <span>New: Advanced Route Analytics &rarr;</span>
                </div>

                <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl text-balance">
                    The Operating System for <span className="text-blue-600">Modern Logistics</span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg text-zinc-600 leading-relaxed">
                    Empower your fleet with Driver Manager. From industry-leading driver training modules to real-time freight tracking and seamless partner integrations.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/product"
                        className="rounded-md bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
                    >
                        Explore the Product
                    </Link>
                    <Link
                        href="/contact"
                        className="rounded-md bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50 transition-all"
                    >
                        Request a Demo
                    </Link>
                </div>
            </section>

            {/* Social Proof / Partners Banner */}
            <section className="py-12 border-b border-zinc-100 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6">
                        Trusted by innovative logistics partners
                    </p>
                    <div className="flex flex-wrap justify-center gap-10 opacity-60 grayscale">
                        {/* These would eventually be real SVG logos of partners/clients */}
                        <span className="text-xl font-bold text-zinc-800">FreightFlow</span>
                        <span className="text-xl font-bold text-zinc-800">OmniLogistics</span>
                        <span className="text-xl font-bold text-zinc-800">ApexHaul</span>
                        <span className="text-xl font-bold text-zinc-800">TransitPro</span>
                    </div>
                </div>
            </section>

            {/* Core Platform Features */}
            <section className="container mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                        Everything you need to manage your fleet
                    </h2>
                    <p className="mt-4 text-lg text-zinc-600">
                        A unified platform designed to increase safety, efficiency, and visibility.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {/* Feature 1 */}
                    <div className="p-8 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-2xl">
                            🎓
                        </div>
                        <h3 className="text-xl font-semibold text-zinc-900 mb-3">Driver Training</h3>
                        <p className="text-zinc-600 mb-6 leading-relaxed">
                            Ensure compliance and safety with our comprehensive, state-of-the-art digital training modules for your drivers.
                        </p>
                        <Link href="/product" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                            See training features &rarr;
                        </Link>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-8 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-2xl">
                            📍
                        </div>
                        <h3 className="text-xl font-semibold text-zinc-900 mb-3">Real-Time Tracking</h3>
                        <p className="text-zinc-600 mb-6 leading-relaxed">
                            Maintain 24/7 visibility on your valuable cargo with our precise GPS and telematics integrations.
                        </p>
                        <Link href="/product" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                            View tracking demo &rarr;
                        </Link>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-8 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-2xl">
                            🤝
                        </div>
                        <h3 className="text-xl font-semibold text-zinc-900 mb-3">Partner Network</h3>
                        <p className="text-zinc-600 mb-6 leading-relaxed">
                            Connect with reliable brokers and carriers through our vetted logistics partnership ecosystem.
                        </p>
                        <Link href="/partners" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                            Meet our partners &rarr;
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}