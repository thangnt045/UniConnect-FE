import React from "react";
import BannerComponent from "../components/HomeBanner";
import Navbar from "../components/Navbar";
import EventListSection from "../components/EventListSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <BannerComponent />
      <EventListSection />
      <Footer />
    </>
  );
}