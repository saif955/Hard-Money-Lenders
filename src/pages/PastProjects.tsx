import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Home, Car, Bed, Bath } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function PastProjects() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            id: 1,
            address: "4321 Alton Rd, Miami Beach",
            location: "Miami, Florida",
            image: "/images/homeguide-new-custom-home-in-Dallas-Texas.avif",
            squareFeet: "2350 Square Feet",
            garages: "4 Garages",
            bedrooms: "2 Bedrooms",
            bathrooms: "3 Bathrooms",
            loanAmount: "$328,000",
            ltv: "84.65%",
            rate: "11.75%",
            term: "12 Months",
            salePrice: "$3,45,000"
        },
        {
            id: 2,
            address: "AMLI 7th Street Station",
            location: "Houston, Texas",
            image: "/images/Texas-home.avif",
            squareFeet: "2350 Square Feet",
            garages: "4 Garages",
            bedrooms: "2 Bedrooms",
            bathrooms: "3 Bathrooms",
            loanAmount: "$328,000",
            ltv: "84.65%",
            rate: "11.75%",
            term: "12 Months",
            salePrice: "$3,45,000"
        },
        {
            id: 3,
            address: "201 South Orange Avenue",
            location: "Orlando, Florida",
            image: "/images/Florida-home.jpg",
            squareFeet: "2350 Square Feet",
            garages: "4 Garages",
            bedrooms: "2 Bedrooms",
            bathrooms: "3 Bathrooms",
            loanAmount: "$328,000",
            ltv: "84.65%",
            rate: "11.75%",
            term: "12 Months",
            salePrice: "$3,45,000"
        },
        {
            id: 4,
            address: "1234 Main Street",
            location: "Dallas, Texas",
            image: "/images/homeguide-new-custom-home-in-Dallas-Texas.avif",
            squareFeet: "2800 Square Feet",
            garages: "3 Garages",
            bedrooms: "3 Bedrooms",
            bathrooms: "2 Bathrooms",
            loanAmount: "$425,000",
            ltv: "82.50%",
            rate: "12.25%",
            term: "18 Months",
            salePrice: "$4,25,000"
        },
        {
            id: 5,
            address: "567 Ocean Drive",
            location: "Tampa, Florida",
            image: "/images/Florida-home.jpg",
            squareFeet: "3200 Square Feet",
            garages: "2 Garages",
            bedrooms: "4 Bedrooms",
            bathrooms: "4 Bathrooms",
            loanAmount: "$520,000",
            ltv: "85.00%",
            rate: "11.50%",
            term: "15 Months",
            salePrice: "$5,20,000"
        }
    ];

    const projectsPerPage = 3;
    const totalSlides = Math.ceil(projects.length / projectsPerPage);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const getCurrentProjects = () => {
        const startIndex = currentSlide * projectsPerPage;
        return projects.slice(startIndex, startIndex + projectsPerPage);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-600 to-green-800">
            {/* Main Content */}
            <main className="py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <ScrollAnimation direction="up">
                        <div className="text-center mb-12 sm:mb-16">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                                PAST PROJECTS
                            </h1>
                            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
                                A Proven Track Record Funding Projects Like These
                            </p>
                        </div>
                    </ScrollAnimation>

                    {/* Projects Carousel */}
                    <ScrollAnimation direction="scale" delay={0.2}>
                        <div className="relative mb-12 sm:mb-16">
                            {/* Navigation Buttons */}
                            <div className="flex justify-center items-center gap-4 mb-8">
                                <button
                                    onClick={prevSlide}
                                    className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                                    aria-label="Previous projects"
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
                                    aria-label="Next projects"
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </button>
                            </div>

                            {/* Project Cards */}
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-500 ease-in-out">
                                {getCurrentProjects().map((project) => (
                                    <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
                                        {/* Property Image */}
                                        <div className="relative">
                                            <Image
                                                src={project.image}
                                                alt={project.address}
                                                width={400}
                                                height={300}
                                                className="w-full h-48 sm:h-56 object-cover"
                                            />
                                            <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold">
                                                For Sale
                                            </div>
                                        </div>

                                        {/* Property Details */}
                                        <div className="p-6">
                                            {/* Address */}
                                            <div className="mb-4">
                                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                                                    {project.address}
                                                </h3>
                                                <p className="text-gray-600 text-sm flex items-center">
                                                    <Home className="h-4 w-4 mr-1" />
                                                    {project.location}
                                                </p>
                                            </div>

                                            {/* Property Features */}
                                            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                                                <div className="flex items-center text-gray-600">
                                                    <Home className="h-4 w-4 mr-2 text-green-600" />
                                                    {project.squareFeet}
                                                </div>
                                                <div className="flex items-center text-gray-600">
                                                    <Car className="h-4 w-4 mr-2 text-green-600" />
                                                    {project.garages}
                                                </div>
                                                <div className="flex items-center text-gray-600">
                                                    <Bed className="h-4 w-4 mr-2 text-green-600" />
                                                    {project.bedrooms}
                                                </div>
                                                <div className="flex items-center text-gray-600">
                                                    <Bath className="h-4 w-4 mr-2 text-green-600" />
                                                    {project.bathrooms}
                                                </div>
                                            </div>

                                            {/* Loan Details */}
                                            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                                                <div>
                                                    <span className="text-gray-500">• Loan Amount: </span>
                                                    <span className="font-semibold text-gray-900">{project.loanAmount}</span>
                                                </div>
                                                <div>
                                                    <span className="text-gray-500">• LTV: </span>
                                                    <span className="font-semibold text-gray-900">{project.ltv}</span>
                                                </div>
                                                <div>
                                                    <span className="text-gray-500">• Rate: </span>
                                                    <span className="font-semibold text-gray-900">{project.rate}</span>
                                                </div>
                                                <div>
                                                    <span className="text-gray-500">• Term: </span>
                                                    <span className="font-semibold text-gray-900">{project.term}</span>
                                                </div>
                                            </div>

                                            {/* Sale Price */}
                                            <div className="text-center pt-4 border-t border-gray-200">
                                                <p className="text-2xl sm:text-3xl font-bold text-green-700">
                                                    {project.salePrice}
                                                </p>
                                            </div>
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
                                GET TERMS FOR YOUR PROJECT
                                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                            </Button>
                        </div>
                    </ScrollAnimation>
                </div>
            </main>
        </div>
    );
}