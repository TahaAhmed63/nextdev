import React from 'react'
import Facebook from 'public/assets/icons/ri_facebook-fill.png'
import linkedin from 'public/assets/icons/ri_linkedin-fill.png'
import twitter from 'public/assets/icons/mdi_twitter.png'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
  <>
  <div className="footer max-limit " style={{
    background: "#06212D",
  }}>

    <div className="row main-foot" >
    <div className="col-lg-4 z-9 d-flex wrap-foot justify-content-end" style={{position:"relative"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="547"  height="461" className='z-0 hide' viewBox="0 0 547 461" fill="none" style={{
            position:"absolute"
        }}>
  <path opacity="0.4" d="M163.5 0H0V461H546.5L163.5 0Z" fill="#1EA7E0"/>

</svg>
   <h1 className='foot-head d-flex align-items-center justify-content-center text-center'>
career <span>.</span></h1>
        </div>
        <div className="col-lg-2 d-flex align-items-center">
<h3 className='foot-mini-h'>We Are &nbsp;
    <span>Always In Hunt </span>

Of People Like Us</h3>
        </div>
        <div className="col-lg-4 d-flex flex-column justify-content-center gap-2 ">
    
      <div className='row gy-2'>
      <p className='form-foot pb-0 mb-0'>
      Submit your resume
      </p>
        <div className="col-md-6">  
         <input type="text" placeholder='name' className="form-control rounded-0 "/></div>
   <div className="col-md-6"> 
    <input type="text" placeholder='email' className="form-control rounded-0"/></div>
    
    <div className="col-md-6">    
      <input type="file" class="custom-file-input" id="inputGroupFile04" placeholder='No file chosen'/>
</div>
    <div className="col-md-6">    
    <button className='blue-btn'>send</button>

</div>
   
        </div>
        </div>
        <div className="col-lg-2 " style={{position:"relative"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="490" height="450" viewBox="0 0 336 405" fill="none" className='hide-2'>
  <path opacity="0.4" d="M0.5 0H336L336.5 404.5L0.5 0Z" fill="#1EA7E0"/>
</svg>

        </div>

    </div>
    <div className="col-lg-12">
    <div className="mini-footer " style={{position:"relative",zIndex:"999"}}>
        <div className="container">
            <div className="row">
                <div className="col-md-9 col-sm-12 col-lg-8 p-0">
             <ul className='d-flex  mini-ul pb-0 mb-0 ' style={{
                listStyle:"none",
                  color:"white",
                  fontSize:"16px",
                  fontWeight:"400",
                  paddingLeft:"10px",
                  gap:"1.5rem"
                  
             }}>
            <Link href={"/"}> <li>Home</li>  </Link>
            <Link href={"/About"}>    <li>About nexdev visoion</li>  </Link>
            <Link href={"/Expertise"}>      <li>Our Expertise</li>  </Link>
            <Link href={"/Portfolio"}>    <li>Portfolio</li>  </Link>
            <Link href={"/Contact"}>   <li>Contact</li> </Link>
                 
              
               
               
                
                
             
             </ul>
                <p  className='pb-0' style={{
                    color:" #FFF",
                   fontFamily : "Roboto",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "400",
               /* 365.625% */
                    letterSpacing:" -0.32px",
                }}>© &nbsp;  2023 NEXDEV  	VISION Pvt Ltd. ALL Right Reserved.</p>
                </div>
                
                </div>
            
        </div>
    </div>
</div>
    </div>
  </>
  )
}

export default Footer