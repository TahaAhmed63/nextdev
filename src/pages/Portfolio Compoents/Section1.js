import React, { useEffect, useState } from 'react';
import arrow from "./../../assets/HomeImages/down-arrow (1).png";
import Image from 'next/image';
import SwipeableViews from 'react-swipeable-views';
import iconimg from "./../../assets/HomeImages/Group (2).png"
import iconimg1 from "./../../assets/HomeImages/Group (3).png"
import iconimg2 from "./../../assets/HomeImages/Group 39 (1).png"
import { useMediaQuery } from 'react-responsive'; // Import a responsive library if needed


const Section1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Change this number based on the total number of slides you have

  const handleChangeIndex = (index) => {
    setCurrentSlide(index);
  };

  const handleNextSlide = () => {
    const nextSlide = (currentSlide + 1) % totalSlides;
    console.log(nextSlide)
    setCurrentSlide(nextSlide);
  };

  const handlePrevSlide = () => {
    const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    setCurrentSlide(prevSlide);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000); // Change the delay (in milliseconds) here for autoplay

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);


  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="slider-wrap my-5">
              <SwipeableViews
                enableMouseEvents
                className='slide'
                axis="y" // Make it vertical
                index={currentSlide}
                onChangeIndex={handleChangeIndex}
                style={{ height: '100%' }}
                containerStyle={{ height: '100%' }}
              >
                {/* Add your slide boxes here */}
                <div className="slide-box">
                  {/* Add your content for the first slide here */}
                  <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
<Image src={iconimg} alt='asa' className='text-center'/>
                    </div>
                    <div className="col-md-8">
               <h6 style={{  color: "#000",
  fontFamily: "Gilroy",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 800,
  lineHeight: "58.5px"}}>
               Digital Marketing
               </h6>
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
               <h6 style={{  color: "#000",
  fontFamily: "Gilroy",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 800,
  lineHeight: "58.5px"}}>
Mobile App Development               </h6>
<p style={{  color: "#505050",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "28px"}}>Experience seamless mobile app development solutions tailored to your business needs with our company.</p>
                    </div>
                  </div>
                  {/* Add your content for the second slide here */}
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
  lineHeight: "58.5px"}}>
Branding & Design               </h6>
<p style={{  color: "#505050",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "28px"}}>Elevating software solutions through innovative design and compelling branding strategies.</p>
                    </div>
                  </div>
                  {/* Add your content for the third slide here */}
                </div>
                <div className="slide-box">
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
<Image src={iconimg} alt='asa' className='text-center'/>
                    </div>
                    <div className="col-md-8">
               <h6 style={{  color: "#000",
  fontFamily: "Gilroy",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 800,
  lineHeight: "58.5px"}}>
               Digital Marketing
               </h6>
<p style={{  color: "#505050",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "28px"}}>Utilize targeted digital marketing strategies to drive growth and increase brand visibility for your company.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
<Image src={iconimg1} alt='asa' className='text-center'/>
                    </div>
                    <div className="col-md-8">
               <h6 style={{  color: "#000",
  fontFamily: "Gilroy",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 800,
  lineHeight: "58.5px"}}>
Mobile App Development               </h6>
<p style={{  color: "#505050",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "28px"}}>Experience seamless mobile app development solutions tailored to your business needs with our company.</p>
                    </div>
                  </div>
                  {/* Add your content for the first slide here */}
                </div>

                <div className="slide-box">
                  {/* Add your content for the second slide here */}
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
  lineHeight: "58.5px"}}>
Branding & Design               </h6>
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
  lineHeight: "58.5px"}}>
Branding & Design               </h6>
<p style={{  color: "#505050",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "28px"}}>Utilize targeted digital marketing strategies to drive growth and increase brand visibility for your company.</p>
                    </div>
                  </div>
                  {/* Add your content for the third slide here */}
                </div>
                <div className="slide-box">
                    <div className="row">
                  {/* Add your content for the second slide here */}
                  <div className="col-md-4 d-flex justify-content-center align-items-center">
<Image src={iconimg2} alt='asa' className='text-center'/>
                    </div>
                    <div className="col-md-8">
               <h6 style={{  color: "#000",
  fontFamily: "Gilroy",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 800,
  lineHeight: "58.5px"}}>
Branding & Design               </h6>
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
  lineHeight: "58.5px"}}>
Branding & Design               </h6>
<p style={{  color: "#505050",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "28px"}}>Elevating software solutions through innovative design and compelling branding strategies.</p>
                    </div>
                  {/* Add your content for the third slide here */}
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
  lineHeight: "58.5px"}}>
Branding & Design               </h6>
<p style={{  color: "#505050",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "28px"}}>Elevating software solutions through innovative design and compelling branding strategies.</p>
                    </div>
                    </div>           {/* Add your content for the third slide here */}
                </div>
      
                {/* Add other slides here */}
              </SwipeableViews>
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
            <button className='mt-3' style={{
    width: "143px",
    height: "53px",
    border:" 2px solid #000",
  background:"transparent"

  }}>Hire me</button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Section1;
