import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assests/avatar1.jpg'
import AVTR2 from '../../assests/avatar2.jpg'
import AVTR3 from '../../assests/avatar3.jpg'
import AVTR4 from '../../assests/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab necessitatibus facilis esse earum sed distinctio dolorum autem est, minus adipisci ipsam voluptate iusto debitis perferendis'
  },

  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab necessitatibus facilis esse earum sed distinctio dolorum autem est, minus adipisci ipsam voluptate iusto debitis perferendis'
  },

  {
    avatar: AVTR3,
    name: 'Ayaaz ,azhar',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab necessitatibus facilis esse earum sed distinctio dolorum autem est, minus adipisci ipsam voluptate iusto debitis perferendis'
  },

  {
    avatar: AVTR4,
    name: 'Mohd Arif',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab necessitatibus facilis esse earum sed distinctio dolorum autem est, minus adipisci ipsam voluptate iusto debitis perferendis'
  },

]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from the clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"
       // install Swiper modules
       modules={[Navigation, Pagination, Scrollbar]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       >
        {
          data.map(({avatar, name, review}, index) =>{
            return(
              <SwiperSlide key={index} className='testimonial'>
              <div className="client_avatar">
                <img src={avatar} alt='Avatar One' />
              </div>
                <h5>{name}</h5>
                <small className='client_review'>
                  {review}
                </small>
              
            </SwiperSlide>
            )
          })
        }

       {/* <article className='testimonial'>
          <div className="client_avatar">
            <img src={AVTR2} alt='Avatar One' />
          </div>
          <h5>Ernest Achiever</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A illum maxime unde nemo officiis, laudantium nam ut dolorum ducimus similique eligendi. Sunt ad veniam odit!
          </small>

        </article>

        <article className='testimonial'>
          <div className="client_avatar">
            <img src={AVTR3} alt='Avatar One' />
          </div>
          <h5>Ernest Achiever</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A illum maxime unde nemo officiis, laudantium nam ut dolorum ducimus similique eligendi. Sunt ad veniam odit!
          </small>

  </article> */}
      </Swiper>
    </section>
  )
}

export default Testimonials
