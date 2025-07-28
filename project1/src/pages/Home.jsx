import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='mt-10 flex justify-between'>
        <div>
          <h1 className='pb-3 text-4xl text-gray-600'>Welcome to...</h1>
          <h1 className='text-6xl font-semibold pb-3 ml-5'>Chef's Palette🍽️✨</h1>
          <h1 className='text-3xl ml-25 text-red-500'>"Where flavors meet artistry."</h1>
          <p className='pt-15 text-xl text-gray-700'>Where cooking is an art, and every dish tells a story.</p>
          <p className='pt-3 text-xl text-gray-700'>Explore a world of flavors, master new techniques, and create <br/> unforgettable meals. Whether you're a seasoned chef or just beginning your culinary journey, Chef’s Palette is your guide to delicious inspiration.</p>
          <p className='pt-3 text-xl text-gray-700 mb-20'>Discover delicious recipes, cooking tips, and meal inspiration. Let’s cook, create, and celebrate the beauty of food together!</p>
        </div>
          <img src="https://th.bing.com/th/id/OIP.6NVo9OPFvlfQtAWtQOBDEQHaFb?w=268&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='h-[60vh] w-[80vh]' />
      </div>
    </div>
  )
}

export default Home
