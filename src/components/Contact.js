import React from "react";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Contact = () => {
  const {
    register,
    formState: { error },
    handleSubmit,
  } = useForm(null);

  const onSubmit = () => {};

  return (
    <div id="contacts">
      <div className="page-section">
        <div className="contact-section">
          <h1 className="section-header white-txt">Get In Touch</h1>

          <p>
            I'm seeking out for an opportunity to work as an Web Developer. Feel
            free to contact me via email or phone.
          </p>
          <div className="contact-details">
            <div>
              <BsFillTelephoneFill /> <span>+64 22 356 7240</span>
            </div>
            <div>
              <MdEmail />{" "}
              <span>
                <a href="mailto:malkasam07@gmail.com">malkasam07@gmail.com</a>
              </span>
            </div>
            <div>
              <AiFillLinkedin />{" "}
              <span>
                <a href="https://nz.linkedin.com/" target="blank">
                  LinkedIn
                </a>
              </span>
            </div>
            <div>
              <AiFillGithub />{" "}
              <span>
                <a href="https://github.com/SamMalka07" target="blank">
                  GitHub
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
