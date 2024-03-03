/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useState } from "react";
import image1 from "public/assets/HomeImages/Rectangle 31 (1).png";
import image2 from "public/assets/HomeImages/Rectangle 32 (1).png";
import image3 from "public/assets/HomeImages/Rectangle 33.png";
import image4 from "public/assets/HomeImages/Rectangle 34 (1).png";
import image5 from "public/assets/HomeImages/Rectangle 35.png";
import image6 from "public/assets/HomeImages/Rectangle 36.png";
import Footer from "./Home/components/Footer";

import naqilogo from "public/assets/HomeImages/naqi logo 2.png";
import Burger from "public/assets/HomeImages/Group 10.png";
import Header from "./Home/components/Header";

const Expertise = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="Expertise"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
     
        <div className="container">
          <div
            className="row d-flex align-items-center"
            style={{
              height: "350px",
            }}
          >
            <h1 className="about-head">OUR EXPERTISE</h1>
          </div>
        </div>
      </div>
      <section
        className="listExpertise py-5"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12">
              <h3
                className="text-center"
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Gilroy",
                  fontSize: "32px",
                  fontStyle: "normal",
                  fontWeight: "300",
                }}
              >
                We meet every project’s challenges with innovation{" "}
                <b style={{ fontWeight: 700 }}>,</b>
                <br />
                <span
                  style={{
                    color: "#1EA7E0",
                    fontFamily: "Gilroy",
                    fontSize: "32px",
                    fontStyle: "normal",
                    fontWeight: "700",
                  }}
                >
                  Collaborative{" "}
                </span>
                <b
                  style={{
                    color: "#000",
                    fontFamily: "Gilroy",
                    fontSize: "32px",
                    fontStyle: "normal",
                    fontWeight: "700",
                  }}
                >
                  spirit and the art of
                </b>{" "}
                <span
                  style={{
                    color: "#1EA7E0",
                    fontFamily: "Gilroy",
                    fontSize: "32px",
                    fontStyle: "normal",
                    fontWeight: "700",
                  }}
                >
                  Invention
                </span>{" "}
              </h3>
            </div>
          </div>
        </div>
        <div className="container py-4">
          <div
            className="row"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="col-md-6 col-sm-12 col-lg-6">
              <h4 className="cube-heading"> Digital Marketing</h4>
              <p
                style={{
                  color: "#505050",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "28px",
                }}
              >
                Digital marketing plays a vital role for software development
                companies by enhancing their online presence and driving
                targeted traffic to their websites. Utilizing various strategies
                like search engine optimization (SEO), social media marketing,
                and content creation, it helps in generating leads and
                increasing brand visibility. Through effective digital marketing
                campaigns, software development companies can reach their target
                audience, showcase their expertise, and ultimately attract
                potential clients.
              </p>
              <a
                href=""
                className="pt-4"
                style={{
                  color: "#E8A735",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                }}
              >
                Read More
              </a>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6">
              <Image className="img-fluid" src={image1} alt="asa" />
            </div>
          </div>
        </div>
        <hr />
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-lg-6">
              <Image className="img-fluid" src={image2} alt="asa" />
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 ">
              <h4 className="cube-heading-2"> Graphic Designing</h4>
              <p
                style={{
                  color: "#505050",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "28px",
                }}
              >
                At Next Dve, we specialize in the art of graphic design,
                transforming ideas into captivating visuals. With a team of
                skilled designers, we bring imagination to life, crafting
                stunning graphics that convey your brand's essence. From
                eye-catching logos to intricate illustrations, we tailor our
                expertise to your unique vision. Our passion for creativity,
                coupled with a keen understanding of design principles, enables
                us to deliver designs that make a lasting impact. Next Dve is
                your partner for innovative and memorable graphic solutions that
                resonate with your audience, helping your brand stand out in a
                visually-driven world.
              </p>
              <a
                href=""
                className="pt-4"
                style={{
                  color: "#E8A735",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="container py-4">
          <div
            className="row"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="col-md-6 col-sm-12 col-lg-6">
              <h4 className="cube-heading-3"> Mobile App Development</h4>
              <p
                style={{
                  color: "#505050",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "28px",
                }}
              >
                Our software development company specializes in mobile app
                development, creating innovative and user-friendly applications
                for both iOS and Android platforms. With a team of skilled
                developers and designers, we provide end-to-end solutions, from
                conceptualization to deployment, ensuring seamless performance
                and exceptional user experience. Stay ahead of the competition
                with our custom-built mobile apps tailored to meet your business
                objectives.
              </p>
              <a
                href=""
                className="pt-4"
                style={{
                  color: "#E8A735",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                }}
              >
                Read More
              </a>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6">
              <Image className="img-fluid" src={image5} alt="asa" />
            </div>
          </div>
        </div>
        <hr />
        <div className="container py-4">
          <div
            className="row"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="col-md-6 col-sm-12 col-lg-6">
              <Image className="img-fluid" src={image3} alt="asa" />
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6">
              <h4 className="cube-heading-4"> Mobile Game Development</h4>
              <p
                style={{
                  color: "#505050",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "28px",
                }}
              >
                Our software development company specializes in game
                development, bringing immersive and engaging experiences to
                life. With a team of skilled developers and designers, we create
                innovative games for various platforms, including PC, consoles,
                and mobile devices. From concept development to coding and
                testing, we ensure high-quality games that captivate players and
                deliver exceptional entertainment value. Trust us to transform
                your ideas into addictive gaming experiences.
              </p>
              <a
                href=""
                className="pt-4"
                style={{
                  color: "#E8A735",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="container py-4">
          <div
            className="row"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="col-md-6 col-sm-12 col-lg-6">
              <h4 className="cube-heading"> Cloud Computing</h4>
              <p
                style={{
                  color: "#505050",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "28px",
                }}
              >
                Next Dev excels in delivering cutting-edge cloud services that
                empower businesses to thrive in the digital era. With a
                deep-rooted expertise in cloud architecture, deployment, and
                optimization, we craft tailored solutions that seamlessly
                integrate with your unique requirements. Leveraging our advanced
                knowledge, we help businesses harness the full potential of
                cloud computing, enabling scalability, security, and efficiency.
                Whether it's public, private, or hybrid cloud solutions, Next
                Dve is your trusted partner in navigating the complexities of
                modern cloud technology. Our commitment to innovation and
                customer success drives us to provide top-tier services that
                drive business growth.
              </p>
              <a
                href=""
                className="pt-4"
                style={{
                  color: "#E8A735",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                }}
              >
                Read More
              </a>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6">
              <Image className="img-fluid" src={image6} alt="asa" />
            </div>
          </div>
        </div>
        <hr />
        <div className="container py-4">
          <div
            className="row"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="col-md-6 col-sm-12 col-lg-6">
              <Image className="img-fluid" src={image4} alt="asa" />
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6">
              <h4 className="cube-heading-5"> Web Design & Development</h4>
              <p
                style={{
                  color: "#505050",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "28px",
                }}
              >
                Our software development company specializes in web development
                services, offering cutting-edge solutions to help businesses
                establish a strong online presence. With a team of skilled
                developers and designers, we create responsive and user-friendly
                websites tailored to meet our clients' specific needs. From
                front-end design to back-end functionality, we deliver
                high-quality web development services that drive engagement and
                boost business growth.
              </p>
              <a
                href=""
                className="pt-4"
                style={{
                  color: "#E8A735",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Expertise;
