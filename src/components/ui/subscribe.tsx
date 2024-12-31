import Image from 'next/image'
import React from 'react'
import subscribeImg from '@/assets/images/subscribe.png'
import SubscribeForm from '../atoms/subscribe-form'

const Subscribe = () => {
  return (
    <section className="py-10 desktop:py-20">
        <div className="mx-auto tablet:rounded-5 w-full max-w-breakpoint desktop:p-[60px] flex flex-col tablet:flex-row bg-base-200 gap-[30px] desktop:gap-20 p-[30px]">
            
                <Image className='object-cover object-center top-0 left-0 tablet:w-[255px] w-full h-auto ' src={subscribeImg} alt='Astronaut' />
            
            <div className="flex flex-col">
                  <h4 className='h4 mb-2.5 desktop:h3'>Join our weekly digest</h4>
                  <p className='desktop:base mb-10'>Get exclusive promotions & updates straight to your inbox.</p>
                  <SubscribeForm />
            </div>
        </div>
    </section>
  )
}

export default Subscribe