import React from 'react'
import NftCard from '@/components/molecules/nft'
import NFT1 from '@/assets/images/nfts/NFT1.png'
import avatar1 from '@/assets/images/avatars/avatar1.png'

const Nfts = () => {
  return (
      <div className='grid grid-rows-[70px_min-content] items-end gap-0 border-t border-base-200 relative grid-cols-[1fr_105px_105px_105px_1fr] tablet:grid-cols-[1fr_225px_225px_225px_1fr] desktop:grid-cols-[1fr_350px_350px_350px_1fr]'>
          <input className='peer/created opacity-0 cursor-pointer absolute h-[70px] top-0 left-1/2 w-[105px] tablet:w-[225px] desktop:w-[350px] -translate-x-[150%] z-[2]' defaultChecked type="radio" name="action" id="created" />
          <input type="radio" className='peer/owned cursor-pointer opacity-0 absolute h-[70px] top-0 left-1/2 w-[105px] tablet:w-[225px] desktop:w-[350px] z-[2] -translate-x-1/2' name="action" id="owned" />
          <input type="radio" className='peer/collection cursor-pointer opacity-0 absolute h-[70px] top-0 left-1/2 w-[105px] tablet:w-[225px] desktop:w-[350px] translate-x-1/2 z-[2]' name="action" id="collection" />
          <div></div>
          <div className={'justify-center flex items-center h-[60px] font-worksans text-base-300 after:h-0.5 after:w-full peer-checked/created:[&_div]:bg-base-300 peer-checked/created:after:bg-base-300 after:absolute tablet:h5 after:bottom-0 after:left-0 relative gap-4 '}>
              Created
              <div className='bg-base-200 text-white min-w-10 hidden tablet:flex justify-center p-2.5 rounded-5 font-spacemono w-fit'>302</div>
          </div>
          <div className={'justify-center flex items-center h-[60px] font-worksans text-base-300 after:h-0.5 after:w-full peer-checked/owned:[&_div]:bg-base-300 peer-checked/owned:after:bg-base-300 after:absolute tablet:h5 after:bottom-0 after:left-0 relative gap-4'}>
              Owned
              <div className='bg-base-200 hidden text-white min-w-10 tablet:flex justify-center p-2.5 rounded-5 font-spacemono w-fit'>67</div>
          </div>
          <div className={'justify-center flex items-center h-[60px] font-worksans text-base-300 after:h-0.5 after:w-full peer-checked/collection:[&_div]:bg-base-300 peer-checked/collection:after:bg-base-300 after:absolute tablet:h5 after:bottom-0 after:left-0 relative gap-4'}>
              Collection
              <div className='bg-base-200 hidden text-white min-w-10 tablet:flex justify-center p-2.5 rounded-5 font-spacemono w-fit'>4</div>

        </div>
       <div> </div>
            
          <div id="created" className='[grid-column:1/7] hidden peer-checked/created:block bg-base-200 py-10 tablet:pt-[60px] tablet:pb-20'>
              <div className="container grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-[30px]">
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
        </div>
          <div id="owned" className='[grid-column:1/7] hidden peer-checked/owned:block bg-base-200 tablet:pt-[60px] tablet:pb-20 desktop:py-20 py-10'>
              <div className="container grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-[30px]">
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
          </div>
          <div id="collection" className='[grid-column:1/7] peer-checked/collection:block bg-base-200 tablet:pt-[60px] tablet:pb-20 desktop:py-20 py-10'>
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
     </div>
  )
}

export default Nfts