import Image from 'next/image'
import React from 'react'
import register from '@/assets/images/register.png'
import TextInput from '@/components/atoms/textinput'
import User from '@/components/icons/User.icon'
import { Mail } from 'react-feather'
import LockKey from '@/components/icons/LockKey.icon'
import Link from 'next/link'
import { Main } from '@/components/atoms/main'

const RegisterPage = () => {
  return (
    <Main className="min-h-[800px] flex flex-col tablet:flex-row tablet:items-center">
      <div className="h-[232px] w-full tablet:min-w-[50vw] shrink-0 tablet:min-h-[800px] tablet:w-auto tablet:flex-1 relative">
              <Image className='object-cover object-center top-0 left-0 w-full h-full' src={register} alt="Something" />
        </div>
        <div className=" shrink p-[30px] tablet:h-full flex flex-col justify-center tablet:px-10 desktop:px-[60px]">
              <h2 className='max-mobile:h3 mb-5'>Create account</h2>
              <p className='tablet:base mb-10'>Welcome! enter your details and start creating, collecting and selling NFTs.</p>

              <form className='flex flex-col gap-[15px] tablet:max-w-[330px]'>
                <TextInput placeholder='Username' leftIcon={<User/>} />
                  <TextInput placeholder='Email' leftIcon={<Mail />} />
                  <TextInput placeholder='Password' leftIcon={<LockKey />} />
                  <TextInput placeholder='Confirm Password' leftIcon={<LockKey />} />
                  <Link href={"/"} className='btn btn-primary flex justify-center w-full rounded-5 btn-tertiary'>Create account</Link>
              </form>
        </div>
    </Main>
  )
}

export default RegisterPage