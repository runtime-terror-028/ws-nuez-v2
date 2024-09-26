import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import './Contact.css';

const Contact = () => {
  return (
    <>
    <div className="contact_header">Contact Us</div>
    <div className="contactus">
      <div className="contact_container">
        <div className="contact_section">
          <div className="contact_content_header">Let's get in touch</div>
          <div className="contact_content_text">
            We value your questions, comments, and feedback. Feel free to
            reach out to us through any of the following contact methods or
            leave a message.
          </div>
        </div>
        <div className="contact_section2">
          <div className="contact_info">
            <div className="contact_info_header">
              <MdLocationPin className="icon" />
              Location:
            </div>
            <div className="contact_info_text">
              No A-207, B-205, B-206, KSSIDC Complex, Block-II, Electronic
              City, Hosur Road, Begnaluru - 560 100.
            </div>
          </div>
          <div className="contact_info">
            <div className="contact_info_header">
              <MdEmail className="icon" />
              E-mail:
            </div>
            <div className="contact_info_text">info@nueztpl.co.in</div>
          </div>
          <div className="contact_info">
            <div className="contact_info_header">
              <MdLocalPhone className="icon" />
              Phone:
            </div>
            <div className="contact_info_text">96325-69771</div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Contact
