import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Pagination } from 'swiper'

const FeaturedSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide className='relative'>
          <a href='/'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv3jIg0ZqwRgFbRA1JUpdLNBiMpdY0yH5qw&usqp=CAU'
              className='w-full'
            />
            <div className='flex flex-col gap-4 text-white absolute bottom-0 left-5'>
              <a href='/' className='slider-title text-3xl font-bold'>
                Leo Messi the magic man
              </a>
              <p className='text-xl'>25 December 2023</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <a href='/'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv3jIg0ZqwRgFbRA1JUpdLNBiMpdY0yH5qw&usqp=CAU'
              className='w-full'
            />
            <div className='flex flex-col gap-4 text-white absolute bottom-0 left-5'>
              <a href='/' className='slider-title text-3xl font-bold'>
                Leo Messi the magic man
              </a>
              <p className='text-xl'>25 December 2023</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <a href='/'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv3jIg0ZqwRgFbRA1JUpdLNBiMpdY0yH5qw&usqp=CAU'
              className='w-full'
            />
            <div className='flex flex-col gap-4 text-white absolute bottom-0 left-5'>
              <a href='/' className='slider-title text-3xl font-bold'>
                Leo Messi the magic man
              </a>
              <p className='text-xl'>25 December 2023</p>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default FeaturedSlider
