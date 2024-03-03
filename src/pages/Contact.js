import React, { useState } from 'react'

import Burger from "public/assets/HomeImages/Group 10.png"
import Footer from './Home/components/Footer'
import Image from 'next/image'
import naqilogo from "public/assets/HomeImages/naqi logo 2.png"
import imgcont from "public/assets/HomeImages/Contact.png.png"


const Contact = () => {
  const [open,setOpen]=useState(false)

  return (
 <>

 <div className="about" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">

  <div className="container">
    <div className="row d-flex align-items-center"  data-aos="zoom-in" style={{
      height:"350px"
    }}>
   
<h1 className='about-head'>Contact US</h1>
    </div>
  </div>
 </div>
 <section className='p-5' style={{

 }}>
 <div className='row py-3'>
    <div className="col-md-12">
        <h3 className="text-center" style={{
            width:"80%",
            margin:"0 auto",
            color: "#000",
            textAlign: "center",
            fontFamily: "Gilroy",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "58.5px"

        }}>
        At <span style={{
              color: "#1EA7E0",
              fontFamily: "Gilroy",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "58.5px"
        }}>NEXDEV,</span> we love to discuss about unique ideas 
and budding talents.,<b>Feel free to contact us!</b> 
        </h3>
    </div>
 </div>
 <div className="container">
    <div className="row py-3 gy-3">
        <div className="col-md-6" data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <h2 className='py-3'>Our Address</h2>
            <div className="row" data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <div className="col-md-6">
                    <Image src={imgcont} width="100%" height="100%" alt='asa' className='contact-mg'/>
                </div>
                <div className="col-md-6">
                    <h4>NEXDEV VISION</h4>
                    <p>496 Block Sectors 16-A Bufferzone Karachi .</p>
<a href='mailto:nexdev.vision@gmail.com' style={{color:"#000"}}>Email us:  nexdev.vision@gmail.com</a>
<p>Call us: ++61 468 430 574 </p>
                </div>
<div className="col-md-12" data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="1500">
    <h1>Send us a Message</h1>
    <p>If you want to have a word with us, or simply want to get in touch to get fascinated by our success story, fill in the form below</p>
 
    <div className="form row" data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="1500">

    <div className="form-floating rounded-0 col-md-6">
      <input
        type="email"
        className="form-control rounded-0"
        id="floatingInput"
        placeholder="name"
      />
      <label htmlFor="floatingInput">Name</label>
    </div>


    <div className="form-floating rounded-0 mb-3 col-md-6">
      <input
        type="email"
        className="form-control rounded-0"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label htmlFor="floatingInput">Email address</label>
    
  </div>
  <div className=" col-md-12">
    <div className="form-floating rounded-0 mb-3  col-md-12">
      <input
        type="email"
        className="form-control rounded-0"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label htmlFor="floatingInput">Subject</label>
    </div>
  </div>
  <div className=" col-md-12">
    <div className="form-floating rounded-0 col-md-12">
      <textarea
        className="form-control rounded-0"
        placeholder="Leave a comment here"
        id="floatingTextarea2"
        style={{ height: 100 }}
        defaultValue={""}
      />
      <label htmlFor="floatingTextarea2">Comments</label>
    </div>
  </div>
</div>
<button type="button" class="btn btn-outline-primary rounded-0 mt-3 p-2">Send a message</button>

</div>
</div>
            </div>
            <div className="col-md-6">
            </div>
        </div>

    </div>
    </section>

      <Footer />
 </>
)
}

export default Contact