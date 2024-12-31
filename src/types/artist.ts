import { StaticImageData } from "next/image"

export default interface Artist {
    picture: string | StaticImageData
    name: string
    total_sales?: number
}