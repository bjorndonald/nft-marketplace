import { Avatar } from '@/components/atoms/artist'
import React from 'react'
import avatar1 from '@/assets/images/avatars/avatar1.png'
import Image from 'next/image'

const TableRow = ({index}: {index: number}) => {
  return (
    <div className='py-2.5 bg-base-200 rounded-5 px-5 grid desktop:grid-cols-[min-content_auto_160px_160px_160px] tablet:grid-cols-[min-content_auto_100px_100px] grid-cols-[min-content_auto_80px] items-center gap-5'>
        <div className="w-6 h-6 desktop:bg-base-100 rounded-half text-base-300 flex justify-center items-center">
        {index}
        </div>
        <div className="flex items-center gap-2.5">
              <Image className='w-6 h-6 rounded-half tablet:w-[60px] tablet:h-[60px]' src={avatar1} alt="" />
            <h5 className='p tablet:h5'>
                  Jaydon Ekstrom Bothman
            </h5>
        </div>
          <p className='text-green hidden tablet:block'>+1.41%</p>
          <p className='hidden desktop:block'>602</p>
          <p>12.4 ETH</p>
    </div>
  )
}

const TableHead = () => {
  return (
    <div className='py-3 border border-base-200 rounded-5 px-5 grid desktop:grid-cols-[min-content_auto_160px_160px_160px] tablet:grid-cols-[min-content_auto_100px_100px] grid-cols-[min-content_auto_80px] gap-5 text-base-300'>
      <div className="w-6 h-6 desktop:bg-base-100 rounded-half text-base-300 flex justify-center items-center">
        #
      </div>
      <p>Artist</p>
      <p className='hidden tablet:block'>Change</p>
      <p className='hidden desktop:block'>NFTs Sold</p>
      <p>Volume</p>
    </div>
  )
}

const Table = () => {
  return (
    <div className='grid mx-auto max-w-breakpoint px-4 w-full gap-5'>
      <TableHead />
      <TableRow index={1} />
      <TableRow index={2} />
      <TableRow index={3} />
      <TableRow index={4} />
      <TableRow index={5} />
      <TableRow index={6} />
    </div>
  )
}

export default Table