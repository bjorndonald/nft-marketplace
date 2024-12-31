import cx, { tw, TWComponentProps } from "@/utils/cx";
import { Img } from "./img";
import Artist from "@/types/artist";
import { twc } from "react-twc";

type Sizes = "lg" | "sm" | "xs"

type AvatarProps = TWComponentProps<typeof Img> & { size?: Sizes };

export const Avatar = twc(Img)<AvatarProps>((props) => `
rounded-full ${props.size === "xs" ? "w-6 h-6" : "desktop:w-[120px] desktop:h-[120px] w-[60px] h-[60px]"}
`);
 

export const ArtistCardContainer = tw.div`
    flex desktop:flex-col items-center desktop:min-w-[240px] h-fit desktop:gap-5 gap-3 bg-base-200 rounded-5 p-5 relative
`

export const ArtistInfo = tw.div`
    flex flex-col desktop:items-center gap-[5px]
`

export const Tag = tw.div`
    w-[30px] h-[30px] rounded-full flex items-center justify-center bg-base-100 text-neutral-content caption absolute top-5 left-5
`

interface ArtistCardProps extends TWComponentProps<typeof ArtistCardContainer> {
    artist: Artist,
    ranking?: number,
    size: Sizes
}

const ArtistCard = (props: ArtistCardProps) => {
    const { artist, ranking, size, ...rest } = props
    return (
        <ArtistCardContainer {...rest}>
            {typeof ranking == "number" && <Tag>{ranking}</Tag>}
            <Avatar size={size} src={artist.picture} alt={artist.name} />
            <ArtistInfo>
                <span className={cx(size === "xs" && "!h5")}>{artist.name}</span>
                {artist.total_sales && <div className="caption"><span className="text-neutral-content">Total Sales:</span> {artist.total_sales}</div>}
            </ArtistInfo>
        </ArtistCardContainer>
    )
}

export default ArtistCard