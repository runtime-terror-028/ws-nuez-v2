import Hero from '../../componets/hero/Hero';
import Featured from '../../componets/featured/Featured';
import About from '../../componets/aboutus/About';
import Contact from '../../componets/contactus/Contact';
import Footer from '../../componets/footer/Footer';

const Home = () => {
  return (
    <>
      {/* Added id for Hero Section */}
      <div id="hero">
        <Hero />
      </div>
      <Featured />
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
