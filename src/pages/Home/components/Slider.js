import React, { useEffect, useMemo, useRef, useState } from 'react';
import  { Navigation, EffectFade ,Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide   } from 'swiper/react';
import 'swiper/css/pagination'; 
import 'swiper/css'; // Core CSS
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/effect-fade'; // Fade effect styles
// import slide1 from "/assets/HomeImages/mainbanner.webp"
const Slider = () => {
  const sliderSwiperRef = useRef(null);
  return (
    <div>
        <Swiper
        ref={sliderSwiperRef}
  modules={[Navigation, EffectFade,Pagination]}
  spaceBetween={50}
  navigation={true}
  effect="fade"
  speed={1200}
  pagination={true}
  loop={true}

  Navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',  
  }}>
<SwiperSlide>
  
<div className="slide-bg">
<div class="row"><div class="col-md-12 main-banner-text text-center aos-init aos-animate" data-aos="fade-left" data-aos-duration="1500">
  <h1 class="h1-ban text-center
  ">Work Is Fun Here  With <br/> <span class="span-1">NEXDEV </span><span class="span-2">VISION</span> </h1>
  <p class="p-ban text-center">To be a leading software development company, delivering innovative solutions that transform businesses and empower users in an increasingly digital world.
   </p></div></div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="slide-bg-1">
<div class="row"><div class="col-md-12 main-banner-text text-center aos-init aos-animate" data-aos="fade-left" data-aos-duration="1500">
  <h1 class="h1-ban text-center
  ">Work Is Fun Here  With <br/> <span class="span-1">NEXDEV </span><span class="span-2">VISION</span> </h1>
  <p class="p-ban text-center">To be a leading software development company, delivering innovative solutions that transform businesses and empower users in an increasingly digital world.
   </p></div></div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="slide-bg-2">
<div class="row"><div class="col-md-12 main-banner-text text-center aos-init aos-animate" data-aos="fade-left" data-aos-duration="1500">
  <h1 class="h1-ban text-center
  ">Work Is Fun Here  With <br/> <span class="span-1">NEXDEV </span><span class="span-2">VISION</span> </h1>
  <p class="p-ban text-center">To be a leading software development company, delivering innovative solutions that transform businesses and empower users in an increasingly digital world.
   </p></div></div>
</div>
</SwiperSlide>

  </Swiper>

    </div>
  )
}

export default Slider