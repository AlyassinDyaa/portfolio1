import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1, //the image 
    name: "AVATAR ONE",
    review: "An ion is an atom or molecule with a net electrical charge. The charge of an electron is considered to be negative by convention and this charge is equal and opposite to the charge of a proton, which is considered to be positive by convention",
  },
  
  {
    avatar: AVTR2, //the image 
    name: "AVATAR TWO",
    review: "An ion is an atom or molecule with a net electrical charge. The charge of an electron is considered to be negative by convention and this charge is equal and opposite to the charge of a proton, which is considered to be positive by convention",
  },
  
  {
    avatar: AVTR3, //the image 
    name: "AVATAR THREE",
    review: "An ion is an atom or molecule with a net electrical charge. The charge of an electron is considered to be negative by convention and this charge is equal and opposite to the charge of a proton, which is considered to be positive by convention",
  },
  
  {
    avatar: AVTR4, //the image 
    name: "AVATAR FOUR",
    review: "An ion is an atom or molecule with a net electrical charge. The charge of an electron is considered to be negative by convention and this charge is equal and opposite to the charge of a proton, which is considered to be positive by convention",
  }]


const Testimonial = () => {
  return (
    
    <section id='test'>
      <h5>Reviews from Clients</h5>
      <h2>Reviews</h2>

      <Swiper className='container test_container' 
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) =>{
            return(
              <SwiperSlide className='test' key={index}>
                <div className='client_avatar'>
                  <img src={avatar} alt={name}/>
                </div>

                <h5 className='client_name'> {name}</h5>
                <small className='client_review'>
                      {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>


  )
}

export default Testimonial
