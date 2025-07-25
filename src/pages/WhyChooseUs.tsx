import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Clock, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import StaggeredAnimation from "@/components/StaggeredAnimation";

export default function WhyChooseUs() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const reviews = [
        {
            id: 1,
            name: "John Smith",
            title: "What an amazing experience",
            content: "Ridge Street made my fix and flip project incredibly smooth. Their quick turnaround and professional service exceeded my expectations. I received my term sheet within hours and closed on time.",
            color: "from-blue-400 to-blue-600",
            initials: "JS"
        },
        {
            id: 2,
            name: "Sarah Johnson",
            title: "Outstanding service quality",
            content: "The team at Ridge Street is phenomenal. Their online application process is so simple, and they deliver exactly what they promise. I've used them for multiple rental property purchases.",
            color: "from-green-400 to-green-600",
            initials: "SJ"
        },
        {
            id: 3,
            name: "Mike Rodriguez",
            title: "Reliable and trustworthy",
            content: "I've worked with many lenders, but Ridge Street stands out. Their integrity and commitment to closing on time is unmatched. They've become my go-to lender for all my investment properties.",
            color: "from-yellow-400 to-orange-500",
            initials: "MR"
        },
        {
            id: 4,
            name: "Emily Chen",
            title: "Fast and efficient process",
            content: "From application to closing, everything was seamless. The 2-minute application saved me so much time, and their team was always available to answer my questions throughout the process.",
            color: "from-purple-400 to-pink-500",
            initials: "EC"
        },
        {
            id: 5,
            name: "David Wilson",
            title: "Exceptional customer support",
            content: "Ridge Street's customer service is top-notch. They guided me through my first investment property purchase with patience and expertise. I couldn't have asked for a better experience.",
            color: "from-red-400 to-red-600",
            initials: "DW"
        },
        {
            id: 6,
            name: "Lisa Thompson",
            title: "Professional and responsive",
            content: "Working with Ridge Street was a game-changer for my real estate business. Their quick response times and professional approach helped me secure multiple properties this year.",
            color: "from-indigo-400 to-indigo-600",
            initials: "LT"
        },
        {
            id: 7,
            name: "Robert Garcia",
            title: "Highly recommended lender",
            content: "I've recommended Ridge Street to all my investor friends. Their transparent process and reliable financing have made them my preferred lender for all construction and flip projects.",
            color: "from-teal-400 to-teal-600",
            initials: "RG"
        },
        {
            id: 8,
            name: "Amanda Davis",
            title: "Smooth closing experience",
            content: "Ridge Street delivered on every promise. The closing process was smooth, and their team kept me informed every step of the way. I'll definitely use them for future investments.",
            color: "from-pink-400 to-rose-500",
            initials: "AD"
        }
    ];

    const reviewsPerPage = 4;
    const totalSlides = Math.ceil(reviews.length / reviewsPerPage);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const getCurrentReviews = () => {
        const startIndex = currentSlide * reviewsPerPage;
        return reviews.slice(startIndex, startIndex + reviewsPerPage);
    };
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Why Choose Us Section */}
            <section className="py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Title */}
                    <ScrollAnimation direction="up">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 mb-4">
                                WHY CHOOSE US
                            </h2>
                        </div>
                    </ScrollAnimation>

                    {/* Feature Cards */}
                    <StaggeredAnimation staggerDelay={0.2}>
                        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">

                            {/* Simple Online Application */}
                            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-200 text-center">
                                <div className="bg-green-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                    <FileText className="h-10 w-10 text-green-600" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                    Simple Online Application
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    Easy 2 minute online application, with no credit pull required.
                                </p>
                            </div>

                            {/* Quick Turn Around */}
                            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-200 text-center">
                                <div className="bg-green-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                    <Clock className="h-10 w-10 text-green-600" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                    Quick Turn Around
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    Receive a Term Sheet within the hour.
                                </p>
                            </div>

                            {/* Reliable Financing */}
                            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-gray-200 text-center">
                                <div className="bg-green-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                    <Shield className="h-10 w-10 text-green-600" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                    Reliable Financing
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                    Integrity and honesty are the foundations of our business. When we commit to a loan, we make sure you close on time.
                                </p>
                            </div>

                        </div>
                    </StaggeredAnimation>

                    {/* More About Us Button */}
                    <ScrollAnimation direction="up" delay={0.3}>
                        <div className="text-center">
                            <Button
                                size="lg"
                                className="bg-green-700 hover:bg-green-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
                            >
                                MORE ABOUT US
                                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                            </Button>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Client Reviews Section */}
            <section className="py-12 sm:py-16 bg-gradient-to-br from-green-600 to-green-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Title */}
                    <ScrollAnimation direction="up">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                                RIDGE STREET CLIENT REVIEWS
                            </h2>
                        </div>
                    </ScrollAnimation>

                    {/* Review Carousel */}
                    <ScrollAnimation direction="scale" delay={0.2}>
                        <div className="relative mb-12 sm:mb-16">
                            {/* Navigation Buttons */}
                            <div className="flex justify-center items-center gap-4 mb-8">
                                <button
                                    onClick={prevSlide}
                                    className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                                    aria-label="Previous reviews"
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </button>

                                <div className="flex gap-2">
                                    {Array.from({ length: totalSlides }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white' : 'bg-white/40'
                                                }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={nextSlide}
                                    className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                                    aria-label="Next reviews"
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </button>
                            </div>

                            {/* Review Cards */}
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 transition-all duration-500 ease-in-out">
                                {getCurrentReviews().map((review) => (
                                    <div key={review.id} className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105">
                                        <div className="flex flex-col items-center text-center">
                                            <div className="w-16 h-16 bg-gray-300 rounded-full mb-4 overflow-hidden">
                                                <div className={`w-full h-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-lg`}>
                                                    {review.initials}
                                                </div>
                                            </div>
                                            <h4 className="font-bold text-green-700 mb-2">{review.name}</h4>
                                            <h5 className="font-semibold text-gray-900 mb-3">{review.title}</h5>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {review.content}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Bottom CTA */}
                    <ScrollAnimation direction="up" delay={0.4}>
                        <div className="text-center">
                            <Button
                                size="lg"
                                className="bg-white text-green-700 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
                            >
                                GET APPROVED ONLINE
                                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                            </Button>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
}