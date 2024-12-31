
import { Button } from '@/components/atoms/button'
import Rocket from '@/components/icons/Rocket.icon'
import Metrics from '@/components/ui/home/metrics'
import HighlightedNFT from '@/components/molecules/nft/highlighted'
import { tw, TWComponentProps } from '@/utils/cx'
import React from 'react'
import avatar from '@/assets/images/avatars/Avatar14.png'
import nftImage from '@/assets/images/nfts/NFT1.png'

const HeroLayout = tw.div`
 py-10 tablet:py-20  
`

const Highlighted = tw(HighlightedNFT)`
  [grid-row:2/3]
  tablet:[grid-column:2/3]
  tablet:[grid-row:1/4]
`

const Headline = tw.div`
  flex flex-col gap-5 [&_h1]:!h3 desktop:[&_h1]:!h1
`

const Hero = (props: TWComponentProps<typeof HeroLayout>) => {
  return (
    <HeroLayout {...props}>
      <div className="mx-auto px-4 grid-flow-col
grid gap-y-[30px] grid-cols-1 grid-rows-[min-content_min-content_min-content_min-content] 
tablet:grid-cols-2 tablet:grid-rows-[min-content_min-content_min-content] 
tablet:gap-x-[30px] tablet:gap-y-5 max-w-breakpoint w-full">
        <Headline>
          <h1>
            Discover digital art & Collect NFTs
          </h1>
          <p>
            NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
          </p>
        </Headline>
        <Button title='Get Started'>
          <Rocket />
          Get Started
        </Button>
        <Metrics total_sales={240000} artists={100000} auctions={240000} />
        <Highlighted nft={{
          artist: {
            name: "Animakid",
            picture: avatar,
          },
          highest_bid: 14.8,
          picture: nftImage,
          price: 20,
          title: "Space Walking"
        }} />
      </div>
     
    </HeroLayout>
  )
}

export default Hero