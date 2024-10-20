import React from "react";
import "../Css/Contact.css";
export default function Contact() {
  return (
    <>
      <div className="background">
        <div className="bimg">
          <div className="card">
            <h1 className="heading-get">Get in Touch with us!</h1>
            <div className="cardc">
              <div class="flex-container">
                <div class="flex-item-left">
                  <p id="flex-item-left-p">
                    Welcome to the Entrepreneurship Cell at National institue of
                    technology Jamshedpur! We value your interest and inquiries.
                    Whether you're a student, an aspiring entrepreneur, or a
                    potential collaborator, we're here to assist you.
                  </p>
                  {/* Icons Section */}
                  <div className="contact-info">
                    <div className="icon-box">
                      <i
                        style={{ color: "red" }}
                        className="fas fa-map-marker-alt"
                      ></i>
                      <p>NIT Jsr, Adityapur 2, Jamshedpur, Jharkhand</p>
                    </div>
                    <div className="icon-box">
                      <i
                        style={{ color: "gray" }}
                        className="fas fa-envelope"
                      ></i>
                      <p>Email: ecell@nitjsr.ac.in</p>
                    </div>
                    <div className="icon-box">
                      <i className="fas fa-phone-alt"></i>
                      <p>Contact: +91 987654321</p>
                    </div>
                  </div>
                </div>
                <div class="flex-item-right">
                  <form>
                    <input
                      type="text"
                      className="name"
                      placeholder="Your name.."
                    />
                    <input
                      type="email"
                      classNamename="email"
                      placeholder="Your email.."
                    />
                    <textarea
                      name="message"
                      placeholder="your message..."
                      style={{ height: "200px" }}
                    ></textarea>
                    <button type="submit" className="btn">
                      Send message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Google map  */}
          <div className="cardlocation">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.6862438769044!2d86.14154107476308!3d22.77702232544793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e4daa475a5cd%3A0xd87b53fadcd771a1!2sNational%20Institute%20of%20Technology%20Jamshedpur%20(NIT%20Jamshedpur)!5e0!3m2!1sen!2sin!4v1729320622204!5m2!1sen!2sin"
              width="100%"
              height="450px"
              allowfullscreen=""
              loading="lazy"
              className="location"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
