import React from 'react'
import Banner from './Home/components/Banner'
import Section2 from './Home/components/Section2'
import Section3 from './Home/components/Section3'
import Section4 from './Home/components/Section4'
import Footer from './Home/components/Footer'

import Header from './Home/components/Header'
import Slider from './Home/components/Slider'

const Home1 = () => {
  return (
   <>
   {/* <Banner/> */}
   <Header/>
  <Slider/>
   <Section2/>
   <Section3/>
   <Section4/>
   <Footer/>
   </>
  )
}

export default Home1