
import { PinataSDK } from "pinata";

const pinata = new PinataSDK({
    pinataJwt: process.env.PINATA_ACCESS_TOKEN,
    pinataGateway: process.env.PINATA_GATEWAY,
});

export default pinata
