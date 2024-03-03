import React, { useState } from 'react'
import Section1 from './AboutComponents/Section1'
import Section2 from './AboutComponents/Section2'
import Section3 from './AboutComponents/Section3'
import Burger from "public/assets/HomeImages/Group 10.png"
import Footer from './Home/components/Footer'
import Image from 'next/image'
import naqilogo from "public/assets/HomeImages/naqi logo 2.png"
import Header from './Home/components/Header'

const About = () => {
  const [open,setOpen]=useState(false)
  return (
 <>

 <div className="about max-limit" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">

  <div className="container max-limit">
    <div className="row d-flex align-items-center"  data-aos="zoom-in" style={{
      height:"350px"
    }}>
   
<h1 className='about-head'>ABOUT US</h1>
    </div>
  </div>
 </div>

<Section1/>
<Section2/>
<Section3/>
<Footer/>

 </>
  )
}

export default About