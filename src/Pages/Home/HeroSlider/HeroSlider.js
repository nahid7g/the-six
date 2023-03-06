import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

const HeroSlider = () => {
  return (
    <section>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className='mySwiper'
        style={{ height: '500px' }}
      >
        <SwiperSlide className='relative w-full'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREf_Q80-Bk4gkbQoOMMZ6IF8CkxHXYxnrn9Q&usqp=CAU'
            className='w-full'
          />
          <div className='flex flex-col gap-4 text-white absolute justify-center items-center top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
            <h2 className='slider-title text-4xl font-bold'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam, suscipit!
            </h2>
            <p className='text-2xl fon-bold'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quo
              aspernatur quos quas eius ipsam at dicta? Veritatis, adipisci
              necessitatibus.
            </p>
            <button className='btn btn-warning'>Buy tickets now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative w-full'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv3jIg0ZqwRgFbRA1JUpdLNBiMpdY0yH5qw&usqp=CAU'
            className='w-full'
          />
          <div className='flex flex-col gap-4 text-white absolute justify-center items-center top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
            <h2 className='slider-title text-4xl font-bold'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam, suscipit!
            </h2>
            <p className='text-2xl fon-bold'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quo
              aspernatur quos quas eius ipsam at dicta? Veritatis, adipisci
              necessitatibus.
            </p>
            <button className='btn btn-warning'>Buy tickets now</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default HeroSlider
