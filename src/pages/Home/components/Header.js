/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
// import React, { useEffect, useState } from 'react'
// import naqilogo from "public/assets/HomeImages/naqi logo 2.png"
import React, { useRef, useState, useEffect } from 'react';
// import mymainlogo from "public/assets/HomeImages/WhatsApp_Image_2023-11-05_at_11.13.55_AM-removebg-preview.png"
const Header =()=>{
  const navbarMenuRef = useRef(null);
  const burgerMenuRef = useRef(null);
  const headerMenuRef = useRef(null);
  const [isActive, setIsActive] = useState(false); // State for menu visibility
  const toggleMenu = () => {
    setIsActive(!isActive); // Toggle 'isActive' state
  };
// Empty dependency array to run effect only once

  useEffect(() => {
    const linkClickHandler = (event) => {
      if (window.innerWidth > 768 && !event.target.classList.contains('brand')) {
        setIsActive(false); // Close menu if clicked outside burger on large screens
      }
    };

    window.addEventListener('click', linkClickHandler);

    return () => {
      window.removeEventListener('click', linkClickHandler);
    };
  }, []); // Empty dependency array to run effect only once

  const handleScroll = () => {
    const headerMenu = headerMenuRef.current;

    if (window.scrollY >= 85) {
      headerMenu.classList.add('on-scroll');
    } else {
      headerMenu.classList.remove('on-scroll');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run effect only once

  const handleWindowResize = () => {
    const navbarMenu = navbarMenuRef.current;

    if (window.innerWidth > 768) {
      setIsActive(false); // Close menu on resize for large screens
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <header className="header" id="header" ref={headerMenuRef}>
      <nav className="navbar container">
        <a href="#" className="brand"><img src="assets/HomeImages/WhatsApp_Image_2023-11-05_at_11.13.55_AM-removebg-preview.webp" className='img-fluid' alt='sa'/></a>
        <div className={`burger ${isActive ? 'is-active' : ''}`} id="burger" ref={burgerMenuRef} onClick={toggleMenu}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
        <div className={`menu ${isActive ? 'is-active' : ''}`} ref={navbarMenuRef}>
      
          <ul className="menu-inner">
            <li className="menu-item"><Link href="/" className="menu-link">Home</Link></li>
            <li className="menu-item"><Link href="/About/" className="menu-link">About</Link></li>
            <li className="menu-item"><Link href="/Expertise" className="menu-link">Expertise</Link></li>
            <li className="menu-item"><Link href="/Portfolio/" className="menu-link">Portfolio</Link></li>
            <li className="menu-item"><Link href="/Contact" className="menu-link">Contact</Link></li>
          </ul>
        </div>
        {/* <a href="#" className="menu-block">Discover</a> */}
      </nav>
    </header>
  );
};


export default Header