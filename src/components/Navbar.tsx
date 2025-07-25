
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <h1 className="text-xl sm:text-2xl font-bold text-green-700">
                            RIDGE <span className="text-gray-500">STREET</span>
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-700 hover:text-green-700 transition-colors">Fix and Flip</a>
                        <a href="#" className="text-gray-700 hover:text-green-700 transition-colors">Rental Loans</a>
                        <a href="#" className="text-gray-700 hover:text-green-700 transition-colors">Where We Lend</a>
                        <a href="#" className="text-gray-700 hover:text-green-700 transition-colors">About Us</a>
                        <a href="#" className="text-gray-700 hover:text-green-700 transition-colors">Resources</a>
                    </nav>

                    {/* Desktop CTA Button */}
                    <Button className="hidden sm:flex bg-green-700 hover:bg-green-800 text-white text-sm lg:text-base">
                        GET APPROVED ONLINE
                    </Button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6 text-gray-700" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-700" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
                        <nav className="px-4 py-4 space-y-4">
                            <a href="#" className="block text-gray-700 hover:text-green-700 transition-colors">Fix and Flip</a>
                            <a href="#" className="block text-gray-700 hover:text-green-700 transition-colors">Rental Loans</a>
                            <a href="#" className="block text-gray-700 hover:text-green-700 transition-colors">Where We Lend</a>
                            <a href="#" className="block text-gray-700 hover:text-green-700 transition-colors">About Us</a>
                            <a href="#" className="block text-gray-700 hover:text-green-700 transition-colors">Resources</a>
                            <Button className="w-full mt-4 bg-green-700 hover:bg-green-800 text-white">
                                GET APPROVED ONLINE
                            </Button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}