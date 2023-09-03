import React from "react";
import myimg from "public/assets/HomeImages/Group 57.png";
import Image from "next/image";
const Section3 = () => {
  return (
    <div>
      <div className="container py-5 mt-5">
        <div className="row">
          <div
            className="col-md-6"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Image src={myimg} alt="asa" className="img-fluid" />
          </div>
          <div
            className="col-md-6"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h3
              style={{
                color: "#000",
                fontFamily: "Gilroy",
                fontSize: "48px",
                fontStyle: "normal",
                fontWeight: 300,
                width: "70%",
                lineHeight: "61.5px",
              }}
            >
              We
              <span
                style={{
                  color: "#1EA7E0",
                  fontFamily: "Gilroy",
                  fontSize: "48px",
                  fontStyle: "normal",
                  fontWeight: 800,
                  lineHeight: "61.5px",
                }}
              >
                NEXDEV
              </span>{" "}
              <span
                style={{
                  color: "#000",
                  fontFamily: "Gilroy",
                  fontSize: "48px",
                  fontStyle: "normal",
                  fontWeight: 800,
                  lineHeight: "61.5px",
                }}
              >
                {" "}
                Have A{" "}
              </span>{" "}
              <span
                style={{
                  color: "#1EA7E0",
                  fontFamily: "Gilroy",
                  fontSize: "48px",
                  fontStyle: "normal",
                  fontWeight: 800,
                  lineHeight: "61.5px",
                }}
              >
                Perfect Solution!
              </span>{" "}
            </h3>
            <p
              className="mt-5"
              style={{
                color: "#505050",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "28px",
              }}
            >
              At NEXDEV, we pride ourselves on providing the perfect solution
              for all your software development needs. Our expert team of
              developers and engineers are equipped with the latest technologies
              and industry knowledge to deliver top-notch results. With our
              proven track record and client satisfaction, you can trust us to
              bring your software ideas to life seamlessly. Experience the
              excellence of NEXDEV and take your software projects to new
              heights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
