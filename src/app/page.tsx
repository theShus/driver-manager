import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col w-full bg-white">
            {/* HERO SECTION - Freightliner Inspired (Bold, Empowering) */}
            <section className="relative flex flex-col items-center justify-center py-24 px-6 text-center lg:py-32 bg-zinc-900 text-white">
                {/* Placeholder for a massive background image of a truck on the highway */}
                <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
                </div>

                <div className="relative z-10">
                    <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 mb-8 backdrop-blur-sm">
                        <span>Next-Gen ELD & Telematics Now Available &rarr;</span>
                    </div>

                    <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-balance">
                        Drive the Truck. <br/><span className="text-blue-500">Master the Business.</span>
                    </h1>

                    <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-300 leading-relaxed text-balance">
                        We empower independent Owner-Operators with elite business training, financial strategies, and industry-leading ELD telematics. Don't just haul freight—build an empire.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/product"
                            className="rounded-md bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-blue-500 transition-all uppercase tracking-wide"
                        >
                            Explore Our ELD Tech
                        </Link>
                        <Link
                            href="/academy"
                            className="rounded-md bg-white/10 px-8 py-3.5 text-sm font-bold text-white shadow-sm ring-1 ring-inset ring-white/20 hover:bg-white/20 transition-all uppercase tracking-wide backdrop-blur-sm"
                        >
                            Join the Academy
                        </Link>
                    </div>
                </div>
            </section>

            {/* PILLAR 1: The Business Academy (Training) */}
            <section className="container mx-auto px-6 py-24 border-b border-zinc-100">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="h-[400px] bg-zinc-100 rounded-xl border border-zinc-200 flex items-center justify-center">
                            <span className="text-zinc-400 font-medium">[Image Placeholder: Drivers in a modern classroom/boardroom setting]</span>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Owner-Operator Academy</h2>
                        <h3 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl mb-6">
                            Learn to run a profitable trucking business.
                        </h3>
                        <p className="text-lg text-zinc-600 mb-8">
                            We go beyond standard CDL instruction. Our comprehensive training program transforms drivers into successful logistics entrepreneurs. You handle the steering wheel; we teach you how to handle the books.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {['Financial Management & Tax Strategies', 'Load Board Negotiation & Dispatching', 'Compliance & LLC Structuring', 'Fleet Expansion Strategies'].map((item) => (
                                <li key={item} className="flex items-center text-zinc-700">
                                    <span className="text-blue-600 mr-3">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                        <Link href="/academy" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center">
                            View Curriculum Curriculum <span className="ml-2">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* PILLAR 2: The Tech / ELD */}
            <section className="container mx-auto px-6 py-24">
                <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="h-[400px] bg-zinc-100 rounded-xl border border-zinc-200 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-200 to-zinc-100"></div>
                            <span className="text-zinc-400 font-medium relative z-10">[Image Placeholder: Sleek ELD Tablet mounted on a truck dashboard]</span>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Advanced Telematics</h2>
                        <h3 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl mb-6">
                            Total visibility and compliance. In one device.
                        </h3>
                        <p className="text-lg text-zinc-600 mb-8">
                            Our proprietary Electronic Logging Device (ELD) and dispatch software take the headache out of DOT compliance. Track everything in real-time without taking your eyes off the road.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div>
                                <h4 className="font-bold text-zinc-900 mb-1">HOS Compliance</h4>
                                <p className="text-sm text-zinc-600">Automated Hours of Service tracking and resting logs.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-zinc-900 mb-1">Live GPS & Speed</h4>
                                <p className="text-sm text-zinc-600">Pinpoint accuracy for route optimization and client updates.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-zinc-900 mb-1">Engine Diagnostics</h4>
                                <p className="text-sm text-zinc-600">Catch maintenance issues before they cause costly breakdowns.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-zinc-900 mb-1">IFTA Reporting</h4>
                                <p className="text-sm text-zinc-600">Automated fuel tax calculations to save you hours of paperwork.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}