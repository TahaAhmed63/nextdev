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
    <div className="Portfolio">
    <div className="container-fluid">
            <div className="d-flex justify-content-between ">
              <div className="ml-5" style={{
                marginLeft:"20px"
              }}>
<Image alt="" src={naqilogo} className="img-fluid" width="156" height="160" />
              </div>
              <div className="col-md-4 text-end mt-4" style={{
                cursor:"pointer",
                marginTop:"40px"
              }}>
              <Image alt="" src={Burger} className="img-fluid" onClick={()=>{
                setOpen(true)
              }} />
              </div>
            </div>
          
          </div>
        <div className="container">
          <div
            className="row d-flex align-items-start"
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
 <div className={`menu-icon ${open?"cancel":""}`} onClick={()=>setOpen(false)} >

<Header open={open}  />
</div>
 </>
  )
}

export default Portfolio