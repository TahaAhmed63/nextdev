import Link from 'next/link'
import React from 'react'

const Section4 = () => {
  return (
   <>
   <div className='portfolio PY-4 mb-5'>
<h4 className="text-center" style={{
  color: "#000",
  fontFamily: "Gilroy",
  fontSize: "48px",
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "61.5px"
}}>
Recent &nbsp;<b>Projects</b> 
</h4>

<div className="container">
  <div className="row gy-5">
    <div className="col-md-4">
      <div className="blog" style={{
      width:"100%",
   height:"400px"  
      }}>
        <div className="overlay-1" style={{ opacity: 0.7, background: "#000"}}>
      <div className="container">
          <p className='' style={{
            marginTop:"10rem",
            color:"white",
            fontSize:"19px",
            fontWeight:"600"
          }}>Branded Clothes Website</p>
       <Link href="https://www.leatherofusa.com/">  <p style={{

            color:"white"
          }}>Read More</p></Link> 
      <hr />
      </div>
        </div>

      </div>
    </div>
    <div className="col-md-4">
      <div className="blog-2" style={{
      width:"100%",
   height:"400px"  
      }}>
             <div className="overlay-1" style={{ opacity: 0.7, background: "#000"}}>
      <div className="container">
        <p className='' style={{
            marginTop:"10rem",
            color:"white",
            fontSize:"19px",
            fontWeight:"600"
          }}> Olingo Bussiness Capital </p>
        <Link href="https://pickorbuy.com/"><p style={{

            color:"white"
          }}>Read More</p></Link> 
      <hr />
      </div>
        </div>

      </div>
    </div>
    <div className="col-md-4">
      <div className="blog-3" style={{
      width:"100%",
   height:"400px"  
      }}>
             <div className="overlay-1" style={{ opacity: 0.7, background: "#000"}}>
      <div className="container">
          <p className='' style={{
            marginTop:"10rem",
            color:"white",
            fontSize:"19px",
            fontWeight:"600"
          }}> Canee Sports  </p>
        <Link href="https://olingobusinesscapitals.com/">     <p style={{

            color:"white"
          }}>Read More</p></Link>
      <hr />
      </div>
        </div>

      </div>
    </div>
  </div>
</div>
   </div>
   
   </>
  )
}

export default Section4