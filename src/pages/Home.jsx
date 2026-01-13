import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import Destinations from "../components/Destinations";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Programs />
        <Destinations />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;
