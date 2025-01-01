import pinata from "@/helper/pinata";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const formData = await req.formData()
    try {
        const upload = await pinata.upload.file(formData.get("file") as File);
        const url = await pinata.gateways.createSignedURL({
            cid: upload.cid,
            date: Date.now(),
            expires: 3600,
        })
        return NextResponse.json({ url }) 
    } catch (error) {
        console.log(error)
        return NextResponse.json( "upload error" , {status: 500}) 
    }
}

