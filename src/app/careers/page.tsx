import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers",
    description: "Join the Driver Manager network and take your driving career to the next level.",
};

export default function CareersPage() {
    return (
        <div className="flex flex-col w-full bg-white">
            {/* HERO */}
            <section className="relative flex flex-col items-center justify-center py-24 px-6 text-center lg:py-32 bg-zinc-900 text-white">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                        Stop driving for them. <span className="text-blue-500">Drive for yourself.</span>
                    </h1>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                        [Draft Copy]: We provide the infrastructure, you provide the drive. Explore the benefits of joining our elite network of owner-operators and logistics professionals.
                    </p>
                </div>
            </section>

            {/* BENEFITS */}
            <section id="benefits" className="container mx-auto px-6 py-24 scroll-mt-20">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Benefits</h2>
                    <h3 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">Why join our network?</h3>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {['100% Load Transparency', 'Discounted ELD Hardware', 'Free Academy Access', '24/7 Dispatch Support'].map((benefit, idx) => (
                        <div key={idx} className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
                            <h4 className="text-lg font-bold text-zinc-900 mb-2">{benefit}</h4>
                            <p className="text-zinc-600 text-sm">{"[Draft Copy]: Leverage our enterprise volume to get industry-leading rates and support that solo drivers simply can't access."}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* TRAINING PROCESS */}
            <section id="training" className="bg-zinc-50 border-y border-zinc-100 py-24 scroll-mt-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="aspect-video bg-white rounded-2xl border border-zinc-200 flex items-center justify-center p-8 text-center shadow-sm">
                                <span className="text-zinc-400 font-medium text-sm">[Image Placeholder: Driver in a training simulator]</span>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Training Process</h2>
                            <h3 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl mb-6">From orientation to graduation.</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-4">1</span>
                                    <div>
                                        <h4 className="font-bold text-zinc-900">Onboarding & Compliance</h4>
                                        <p className="text-zinc-600 text-sm mt-1">[Draft Copy]: We get your LLC, DOT, and MC numbers established.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-4">2</span>
                                    <div>
                                        <h4 className="font-bold text-zinc-900">Financial Mastery</h4>
                                        <p className="text-zinc-600 text-sm mt-1">[Draft Copy]: Learn load board negotiation and IFTA tax preparation.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* BE A TRAINER */}
            <section id="trainer" className="container mx-auto px-6 py-24 scroll-mt-20 text-center">
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Be a Trainer</h2>
                <h3 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl mb-6">Pass on your expertise.</h3>
                <p className="text-lg text-zinc-600 mb-10 max-w-2xl mx-auto">
                    [Draft Copy]: Experienced owner-operators can increase their revenue streams by becoming certified Driver Manager mentors. Help shape the next generation of logistics professionals.
                </p>
                <Link href="/contact" className="inline-block rounded-md bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-all uppercase tracking-wide">
                    Apply to Mentor
                </Link>
            </section>
        </div>
    );
}