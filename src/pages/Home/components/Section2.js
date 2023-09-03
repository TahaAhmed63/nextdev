import React, { useEffect } from "react";
import Facebook from 'public/assets/icons/ri_facebook-fill.png'
import linkedin from 'public/assets/icons/ri_linkedin-fill.png'
import twitter from 'public/assets/icons/mdi_twitter.png'
import Image from "next/image";
import Aos from "aos";
const Section2 = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-in-out',
  
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
    <section className="introduce"  data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
      <div className="container">

        <div className="row align-item-center justify-content-center  mx-auto " >
       
            <div className="col-md-6 col-sm-12 mx-auto">
              <p className="my-secondp">
                A leading web and mobile application development company that
                reshapes business world via its cutting edge apps and game
                development technology.
              </p>
            </div>
            <div className="col-md-5 align-items-center">
<div className="socail-media-wrap d-flex justify-content-center gap-4">
<a   style={{
  cursor:"pointer"

}}><Image src={Facebook}  className="icon-img p-2" alt="1"/></a>

<a   style={{
  cursor:"pointer"
}}><Image src={twitter} className="icon-img2 p-2" alt="1"/></a>

<a   style={{
  cursor:"pointer"
}}><Image src={linkedin} className="icon-img3 p-2" alt="2"/></a>

</div>
<p className="text-center" style={{color: "#505050",
fontFamily: "Roboto",
fontSize: "16px",
fontStyle: "normal",
fontWeight: "400",
lineHeight: "28px",
}}>Check us on social media sites</p>
            </div>
          </div>
     
      </div>
      </section>
    </>
  );
};

export default Section2;
