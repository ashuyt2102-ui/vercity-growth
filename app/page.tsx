import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import Trust from "@/components/Trust";
import Capabilities from "@/components/Capabilities";
import ServicesOverview from "@/components/ServicesOverview";
import SelectedWork from "@/components/SelectedWork";
import CaseStudies from "@/components/CaseStudies";
import ReportingExample from "@/components/ReportingExample";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import PricingPreview from "@/components/PricingPreview";
import Partnership from "@/components/Partnership";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <ScrollReveal><Trust /></ScrollReveal>
        <ScrollReveal><Capabilities /></ScrollReveal>
        <ScrollReveal><ServicesOverview /></ScrollReveal>
        <ScrollReveal><SelectedWork /></ScrollReveal>
        <ScrollReveal><CaseStudies /></ScrollReveal>
        <ScrollReveal><ReportingExample /></ScrollReveal>
        <ScrollReveal><WhyUs /></ScrollReveal>
        <ScrollReveal><Process /></ScrollReveal>
        <ScrollReveal><PricingPreview /></ScrollReveal>
        <ScrollReveal><Partnership /></ScrollReveal>
        <ScrollReveal><FAQ /></ScrollReveal>
        <ScrollReveal><FinalCTA /></ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
