import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Building, Hammer } from "lucide-react";

export default function LoanProducts() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Main Content */}
            <main className="py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Page Title */}
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">
                            LOAN PRODUCTS
                        </h2>
                    </div>

                    {/* Loan Product Cards */}
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">

                        {/* Fix and Flip Card */}
                        <div className="bg-green-700 rounded-lg p-8 text-white relative overflow-hidden h-full flex flex-col">
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="bg-white rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                                    <Home className="h-8 w-8 text-green-700" />
                                </div>

                                <h3 className="text-2xl font-bold mb-2">Fix and Flip</h3>
                                <p className="text-green-100 mb-6">Funding For Rehab + Purchase</p>

                                <div className="space-y-3 mb-8 flex-grow">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                                        <span className="text-sm">$50,000 up to $3,000,000</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                                        <span className="text-sm">Interest Rate 10.5%-12.99%</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                                        <span className="text-sm">Origination Fee From 1.5%</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                                        <span className="text-sm">Up to 85% of Purchase and 100% of Rehab</span>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <button className="text-white underline text-sm">Learn More</button>
                                </div>

                                <Button className="bg-white text-green-700 hover:bg-gray-100 w-full mt-auto">
                                    GET APPROVED ONLINE
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Rental Property Card */}
                        <div className="bg-white rounded-lg p-8 border-2 border-green-700 relative overflow-hidden h-full flex flex-col">
                            <div className="absolute top-0 right-0 w-32 h-8 bg-green-700 transform rotate-12 translate-x-4 -translate-y-2"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="bg-green-700 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                                    <Building className="h-8 w-8 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-green-700 mb-2">Rental Property</h3>
                                <p className="text-gray-600 mb-6">30 Year DSCR loans in Florida and Texas</p>

                                <div className="space-y-3 mb-8 flex-grow">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-700 rounded-full mr-3"></div>
                                        <span className="text-sm text-gray-700">Up to $1,500,000</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-700 rounded-full mr-3"></div>
                                        <span className="text-sm text-gray-700">Interest Rate 6.75%-8.25%</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-700 rounded-full mr-3"></div>
                                        <span className="text-sm text-gray-700">Origination Fee From 1.5%</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-700 rounded-full mr-3"></div>
                                        <span className="text-sm text-gray-700">Up to 85% of LTV</span>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <button className="text-green-700 underline text-sm">Learn More</button>
                                </div>

                                <Button className="bg-green-700 hover:bg-green-800 text-white w-full mt-auto">
                                    GET APPROVED ONLINE
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Ground Up Construction Card */}
                        <div className="bg-white rounded-lg p-8 border-2 border-green-700 relative overflow-hidden h-full flex flex-col">
                            <div className="absolute top-0 right-0 w-32 h-8 bg-green-700 transform rotate-12 translate-x-4 -translate-y-2"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="bg-green-700 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6">
                                    <Hammer className="h-8 w-8 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-green-700 mb-2">Ground Up Construction</h3>
                                <p className="text-gray-600 mb-6">Ground Up Construction loans in Florida and Texas</p>

                                <div className="space-y-3 mb-8 flex-grow">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-700 rounded-full mr-3"></div>
                                        <span className="text-sm text-gray-700">Up to $3,500,000</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-700 rounded-full mr-3"></div>
                                        <span className="text-sm text-gray-700">Interest Rate 11.25%-13.25%</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-700 rounded-full mr-3"></div>
                                        <span className="text-sm text-gray-700">Origination Fee From 1.5%</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-700 rounded-full mr-3"></div>
                                        <span className="text-sm text-gray-700">Up to 80% of LTC</span>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <button className="text-green-700 underline text-sm">Learn More</button>
                                </div>

                                <Button className="bg-green-700 hover:bg-green-800 text-white w-full mt-auto">
                                    GET APPROVED ONLINE
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}