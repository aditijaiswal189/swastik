import About from "@/components/ui/about";
import Blog from "@/components/ui/blog";
import { Button } from "@/components/ui/button";
import Cta from "@/components/ui/cta";
import Features from "@/components/ui/features";
import Footer from "@/components/ui/footer";
import FormA from "@/components/ui/formA";
// import Form from "@/components/ui/form";
import HeroSection from "@/components/ui/hero-section";
import Navbar from "@/components/ui/navbar";
import Process from "@/components/ui/process";
import Testimonials from "@/components/ui/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-40 ">
      <Navbar />
      <HeroSection />
      <About />
      <Features />
      <Process />
      <Testimonials />
      <Cta />
      {/* <FormA /> */}
      <Blog />
      <Footer />
    </div>
  );
}
