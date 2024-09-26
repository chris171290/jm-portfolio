import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

export const Hero = () => {
  return (
    <section className='pb-20 pt-36' id='home'>
      <div>
        <Spotlight className='-top-10 -left-10 md:left-32 md:-top-20 h-[70vh] w-[25vw]' fill='white'/>
        <Spotlight className='rotate-180 top-20 left-100 h-[40vh] w-[25vw] -scale-x-100' fill='white'/>
        {/* <Spotlight className='-top-40 -left-10 md:left-32 md:-top-20 h-screen' fill='white'/> */}

        <div className='h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] flex items-center justify-center absolute top-0 left-0'>
          {/* Radial gradient for the container to give a faded look */}
          <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
        </div>

        <div className='flex justify-center relative my-20 z-10' >
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Dynamic Web Magic with Next.Js</h2>
            <TextGenerateEffect
              words='Transforming Concepts into Seamless Experiences'
              className='text-center text-[40px] md:text-5xl lg:text-6xl'
            />

            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
              Hi! I&apos;m Christian, a Next.js Developer based in Toronto, ON, Canada.
            </p>

            <a href='#about'>
              <MagicButton
                title='Show my work'
                icon={<FaLocationArrow/>}
                position='right'
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
