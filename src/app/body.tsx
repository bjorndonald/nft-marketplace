"use client";

import { Footer } from '@/components/molecules/footer';
import Header from '@/components/molecules/header';
import { NFTMarketplaceProvider } from '@/Contexts/NFTMarketplaceContext';
import React, { ReactNode } from 'react'

const body = ( {children}: {children: ReactNode}) => {
  return (
      <NFTMarketplaceProvider>
          <Header />
          {children}
          <Footer />
      </NFTMarketplaceProvider>
  )
}

export default body