import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Log In",
    description: "Sign in to your Driver Manager portal.",
};

export default function LoginPage() {
    return (
        <div className="flex flex-col flex-grow items-center justify-center bg-zinc-50 py-24 px-6 w-full">

            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-zinc-200 overflow-hidden">
                <div className="p-8 sm:p-12">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <Link href="/" className="text-2xl font-extrabold tracking-tight text-blue-600 mb-6 inline-block">
                            DriverManager
                        </Link>
                        <h1 className="text-2xl font-bold text-zinc-900 mb-2">Welcome back</h1>
                        <p className="text-sm text-zinc-600">Log in to your portal to manage your fleet and referrals.</p>
                    </div>

                    {/* SSO Buttons */}
                    <div className="space-y-3 mb-8">
                        {/* Google Button Mock */}
                        <button className="w-full flex items-center justify-center gap-3 bg-white border border-zinc-300 hover:bg-zinc-50 text-zinc-700 font-semibold py-3 px-4 rounded-xl transition-colors shadow-sm">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                            Continue with Google
                        </button>

                        {/* Apple Button Mock */}
                        <button className="w-full flex items-center justify-center gap-3 bg-black hover:bg-zinc-800 text-white font-semibold py-3 px-4 rounded-xl transition-colors shadow-sm">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.365 1.48c-.035.01-.06.015-.09.025a5.594 5.594 5.594 0 0 0-1.745.85 5.548 5.548 5.548 0 0 0-1.895 2.455 6.096 6.096 0 0 0-.25 1.185c.02.01.035.015.065.025a5.372 5.372 5.372 0 0 0 1.69-.74 5.614 5.614 5.614 0 0 0 2.015-2.585c.16-.36.27-.72.335-1.105-.03-.035-.075-.07-.125-.11zm1.745 5.865c-1.39 0-2.65.65-3.415 1.495-.745.82-1.28 2.05-1.24 3.4.04 1.25.55 2.5 1.295 3.395.735.88 1.95 1.545 3.36 1.545 1.415 0 2.65-.66 3.415-1.505.74-.825 1.275-2.065 1.235-3.415-.04-1.265-.55-2.52-1.3-3.41-.745-.88-1.95-1.505-3.35-1.505zm-5.75 3.39c-.065.945.22 1.905.78 2.705.565.805 1.4 1.34 2.305 1.465a3.297 3.297 0 0 0 2.875-1.045c.61-.66.97-1.555.97-2.485 0-1.03-.39-1.975-1.05-2.685-.66-.71-1.615-1.155-2.65-1.155-1.015 0-1.955.435-2.615 1.145-.58.625-.87 1.435-.85 2.295z" fillRule="evenodd" clipRule="evenodd"/>
                                <path d="M12.067 21.612A9.972 9.972 0 0 1 2 12C2 6.477 6.477 2 12 2a9.97 9.97 0 0 1 6.55 2.435l-1.422 1.414A7.973 7.973 0 0 0 12 4a8 8 0 1 0 5.657 13.657l1.414 1.414A9.969 9.969 0 0 1 12.067 21.612z"/>
                                {/* Simplified Apple path for standard bounding box */}
                                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.32 15.63c-1.09.52-2.19.46-3.26-.06-.59-.28-1.13-.67-1.62-1.14-.52-.49-.94-1.08-1.25-1.74-.33-.69-.53-1.43-.57-2.18-.04-.84.14-1.68.53-2.43.37-.73.88-1.37 1.52-1.87.61-.48 1.3-.83 2.05-1.03.74-.2 1.5-.24 2.24-.12.82.13 1.59.44 2.27.9.61.42 1.14.95 1.56 1.56l.06.1c-.55.33-1.05.74-1.48 1.2-.47.5-.83 1.08-1.08 1.71-.24.62-.35 1.28-.32 1.94.02.66.16 1.31.42 1.91.24.57.58 1.09 1.01 1.53-.19.28-.41.54-.65.78-.44.43-.93.8-1.46 1.11-.64.38-1.33.66-2.05.83-.31.07-.63.1-.94.1z" fill="currentColor"/>
                            </svg>
                            Continue with Apple
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center mb-8">
                        <div className="flex-grow border-t border-zinc-200"></div>
                        <span className="flex-shrink-0 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-widest">
              Or continue with email
            </span>
                        <div className="flex-grow border-t border-zinc-200"></div>
                    </div>

                    {/* Email Form */}
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-zinc-700 mb-2">Email address</label>
                            <input
                                type="email"
                                placeholder="driver@example.com"
                                className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-semibold text-zinc-700">Password</label>
                                <Link href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-500">
                                    Forgot password?
                                </Link>
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                            />
                        </div>

                        <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-colors shadow-sm mt-2">
                            Sign In
                        </button>
                    </form>

                </div>

                {/* Footer of Card */}
                <div className="bg-zinc-50 py-6 px-8 text-center border-t border-zinc-200">
                    <p className="text-sm text-zinc-600">
                        Don't have an account? <Link href="/contact" className="font-semibold text-blue-600 hover:text-blue-500">Request access</Link>
                    </p>
                </div>
            </div>

        </div>
    );
}