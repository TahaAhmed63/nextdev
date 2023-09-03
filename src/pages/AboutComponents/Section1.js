import React from "react";
import about1 from "public/assets/HomeImages/Rectangle 29.png";
import about2 from "public/assets/HomeImages/Rectangle 30.png";

import about3 from "public/assets/HomeImages/Rectangle 31.png";

import about4 from "public/assets/HomeImages/Rectangle 32.png";
import Image from "next/image";

const Section1 = () => {
  return (
    <>
      <section className="whowe py-5">
        <h3
          className="text-center"
          style={{
            color: "#000",
            textAlign: "center",
            fontFamily: "Gilroy",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: " 142.383%" /* 45.563px */,
          }}
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="2000"
          data-aos-offset="0"
        >
          Creating a New Genre in <b>Software Coding,</b>
          <br />
          <span
            style={{
              color: "#1EA7E0",
              fontFamily: "Gilroy",
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: "700",
            }}
          >
            The “Classic Coding’’
          </span>
        </h3>
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-6 col-lg-6 col-xl-6 col-xxlg-6 col-sm-12">
              <div className="row gy-4">
                <div
                  className="col-md-6 flex-column d-flex align-items-center"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <Image src={about1} alt="asa" className="img-fluid" />
                </div>
                <div
                  className="col-md-6 flex-column d-flex align-items-center"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <Image src={about2} alt="ass" className="img-fluid" />
                </div>
                <div
                  className="col-md-6 flex-column d-flex align-items-center"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <Image src={about3} alt="assa" className="img-fluid" />
                </div>
                <div
                  className="col-md-6 flex-column d-flex align-items-center"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <Image src={about4} alt="" className="img-fluid " />
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-6 col-xxlg-6 col-sm-12"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <h3
                style={{
                  color: "#000",

                  fontFamily: "Gilroy",
                  fontSize: "30px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                }}
              >
                Who We Are
              </h3>
              <p
                style={{
                  color: "#505050",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "28px" /* 175% */,
                }}
              >
                We are a dynamic and innovative software development company,
                specializing in creating cutting-edge solutions for businesses
                across various industries. Our team of skilled and passionate
                developers, designers, and engineers are committed to delivering
                high-quality software products that drive efficiency,
                productivity, and growth. With a strong focus on customer
                satisfaction, we strive to understand our clients unique needs
                and deliver tailor-made solutions that exceed expectations. Our
                expertise spans across web and mobile applications, cloud
                solutions, and emerging technologies, making us your trusted
                partner for all your software development needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
