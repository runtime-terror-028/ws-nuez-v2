import './About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";


const About = () => {
  useEffect(() => {
    AOS.init({duration:1000})
  },[])
  return (
    <>
      <div className="about_us">
        <div className="about_header">About Us</div>
        <div className="about_container" >
          <div className="about_section"  >
            <div className="about_img_container">
              <img src="/image/about/1.jpeg" alt="aboutimg1" className="about_img"   />
            </div>
            <div className="about_text_container" data-aos="fade-left">
              <ul className="aboutus_ul">
                <li>NUEZ Technologies delivers innovative solutions for smart living, blending comfort, convenience, and security.</li>
                <li>From Solar LED Streetlights to Home Theater systems, NUEZ Technologies enhances your lifestyle with cutting-edge technology.</li>
                <li>Experience the future of home automation and safety with NUEZ Technologies’ comprehensive smart solutions.</li>
                <li>NUEZ Technologies: Your go-to provider for seamless integration of smart systems and enhanced home experiences.</li>
              </ul>

            </div>
          </div>
          <div className="about_section2"  >

            <div classname="about_img_container">
              <img src="/image/about/2.jpeg" alt="aboutimg2" className="about_img"  />
            </div>
            <div className="about_text_container" data-aos="fade-right">
              <ul className="aboutus_ul">
                <li>At NUEZ Technologies, we tailor solutions to fit your needs, not the other way around.</li>
                <li>We partner with top automation companies to deliver the best features, prices, and solutions for your unique requirements.</li>
                <li>NUEZ Technologies customizes smart solutions to match your reality, ensuring optimal functionality and value.</li>
                <li>Our approach focuses on finding the perfect fit for your needs by collaborating with leading automation experts.</li>
              </ul>
            </div>
          </div>

          <div className="about_section" >
            <div classname="about_img_container">
              <img src="/image/about/3.jpeg" alt="aboutimg3" className="about_img"   />
            </div>
            <div className="about_text_container" data-aos="fade-left">

              <ul className="aboutus_ul">
                <li> NUEZ Technologies provides a complete automation journey: from consulting and planning to installation and after-sales service.</li>
                <li>Discover the future of home automation with NUEZ Technologies—your one-stop shop for seamless system design and support</li>
                <li>Step into a smarter home with NUEZ Technologies, where end-to-end automation solutions and exceptional service meet.</li>
                <li>Join thousands of satisfied customers and experience unparalleled convenience and innovation with NUEZ Technologies’ comprehensive automation solutions.</li>
              </ul>
            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default About











