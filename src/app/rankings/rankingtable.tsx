import React from 'react'
import NftCard from '@/components/molecules/nft'
import NFT1 from '@/assets/images/nfts/NFT1.png'
import NFT2 from '@/assets/images/nfts/NFT2.png'
import avatar1 from '@/assets/images/avatars/avatar1.png'
import avatar2 from '@/assets/images/avatars/avatar2.png'
import Table from './Table'

const RankingTable = () => {
    return (
        <div className='grid grid-rows-[70px_min-content] items-end gap-0  relative grid-cols-[1fr_78px_78px_78px_78px_1fr] tablet:grid-cols-[1fr_170px_i70px_170px_i70px_1fr] desktop:grid-cols-[1fr_260px_260px_260px_260px_1fr]'>
            <input className='peer/today opacity-0 cursor-pointer absolute h-[70px] top-0 left-1/2 w-[78px] tablet:w-[170px] desktop:w-[260px] -translate-x-[200%] z-[2]' defaultChecked type="radio" name="action" id="today" />
            <input type="radio" className='peer/this_week cursor-pointer opacity-0 absolute h-[70px] top-0 left-1/2 w-[78px] tablet:w-[170px] desktop:w-[260px] -translate-x-full z-[2] ' name="action" id="this_week" />
            <input type="radio" className='peer/this_month cursor-pointer opacity-0 absolute h-[70px] top-0 left-1/2 w-[78px] tablet:w-[170px] desktop:w-[260px] z-[2] ' name="action" id="this_month" />
            <input type="radio" className='peer/all_time cursor-pointer opacity-0 absolute h-[70px] top-0 left-1/2 w-[78px] tablet:w-[170px] desktop:w-[260px] translate-x-full z-[2] ' name="action" id="all_time" />

            <div></div>
            <div className={'justify-center flex items-center h-[60px] font-worksans text-white font-semibold after:h-0.5 after:w-full peer-checked/today:[&_div]:bg-base-300 peer-checked/today:after:bg-base-300 max-mobile:content-["1d"] after:absolute tablet:h5 after:bottom-0 after:left-0 relative gap-4'}>
                Today
            </div>
            <div className={'justify-center max-mobile:content-["7d"] flex items-center h-[60px] font-worksans text-white font-semibold after:h-0.5 after:w-full peer-checked/this_week:[&_div]:bg-base-300 peer-checked/this_week:after:bg-base-300 after:absolute tablet:h5 after:bottom-0 after:left-0 relative gap-4'}>
                This Week
            </div>
            <div className={'justify-center max-mobile:content-["30d"] flex items-center h-[60px] font-worksans text-white font-semibold after:h-0.5 after:w-full peer-checked/this_month:[&_div]:bg-base-300 peer-checked/this_month:after:bg-base-300 after:absolute tablet:h5 after:bottom-0 after:left-0 relative gap-4'}>
                This Month
            </div>
            <div className={'justify-center flex items-center h-[60px] font-worksans text-white font-semibold after:h-0.5 after:w-full peer-checked/all_time:[&_div]:bg-base-300 peer-checked/all_time:after:bg-base-300 after:absolute tablet:h5 after:bottom-0 after:left-0 relative gap-4'}>
                All Time
            </div>

            <div></div>

            <div id="today" className='[grid-column:1/7] hidden peer-checked/today:block bg-base-100 py-10 '>
                
                    <Table/>
               
            </div>
            <div id="this_week" className='[grid-column:1/7] hidden peer-checked/this_week:block bg-base-100 py-10 '>
                <Table />
            </div>
            <div id="this_month" className='[grid-column:1/7] hidden peer-checked/this_month:block bg-base-100 py-10 '>
                <Table />
            </div>
            <div id="all_time" className='[grid-column:1/7] hidden peer-checked/all_time:block bg-base-100 py-10 '>
                <Table />
            </div>
        </div>
    )
}

export default RankingTable