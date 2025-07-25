import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake, FileCheck, Phone } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import StaggeredAnimation from "@/components/StaggeredAnimation";

export default function InterestedInWorking() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Main Content */}
            <main className="py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <ScrollAnimation direction="up">
                        <div className="text-center mb-12 sm:mb-16">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 mb-6 sm:mb-8">
                                INTERESTED IN WORKING WITH US?
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                                We work with real estate investors across the country every day. How can we help?
                            </p>
                        </div>
                    </ScrollAnimation>

                    {/* Action Cards */}
                    <StaggeredAnimation staggerDelay={0.2}>
                        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">

                            {/* Active Deal Card */}
                            <div className="bg-white rounded-lg p-8 shadow-md border-2 border-gray-300 text-center hover:shadow-lg hover:border-green-300 transition-all duration-300 h-full flex flex-col">
                                <div className="bg-green-50 rounded-lg w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                    <Handshake className="h-10 w-10 text-green-600" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                    Active Deal
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 flex-grow">
                                    I have an active deal and would like a Term Sheet.
                                </p>
                                <Button
                                    variant="outline"
                                    className="border-gray-300 text-gray-700 hover:bg-gray-50 w-full sm:w-auto mt-auto"
                                >
                                    Find a home
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>

                            {/* Pre-Approval Card */}
                            <div className="bg-white rounded-lg p-8 shadow-md border-2 border-gray-300 text-center hover:shadow-lg hover:border-green-300 transition-all duration-300 h-full flex flex-col">
                                <div className="bg-green-50 rounded-lg w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                    <FileCheck className="h-10 w-10 text-green-600" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                    Pre-Approval
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 flex-grow">
                                    I&apos;d like to to get pre-approved so I can find my next deal.
                                </p>
                                <Button
                                    className="bg-green-700 hover:bg-green-800 text-white w-full sm:w-auto mt-auto"
                                >
                                    Find a home
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>

                            {/* Schedule A Call Card */}
                            <div className="bg-white rounded-lg p-8 shadow-md border-2 border-gray-300 text-center hover:shadow-lg hover:border-green-300 transition-all duration-300 h-full flex flex-col">
                                <div className="bg-green-50 rounded-lg w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                    <Phone className="h-10 w-10 text-green-600" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                    Schedule A Call
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 flex-grow">
                                    I&apos;d like to schedule a call.
                                </p>
                                <Button
                                    variant="outline"
                                    className="border-gray-300 text-gray-700 hover:bg-gray-50 w-full sm:w-auto mt-auto"
                                >
                                    Find a home
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>

                        </div>
                    </StaggeredAnimation>
                </div>
            </main>
        </div>
    );
}