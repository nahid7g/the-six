import React from 'react'

const HeroSlider = () => {
  return (
    <section>
      <div className='carousel w-full' style={{ height: '500px' }}>
        <div id='slide1' className='carousel-item relative w-full'>
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
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide2' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide2' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' className='carousel-item relative w-full'>
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
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide1' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide1' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className='carousel carousel-end rounded-box'>
        <div className='carousel-item'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv3jIg0ZqwRgFbRA1JUpdLNBiMpdY0yH5qw&usqp=CAU'
            alt='Drink'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv3jIg0ZqwRgFbRA1JUpdLNBiMpdY0yH5qw&usqp=CAU'
            alt='Drink'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv3jIg0ZqwRgFbRA1JUpdLNBiMpdY0yH5qw&usqp=CAU'
            alt='Drink'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv3jIg0ZqwRgFbRA1JUpdLNBiMpdY0yH5qw&usqp=CAU'
            alt='Drink'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv3jIg0ZqwRgFbRA1JUpdLNBiMpdY0yH5qw&usqp=CAU'
            alt='Drink'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv3jIg0ZqwRgFbRA1JUpdLNBiMpdY0yH5qw&usqp=CAU'
            alt='Drink'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv3jIg0ZqwRgFbRA1JUpdLNBiMpdY0yH5qw&usqp=CAU'
            alt='Drink'
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSlider
