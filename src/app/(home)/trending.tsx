import React from 'react'
import NFT5 from '@/assets/images/nfts/NFT5.png'
import NFT6 from '@/assets/images/nfts/NFT6.png'
import NFT7 from '@/assets/images/nfts/NFT7.png'
import NFT8 from '@/assets/images/nfts/NFT8.png'
import NFT9 from '@/assets/images/nfts/NFT9.png'
import NFT10 from '@/assets/images/nfts/NFT10.png'
import NFT11 from '@/assets/images/nfts/NFT11.png'
import NFT12 from '@/assets/images/nfts/NFT12.png'
import NFT13 from '@/assets/images/nfts/NFT13.png'
import avatar1 from '@/assets/images/avatars/avatar6.png'
import avatar2 from '@/assets/images/avatars/avatar7.png'
import avatar3 from '@/assets/images/avatars/avatar12.png'
import Collection from '@/components/ui/home/collection'

const collections = [
    {
        images: [NFT5, NFT6, NFT7],
        image_no: 1028,
        collection: "DSGN Animals",
        artist: {
            picture: avatar1,
            name: "MrFox"
        }
    },
    {
        images: [NFT8, NFT9, NFT10],
        image_no: 1028,
        collection: "Magic Mushrooms",
        artist: {
            picture: avatar2,
            name: "Shroomie"
        }
    },
    {
        images: [NFT11, NFT12, NFT13],
        image_no: 1028,
        collection: "Disco Machines",
        artist: {
            picture: avatar3,
            name: "BeKind2Robots"
        }
    }
]

const Trending = () => {
  return (
      <div className="py-10 tablet:py-20 ">
          <div className='mx-auto px-4 max-w-breakpoint w-full flex flex-col gap-10 tablet:gap-[60px]'>
              <div className="flex gap-2.5 flex-col">
                  <h4>
                      Trending Collection
                  </h4>
                  <p>Checkout our weekly updated trending collection.</p>
              </div>
              <div className="grid gap-[30px] w-full grid-cols-1 tablet:grid-cols-2 justify-center desktop:grid-cols-3">
                  {collections.map((x, i) => (
                      <Collection key={i} artist={x.artist} collection={x.collection} image_no={x.image_no} images={x.images} />
                  ))}
              </div>
        </div>
        
      </div>
  )
}

export default Trending