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
          <a className="text-dark" href="https://www.instagram.com/nueztech/" target="_blank">
            <FaInstagram className="footer_icon" />
          </a>
          <a className="text-dark" href="https://www.facebook.com/people/Nuez-Technologies-Pvt-Ltd/61560709572283/" target="_blank">
            <FaFacebook className="footer_icon" />
          </a>
          <a className="text-dark" href="https://in.linkedin.com/company/nuez-technologies-pvt-ltd" target="_blank">
            <FaLinkedin className="footer_icon" />
          </a>
        </div>
        <div className="footer_buttom">
          © 2000-2024, Nuez Technologies Pvt Ltd
          <br />
          All right reserved.
        </div>

      </footer>
    </>
  )
}

export default Footer
