import "./home.css";
import Header from "../../components/shared/header/Header";
import Hero from "../../sections/Hero";
import Features from "../../sections/Features";
import HowItWorks from "../../sections/HowItWorks";
import Benefits from "../../sections/Benefits";
import Pricing from "../../sections/Pricing";
import Conversation from "../../sections/Conversation";
import Faqs from "../../sections/Faqs";
import Connect from "../../sections/Connect";
import Footer from "../../components/shared/footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Conversation />
      <Faqs />
      <Connect />
    </>
  );
}
