import React from 'react'
import { AdditionalInfo, ArtistInfo, ArtistName, HighestBid, NftContainer, NftImage, NFTInfo, Price } from './nft.styles'
import { TWComponentProps } from '@/utils/cx'
import NFTType from '@/types/nft'
import { Avatar } from '@/components/atoms/artist'

interface NFTCardProps extends TWComponentProps<typeof NftContainer> {
  nft: NFTType
}

const NftCard = (props: NFTCardProps) => {
  const { nft, ...rest } = props
  return (
    <NftContainer {...rest}>
      <NftImage src={nft.picture} alt={nft.title} />
      <NFTInfo>
        <ArtistInfo>
          <h5>{nft.artist.name}</h5>
          <ArtistName>
            <Avatar size='xs' src={nft.artist.picture} alt={nft.artist.name} />
            <span>{nft.artist.name}</span>
          </ArtistName>
        </ArtistInfo>
        <AdditionalInfo>
          <Price>
            <span className='caption'>Price</span>
            <span>{nft.price} ETH</span>
          </Price>
          <HighestBid>
            <span className='caption'>Highest Bid</span>
            <span>{nft.highest_bid} wETH</span>
          </HighestBid>
        </AdditionalInfo>
      </NFTInfo>
      
    </NftContainer>
  )
}

export default NftCard