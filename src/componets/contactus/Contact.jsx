import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import './Contact.css';

const Contact = () => {
  return (
    <>

      <div className="contactus">
        <div className="contact_container_1">
          <div className="contact_header">Contact Us </div>
          <div className="contact_text_1">We appreciate your questions, comments, and feedback. Please don't hesitate to get in touch with us through any of the contact methods below.</div>
        </div>
        <div className="contact_container_2">
          <div className="contact_info_1">
            <div className="contact_mail">
              <div className="contact_icon"><MdEmail /></div>
              <div className="contact_text">info@nueztpl.co.in</div>
            </div>
            <div className="contact_phone">
              <div className="contact_icon"><MdLocalPhone /></div>
              <div className="contact_text">96325-69771</div>
            </div>
          </div>
          <div className="contact_info_2">
            <div className="contact_address">
              <div className="contact_icon"><MdLocationPin /></div>
              <div className="contact_text_2">No A-207, B-205, B-206, KSSIDC Complex, Block-II,<br /> Electronic City, Hosur Road, Begnaluru - 560 100.</div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Contact
