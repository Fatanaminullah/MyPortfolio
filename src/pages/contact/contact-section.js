import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const ContactComponent = ({ data }) => {
  const [formValue, setFormValue] = useState({ to_name: "Fatan" });
  const [loading, setLoading] = useState(false);
  const { address, phone, email, contactMessage } = data;
  const { city, state } = address;
  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const { from_name, subject, reply_to, message } = formValue;
    if (from_name && subject && reply_to && message) {
      console.log("submit", formValue);
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID_EMAILJS,
          process.env.REACT_APP_TEMPLATE_ID_EMAILJS,
          formValue
        )
        .then((res) => {
          document.getElementById("contactForm").reset();
          Swal.fire({
            icon: "success",
            title: "Your message was sent, thank you!",
          });
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Sorry.. Something went wrong, please try again later",
          });
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Please fill all required field",
      });
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>
        <div className="ten columns">
          <p className="lead">{contactMessage}</p>
        </div>
      </div>
      <div className="row">
        <div className="eight columns">
          <form onSubmit={onSubmit} id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="from_name">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="from_name"
                  name="from_name"
                  onChange={onChange}
                />
              </div>
              <div>
                <label htmlFor="subject">
                  Subject <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="subject"
                  name="subject"
                  onChange={onChange}
                />
              </div>
              <div>
                <label htmlFor="reply_to">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="reply_to"
                  name="reply_to"
                  onChange={onChange}
                />
              </div>
              <div>
                <label htmlFor="message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="5"
                  id="message"
                  name="message"
                  onChange={onChange}
                ></textarea>
              </div>
              <div>
                <button className="submit" onClick={(e) => onSubmit(e)}>
                  Submit
                </button>
                {loading && (
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                )}
              </div>
            </fieldset>
          </form>
        </div>
        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {city}, {state}
              <br />
              <a
                href="mailto:fatan.aminullah.j@gmail.com"
                target="_blank"
                style={{ color: "#636363" }}
              >
                <i class="fa fa-envelope"></i>
                <span
                  style={{ marginLeft: "5px", textDecoration: "underline" }}
                >
                  {email}
                </span>
              </a>
              <br />
              <a
                href="https://api.whatsapp.com/send?phone=6282113705067&text=Halo salam kenal fatan"
                target="_blank"
                style={{ color: "#636363" }}
              >
                <i className="fa fa-phone"></i>
                <span
                  style={{ marginLeft: "5px", textDecoration: "underline" }}
                >
                  {phone}(WhatsApp)
                </span>
              </a>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};
export default ContactComponent;
