import React from 'react'
import cover from '@/assets/images/profile/cover.png'
import artist from '@/assets/images/profile/artist.png'
import Image from 'next/image'
import { Avatar } from '@/components/atoms/artist'
import avatar1 from '@/assets/images/avatars/avatar1.png'

const Cover = () => {
  return (
    <div className="w-full relative h-[250px] tablet:h-[280px] desktop:h-[320px] mb-16" >
        <Image src={cover} className='object-cover object-center w-full h-full absolute top-0 left-0 z-[1]' alt='Cover' />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-primary"></div>
        <div className="mx-auto relative px-4 max-w-breakpoint h-full w-full">
        <Avatar size='lg' src={artist} className='border z-[2] border-base-100 !rounded-5 absolute left-1/2 -translate-x-1/2 tablet:left-0 bottom-0 tablet:translate-x-0 translate-y-1/2' alt='Animakid' />
        </div>
    </div>
  )
}

export default Cover