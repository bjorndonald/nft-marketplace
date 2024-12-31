import Eye from '@/components/icons/Eye.icon'
import NftCard from '@/components/molecules/nft'
import NFT1 from '@/assets/images/nfts/NFT1.png'
import avatar1 from '@/assets/images/avatars/avatar1.png'
import Link from 'next/link'
import React from 'react'

const Discover = () => {
  return (
      <section className='min-h-screen desktop:py-20 py-10' >
          <div className="mx-auto max-w-breakpoint desktop:gap-[60px] flex flex-col gap-10 px-4 w-full">
              <div className="flex justify-between items-end flex-row">
                  <div className="flex-col flex gap-2.5">
                      <h3>Discover More NFTs</h3>
                      <p>Explore new trending NFTs</p>
                  </div>
                  <Link href={"/nft"} className="btn hidden tablet:flex btn-primary items-center btn-outline"><Eye color="#A259FF" /> See More</Link>
              </div>
              <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 justify-center gap-[30px]">
                  <NftCard nft={{
                      artist: {
                          name: "MoonDancer",
                          picture: avatar1,
                      },
                      highest_bid: 1.68,
                      picture: NFT1,
                      price: 0.33,
                      title: "Distant Galaxy"
                  }} />
                  <NftCard nft={{
                      artist: {
                          name: "NebulaKid",
                          picture: avatar1,
                      },
                      highest_bid: 1.68,
                      picture: NFT1,
                      price: 0.33,
                      title: "Life on Edena"
                  }} />
                  <NftCard nft={{
                      artist: {
                          name: "Spaceone",
                          picture: avatar1,
                      },
                      highest_bid: 1.68,
                      picture: NFT1,
                      price: 0.33,
                      title: "AstroFiction"
                  }} />
              </div>
              <Link href={"/rankings"} className="btn tablet:hidden flex items-center btn-primary btn-outline">
                  <Eye color="#A259FF" /> See More
              </Link>
        </div>
          
    </section>
  )
}

export default Discover