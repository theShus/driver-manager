import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about the history, team, and partnerships behind Driver Manager.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full bg-white">
            {/* HERO */}
            <section className="relative flex flex-col items-center justify-center py-24 px-6 text-center lg:py-32 bg-zinc-900 text-white">
                <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                        Empowering the modern <span className="text-blue-500">Owner-Operator.</span>
                    </h1>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                        [Draft Copy]: We exist to provide the technology, education, and support network required to turn great drivers into highly profitable logistics entrepreneurs.
                    </p>
                </div>
            </section>

            {/* WHY US */}
            <section id="why-us" className="container mx-auto px-6 py-24 scroll-mt-20">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Why Us</h2>
                        <h3 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl mb-6">Bridging the gap between driving and business.</h3>
                        <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                            [Draft Copy]: Independent operators are often left to navigate complex regulations and razor-thin margins alone. By combining state-of-the-art ELD telematics with elite business training, we give fleets the operational visibility of a massive enterprise.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="aspect-video bg-zinc-100 rounded-2xl border border-zinc-200 flex items-center justify-center p-8 text-center">
                            <span className="text-zinc-400 font-medium text-sm">[Image Placeholder: Dynamic shot of a dispatch center]</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* PARTNERS */}
            <section id="partners" className="bg-zinc-50 border-y border-zinc-100 py-24 scroll-mt-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Our Partners</h2>
                    <h3 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl mb-12">The industry trusts us.</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale">
                        {/* Partner Logos */}
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm"><span className="font-bold text-zinc-800">FreightFlow</span></div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm"><span className="font-bold text-zinc-800">OmniLogistics</span></div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm"><span className="font-bold text-zinc-800">ApexHaul</span></div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm"><span className="font-bold text-zinc-800">TransitPro</span></div>
                    </div>
                </div>
            </section>

            {/* MEET OUR TEAM */}
            <section id="team" className="container mx-auto px-6 py-24 scroll-mt-20">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Meet Our Team</h2>
                    <h3 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">Built by industry veterans.</h3>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {[1, 2, 3].map((member) => (
                        <div key={member} className="text-center">
                            <div className="w-32 h-32 mx-auto bg-zinc-200 rounded-full mb-6 border-4 border-white shadow-lg"></div>
                            <h4 className="text-xl font-bold text-zinc-900">John Doe</h4>
                            <p className="text-blue-600 font-medium mb-4">Director of Logistics</p>
                            <p className="text-zinc-600 text-sm">[Draft Copy]: Over 15 years scaling independent fleets and managing massive dispatch operations.</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* HISTORY */}
            <section id="history" className="bg-zinc-900 text-white py-24 scroll-mt-20">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                    <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">Our History</h2>
                    <h3 className="text-3xl font-extrabold sm:text-4xl mb-6">From a single truck to a global platform.</h3>
                    <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                        [Draft Copy]: Founded in 2018, we started with a simple problem: drivers weren't getting the business education they deserved. Today, we manage millions of miles of telematics data and have graduated thousands of owner-operators from our academy.
                    </p>
                </div>
            </section>
        </div>
    );
}