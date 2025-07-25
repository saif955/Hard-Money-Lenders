import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function ReadyToGetStarted() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 relative overflow-hidden">
            {/* Background Image with Geometric Overlays */}
            <div className="absolute inset-0">
                {/* Main background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/homeguide-new-custom-home-in-Dallas-Texas.avif')"
                    }}
                ></div>

                {/* Geometric overlays */}
                <div className="absolute inset-0">



                </div>

                {/* White overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
            </div>

            {/* Main Content */}
            <main className="relative z-10 min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6 sm:space-y-8">
                            <ScrollAnimation direction="up" delay={0.2}>
                                <div>
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-700 leading-tight mb-6 sm:mb-8">
                                        READY TO GET
                                        <br />
                                        STARTED
                                    </h1>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation direction="up" delay={0.4}>
                                <div className="max-w-lg">
                                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                                        With Ridge Street, obtaining a private mortgage loan is easier than you think! You can get pre-approved online and a Term Sheet that Meets your needs will be sent to you within the hour.
                                    </p>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation direction="up" delay={0.6}>
                                <div className="pt-4">
                                    <Button
                                        size="lg"
                                        className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 text-lg font-semibold rounded-none shadow-lg transform hover:scale-105 transition-all duration-300"
                                    >
                                        GET PRE-APPROVED ONLINE
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </div>
                            </ScrollAnimation>
                        </div>

                        {/* Right side - space for geometric overlays and background image */}
                        <div className="hidden lg:block"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}