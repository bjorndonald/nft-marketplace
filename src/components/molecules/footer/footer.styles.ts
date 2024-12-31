import { Link } from "@/components/atoms/link";
import { MAX_SITE_WIDTH } from "@/constants";
import { tw } from "@/utils/cx";

export const StyledFooter = tw.footer`
    w-full bg-base-200 border-t border-base-100
    gap-8 py-10 flex flex-col tablet:gap-12
`

export const FooterContainer = tw.div.attrs({
    style: { maxWidth: MAX_SITE_WIDTH }
})`
    mx-auto px-4 w-full flex flex-col desktop:gap-12 gap-[30px]
`

export const Details = tw.div`
    grid gap-[30px] grid-cols-1 shrink-0 w-full
    desktop:content-between
    desktop:grid-cols-[auto_minmax(240px,1fr)_min-content]
    desktop:grid-rows-1 grid-rows-[min-content_min-content_min-content]
`

export const DetailList = tw.div`
    flex flex-col
`

export const BottomInfo = tw.div`
    w-full border-t border-neutral-content pt-5 caption
`

export const FooterLink = tw(Link)`
    p text-neutral-content
`