import { Mail, Phone, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-green-700 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Company Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">Fix And Flip Loans</a></li>
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">DSCR Rental Loans</a></li>
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">Ground Up Construction Loans</a></li>
                        </ul>

                        <h4 className="text-lg font-semibold mt-6 mb-4">Where We Lend</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">Florida</a></li>
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">Texas</a></li>
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">Georgia</a></li>
                        </ul>
                    </div>

                    {/* Top Cities We Lend In */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Top Cities We Lend In</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">Orlando</a></li>
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">Tampa</a></li>
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">Miami</a></li>
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">Jacksonville</a></li>
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">Houston</a></li>
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">Austin</a></li>
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">Dallas</a></li>
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">San Antonio</a></li>
                        </ul>
                    </div>

                    {/* Top Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Top Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">Loan Calculator</a></li>
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">What is a Hard Money Loan</a></li>
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">What is a Hard Money Loan</a></li>
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">How to find fix and flip deals</a></li>
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">Best Cities for Fix and Flips</a></li>
                        </ul>

                        <h4 className="text-lg font-semibold mt-6 mb-4">Useful Link</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-green-100 hover:text-white transition-colors">Terms of Use</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

                        <div className="space-y-4">
                            <div>
                                <p className="text-green-100 mb-2">Email</p>
                                <div className="flex items-center">
                                    <Mail className="h-4 w-4 mr-2 text-green-200" />
                                    <a href="mailto:loans@ridgestreetcap.com" className="text-white hover:text-green-200 transition-colors">
                                        loans@ridgestreetcap.com
                                    </a>
                                </div>
                            </div>

                            <div>
                                <p className="text-green-100 mb-2">Direct/Text</p>
                                <div className="flex items-center">
                                    <Phone className="h-4 w-4 mr-2 text-green-200" />
                                    <a href="tel:786-304-2751" className="text-white hover:text-green-200 transition-colors">
                                        Phone: 786-304-2751
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Logo */}
                        <div className="mt-6 mb-4">
                            <div className="bg-white rounded px-4 py-2 inline-block">
                                <span className="text-green-700 font-bold text-lg">
                                    RIDGE <span className="text-gray-500">STREET</span>
                                </span>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            <a href="#" className="text-green-200 hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-green-200 hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-green-200 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-green-200 hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}