import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Referral Program",
    description: "Learn about our gamified referral tiers and start earning by bringing great drivers to Driver Manager.",
};

export default function ReferPage() {
    return (
        <div className="flex flex-col w-full bg-white">
            {/* HERO SECTION */}
            <section className="relative flex flex-col items-center justify-center py-24 px-6 text-center lg:py-32 bg-zinc-900 text-white">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center rounded-full border border-green-400/30 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400 mb-8 backdrop-blur-sm">
                        <span>Unlimited Earning Potential &rarr;</span>
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                        Build your network. <span className="text-blue-500">Build your wealth.</span>
                    </h1>
                    <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
                        [Draft Copy]: Great Owner-Operators know other great Owner-Operators. Instead of spending money on corporate recruiters, we pass that revenue directly to you through our tiered Referral Partner Program.
                    </p>
                </div>
            </section>

            {/* PROGRAM OVERVIEW (WHY) */}
            <section id="program" className="container mx-auto px-6 py-24 scroll-mt-20">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="aspect-video bg-zinc-100 rounded-2xl border border-zinc-200 flex items-center justify-center p-8 text-center">
                            <span className="text-zinc-400 font-medium text-sm">[Image Placeholder: Two drivers shaking hands by a truck]</span>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Program Overview</h2>
                        <h3 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl mb-6">Why partner with us?</h3>
                        <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                            [Draft Copy]: The Driver Manager Referral Program is designed to be a significant secondary income stream for our drivers. We don't just give you a one-time bonus; we built a leveled progression system.
                        </p>
                        <p className="text-lg text-zinc-600 leading-relaxed">
                            [Draft Copy]: As you bring more experienced professionals into the network, your partner tier increases, permanently unlocking higher payouts for every future referral you make.
                        </p>
                    </div>
                </div>
            </section>

            {/* REWARD TIERS */}
            <section id="tiers" className="bg-zinc-50 border-y border-zinc-100 py-24 scroll-mt-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Reward Tiers</h2>
                        <h3 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl mb-4">Level up your payouts.</h3>
                        <p className="text-zinc-600 text-lg">
                            [Draft Copy]: Your tier is based on the total number of drivers you have successfully referred who have completed their onboarding.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* Bronze */}
                        <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm relative overflow-hidden">
                            <div className="w-12 h-12 bg-amber-700/10 text-amber-700 rounded-lg flex items-center justify-center font-bold text-xl mb-6 border border-amber-700/20">B</div>
                            <h4 className="text-xl font-bold text-zinc-900 mb-1">Bronze Partner</h4>
                            <p className="text-sm font-semibold text-blue-600 mb-4">1 - 2 Referrals</p>
                            <div className="text-3xl font-extrabold text-zinc-900 mb-4">$250 <span className="text-base font-normal text-zinc-500">/ driver</span></div>
                            <p className="text-zinc-600 text-sm leading-relaxed">[Draft Copy]: Your starting tier. Get rewarded immediately for your first successful network additions.</p>
                        </div>

                        {/* Silver */}
                        <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm relative overflow-hidden">
                            <div className="w-12 h-12 bg-zinc-300/30 text-zinc-600 rounded-lg flex items-center justify-center font-bold text-xl mb-6 border border-zinc-300">S</div>
                            <h4 className="text-xl font-bold text-zinc-900 mb-1">Silver Partner</h4>
                            <p className="text-sm font-semibold text-blue-600 mb-4">3 - 5 Referrals</p>
                            <div className="text-3xl font-extrabold text-zinc-900 mb-4">$500 <span className="text-base font-normal text-zinc-500">/ driver</span></div>
                            <p className="text-zinc-600 text-sm leading-relaxed">[Draft Copy]: Double your payout by establishing a consistent track record of bringing in quality operators.</p>
                        </div>

                        {/* Gold */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-amber-400 shadow-md relative overflow-hidden transform md:-translate-y-2">
                            <div className="absolute top-0 right-0 bg-amber-400 text-amber-950 text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Most Popular</div>
                            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center font-bold text-xl mb-6 border border-amber-200">G</div>
                            <h4 className="text-xl font-bold text-zinc-900 mb-1">Gold Partner</h4>
                            <p className="text-sm font-semibold text-amber-600 mb-4">6 - 9 Referrals</p>
                            <div className="text-3xl font-extrabold text-zinc-900 mb-4">$750 <span className="text-base font-normal text-zinc-500">/ driver</span></div>
                            <p className="text-zinc-600 text-sm leading-relaxed">[Draft Copy]: Elite status. You are actively helping us grow the fleet and are compensated accordingly.</p>
                        </div>

                        {/* Platinum */}
                        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-lg relative overflow-hidden text-white">
                            <div className="w-12 h-12 bg-zinc-800 text-white rounded-lg flex items-center justify-center font-bold text-xl mb-6 border border-zinc-700">P</div>
                            <h4 className="text-xl font-bold text-white mb-1">Platinum Partner</h4>
                            <p className="text-sm font-semibold text-blue-400 mb-4">10+ Referrals</p>
                            <div className="text-3xl font-extrabold text-white mb-4">$1,000 <span className="text-base font-normal text-zinc-400">/ driver</span></div>
                            <p className="text-zinc-400 text-sm leading-relaxed">[Draft Copy]: Top tier. In addition to maximum payouts, Platinum partners receive exclusive VIP support and annual bonus opportunities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section id="how-it-works" className="container mx-auto px-6 py-24 scroll-mt-20">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">How It Works</h2>
                    <h3 className="text-3xl font-extrabold text-zinc-900 sm:text-4xl">Start earning in 3 easy steps.</h3>
                </div>

                <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-zinc-200 -z-10"></div>

                    <div className="text-center bg-white p-6 rounded-xl">
                        <div className="w-24 h-24 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                            <span className="text-3xl font-bold text-blue-600">1</span>
                        </div>
                        <h4 className="text-xl font-bold text-zinc-900 mb-3">Create Your Profile</h4>
                        <p className="text-zinc-600 text-sm leading-relaxed">[Draft Copy]: Log in to the Driver Manager portal to generate your unique, trackable referral link.</p>
                    </div>

                    <div className="text-center bg-white p-6 rounded-xl">
                        <div className="w-24 h-24 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                            <span className="text-3xl font-bold text-blue-600">2</span>
                        </div>
                        <h4 className="text-xl font-bold text-zinc-900 mb-3">Share Your Link</h4>
                        <p className="text-zinc-600 text-sm leading-relaxed">[Draft Copy]: Send your link to qualified Owner-Operators. They use it to apply and schedule their orientation.</p>
                    </div>

                    <div className="text-center bg-white p-6 rounded-xl">
                        <div className="w-24 h-24 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                            <span className="text-3xl font-bold text-blue-600">3</span>
                        </div>
                        <h4 className="text-xl font-bold text-zinc-900 mb-3">Track & Get Paid</h4>
                        <p className="text-zinc-600 text-sm leading-relaxed">[Draft Copy]: Watch your dashboard update in real-time. Once they complete onboarding, your payout is automatically processed.</p>
                    </div>
                </div>
            </section>

            {/* THE TRANSITION / CTA TO PORTAL */}
            <section className="bg-blue-600 py-20 px-6 text-center text-white">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-extrabold mb-6">Ready to claim your link?</h2>
                    <p className="text-lg text-blue-100 mb-10 leading-relaxed">
                        [Draft Copy]: Access the Referral Partner Portal to view your current tier, grab your custom share link, and track your incoming payouts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/login"
                            className="rounded-md bg-white px-8 py-4 text-sm font-bold text-blue-600 shadow-lg hover:bg-zinc-50 transition-all uppercase tracking-wide"
                        >
                            Log in to Portal
                        </Link>
                        <Link
                            href="/contact"
                            className="rounded-md bg-blue-700 px-8 py-4 text-sm font-bold text-white shadow-sm ring-1 ring-inset ring-blue-500 hover:bg-blue-800 transition-all uppercase tracking-wide"
                        >
                            I need an account
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}