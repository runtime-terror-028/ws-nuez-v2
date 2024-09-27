import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
// import { FaLocationDot } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
// import { FaPhone } from "react-icons/fa6";

import './Footer.css'
const Footer = () => {
  return (
    <>
      <footer id="footer">
       <div className="footer_social_container">
         <FaFacebook className="footer_icon"/>
         <FaInstagram   className="footer_icon"/>
         <FaLinkedin   className="footer_icon"/>
            </div>
        <div className="footer_buttom">
          © 2000-2024, NUEZ Technologies Pvt Ltd
        <br/>
           All right reserved.
        </div>
      
      </footer>
    </>
  )
}

export default Footer
