import ArtistCard from '@/components/atoms/artist'
import Rocket from '@/components/icons/Rocket.icon'
import Link from 'next/link'
import React from 'react'
import artists from './artists'

const Creators = () => {
  return (
    <section className='min-h-screen  desktop:py-20 py-10' >
      <div className="mx-auto max-w-breakpoint desktop:gap-[60px] flex flex-col gap-10 px-4 w-full">
        <div className="flex justify-between items-end flex-row">
          <div className="flex-col flex gap-2.5">
            <h3>Top creators</h3>
            <p>Checkout Top Rated Creators on the NFT Marketplace</p>
          </div>
          <Link href={"/rankings"} className="btn hidden tablet:flex btn-primary items-center btn-outline"><Rocket color="#A259FF" /> View Rankings</Link>
        </div>
        <div className="grid gap-[30px] desktop:grid-cols-4 tablet:grid-rows-3 tablet:grid-cols-2 grid-rows-6 grid-cols-1">
          {artists.map((x, i) => (
            <ArtistCard size={"lg"} artist={x} key={i} ranking={i + 1} />
          ))}
        </div>
        <Link href={"/rankings"} className="btn tablet:hidden flex items-center btn-primary btn-outline">
          <Rocket color="#A259FF" /> View Rankings
        </Link>
      </div>
        
    </section>
  )
}

export default Creators