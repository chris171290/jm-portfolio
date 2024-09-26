import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

export const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid className='w-full py-20'>
        {
          gridItems.map(
            ({ id, title, description, className, img, imgClassName, titleClassName, spareImg }, i) => (
              <BentoGridItem 
                id={id}
                key={i}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
              />
            )
          )}
      </BentoGrid>
    </section>
  )
}
