import { tw, TWComponentProps } from "@/utils/cx";

const MetricsContainer = tw.div`
    grid w-full gap-[30px] grid-cols-3 [&_div]:flex [&_div]:flex-col
    desktop:[&_h4]:h4 [&_h4]:h5
    desktop:[&_p]:text-2xl
`

interface MetricsProps extends TWComponentProps<typeof MetricsContainer> {
    total_sales: number
    auctions: number
    artists: number
}

const Metrics = (props: MetricsProps) => {
    const { total_sales, auctions, artists, ...otherProps } = props
    return (
        <MetricsContainer {...otherProps}>
            <div>
                <h4>{(total_sales / 1000).toFixed(0)}k+</h4>
                <p>Total Sale</p>
            </div>
            <div>
                <h4>{(auctions / 1000).toFixed(0)}k+</h4>
                <p>Auctions</p>
            </div>
            <div>
                <h4>{(artists / 1000).toFixed(0)}k+</h4>
                <p>Artists</p>
            </div>
        </MetricsContainer>
    )
}

export default Metrics