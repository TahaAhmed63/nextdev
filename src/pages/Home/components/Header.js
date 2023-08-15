/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import naqilogo from "./../../../assets/HomeImages/naqi logo 2.png"
import arrow from "./../../../assets/HomeImages/download (1).png"
import Image from 'next/image'
import Aboutimage from "./../../../assets/HomeImages/about.webp"
import service from "./../../../assets/HomeImages/servicess.webp"
import woman from "./../../../assets/HomeImages/women.228d302a144763c0867b.webp"
import about from "./../../../assets/HomeImages/Hero-image-Company-page.webp"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = (props) => {
    const {open}=props
    useEffect(() => {
      AOS.init({
        duration: 800, // Animation duration
        easing: 'ease-in-out', // Easing for the animation
        once: true, // Whether to animate elements only once
      });
    }, []);

  return (
    <>


<div className={`menu-area ${open? "active":""} row d-flex gx-1`}>


      {/* <div className="menu-col1 one">
        <div className="pt d-flex justify-content-center" >
          <Image
            alt="abc"
            src={naqilogo}
            className="lazy-img mb-5"
            data-class="lazy-img"
            width="120"
            height="110"
          />
        </div>
        <div id="menu-main-area">
          <ul className="menu-item-hover pt-0" style={{
            paddingTop:"0px !important"
          }}>
            <h3 className="htdo">About Us</h3>
            {/* <p className="textcol menu-item as1">
              Branex, An Award Winning Web Development Agency in Dubai.
            </p>
            <p className="textcol1 menu-item as1">
              We are Branex, a creative development agency with a diversely
              creative team, working together to craft out-of-the-box designs
              for you. We are a full service creative agency that simply
              believes in making digital success stories. We specialize in
              Website and mobile app Design &amp; Development, Print Designing,
              Digital Marketing, &amp; Portfolio Management.
            </p> */}
            {/* <div className="view-button neww menu-item trrs">
              <a className="pk as1" href="">
                Learn More
              </a >
            </div> 
            <p />
            <Image src={about} alt='asa' width="200" height="150" className='imgmenu menu-item as8 lazy-img'
             
          />
          </ul>
        </div>
      </div> */}
      {/* <div className="menu-col1 two">
        <div id="menu-main-area">
          <ul className="menu-item-hover">
            <h3 className="htdo">Services</h3>
            <li className="menu-link menu-item on1 as8" data-tab="tab-3">
<a href="">Design</a >
              <span className="packa">
                <Image
                  alt="abc"
                  src={arrow}
                  
                  className="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAQCAYAAAD52jQlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABQSURBVHgB7dSxCQAgDETR0wkcwZEcwVHdwBEcJSaQ2kIOsciHgNUrJAS4SESaTgErB61JgxWqOivgt3CyF7iNjB+j/2uAnN1UpNOX3eHj6dsd2N/UlYmp+QAAAABJRU5ErkJggg=="
                />
              </span>
            </li>
     
            <li className="menu-link menu-item dropp as8" data-tab="tab-4">
<a href="">Development</a >
              <span className="packa1">
                <Image
                  alt="abc"
                  src={arrow}
                  className="disc sa"
                />
              </span>
            </li>
         
            <li className="menu-link menu-item gt ms as8">
<a href="">Marketing</a >
              <span className="packa2">
                <Image
                  alt="abc"
                  src={arrow}
                                    className="disc sa1"
                />
              </span>
            </li>
     <Image src={Aboutimage} alt='asa'className="imgmenu menu-item as8 lazy-img"/>
          </ul>
        </div>
      </div> */}
      {/* <div className="menu-col1 three">
        <div id="menu-main-area">
          <ul className="menu-item-hover">
            <h3 className="htdo htdos1">Our Work</h3>
            <li className="menu-link menu-item as2" data-tab="tab-2">
<a href="">Portfolio</a >
              <Image
                alt="abc"
                src={arrow}
                className="disc"
              />
            </li>
            <li className="menu-link menu-item as2" data-tab="tab-3">
              <a href="">Clientele</a>
              <Image
                alt="abc"
                src={arrow}
                className="disc"
              />
            </li>
            <Image
              alt="abc"
              src={service}
              width="212px"
              height="140px"
              data-class="lazy-img"
              className="imgmenu menu-item as2 lazy-img"
            />
          </ul>
        </div>
      </div> */}
      {/* <div className="menu-col1 four">
        <div id="menu-main-area">
          <a href="">
            <ul className="menu-item-hover">
              <h3 className="htdo ourblags1">OUR BLOGS</h3>
              <br />
          
              <div className="view-button neww menu-item" />
              <Image
                alt="abc"
                src={woman}
                data-class="lazy-img"
                className="imgmenu2 menu-item as4 lazy-img"
              />
            </ul>
          </a>
        </div>
      </div>
      <div className="menu-col1 five">
        <div id="menu-main-area">
          <a href="">
            <ul className="menu-item-hover">
              <h3 className="htdo contact-w-1">CONTACT US</h3>
              <br />
              <p className="textcol menu-item as5">Don&nbsp;t Be Shy Say Hi</p>
              <div className="view-button neww menu-item" />
        
            </ul>
          </a>
        </div>
      </div> */}

          <div className="col-md-6 my-auto hide " data-aos="fade-right">
            <h1 style={{
              fontSize:"69px",
              color:"white",
              paddingLeft:"10px",
              fontWeight:"800",
              fontStyle:"oblique"

            }}>The Next Dev <br/> <span style={{
              color:"#0a67af"
            }}> Vision</span></h1>
            <button className="btn btn-secondary mt-3 w-30 mx-5" style={{
                 width: "143px",
                 height: "53px",
                 border: "2px solid #000",
                 background: "transparent"
            }}>
              Contact us
            </button>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center ">
         <ul className='menu d-flex  flex-column align-items-center '>
     <li><Link href="/" className='main-item'>Home</Link></li>
    <li><Link href="/About" className='main-item'>About</Link></li>
     <li><Link href="/Expertise" className='main-item'>Service</Link></li>
     <li><Link href="/Expertise" className='main-item'>Expertise</Link></li>
      <li><Link href="/Portfolio" className='main-item'>Projects</Link></li>
         </ul>
          </div>
   
 
  </div>

</>
  )
}

export default Header