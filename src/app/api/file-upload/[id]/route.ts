// import pinata from "@/helper/pinata";
import { NextRequest, NextResponse } from "next/server"
import { PinataSDK } from "pinata";
const pinata = new PinataSDK({
    pinataJwt: process.env.PINATA_ACCESS_TOKEN,
    pinataGateway: process.env.PINATA_GATEWAY,
});
export const GET = async (req: NextRequest, {params: {id}}: {params: {id: string}}) => {
    try {
        const url = await pinata.gateways.createSignedURL({
            cid: id,
            expires: 1800,
        })
        return NextResponse.json({url}, { status: 200 })
    } catch (error) {
        return NextResponse.json("Retrieval error", {status: 500})
    }
    
}