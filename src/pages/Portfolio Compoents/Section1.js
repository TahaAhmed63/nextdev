import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arrow from "public/assets/HomeImages/down-arrow (1).png";
import Image from 'next/image';
import iconimg from "public/assets/HomeImages/Group (2).png";
import iconimg1 from "public/assets/HomeImages/Group (3).png";
import iconimg2 from "public/assets/HomeImages/Group 39 (1).png";
import { useMediaQuery } from 'react-responsive';

const Section1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;
  const responsiveSettings = [
    {
      breakpoint: 767, // Breakpoint for mobile
      settings: {
        slidesToShow: 1, // Show 1 slide on mobile
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991, // Breakpoint for tablet
      settings: {
        slidesToShow: 2, // Show 2 slides on tablet
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1199, // Breakpoint for larger screens (e.g., desktop)
      settings: {
        slidesToShow: 3, // Show 3 slides on desktop
        slidesToScroll: 1,
      },
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, 
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true, // Set the slider to be vertical
    verticalSwiping: true, // Enable vertical swiping
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: responsiveSettings, // Apply responsive settings

  };

  const handleNextSlide = () => {
    const nextSlide = (currentSlide + 1) % totalSlides;
    setCurrentSlide(nextSlide);
  };

  const handlePrevSlide = () => {
    const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    setCurrentSlide(prevSlide);
  };

  return (
    <div className="container my-5">
   
      <div className="row">
        <div className="col-md-6 col-lg-6">
        <div className="slider-wrap">
          <Slider {...settings}>
            <div className="slide-box">
              <div className="row">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <Image src={iconimg} alt='asa' className='text-center'/>
                </div>
                <div className="col-md-8">
                  <h6  style={{  color: "#000",
  fontFamily: "Gilroy",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 800,
  lineHeight: "58.5px"}}>Digital Marketing</h6>
                  <p style={{  color: "#505050",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "28px"}}>Utilize targeted digital marketing strategies to drive growth and increase brand visibility for your company.</p>
                </div>
              </div>
            </div>
            <div className="slide-box">
              <div className="row">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <Image src={iconimg1} alt='asa' className='text-center'/>
                </div>
                <div className="col-md-8">
                  <h6  style={{  color: "#000",
  fontFamily: "Gilroy",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 800,
  lineHeight: "58.5px"}}>Mobile App Development</h6>
                  <p>Experience seamless mobile app development solutions tailored to your business needs with our company.</p>
                </div>
              </div>
            </div>
            <div className="slide-box">
              <div className="row">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <Image src={iconimg2} alt='asa' className='text-center'/>
                </div>
                <div className="col-md-8">
                  <h6 style={{  color: "#000",
  fontFamily: "Gilroy",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 800,
  lineHeight: "58.5px"}}>Branding & Design</h6>
                  <p style={{  color: "#505050",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "28px"}}>Elevating software solutions through innovative design and compelling branding strategies.</p>
                </div>
              </div>
            </div>
            <div className="slide-box">
              <div className="row">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <Image src={iconimg2} alt='asa' className='text-center'/>
                </div>
                <div className="col-md-8">
                  <h6 style={{  color: "#000",
  fontFamily: "Gilroy",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 800,
  lineHeight: "58.5px"}}>Branding & Design</h6>
                  <p style={{  color: "#505050",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "28px"}}>Elevating software solutions through innovative design and compelling branding strategies.</p>
                </div>
              </div>
            </div>
            <div className="slide-box">
              <div className="row">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <Image src={iconimg2} alt='asa' className='text-center'/>
                </div>
                <div className="col-md-8">
                  <h6  style={{  color: "#000",
  fontFamily: "Gilroy",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 800,
  lineHeight: "58.5px"}}>Branding & Design</h6>
                  <p style={{  color: "#505050",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "28px"}}>Elevating software solutions through innovative design and compelling branding strategies.</p>
                </div>
              </div>
            </div>
          </Slider>
          </div>
          <div
            className='arrow'
            onClick={handleNextSlide}
            style={{ cursor: "pointer" }}
          ></div>
         
        </div>
        <div className="col-md-6 col-lg-6 my-5 pt-5"     data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine">
            <h3 style={{
                 color: "#000",
                 width:"49%",
                 fontFamily: "Gilroy",
                 fontSize: "48px",
                 fontStyle: "normal",
                 fontWeight: 300,
                 lineHeight: "49.5px"
            }}>
            Our <span style={{
                 color: "#000",
                 fontFamily: "Gilroy",
                 fontSize: "48px",
                 fontStyle: "normal",
                 fontWeight: 800,
                 lineHeight: "49.5px"
            }}>Awesome </span>
            <span style={{
                 color: "#1EA7E0",
                 fontFamily: "Gilroy",
                 fontSize: "48px",
                 fontStyle: "normal",
                 fontWeight: 800,
                 lineHeight: "49.5px"
            }}>Services</span>

            </h3>
            <p style={{
                 color: "#505050",
                 fontFamily: "Roboto",
                 fontSize: "16px",
                 fontStyle: "normal",
                 fontWeight: 400,
                 lineHeight: "28px"
            }}>
         Introducing our awesome software development service, where innovation meets excellence. With our team of skilled developers and cutting-edge technologies, we deliver customized solutions tailored to your business needs.<br/>
            <br/>
            Experience seamless collaboration, timely delivery, and unmatched quality with our exceptional service. Let us bring your ideas to life and empower your business for success. 

            </p>
            <button className='mt-3 slider-btn' style={{
    width: "143px",
    height: "53px",
    border:" 2px solid #000",
  background:"transparent"

  }}>Hire me</button>
          </div>
        </div>
  
      </div>

  );
};

export default Section1;
