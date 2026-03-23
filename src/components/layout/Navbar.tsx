import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo / Brand */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold tracking-tight text-blue-600">
                            DriverManager
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/about" className="text-sm font-medium text-zinc-700 hover:text-blue-600 transition-colors">
                            About Us
                        </Link>
                        <Link href="/product" className="text-sm font-medium text-zinc-700 hover:text-blue-600 transition-colors">
                            Product
                        </Link>
                        <Link href="/careers" className="text-sm font-medium text-zinc-700 hover:text-blue-600 transition-colors">
                            Careers
                        </Link>
                        <Link href="/partners" className="text-sm font-medium text-zinc-700 hover:text-blue-600 transition-colors">
                            Partners
                        </Link>
                    </nav>

                    {/* Call to Action Button */}
                    <div className="hidden md:flex">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
                        >
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}