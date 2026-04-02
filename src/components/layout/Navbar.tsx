import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo / Brand */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-extrabold tracking-tight text-blue-600">
                            DriverManager
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    {/* Increased gap between items (gap-10) and larger text (text-base) */}
                    <nav className="hidden lg:flex items-center gap-10">

                        {/* ABOUT US - Dropdown */}
                        <div className="relative group">
                            <Link href="/about" className="text-base font-semibold text-zinc-700 hover:text-blue-600 transition-colors py-2">
                                About Us
                            </Link>
                            {/* Dropdown Menu */}
                            <div className="absolute left-0 top-full pt-4 hidden group-hover:block w-56">
                                <div className="bg-white border border-zinc-200 rounded-xl shadow-lg p-2 flex flex-col">
                                    <Link href="/about#why-us" className="px-4 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-blue-600 rounded-lg">Why Us</Link>
                                    <Link href="/about#partners" className="px-4 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-blue-600 rounded-lg">Partners</Link>
                                    <Link href="/about#team" className="px-4 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-blue-600 rounded-lg">Meet Our Team</Link>
                                    <Link href="/about#history" className="px-4 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-blue-600 rounded-lg">History</Link>
                                </div>
                            </div>
                        </div>

                        {/* CAREERS - Dropdown */}
                        <div className="relative group">
                            <Link href="/careers" className="text-base font-semibold text-zinc-700 hover:text-blue-600 transition-colors py-2">
                                Careers
                            </Link>
                            {/* Dropdown Menu */}
                            <div className="absolute left-0 top-full pt-4 hidden group-hover:block w-56">
                                <div className="bg-white border border-zinc-200 rounded-xl shadow-lg p-2 flex flex-col">
                                    <Link href="/careers#benefits" className="px-4 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-blue-600 rounded-lg">Benefits</Link>
                                    <Link href="/careers#training" className="px-4 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-blue-600 rounded-lg">Training Process</Link>
                                    <Link href="/careers#trainer" className="px-4 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-blue-600 rounded-lg">Be a Trainer</Link>
                                </div>
                            </div>
                        </div>

                        {/* ELD (Product) - Dropdown */}
                        <div className="relative group">
                            <Link href="/eld" className="text-base font-semibold text-zinc-700 hover:text-blue-600 transition-colors py-2">
                                ELD
                            </Link>
                            {/* Dropdown Menu */}
                            <div className="absolute left-0 top-full pt-4 hidden group-hover:block w-56">
                                <div className="bg-white border border-zinc-200 rounded-xl shadow-lg p-2 flex flex-col">
                                    <Link href="/eld#about" className="px-4 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-blue-600 rounded-lg">About the Product</Link>
                                    <Link href="/eld#capabilities" className="px-4 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-blue-600 rounded-lg">Capabilities</Link>
                                    <Link href="/eld#why-this-eld" className="px-4 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-blue-600 rounded-lg">Why This ELD?</Link>
                                    <Link href="/eld#manufacturer" className="px-4 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-blue-600 rounded-lg">About Manufacturer</Link>
                                </div>
                            </div>
                        </div>

                        {/* REFER A DRIVER - Dropdown */}
                        <div className="relative group">
                            <Link href="/refer" className="text-base font-semibold text-zinc-700 hover:text-blue-600 transition-colors py-2">
                                Referrals
                            </Link>
                            {/* Dropdown Menu */}
                            <div className="absolute left-0 top-full pt-4 hidden group-hover:block w-56">
                                <div className="bg-white border border-zinc-200 rounded-xl shadow-lg p-2 flex flex-col">
                                    <Link href="/refer#program" className="px-4 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-blue-600 rounded-lg">Program Overview</Link>
                                    <Link href="/refer#tiers" className="px-4 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-blue-600 rounded-lg">Reward Tiers</Link>
                                    <Link href="/refer#how-it-works" className="px-4 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-blue-600 rounded-lg">How It Works</Link>
                                </div>
                            </div>
                        </div>


                        <Link href="/contact" className="text-base font-semibold text-zinc-700 hover:text-blue-600 transition-colors py-2">
                            Contact
                        </Link>
                    </nav>

                    {/* Right Side Actions (Login + CTA) */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link
                            href="/login"
                            className="text-base font-bold text-zinc-700 hover:text-blue-600 transition-colors px-4 py-2"
                        >
                            Log In
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors uppercase tracking-wide"
                        >
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}