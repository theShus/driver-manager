import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ELD Telematics",
    description: "Next-generation Electronic Logging Devices and Telematics.",
};

export default function ELDPage() {
    return (
        <div className="flex flex-col w-full bg-white">
            {/* HERO */}
            <section className="relative flex flex-col items-center justify-center py-24 px-6 text-center lg:py-32 bg-zinc-900 text-white">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 mb-8 backdrop-blur-sm">
                        <span>FMCSA Certified Hardware &rarr;</span>
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                        The ultimate <span className="text-blue-500">Telematics Solution.</span>
                    </h1>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                        [Draft Copy]: Hardware you can trust, software you will actually want to use. We provide industry-leading ELD devices perfectly integrated with our management platform.
                    </p>
                </div>
            </section>

            {/* ABOUT THE PRODUCT */}
            <section id="about" className="container mx-auto px-6 py-24 scroll-mt-20">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="aspect-square bg-zinc-100 rounded-2xl border border-zinc-200 flex items-center justify-center p-8 text-center">
                            <span className="text-zinc-400 font-medium text-sm">[Image Placeholder: Sleek 3D render of the ELD hardware and tablet]</span>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">About the Product</h2>
                        <h3 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl mb-6">Plug and play compliance.</h3>
                        <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                            [Draft Copy]: Our provided ELD unit connects directly to your truck's diagnostic port in seconds. No complex wiring required. It instantly begins syncing Hours of Service (HOS) logs via bluetooth to your cab tablet.
                        </p>
                        <p className="text-lg text-zinc-600 leading-relaxed">
                            [Draft Copy]: Fully FMCSA compliant, automatically updated over-the-air, and built with military-grade durability to survive the harsh realities of the road.
                        </p>
                    </div>
                </div>
            </section>

            {/* CAPABILITIES */}
            <section id="capabilities" className="bg-zinc-50 border-y border-zinc-100 py-24 scroll-mt-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Capabilities</h2>
                        <h3 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">Everything your fleet needs.</h3>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            { title: "Automated HOS Logging", desc: "[Draft Copy]: Perfect accuracy on duty, driving, sleeper berth, and off-duty statuses." },
                            { title: "Live GPS Tracking", desc: "[Draft Copy]: Sub-second ping rates for accurate customer routing updates." },
                            { title: "Engine Diagnostics", desc: "[Draft Copy]: Real-time fault codes sent to dispatch before the check engine light even comes on." },
                            { title: "IFTA Automation", desc: "[Draft Copy]: State-by-state mileage tracking for one-click quarterly fuel taxes." },
                            { title: "DVIR Reports", desc: "[Draft Copy]: Digital pre-trip and post-trip inspection forms directly on the tablet." },
                            { title: "Document Scanning", desc: "[Draft Copy]: Built-in BOL (Bill of Lading) scanning to expedite factoring and payments." }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
                                <h4 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h4>
                                <p className="text-zinc-600 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY THIS ELD & MANUFACTURER */}
            <section className="container mx-auto px-6 py-24">
                <div className="grid gap-16 md:grid-cols-2">

                    <div id="why-this-eld" className="scroll-mt-20">
                        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Why This ELD?</h2>
                        <h3 className="text-3xl font-extrabold text-zinc-900 mb-6">Designed for drivers, not just dispatchers.</h3>
                        <p className="text-zinc-600 leading-relaxed mb-6">
                            [Draft Copy]: Most telematics devices treat the driver like an afterthought. Our system is designed with a massive, high-contrast UI that is easy to read safely. It actively prevents HOS violations with audible warnings before you run out of driving time.
                        </p>
                    </div>

                    <div id="manufacturer" className="scroll-mt-20">
                        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">About the Manufacturer</h2>
                        <h3 className="text-3xl font-extrabold text-zinc-900 mb-6">World-class hardware engineering.</h3>
                        <p className="text-zinc-600 leading-relaxed mb-6">
                            [Draft Copy]: We partner exclusively with tier-one hardware manufacturers specializing in commercial-grade IoT (Internet of Things) devices. These units are tested in extreme temperatures and vibration chambers to ensure they never fail when you need them most.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
}