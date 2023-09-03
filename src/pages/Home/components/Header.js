/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import naqilogo from "public/assets/HomeImages/naqi logo 2.png"
import arrow from "public/assets/HomeImages/download (1).png"
import Image from 'next/image'
import Aboutimage from "public/assets/HomeImages/about.webp"
import service from "public/assets/HomeImages/servicess.webp"
import woman from "public/assets/HomeImages/women.228d302a144763c0867b.webp"
import about from "public/assets/HomeImages/Hero-image-Company-page.webp"
import imageContact from "public/assets/HomeImages/service1.png"

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


<div className={`menu-area ${open? "active":""} d-flex  row gx-1`}>
<div className={`menu-area ${open? "active":""} d-flex  main-nav`}>



      <div className="menu-col1 one">
    
        <div id="menu-main-area">
          <ul className="menu-item-hover ">
            <Link href={"/About"}>
            <h3 className="htdo">About Us</h3>
            </Link>
            <p />
            <Image src={about} alt='asa' width="200" height="150" className='imgmenu menu-item as8 lazy-img'
             
          />
          </ul>
        </div>
      </div>
     <div className="menu-col1 two">
        <div id="menu-main-area">
          <ul className="menu-item-hover">
            <Link href={"/Expertise"}>
            
            <h3 className="htdo">Services</h3>
            </Link>
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

              <span className="packa2">
          
              </span>
            </li>
     <Image src={Aboutimage} alt='asa'className="imgmenu menu-item as8 lazy-img"/>
          </ul>
        </div>
      </div> 
      <div className="menu-col1 three">
        <div id="menu-main-area">
          <ul className="menu-item-hover">
            <Link href={"/Portfolio"}>
            <h3 className="htdo htdos1">Our Work</h3>
            </Link>
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
      </div> 
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
      </div> */}
      <div className="menu-col1 five">
        <div id="menu-main-area">
          <Link href="/Contact">
            <ul className="menu-item-hover">
              <h3 className="htdo contact-w-1">CONTACT US</h3>
              <br />
          
              <div className="view-button neww menu-item" />
              <Image
              alt="abc"
              src={imageContact}
              width="212"
              height="140"
              data-class="lazy-img"
              className="imgmenu menu-item as2 lazy-img text-center d-flex justifty-content-center"
            />
            </ul>
          </Link>
        </div>
      </div>
</div>
          <div className="col-md-6 my-auto hide d-none" data-aos="fade-right">
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
          <div className="col-md-6 d-flex flex-column justify-content-center d-none main-mb-nav">
         <ul className='menu d-flex  flex-column align-items-center '>
     <li><Link href="/" className='main-item'>Home</Link></li>
    <li><Link href="/About" className='main-item'>About</Link></li>
     <li><Link href="/Expertise" className='main-item'>Expertise</Link></li>
      <li><Link href="/Portfolio" className='main-item'>Projects</Link></li>
      <li><Link href="/Contact" className='main-item'>Contact</Link></li>
         </ul>
          </div>
   
 
  </div>

</>
  )
}

export default Header