import InfoCard from '@/components/atoms/info'
import CreateCollection from '@/components/graphics/CreateCollection'
import SetupWallet from '@/components/graphics/SetupWallet'
import React from 'react'

const HowItWorks = () => {
  return (
    <section className="desktop:py-20 py-10 ">
          <div className="mx-auto px-4 gap-10 desktop:gap-12 flex flex-col max-w-breakpoint w-full">
            <div className="flex flex-col gap-2.5">
                  <h3 className="h4 desktop:h3">How it works</h3>
                  <p className='desktop:base'>Find out how to get started</p>
            </div>

            <div className="grid gap-5 grid-cols-1 tablet:grid-cols-3 tablet:gap-[30px]">
                <InfoCard>
                    <SetupWallet />
                      <h5 className='tablet:h5 text-base/normal font-worksans font-semibold'>Setup Your wallet</h5>
                      <p>
                          Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.
                      </p>
                </InfoCard>
                  <InfoCard>
                      <CreateCollection />
            <h5 className='tablet:h5 text-base/normal font-worksans  font-semibold'>Create Collection</h5>
                      <p>
                          Upload your work and setup your collection. Add a description, social links and floor price.
                      </p>
                  </InfoCard>
                  <InfoCard>
                      <SetupWallet />
            <h5 className='tablet:h5 text-base/normal font-worksans font-semibold'>Start Earning</h5>
                      <p>
                          Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.
                      </p>
                  </InfoCard>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks