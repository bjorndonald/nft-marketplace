import { StaticImageData } from "next/image"

export default interface NFTType {
    title: string
    picture: string | StaticImageData
    artist: {
        picture: string | StaticImageData
        name: string
    }
    price: number
    highest_bid: number
}