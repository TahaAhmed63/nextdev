import React, { useEffect, useState } from "react";
import naqilogo from "public/assets/HomeImages/naqi logo 2.png";
import Image from "next/image";
import Burger from "public/assets/HomeImages/Group 10.png";
import Header from "./Header";
import Aos from "aos";
const Banner = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
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
    <div>
      <div
        className="conatiner-fluid main-banner"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        {/* <svg style={
            {
                position:"absolute"
            }
        }
          xmlns="http://www.w3.org/2000/svg"
          width="831"
          height="659"
          viewBox="0 0 831 659"
          className="main-banner-overlay"
          fill="none"
        >
          <path opacity="0.2" d="M831 659L282 -1H-3V659H831Z" fill="#1EA7E0" />
        </svg> */}
        <header>
          <div className="container-fluid">
            <div className="d-flex justify-content-between ">
              <div
                className="ml-5"
                style={{
                  marginLeft: "20px",
                }}
              >
                <Image
                  alt=""
                  src={naqilogo}
                  className="img-fluid"
                  width="156"
                  height="160"
                />
              </div>
              <div
                className="col-md-4 text-end mt-3"
                style={{
                  cursor: "pointer",
                  marginTop: "40px",
                }}
              >
                <Image
                  alt=""
                  src={Burger}
                  className="img-fluid"
                  onClick={() => {
                    setOpen(true);
                  }}
                />
              </div>
            </div>
          </div>
        </header>
        <div
          className="container d-flex flex-direction-column justify-content-center align-items-center main-head h-100"
          style={{
            height: "382px !important",
          }}
        >
          <div className="row">
            <div
              className="col-md-6 "
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <h1 className="h1-ban">
                Work Is Fun Here With <span className="span-1">NEXDEV </span>
                <span className="span-2">VISION</span>{" "}
              </h1>
              <p className="p-ban">
                To be a leading software development company, delivering
                innovative solutions that transform businesses and empower users
                in an increasingly digital world.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`menu-icon ${open ? "cancel" : ""}`}
        onClick={() => setOpen(false)}
      ></div>
      <Header open={open} />
    </div>
  );
};

export default Banner;
