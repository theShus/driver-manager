import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Driver Manager for ELD quotes and academy enrollment.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col w-full bg-zinc-50 min-h-screen">
            <div className="container mx-auto px-6 py-24 max-w-6xl">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-zinc-200 flex flex-col lg:flex-row">

                    {/* Left Side: Info */}
                    <div className="w-full lg:w-5/12 bg-zinc-900 text-white p-12 flex flex-col justify-between">
                        <div>
                            <h1 className="text-4xl font-extrabold tracking-tight mb-4">{"Let's talk logistics."}</h1>
                            <p className="text-zinc-300 leading-relaxed mb-8">
                                Whether you need a quote for our ELD hardware or want to enroll in the Owner-Operator Academy, our team is ready to help you scale.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <span className="text-blue-500 text-xl mr-4">📍</span>
                                    <div>
                                        <h4 className="font-bold text-white">Headquarters</h4>
                                        <p className="text-zinc-400 text-sm">123 Logistics Way<br/>Dallas, TX 75201</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-blue-500 text-xl mr-4">📞</span>
                                    <div>
                                        <h4 className="font-bold text-white">Phone</h4>
                                        <p className="text-zinc-400 text-sm">1-800-555-HAUL</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-blue-500 text-xl mr-4">✉️</span>
                                    <div>
                                        <h4 className="font-bold text-white">Email</h4>
                                        <p className="text-zinc-400 text-sm">dispatch@drivermanager.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full lg:w-7/12 p-12">
                        <h3 className="text-2xl font-bold text-zinc-900 mb-6">Send us a message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-zinc-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-zinc-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-zinc-700 mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-zinc-700 mb-2">Fleet Size / Trucks</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all bg-white">
                                        <option>1 (Owner-Operator)</option>
                                        <option>2 - 10</option>
                                        <option>11 - 50</option>
                                        <option>50+</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-zinc-700 mb-2">How can we help?</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all resize-none"></textarea>
                            </div>

                            <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors uppercase tracking-wide">
                                Submit Request
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}