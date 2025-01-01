import pinata from "@/helper/pinata";
import { NextRequest, NextResponse } from "next/server";
import { PinataSDK } from 'pinata';


export const POST = async (req: NextRequest) => {
    const data = await req.json()
    try {
        const upload = await pinata.upload.json(data);
        console.log(Date.now())
        const url = await pinata.gateways.createSignedURL({
            cid: upload.cid,
            expires: 3600,
            date: Date.now(),
            
        })
    return NextResponse.json({
        url })
    } catch (error) {
        return NextResponse.json("upload error", { status: 500 })
    }
}
