import { Main } from '@/components/atoms/main'
import Image from 'next/image'
import React from 'react'
import cover from '@/assets/images/nftpage/cover.png'
import avatar10 from '@/assets/images/avatars/avatar10.png'
import Timer from '@/components/atoms/timer'
import Globe from '@/components/icons/Globe.icon'
import More from './more'

const NftPage = () => {
  return (
    <Main>
      <div className='h-[320px] tablet:h-[420px] desktop:h-[560px] w-full relative'>
        <Image className='h-full w-full absolute object-cover object-center top-0 left-0' src={cover} alt='The Orbitians' />
      </div>
      <div className="grid grid-flow-col justify-between gap-[30px] grid-cols-1 grid-rows-[repeat(6,min-content)] tablet:grid-cols-[365px_min-content] tablet:grid-rows-[repeat(5,min-content)] desktop:grid-cols-[605px_min-content] mx-auto py-10 max-w-breakpoint w-full px-4">

        
       
            <div className="flex flex-col gap-2.5">
                  <h2 className='h4 tablet:h3 h2'>The Orbitians</h2>
                  <p className='text-base-300'>Minted on Sep 30, 2022</p>
            </div>
            <div className="rounded-5 tablet:row-span-4 h-fit tablet:[grid-column:2/3] bg-base-200">
                <Timer />
                <div className='px-7.5'>
            <button className='btn mb-7.5 w-full mx-auto btn-primary'>
              Place Bid
            </button>
                </div>
                
            </div>
            <div className="flex flex-col gap-2.5">
                  <p className='text-base-300 font-spacemono'>Created By</p>
                  <div className="flex items-center gap-2.5">
                      <Image className='w-6 h-6 rounded-half' src={avatar10} alt='Orbitian image' />
                      <h5>Orbitian</h5>
                  </div>
            </div>
              <div className="flex flex-col gap-2.5">
                  <p className='text-base-300 font-spacemono'>Description</p>
                  <p>
                      The Orbitians
                      is a collection of 10,000 unique NFTs on the Ethereum blockchain,<br /><br />There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. <br /><br />They live in a metal space machines, high up in the sky and only have one foot on Earth.
These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
                  </p>
              </div>
              <div className="flex flex-col gap-2.5">
                  <p className='text-base-300 font-spacemono'>Details</p>
                    <div className="flex gap-2.5 items-center">
                        <Globe className='fill-base-200' />
                      View on Etherscan
                    </div>
                  <div className="flex gap-2.5 items-center">
              <Globe className='fill-base-200' />
                      View Original
                  </div>
            </div>
              <div className="flex flex-col gap-2.5">
                  <p className='text-base-300 font-spacemono'>Tags</p>
                  <div className="flex gap-5 desktop:flex-row flex-col">
                    <div className="h-[46px] w-fit bg-base-200 rounded-5 flex items-center uppercase px-7.5">
                          Animation
                    </div>
                      <div className="h-[46px] w-fit bg-base-200 rounded-5 flex items-center uppercase px-7.5">
                          illustration
                      </div>
                      <div className="h-[46px] w-fit bg-base-200 rounded-5 flex items-center uppercase px-7.5">
                          moon
                      </div>
                      <div className="h-[46px] w-fit bg-base-200 rounded-5 flex items-center uppercase px-7.5">
                          moon
                      </div>
                  </div>
                  
              
        </div>
      </div>
        <More />
    </Main>
  )
}

export default NftPage