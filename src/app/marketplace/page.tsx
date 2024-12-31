import { Main } from '@/components/atoms/main'
import Search from '@/components/icons/Search.icon'
import React from 'react'
import Marketplace from './Marketplace'

const MarketplacePage = () => {
  return (
    <Main>
        <div className='gap-[30px] w-full mx-auto max-w-breakpoint py-10 flex flex-col tablet:py-[60px] desktop:py-10'>
            <div className="flex-col w-full flex gap-2.5">
                <h2 className='desktop:h2 tablet:h3 h4'>Browse Marketplace</h2>
                  <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
            </div>
              <label htmlFor="search" className='w-full py-2.5 px-3 rounded-5 border border-base-200 flex gap-2.5'>
                  <input placeholder='Search your favourite NFTs' type="text" className='grow bg-transparent appearance-none placeholder:text-base-200 text-base-content focus:border-none focus:outline-none' />
                  <Search />
              </label>
        </div>
        <Marketplace />
    </Main>
  )
}

export default MarketplacePage