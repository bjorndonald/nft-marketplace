import React from 'react'
import { AdditionalInfo, ArtistInfo, ArtistName, HighestBid, HighlightedContainer, NftContainer, NftImage, NFTInfo, Price } from './nft.styles'
import { TWComponentProps } from '@/utils/cx'
import NFTType from '@/types/nft'
import { Avatar } from '@/components/atoms/artist'

interface HighlightedNFTProps extends TWComponentProps<typeof HighlightedContainer> {
  nft: NFTType
}

const HighlightedNFT = (props: HighlightedNFTProps) => {
  const { nft, ...rest } = props
  return (
    <HighlightedContainer {...rest}>
      <NftImage src={nft.picture} alt={nft.title} />
      <NFTInfo>
        <ArtistInfo>
          <h5>{nft.artist.name}</h5>
          <ArtistName>
            <Avatar size='xs' src={nft.artist.picture} alt={nft.artist.name} />
            <span>{nft.artist.name}</span>
          </ArtistName>
        </ArtistInfo>
      </NFTInfo>
    </HighlightedContainer>
  )
}

export default HighlightedNFT