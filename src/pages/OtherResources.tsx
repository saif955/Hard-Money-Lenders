import { Button } from "@/components/ui/button";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import StaggeredAnimation from "@/components/StaggeredAnimation";

export default function OtherResources() {
    const resources = [
        {
            id: 1,
            date: "May 9, 2024",
            title: "Investor's Guide To Real Estate Wholesaling",
            description: "Real estate wholesaling investment technique that combines the best aspects of two of the most common strategies - flipping houses and wholesaling. With wholesaling, you can earn large.",
            image: "/images/homeguide-new-custom-home-in-Dallas-Texas.avif"
        },
        {
            id: 2,
            date: "May 9, 2024",
            title: "Investor's Guide To Real Estate Wholesaling",
            description: "Real estate wholesaling investment technique that combines the best aspects of two of the most common strategies - flipping houses and wholesaling. With wholesaling, you can earn large.",
            image: "/images/Texas-home.avif"
        },
        {
            id: 3,
            date: "May 9, 2024",
            title: "Investor's Guide To Real Estate Wholesaling",
            description: "Real estate wholesaling investment technique that combines the best aspects of two of the most common strategies - flipping houses and wholesaling. With wholesaling, you can earn large.",
            image: "/images/Florida-home.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Main Content */}
            <main className="py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <ScrollAnimation direction="up">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 sm:mb-16">
                            <div className="mb-6 sm:mb-0">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 leading-tight">
                                    OTHER RESOURCES
                                    <br />
                                    YOU&apos;LL LIKE
                                </h1>
                            </div>
                            <Button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full">
                                VIEW MORE
                            </Button>
                        </div>
                    </ScrollAnimation>

                    {/* Resource Cards */}
                    <StaggeredAnimation staggerDelay={0.2}>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {resources.map((resource) => (
                                <div key={resource.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                                    {/* Resource Image */}
                                    <div className="relative">
                                        <Image
                                            src={resource.image}
                                            alt={resource.title}
                                            width={400}
                                            height={250}
                                            className="w-full h-48 sm:h-56 object-cover"
                                        />
                                    </div>

                                    {/* Resource Content */}
                                    <div className="p-6">
                                        {/* Date */}
                                        <p className="text-gray-500 text-sm mb-3">
                                            {resource.date}
                                        </p>

                                        {/* Title */}
                                        <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-4 leading-tight">
                                            {resource.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                            {resource.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </StaggeredAnimation>
                </div>
            </main>
        </div>
    );
}