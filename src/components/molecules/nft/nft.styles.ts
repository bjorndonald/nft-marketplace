import { Img } from "@/components/atoms/img";
import { tw } from "@/utils/cx";

export const NftContainer = tw.div`
   bg-base-200 min-w-[238px] min-h-[402px] flex flex-col desktop:min-h-[468px] desktop:min-w-[330px] rounded-5 overflow-hidden
`

export const HighlightedContainer = tw(NftContainer)`
    desktop:min-h-[510px] desktop:min-w-[510px]
`

export const NftImage = tw(Img)`
    w-full grow
`

export const NFTInfo = tw.div`
     flex flex-col gap-2.5 p-5 desktop:gap-[25px] pl-5 desktop:pt-5 pr-5 desktop:pb-[25px] desktop:pl-[30px] desktop:pr-[30px] 
`

export const ArtistInfo = tw.div`
    flex flex-col gap-[5px]
`

export const ArtistName= tw.div`flex gap-3 items-center`

export const AdditionalInfo = tw.div`flex items-center justify-between`

export const Price = tw.div`
    flex flex-col items-start gap-2 [&>caption]:text-neutral-content [&>span]:caption desktop:[&_span]:p
`

export const HighestBid = tw.div`
    flex flex-col items-start gap-2 [&>caption]:text-neutral-content [&>span]:caption desktop:[&_span]:p
`