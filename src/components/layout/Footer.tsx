import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-white py-16 border-t border-zinc-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand & Mission */}
                    <div className="md:col-span-1">
                        <Link href="/" className="text-2xl font-extrabold tracking-tight text-blue-500 mb-4 block">
                            DriverManager
                        </Link>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            Empowering independent Owner-Operators with elite business training and industry-leading ELD telematics.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-zinc-100 font-bold mb-4 uppercase tracking-wider text-sm">Platform</h4>
                        <ul className="space-y-3">
                            <li><Link href="/eld" className="text-zinc-400 hover:text-white text-sm transition-colors">ELD Telematics</Link></li>
                            <li><Link href="/about" className="text-zinc-400 hover:text-white text-sm transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="text-zinc-400 hover:text-white text-sm transition-colors">Careers & Training</Link></li>
                            <li><Link href="/refer" className="text-zinc-400 hover:text-white text-sm transition-colors">Refer a Driver</Link></li>
                        </ul>
                    </div>

                    {/* Support / Contact */}
                    <div>
                        <h4 className="text-zinc-100 font-bold mb-4 uppercase tracking-wider text-sm">Support</h4>
                        <ul className="space-y-3">
                            <li><Link href="/contact" className="text-zinc-400 hover:text-white text-sm transition-colors">Contact Sales</Link></li>
                            <li><Link href="/contact" className="text-zinc-400 hover:text-white text-sm transition-colors">Technical Support</Link></li>
                            <li className="text-zinc-400 text-sm mt-4">1-800-555-HAUL</li>
                            <li className="text-zinc-400 text-sm">dispatch@drivermanager.com</li>
                        </ul>
                    </div>

                    {/* Call to Action */}
                    <div>
                        <h4 className="text-zinc-100 font-bold mb-4 uppercase tracking-wider text-sm">Stay Updated</h4>
                        <p className="text-zinc-400 text-sm mb-4">Get the latest FMCSA regulation updates and business tips.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-zinc-900 border border-zinc-800 text-white text-sm rounded-l-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                            />
                            <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-r-md text-sm font-bold transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>

                {/* Legal Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-zinc-500 text-sm">
                        &copy; {new Date().getFullYear()} Driver Manager LLC. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}