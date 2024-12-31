import Image from 'next/image'
import React from 'react'
import register from '@/assets/images/register.png'
import TextInput from '@/components/atoms/textinput'
import User from '@/components/icons/User.icon'
import { Mail } from 'react-feather'
import LockKey from '@/components/icons/LockKey.icon'
import Link from 'next/link'
import Metamask from '@/components/icons/Metamask.icon'
import WalletConnect from '@/components/icons/WalletConnect.icon'
import Coinbase from '@/components/icons/Coinbase.icon'

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <div className="h-[232px] w-full tablet:w-[unset] tablet:flex-1 relative">
        <Image className='object-cover object-center top-0 left-0 w-full h-full' src={register} alt="Something" />
      </div>
      <div className="flex-1 p-[30px] tablet:h-full flex flex-col justify-center tablet:p-0">
        <h2 className='max-mobile:h3 mb-5'>Connect wallet</h2>
        <p className='tablet:base mb-10'>Choose a wallet you want to connect. There are several wallet providers.</p>

        <div className='flex flex-col gap-5'>
          <button className="border bg-base-200 border-primary rounded-5 h5 items-center flex gap-5 pl-10 pr-5">
            <Metamask />
            Metamask
          </button>
          <button className="border bg-base-200 border-primary rounded-5 h5 items-center flex gap-5 pl-10 pr-5">
            <WalletConnect />
            Wallet Connect
          </button>
          <button className="border bg-base-200 border-primary rounded-5 h5 items-center flex gap-5 pl-10 pr-5">
            <Coinbase />
            Coinbase
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage