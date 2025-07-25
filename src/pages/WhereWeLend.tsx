import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
export default function WhereWeLend() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-600 to-green-800">
            {/* Main Content */}
            <main className="py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="text-center mb-12 sm:mb-16">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
                            WHERE WE LEND
                        </h1>
                        <div className="text-white text-base sm:text-lg max-w-3xl mx-auto px-4">
                            <p className="mb-3 sm:mb-4">
                                Ridge Street provides hard money loans to real estate investors in 35 states.
                            </p>
                            <p>
                                We focus our efforts in <span className="font-bold">Texas</span> and <span className="font-bold">Florida</span>.
                            </p>
                        </div>
                    </div>

                    {/* Static US Map with Pins */}
                    <div className="mb-12 sm:mb-16 flex justify-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 max-w-4xl w-full">
                            <div className="relative">
                                <Image
                                    width={500}
                                    height={1000}
                                    src="/images/USA.avif"
                                    alt="United States Map"
                                    className="w-full h-auto rounded-lg"
                                />

                                {/* Texas Pin */}
                                <div className="absolute top-[68%] left-[46%] transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="relative group">
                                        <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 drop-shadow-lg animate-bounce" fill="currentColor" />
                                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 sm:px-3 py-1 bg-black text-white text-xs sm:text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                            Texas - Hard Money Loans & DSCR Loans
                                        </div>
                                    </div>
                                </div>

                                {/* Florida Pin */}
                                <div className="absolute top-[67%] left-[73%] transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="relative group">
                                        <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 drop-shadow-lg animate-bounce" fill="currentColor" />
                                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 sm:px-3 py-1 bg-black text-white text-xs sm:text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                            Florida - Hard Money Loans & DSCR Loans
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* State Cards */}
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16">
                        {/* Texas Card */}
                        <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 group cursor-pointer border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 to-green-700/30"></div>
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105"
                                style={{
                                    backgroundImage: "url('/images/Texas-home.avif')"
                                }}
                            ></div>
                            <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between text-white bg-black/10 backdrop-blur-[2px] rounded-2xl">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 drop-shadow-lg">Texas</h3>
                                    <p className="text-base sm:text-lg drop-shadow-md">Hard Money Loans | DSCR Loans</p>
                                </div>
                                <Button
                                    variant="outline"
                                    className="bg-white/5 backdrop-blur-[1px] border-white/30 text-white hover:bg-white hover:text-green-700 w-full sm:w-fit text-sm sm:text-base transition-all duration-300"
                                >
                                    VIEW ALL LOCATIONS
                                </Button>
                            </div>
                        </div>

                        {/* Florida Card */}
                        <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 group cursor-pointer border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 to-green-700/30"></div>
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105"
                                style={{
                                    backgroundImage: "url('/images/Florida-home.jpg')"
                                }}
                            ></div>
                            <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between text-white bg-black/10 backdrop-blur-[2px] rounded-2xl">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 drop-shadow-lg">Florida</h3>
                                    <p className="text-base sm:text-lg drop-shadow-md">Hard Money Loans | DSCR Loans</p>
                                </div>
                                <Button
                                    variant="outline"
                                    className="bg-white/5 backdrop-blur-[1px] border-white/30 text-white hover:bg-white hover:text-green-700 w-full sm:w-fit text-sm sm:text-base transition-all duration-300"
                                >
                                    VIEW ALL LOCATIONS
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center">
                        <Button
                            size="lg"
                            className="bg-white text-green-700 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
                        >
                            VIEW ALL LOCATIONS
                            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}