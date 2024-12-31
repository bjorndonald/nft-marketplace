"use client";
import { NFTMarketplaceContext } from '@/Contexts/NFTMarketplaceContext';
import React, { useContext, useEffect } from 'react'

const Check = () => {
    const {checkContract} = useContext(NFTMarketplaceContext)
    useEffect(() => {
      checkContract()
    
      return () => {
        
      }
    }, [])
    
  return (
    null
  )
}

export default Check