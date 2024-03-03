import React, { useState } from 'react'
import Section1 from './Portfolio Compoents/Section1'
import Section2 from './Portfolio Compoents/section2'
import Section3 from './Portfolio Compoents/Section3'
import Section4 from './Portfolio Compoents/Section4'
import Footer from './Home/components/Footer'
import Image from 'next/image'
import Header from './Home/components/Header'
import Burger from "public/assets/HomeImages/Group 10.png"

import naqilogo from "public/assets/HomeImages/naqi logo 2.png"



const Portfolio = () => {
  const [open,setOpen]=useState(false)

  return (
 <>
    <div className="Portfolio pb-2">
 
        <div className="container">
          <div
            className="row d-flex align-items-center"
            style={{
              height: "350px",
            }}
          >
         
            <h1 className="about-head">OUR Portfolio</h1>
          </div>
        </div>
      </div>
 <Section1/>
 <Section2/>
 <Section3/>
 <Section4/>
 

 <Footer/>

 </>
  )
}

export default Portfolio