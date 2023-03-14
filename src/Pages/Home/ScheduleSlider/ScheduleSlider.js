import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

const ScheduleSlider = () => {
  return (
    <section className='my-5 text-black text-sm'>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: false,
        }}
        loop={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1050: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='card h-40'>
            <div className='card-body'>
              <p className='card-text text-center font-bold'>
                15-10-2023 10:10pm
              </p>
              <div className='card-actions flex justify-between'>
                <img
                  className='h-6 max-w-xs'
                  src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2016/12/uk.jpg'
                  alt='England'
                />
                <p>england</p>
                <p>vs</p>
                <img
                  className='h-6 max-w-xs'
                  src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2016/12/uk.jpg'
                  alt='England'
                />
                <p>argentina</p>
              </div>
              <h2 className='text-center'>Where: Camp nou</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card bg-slate-200 h-40'>
            <div className='card-body'>
              <p className='card-text text-center font-bold'>
                15-10-2023 10:10pm
              </p>
              <div className='card-actions flex justify-between'>
                <img
                  className='h-6 max-w-xs'
                  src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2016/12/uk.jpg'
                  alt='England'
                />
                <p>england</p>
                <p>vs</p>
                <img
                  className='h-6 max-w-xs'
                  src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2016/12/uk.jpg'
                  alt='England'
                />
                <p>argentina</p>
              </div>
              <h2 className='text-center'>Where: Camp nou</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card h-40'>
            <div className='card-body'>
              <p className='card-text text-center font-bold'>
                15-10-2023 10:10pm
              </p>
              <div className='card-actions flex justify-between'>
                <img
                  className='h-6 max-w-xs'
                  src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2016/12/uk.jpg'
                  alt='England'
                />
                <p>england</p>
                <p>vs</p>
                <img
                  className='h-6 max-w-xs'
                  src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2016/12/uk.jpg'
                  alt='England'
                />
                <p>argentina</p>
              </div>
              <h2 className='text-center'>Where: Camp nou</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card bg-slate-200 h-40'>
            <div className='card-body'>
              <p className='card-text text-center font-bold'>
                15-10-2023 10:10pm
              </p>
              <div className='card-actions flex justify-between'>
                <img
                  className='h-6 max-w-xs'
                  src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2016/12/uk.jpg'
                  alt='England'
                />
                <p>england</p>
                <p>vs</p>
                <img
                  className='h-6 max-w-xs'
                  src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2016/12/uk.jpg'
                  alt='England'
                />
                <p>argentina</p>
              </div>
              <h2 className='text-center'>Where: Camp nou</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card h-40'>
            <div className='card-body'>
              <p className='card-text text-center font-bold'>
                15-10-2023 10:10pm
              </p>
              <div className='card-actions flex justify-between'>
                <img
                  className='h-6 max-w-xs'
                  src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2016/12/uk.jpg'
                  alt='England'
                />
                <p>england</p>
                <p>vs</p>
                <img
                  className='h-6 max-w-xs'
                  src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2016/12/uk.jpg'
                  alt='England'
                />
                <p>argentina</p>
              </div>
              <h2 className='text-center'>Where: Camp nou</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default ScheduleSlider
