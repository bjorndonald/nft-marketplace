import { Main } from '@/components/atoms/main'
import React from 'react'
import Cover from './cover'
import Info from './info'
import Nfts from './nfts'

const page = () => {
  return (
    <Main>
        <Cover />
        <Info />
        <Nfts />
    </Main>
  )
}

export default page