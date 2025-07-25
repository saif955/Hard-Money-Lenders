"use client"
import Navbar from "@/components/Navbar";
import Homepage from "@/pages/Homepage";
import LoanProducts from "@/pages/LoanProducts";
import WhereWeLend from "@/pages/WhereWeLend";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <LoanProducts />
      <WhereWeLend />
    </div>
  );
}