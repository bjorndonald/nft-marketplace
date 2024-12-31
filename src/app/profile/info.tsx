import Copy from '@/components/icons/Copy.icon'
import Plus from '@/components/icons/Plus.icon'
import { SocialLinks } from '@/components/molecules/social-links'
import React from 'react'

const Info = () => {
  return (
    <div className='py-10'>
          <div className="container grid grid-flow-col grid-cols-[minmax(1fr,510px)] grid-rows-[repeat(5,min-content)] desktop:grid-rows-[repeat(4,min-content)] desktop:grid-cols-[minmax(1fr,510px)_min-content] justify-between gap-7.5">
              <h1 className='h4 tablet:h3 desktop:h2'>Animakid</h1>
        <div className="flex tablet:[grid-column:2/3] flex-col gap-5  tablet:flex-row">
                <button className='btn btn-primary'>
                    <Copy className='fill-white' />
                      0xc0E3...B79C
                </button>
                  <button className='btn btn-outline btn-primary'>
                      <Plus className='fill-primary hover:fill-white' />
                      Follow
                  </button>
            </div>
            <div className="grid gap-5 grid-cols-3">
                <div className="flex flex-col">
                    <h4 className='h5 desktop:h4'>
                          250k+
                    </h4>
                      <p>Volume</p>
                </div>
                  <div className="flex flex-col">
                      <h4 className='h5 desktop:h4'>
                          50k+
                      </h4>
                      <p>NFTs Sold</p>
                  </div>
                  <div className="flex flex-col">
                      <h4 className='h5 desktop:h4'>
                          3000+
                      </h4>
                      <p>Followers</p>
                  </div>
            </div>
            <div className="flex gap-2.5 flex-col">
                <p className='text-base-300 font-spacemono'>
                      Bio
                </p>
                  <p className='font-worksans'>The internet's friendliest designer kid.</p>
            </div>
              <div className="flex gap-2.5 flex-col">
                  <p className='text-base-300 font-spacemono'>
                      Links
                  </p>
                 <SocialLinks />
              </div>
        </div>
    </div>
  )
}

export default Info