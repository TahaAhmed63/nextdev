import React, { useEffect } from 'react'
import Image from 'next/image'

import firstimg from 'public/assets/HomeImages/Rectangle 11.png'
import secondimg from 'public/assets/HomeImages/Rectangle 12.png'
import thirdimg from 'public/assets/HomeImages/Rectangle 13.png'
import naqilogo from "public/assets/HomeImages/naqi logo 2.png";

import fourthimg from 'public/assets/HomeImages/Rectangle 14.png'
import fifthimg from 'public/assets/HomeImages/Rectangle 15.png'
import Aos from 'aos'
import Link from 'next/link'

const Section3 = () => {
  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = "skyblue";
    e.target.style.color = "white";
  };
  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = "transparent"
    e.target.style.color = "black";
  };
  useEffect(() => {
    Aos.init({
      duration: 800,
    
   
    });

    // Add a scroll event listener
    const handleScroll = () => {
      Aos.refresh(); // Refresh AOS when the page scrolls
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
  <>
  <secton className="sec-3">
<div className='container'>
    <div className='row gy-5 gx-4 mx-auto my-4'>
        <div className='col-md-12 col-sm-12 '>
            <h4 className='text-center'style={{
                color: "#000",
                fontFamily: "Gilroy",
                fontSize: "32px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "58.5px"
            }}  data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            Our <span style={{
                color: "#1EA7E0",
                fontFamily: "Gilroy",
                fontSize: "32px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "58.5px"
            }}>Expertise
</span>             </h4>
            <p className='text-center'  data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">We specialize in delivering innovative and scalable software solutions tailored to meet your unique business needs. </p>
        </div>
        <div className='col-xxl-6 col-lg-6 col-md-6 col-sm-12 '>
        <div class="image-container"  data-aos="fade-right"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine">

<Image src={firstimg} className='home-img' alt='asa' />
<div class="overlay">
<Image src={naqilogo}  alt='asa' />

  </div>
  </div>
</div>
<div className='col-xxl-6 col-lg-6 col-md-6 col-sm-12 '>
<div class="image-container"  data-aos="fade-left"  data-aos-offset="500"
            data-aos-easing="ease-in-sine">

<Image src={secondimg} className='home-img' alt='asa'/>
<div class="overlay">
<Image src={naqilogo}  alt='asa' />
  </div>
  </div>
</div>
<div className='col-xxl-4 col-lg-4 col-md-4 col-sm-12 '>
<div class="image-container"data-aos="fade-left"  data-aos-offset="500"
            data-aos-easing="ease-in-sine" >

<Image src={thirdimg} className='home-img' alt='asa'/>
<div class="overlay">
<Image src={naqilogo}  alt='asa' />
  </div>
  </div>
</div>
<div className='col-xxl-4 col-lg-4 col-md-4 col-sm-12 '>
<div class="image-container" data-aos="fade-down"  data-aos-offset="500"
            data-aos-easing="ease-in-sine">


<Image src={fourthimg} className='home-img' alt='asa'/> 
<div class="overlay">
<Image src={naqilogo}  alt='asa' />
  </div>
  </div>
</div>
<div className='col-xxl-4 col-lg-4 col-md-4 col-sm-12 '>
<div class="image-container" data-aos="fade-left"  data-aos-offset="500"
            data-aos-easing="ease-in-sine">

<Image src={fifthimg} className='home-img' alt='asa'/>
<div class="overlay">
<Image src={naqilogo}  alt='asa' />
  </div>
</div>
</div>
<div className='col-md-12 col-sm-12 text-center'>

<Link href="/Expertise"><button style={{
    width: "143px",
    height: "53px",
    border: "2px solid #000",
    background: "transparent",
    transition: "background-color 0.3s"
}}        onMouseOver={handleMouseOver}

   onMouseOut={handleMouseOut}
>See Detail</button></Link>
</div>
     
    </div>
</div>
  </secton>
  
  </>
  )
}

export default Section3