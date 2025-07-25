import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Homepage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section with Background Image */}
            <main
                className="relative min-h-screen bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/homeguide-new-custom-home-in-Dallas-Texas.avif')"
                }}
            >
                {/* Gradient overlay from semi-transparent to transparent */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent"></div>



                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] sm:min-h-[80vh]">
                        {/* Left Content */}
                        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                            <ScrollAnimation direction="up" delay={0.2}>
                                <div>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-700 leading-tight">
                                        FLORIDA AND TEXAS
                                        <br />
                                        HARD MONEY LENDERS
                                    </h2>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation direction="up" delay={0.4}>
                                <div className="space-y-3 sm:space-y-4">
                                    <p className="text-lg sm:text-xl text-gray-800 font-medium">
                                        Fast Closing Fix and Flip and Rental Loans
                                    </p>
                                    <p className="text-lg sm:text-xl text-gray-800 font-medium">
                                        For Your Investment Properties.
                                    </p>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation direction="up" delay={0.6}>
                                <div className="pt-4">
                                    <Button
                                        size="lg"
                                        className="bg-green-700 hover:bg-green-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-none w-full sm:w-auto"
                                    >
                                        GET APPROVED ONLINE
                                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                                    </Button>
                                </div>
                            </ScrollAnimation>
                        </div>

                        {/* Right side - space for geometric overlays */}
                        <div className="hidden lg:block"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}