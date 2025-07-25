"use client"
import { useState, } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Homepage from "@/pages/Homepage";
import InterestedInWorking from "@/pages/InterestedInWorking";
import LoanProducts from "@/pages/LoanProducts";
import OtherResources from "@/pages/OtherResources";
import PastProjects from "@/pages/PastProjects";
import ReadyToGetStarted from "@/pages/ReadyToGetStarted";
import WhereWeLend from "@/pages/WhereWeLend";
import WhyChooseUs from "@/pages/WhyChooseUs";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div>
      <Navbar />
      <section id="home">
        <Homepage />
      </section>
      <section id="loan-products">
        <LoanProducts />
      </section>
      <section id="where-we-lend">
        <WhereWeLend />
      </section>
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>
      <section id="past-projects">
        <PastProjects />
      </section>
      <section id="interested-in-working">
        <InterestedInWorking />
      </section>
      <section id="resources">
        <OtherResources />
      </section>
      <section id="get-started">
        <ReadyToGetStarted />
      </section>
      <Footer />
    </div>
  );
}