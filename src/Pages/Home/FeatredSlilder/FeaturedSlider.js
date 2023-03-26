import React, { useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { useDispatch, useSelector } from 'react-redux'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Pagination } from 'swiper'
import { getFeaturedArticles } from '../../../redux/actionCreators/articleActions'

const FeaturedSlider = () => {
  const dispatch = useDispatch()
  const { loading, data } = useSelector((state) => state.featuredArticles)
  useEffect(() => {
    dispatch(getFeaturedArticles())
  }, [dispatch])
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
        {data?.data?.map((article) => (
          <SwiperSlide key={article._id} className='relative'>
            <img
              src={article.thumbnail}
              alt={article.title}
              className='w-full'
            />
            <div className='flex flex-col gap-4 text-white absolute bottom-0 left-5'>
              <a
                href='/'
                className='slider-title text-lg lg:text-3xl font-semibold lg:font-bold'
              >
                {article.title}
              </a>
              <p className='text-sm lg:text-xl'>
                {article.createdAt.slice(0, 10)}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default FeaturedSlider
