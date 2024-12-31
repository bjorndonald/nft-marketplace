import { Avatar } from "@/components/atoms/artist";
import { Img } from "@/components/atoms/img";
import Artist from "@/types/artist";
import { tw, TWComponentProps } from "@/utils/cx";
import { StaticImageData } from "next/image";

const CollectionCard = tw.div`
    w-full flex flex-col gap-[15px]
    h-min
`

const Images = tw.div`
    grid gap-[15px] grid-rows-[min-content_min-content]
     grid-cols-3 [&_img:first-child]:[grid-column:1/4]
`

const Image = tw(Img)`
    w-full h-auto
`

const Others = tw.div`
rounded-5 w-full h-full font-spacemono bg-primary flex items-center justify-center tablet:h5 text-bold text-base text-white
`

const CollectionInfo = tw.div`
    grid w-full grid-cols-[repeat(2,min-content)] gap-x-3 gap-y-2.5 grid-rows-[repeat(2,min-content)] [&_h5]:[grid-column:1/3]
    [&_h5]:text-white 
`

interface CollectionProps extends TWComponentProps<typeof CollectionCard> {
    images: (string | StaticImageData)[]
    image_no: number
    collection: string
    artist: Artist
}

const Collection = (props: CollectionProps) => {
    const { images, collection, image_no, artist, ...otherProps} = props
    return (
        <CollectionCard {...otherProps}>
            <Images>
                {images.map((x,i)=> (       
                    <Image src={x} key={i} alt={collection + " image 1"} />            
                    
                ))}
                <Others>
                    {image_no - 3}+
                </Others>
            </Images>
            <div className="flex flex-col gap-2.5">
                <h5 className="grid shrink-0 whitespace-nowrap">{collection}</h5>
                <div className="flex items-center gap-3">
<Avatar src={artist.picture} size="xs" alt={artist.name} />
                <p>{artist.name}</p>
                </div>
                
            </div>
        </CollectionCard>
    )
}

export default Collection