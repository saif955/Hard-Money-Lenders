import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-700">
                RIDGE <span className="text-gray-500">STREET</span>
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-700">Fix and Flip</a>
              <a href="#" className="text-gray-700 hover:text-green-700">Rental Loans</a>
              <a href="#" className="text-gray-700 hover:text-green-700">Where We Lend</a>
              <a href="#" className="text-gray-700 hover:text-green-700">About Us</a>
              <a href="#" className="text-gray-700 hover:text-green-700">Resources</a>
            </nav>
            <Button className="bg-green-700 hover:bg-green-800 text-white">
              GET APPROVED ONLINE
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <main
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/homeguide-new-custom-home-in-Dallas-Texas.avif')"
        }}
      >
        {/* Gradient overlay from semi-transparent to transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl lg:text-6xl font-bold text-green-700 leading-tight">
                  FLORIDA AND TEXAS
                  <br />
                  HARD MONEY LENDERS
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-xl text-gray-800 font-medium">
                  Fast Closing Fix and Flip and Rental Loans
                </p>
                <p className="text-xl text-gray-800 font-medium">
                  For Your Investment Properties.
                </p>
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 text-lg font-semibold rounded-none"
                >
                  GET APPROVED ONLINE
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Right side - space for geometric overlays */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
