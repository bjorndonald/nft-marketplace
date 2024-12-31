import { Main } from '@/components/atoms/main'
import React from 'react'
import RankingTable from './rankingtable'

const RankingsPage = () => {
  return (
    <Main>
      <div className='flex-col w-full flex gap-2.5 mx-auto max-w-breakpoint px-4 py-10 tablet:py-[60px] desktop:py-10'>
              <div className="">
                  <h2 className='desktop:!h2 tablet:!h3 !h4'>Top Creators</h2>
                  <p className='desktop:base'>Check out top ranking NFT artists on the NFT Marketplace.</p>
              </div>
          </div>
          <RankingTable />
    </Main>
  )
}

export default RankingsPage