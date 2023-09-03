import React from "react";
import image1 from "public/assets/HomeImages/image 3.png";
import image2 from "public/assets/HomeImages/image 4.png";

import image3 from "public/assets/HomeImages/image 5.png";
import Image from "next/image";

const Section3 = () => {
  return (
    <>
      <secion className="">
        <div className="container py-5">
          <div className="row">
            <div
              className="col-md-4 col-sm-12 col-lg-4 d-flex flex-column align-items-center"
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Image src={image3} alt="asa" className="img-fluid text-center" />
              <h6
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: " Roboto",
                  fontSize: "32px",
                  fontStyle: " normal",
                  fontWeight: "300",
                  lineHeight: "normal",
                }}
              >
                OUR VISION
              </h6>
              <p
                style={{
                  color: "#505050",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "28px",
                  letterSpacing: "-0.24px",
                }}
              >
                Our vision is to revolutionize the software development industry
                by delivering innovative and cutting-edge solutions that exceed
                client expectations. We strive to be the go-to partner for
                businesses worldwide, offering seamless integration, exceptional
                quality, and unmatched customer satisfaction. Through our
                passion for technology and commitment to excellence, we aim to
                empower organizations and drive their success in the digital
                era.
              </p>
            </div>
            <div
              className="col-md-4 col-sm-12 col-lg-4 d-flex flex-column align-items-center"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Image src={image2} alt="asa" className="img-fluid text-center" />
              <h6
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: " Roboto",
                  fontSize: "32px",
                  fontStyle: "normal",
                  fontWeight: "300",
                  lineHeight: "normal",
                }}
              >
                OUR MISSION
              </h6>
              <p
                style={{
                  color: "#505050",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "28px",
                  letterSpacing: "-0.24px",
                }}
              >
                Our mission is to deliver exceptional software solutions that
                empower businesses to thrive in the digital era. Through
                innovative technologies and a customer-centric approach, we
                strive to exceed expectations, drive growth, and foster
                long-term partnerships. Our dedication to quality, agility, and
                continuous improvement ensures that we remain at the forefront
                of the software development industry.
              </p>
            </div>
            <div
              className="col-md-4 col-sm-12 col-lg-4 d-flex flex-column align-items-center"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Image src={image1} alt="asa" className="img-fluid text-center" />
              <h6
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "32px",
                  fontStyle: "normal",
                  fontWeight: "300",
                  lineHeight: "normal",
                }}
              >
                OUR VALUES
              </h6>
              <p
                style={{
                  color: "#505050",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "28px",
                  letterSpacing: "-0.24px",
                }}
              >
                The core values of our software development company are
                innovation, quality, and customer satisfaction. We strive to
                constantly push the boundaries of technology, deliver
                exceptional solutions, and exceed our clients expectations. Our
                commitment to these values ensures that we create impactful and
                cutting-edge software products that drive success for ours
                clients.
              </p>
            </div>
          </div>
        </div>
      </secion>
    </>
  );
};

export default Section3;
