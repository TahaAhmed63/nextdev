import React from "react";
import image1 from "../../assets/HomeImages/image 3.png";
import image2 from "../../assets/HomeImages/image 4.png";

import image3 from "../../assets/HomeImages/image 5.png";
import Image from "next/image";

const Section3 = () => {
  return (
    <>
      <secion className="">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4 col-sm-12 col-lg-4 d-flex flex-column align-items-center" data-aos="fade-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
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
                As Technologies continues to grow and evolve, we stick to the
                core aim behind our existence i.e. to enable businesses to
                operate more swiftly and efficiently. To stay focused on this
                aim, Technologies devised a set of core values that we follow
                all the time. Our core values define who we are and what the
                purpose is behind our existence.
              </p>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4 d-flex flex-column align-items-center" data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
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
              <p       style={{
                  color: "#505050",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "28px",
                  letterSpacing: "-0.24px",
                }}>
                Our mission is to make technology an asset for the business
                world; not a headache. To succeed in achieving this goal,
                innovative and affordable technology solutions, based on our
                brilliant in-house ideas. We aim to be the partner-of-choice for
                enterprises all across the globe, providing them with cutting
                edge applications, blended with a perfect mix of creativity and
                innovation.
              </p>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4 d-flex flex-column align-items-center" data-aos="fade-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
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
              <p       style={{
                  color: "#505050",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "28px",
                  letterSpacing: "-0.24px",
                }}>
                The vision that drives Technologies is to be the leading web and
                mobile application developer in Pakistan, representing our
                nation on the global platform in the brightest possible way.
                With our radars constantly looking for amazing talent,
                Technologies aims to reshape the business world via its cutting
                edge coding and development. Technologies is the best place for
                people who live in present, having the future in their vision.
              </p>
            </div>
          </div>
        </div>
      </secion>
    </>
  );
};

export default Section3;
