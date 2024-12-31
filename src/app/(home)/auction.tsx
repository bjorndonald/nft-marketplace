import Image from 'next/image'
import React from 'react'
import auction from '@/assets/images/auction.png'
import Timer from '@/components/atoms/timer'
import avatar1 from '@/assets/images/avatars/avatar1.png'
import ArtistCard, { Avatar } from '@/components/atoms/artist'
import Link from 'next/link'
import Eye from '@/components/icons/Eye.icon'

const Auction = () => {
  return (
    <div className="relative min-h-[800px] flex items-end  desktop:py-20 py-10">
      <Image src={auction} className="absolute object-cover object-center z-[1] w-full h-full top-0 left-0" alt="Magic Mashrooms" />
      <div className='absolute top-0 left-0 z-[2] w-full flex items-end h-full bg-gradient-to-b from-transparent to-primary'>
      </div>
      <div className="mx-auto mt-auto relative z-10 max-w-breakpoint grid tablet:grid-cols-[auto_min-content] items-end gap-[30px] tablet:grid-rows-[repeat(2,min-content)] grid-cols-1 px-4 w-full ">
        <div className="flex gap-[30px] flex-col">
          <div className="flex bg-base-200 rounded-5 w-fit gap-3 px-5 py-2.5 items-center">
            <Avatar size='xs' src={avatar1} alt='Shroomie' />
            <p>Shroomie</p>
          </div>
          <h2>Magic Mashrooms</h2>
        </div>
        <Timer className='w-fit tablet:[grid-column:2/3] tablet:[grid-row:1/3]' />
        <Link href={"/"} className="flex gap-3 btn bg-white text-base-100 w-fit hover:text-white"><Eye className='w-5 h-5' color={"#A259FF"} /> See NFT</Link>
      </div>
    </div>
  )
}

export default Auction