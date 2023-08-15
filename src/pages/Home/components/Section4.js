import React, { useEffect } from "react";
import girl from "./../../../assets/HomeImages/Girl-Using-Laptop-Office-Transparent-PNG 1a.png";
import Image from "next/image";
import Aos from "aos";
const Section4 = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
    });

    // Add a scroll event listener
    const handleScroll = () => {
      Aos.refresh(); // Refresh AOS when the page scrolls
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section className="talent-hub pt-5 mt-5">
        <div
          className="overlay-sec d-flex align-items-center "
          data-aos="flip-left"
          data-aos-anchor-placement="top-bottom"
          data-aos-easing="ease-out-cubic "
          data-aos-duration="2000"
        >
          <div className="container-fluid">
            <div className="container">
              <div className="row ">
                <div
                  className="col-md-6 col-sm-6 d-flex justify-content-center flex-column"
                  style={{
                    width: "50%",
                  }}
                >
                  <h5
                    className="sec-4-head w-80"
                    data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"
                  >
                    A Talent Hub Where
                    <span>Technology Meets</span>
                    &nbsp;
                    <span className="imi">Imagination</span>
                  </h5>
                  <p
                    className="sec-4-para"
                    data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"
                  >
                    Where Imagination Meets Software Development! In todays
                    fast-paced world, where technology continues to evolve,
                    software development companies play a vital role in shaping
                    the future. This is aims to celebrate the seamless
                    integration of imagination and technology in creating
                    innovative software solutions.
                  </p>
                </div>
                {/* <div className="col-md-6 col-sm-6">
        <Image  src={girl} className="img-fluid text-center " alt="asa"/>
         
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section4;
