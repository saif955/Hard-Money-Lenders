
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80; // Account for sticky navbar height
            const elementPosition = element.offsetTop - navbarHeight;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false); // Close mobile menu after clicking
    };

    const handleGetApproved = () => {
        scrollToSection('get-started');
    };

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-xl sm:text-2xl font-bold text-green-700 hover:text-green-800 transition-colors"
                        >
                            RIDGE <span className="text-gray-500">STREET</span>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <button
                            onClick={() => scrollToSection('loan-products')}
                            className="text-gray-700 hover:text-green-700 transition-colors"
                        >
                            Loan Products
                        </button>
                        <button
                            onClick={() => scrollToSection('where-we-lend')}
                            className="text-gray-700 hover:text-green-700 transition-colors"
                        >
                            Where We Lend
                        </button>
                        <button
                            onClick={() => scrollToSection('why-choose-us')}
                            className="text-gray-700 hover:text-green-700 transition-colors"
                        >
                            Why Choose Us
                        </button>
                        <button
                            onClick={() => scrollToSection('past-projects')}
                            className="text-gray-700 hover:text-green-700 transition-colors"
                        >
                            Past Projects
                        </button>
                        <button
                            onClick={() => scrollToSection('resources')}
                            className="text-gray-700 hover:text-green-700 transition-colors"
                        >
                            Resources
                        </button>
                    </nav>

                    {/* Desktop CTA Button */}
                    <Button
                        onClick={handleGetApproved}
                        className="hidden sm:flex bg-green-700 hover:bg-green-800 text-white text-sm lg:text-base"
                    >
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
                            <button
                                onClick={() => scrollToSection('loan-products')}
                                className="block text-gray-700 hover:text-green-700 transition-colors w-full text-left"
                            >
                                Loan Products
                            </button>
                            <button
                                onClick={() => scrollToSection('where-we-lend')}
                                className="block text-gray-700 hover:text-green-700 transition-colors w-full text-left"
                            >
                                Where We Lend
                            </button>
                            <button
                                onClick={() => scrollToSection('why-choose-us')}
                                className="block text-gray-700 hover:text-green-700 transition-colors w-full text-left"
                            >
                                Why Choose Us
                            </button>
                            <button
                                onClick={() => scrollToSection('past-projects')}
                                className="block text-gray-700 hover:text-green-700 transition-colors w-full text-left"
                            >
                                Past Projects
                            </button>
                            <button
                                onClick={() => scrollToSection('resources')}
                                className="block text-gray-700 hover:text-green-700 transition-colors w-full text-left"
                            >
                                Resources
                            </button>
                            <Button
                                onClick={handleGetApproved}
                                className="w-full mt-4 bg-green-700 hover:bg-green-800 text-white"
                            >
                                GET APPROVED ONLINE
                            </Button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}