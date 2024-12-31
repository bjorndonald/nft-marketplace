import Eye from '@/components/icons/Eye.icon'
import NftCard from '@/components/molecules/nft'
import NFT1 from '@/assets/images/nfts/NFT1.png'
import avatar1 from '@/assets/images/avatars/avatar1.png'
import Link from 'next/link'
import React from 'react'
import ArrowRight from '@/components/icons/ArrowRight.icon'

const More = () => {
    return (
        <section className='min-h-screen desktop:py-20 py-10' >
            <div className="mx-auto overflow-hidden grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3  grid-rows-[repeat(4,min-content)] max-w-breakpoint desktop:gap-y-[60px] gap-x-[30px] gap-10 px-4 w-full">
                <div className="  desktop:col-span-2 items-center flex gap-2.5">
                    <h3>More from this artist</h3>
                </div>
                
                <Link href={"/nft"} className="btn w-full tablet:w-fit max-tablet:[grid-row:5] justify-self-end  gap-3 flex btn-primary items-center btn-outline"><ArrowRight color="#A259FF" /> See More</Link>
                
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
                

        </section>
    )
}

export default More