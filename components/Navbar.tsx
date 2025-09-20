import Link from 'next/link';

export function Navbar() {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <Link href="/" className="flex items-center py-4 px-2">
                                <span className="font-semibold text-gray-500 text-lg">
                                    E-Commerce Store
                                </span>
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-1">
                            <Link href="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">
                                Home
                            </Link>
                            <Link href="/products" className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">
                                Products
                            </Link>
                            <Link href="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">
                                About
                            </Link>
                            <Link href="/contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-3">
                        <Link href="/login" className="py-2 px-4 font-medium text-gray-500 rounded hover:bg-purple-500 hover:text-white transition duration-300">
                            Log In
                        </Link>
                        <Link href="/signup" className="py-2 px-4 font-medium text-white bg-purple-500 rounded hover:bg-purple-400 transition duration-300">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}