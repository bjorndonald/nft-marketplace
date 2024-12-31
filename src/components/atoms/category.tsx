import { tw } from '@/utils/cx'
import Image, { StaticImageData } from 'next/image'
import React, { ComponentProps } from 'react'

export const ArtistCardContainer = tw.div`
    flex flex-col bg-base-200 w-full rounded-5 min-h-[209px] tablet:min-h-[316px] overflow-hidden
`

interface CategoryProps extends ComponentProps<"div"> {
    title: string
    picture: StaticImageData | string
}

const Category = (props: CategoryProps) => {
    const {title, picture, ...otherProps} = props
  return (
      <ArtistCardContainer {...otherProps}>
        <div className="relative grow w-full">
            <Image src={picture} className="w-full h-full object-cover object-center absolute top-0 left-0 pointer-events-none z-[1]" alt={`${title} image`} />
            <div className="relative z-[2] backdrop-blur-md w-full h-full flex items-center justify-center">
                {props.children}
            </div>
        </div>
        <div className='desktop:p px-[30px] pt-5 pb-[25px] font-worksans text-base font-semibold'>
            {title}
        </div>
      </ArtistCardContainer>
  )
}

export default Category