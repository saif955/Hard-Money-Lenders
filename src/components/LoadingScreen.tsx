import { useEffect, useState } from "react";

interface LoadingScreenProps {
    onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onLoadingComplete, 500); // Small delay before hiding
                    return 100;
                }
                return prev + 2; // Adjust speed here
            });
        }, 50);

        return () => clearInterval(timer);
    }, [onLoadingComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center">
            {/* Ridge Street Logo Animation */}
            <div className="mb-8">
                <div className="animate-pulse">
                    <h1 className="text-4xl sm:text-5xl font-bold text-green-700">
                        RIDGE <span className="text-gray-500">STREET</span>
                    </h1>
                </div>
                <p className="text-center text-gray-600 mt-2 animate-fade-in">
                    Hard Money Lending Solutions
                </p>
            </div>

            {/* Progress Bar */}
            <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-green-600 to-green-700 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Progress Percentage */}
            <p className="text-green-700 font-semibold mt-4">
                {progress}%
            </p>

            {/* Loading Animation */}
            <div className="mt-6 flex space-x-2">
                <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
        </div>
    );
}