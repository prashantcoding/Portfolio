import React from 'react'
import bg from './bg.webp'
const Home = () => {
  return (
    <main>
        <img/>
        <img src={bg} alt="background-image" className='absolute object-cover w-full h-full' ></img>

        <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
           
            <h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name'>Aloha. I'm Prashant </h1>

        </section>
    </main>
  )
}

export default Home