import pinata from "@/helper/pinata";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest, {params: {id}}: {params: {id: string}}) => {
    try {
        const url = await pinata.gateways.createSignedURL({
            cid: id,
            expires: 3600,
        });
        const { data } = await axios.get(url)
        return NextResponse.json(data, { status: 200 })
    } catch (error) {
        return NextResponse.json("Retrieval error", {status: 500})
    }
    
}