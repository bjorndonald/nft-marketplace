import cx from "@/utils/cx"
import "./../style/global.scss"
import { SpaceMono, WorkSans } from "@/style/fonts"
import { createMetadata } from "@/utils/metadata"
import { Meta } from "./meta";
import Header from "@/components/molecules/header";
import { Main } from "@/components/atoms/main";
import { Footer } from "@/components/molecules/footer";
import { NFTMarketplaceProvider } from "@/Contexts/NFTMarketplaceContext";

export const metadata = {
  ...createMetadata({
    title: "NFT Marketplace",
    description:
      // eslint-disable-next-line max-len
      "NFT Marketplace for buying and selling digital assets. A quirky and creative template",
    keywords: [
      "nft",
      "marketplace",
      "digital assets",
      "buy",
      "sell",
      "creative",
      "quirky",
      "template",
    ],
  }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      data-theme="light"
      id={"page"}
      lang={"en"}
      className={cx(WorkSans.variable, SpaceMono.variable)}
      suppressHydrationWarning
    >
      <head>
        <Meta />
      </head>
      <body className={WorkSans.className}>
        <NFTMarketplaceProvider>
          <Header />
          {children}
          <Footer /> 
        </NFTMarketplaceProvider>
        
      </body>
    </html>
  )
}
