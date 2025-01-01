"use client";
import React, { useContext, useEffect, useState } from 'react'
import NftCard from '@/components/molecules/nft'
import NFT1 from '@/assets/images/nfts/NFT1.png'
import NFT2 from '@/assets/images/nfts/NFT2.png'
import avatar1 from '@/assets/images/avatars/avatar1.png'
import avatar2 from '@/assets/images/avatars/avatar2.png'
import { NFTMarketplaceContext } from '@/Contexts/NFTMarketplaceContext';

const Marketplace = () => {
    const { fetchNFTs } = useContext(NFTMarketplaceContext)
    const [items, setItems] = useState<any[]>([])

    const init = async() => {
        try {
            const items = await fetchNFTs()
            console.log("items", items)
            setItems(items)
        } catch (error) {
            
        }
       
    }

    useEffect(() => {
        init()
    
      return () => {
      }
    }, [])
    console.log(items)

  return (
      <div className='grid grid-rows-[70px_min-content] items-end gap-0 border-t border-base-200 relative grid-cols-[1fr_156px_156px_1fr] tablet:grid-cols-[1fr_340px_340px_1fr] desktop:grid-cols-[1fr_525px_525px_1fr]'>
          <input className='peer/nfts opacity-0 cursor-pointer absolute h-[70px] top-0 left-1/2 w-[156px] tablet:w-[340px] desktop:w-[525px] -translate-x-full z-[2]' defaultChecked type="radio" name="action" id="nfts" />
          <input type="radio" className='peer/collections cursor-pointer opacity-0 absolute h-[70px] top-0 left-1/2 w-[156px] tablet:w-[340px] desktop:w-[525px] z-[2] ' name="action" id="collections" />
         
          <div></div>
          <div className={'justify-center flex items-center h-[60px] font-worksans text-base-300 after:h-0.5 after:w-full peer-checked/nfts:[&_div]:bg-base-300 peer-checked/nfts:after:bg-base-300 after:absolute tablet:h5 after:bottom-0 after:left-0 relative gap-4'}>
              NFTs
              <div className='bg-base-200 hidden text-white min-w-10 tablet:flex justify-center p-2.5 rounded-5 font-spacemono w-fit'>302</div>

          </div>
          <div className={'justify-center flex items-center h-[60px] font-worksans text-base-300 after:h-0.5 after:w-full peer-checked/collections:[&_div]:bg-base-300 peer-checked/collections:after:bg-base-300 after:absolute tablet:h5 after:bottom-0 after:left-0 relative gap-4'}>
              Collections
              <div className='bg-base-200 hidden text-white min-w-10 tablet:flex justify-center p-2.5 rounded-5 font-spacemono w-fit'>67</div>
          </div>
          
          <div> </div>

          <div id="nfts" className='[grid-column:1/5] hidden peer-checked/nfts:block bg-base-200 py-10 tablet:pt-[60px] tablet:pb-20'>
              <div className="container grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-[30px]">
                  <NftCard className='bg-base-100' nft={{
                      artist: {
                          name: "MoonDancer",
                          picture: avatar1,
                      },
                      highest_bid: 1.68,
                      picture: NFT1,
                      price: 0.33,
                      title: "Distant Galaxy"
                  }} />
                  <NftCard className='bg-base-100' nft={{
                      artist: {
                          name: "NebulaKid",
                          picture: avatar1,
                      },
                      highest_bid: 1.68,
                      picture: NFT1,
                      price: 0.33,
                      title: "Life on Edena"
                  }} />
                  <NftCard className='bg-base-100' nft={{
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
          </div>
          <div id="collections" className='[grid-column:1/5] hidden peer-checked/collections:block bg-base-200 py-10 tablet:pt-[60px] tablet:pb-20'>
              <div className="container grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-[30px]">
                  <NftCard className='bg-base-100' nft={{
                      artist: {
                          name: "MoonDancer",
                          picture: avatar2,
                      },
                      highest_bid: 1.68,
                      picture: NFT2,
                      price: 0.33,
                      title: "Distant Galaxy"
                  }} />
                  <NftCard className='bg-base-100' nft={{
                      artist: {
                          name: "NebulaKid",
                          picture: avatar2,
                      },
                      highest_bid: 1.68,
                      picture: NFT2,
                      price: 0.33,
                      title: "Life on Edena"
                  }} />
                  <NftCard className='bg-base-100' nft={{
                      artist: {
                          name: "Spaceone",
                          picture: avatar2,
                      },
                      highest_bid: 1.68,
                      picture: NFT2,
                      price: 0.33,
                      title: "AstroFiction"
                  }} />
              </div>
          </div>
         
      </div>
  )
}

export default Marketplace