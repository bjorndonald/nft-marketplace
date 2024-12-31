import React, { ReactNode, useEffect, useState } from 'react'
import Web3Modal from "web3modal"
import {ethers} from "ethers"
import axios from 'axios';
import { create as ipfsHttpClient } from 'ipfs-http-client'

import {NFTMarketplaceAddress, NFTMarketplaceABI} from './constants'

const client = ipfsHttpClient({
    host: 
    'https://ipfs.infura.io:5001/api/v0'})

const fetchContract = (signerOrProvider: ethers.ContractRunner | null | undefined) => new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
)

const connectingWithSmartContract = async () => {
    try {
        const web3Modal = new Web3Modal()
        const  connection = await web3Modal.connect()
        const provider = new ethers.BrowserProvider(connection)
        const signer = await provider.getSigner()
        const contract = fetchContract(signer);
    } catch (error) {
        console.log("Something went wrong while connecting the contract")
    }
}

type NFTMarketplaceCOntextType = {
    checkContract: Function
    checkIfWalletConnected: Function
    connectWallet: Function
}

export const NFTMarketplaceContext = React.createContext<NFTMarketplaceCOntextType>({
    checkContract: () => {},
    checkIfWalletConnected: () => {},
    connectWallet: () => {}
});

export const NFTMarketplaceProvider = ({children}:{children: ReactNode}) => {
    const [currentAccount, setCurrentAccount] = useState("");

    const checkIfWalletConnected = async () => {
        try {
            if (!window.ethereum) return console.log("Install Metamask")

                const accounts = await window.ethereum.request({
                    method: "eth_accounts"
                })

                if(accounts.length) {
                    setCurrentAccount(accounts[0])
                }
                else console.log("No account found");
        } catch (error) {
            console.log("Something wrong while connecting wallet")
        }
    }

    const checkContract = async () => {
        const contract = await connectingWithSmartContract()
        console.log(contract)
    }

    const connectWallet = async () => {
        try {
            if (!window.ethereum) return console.log("Install Metamask")

            const accounts = await window.ethereum.request({
                method: "eth_requestAccount"
            });

            setCurrentAccount(accounts[0])
            window.location.reload()
        } catch (error) {
            console.log("Error while connecting to wallet")
        }
    }

    const uploadToIPFS = async(file: any) => {
        try {
            const added = await client.add({content: file})
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            return url
        } catch (error) {
            console.log("upload error")
        }
    }

    return (
        <NFTMarketplaceContext.Provider value={{ checkContract, checkIfWalletConnected, connectWallet }}>
            {children}
        </NFTMarketplaceContext.Provider>
    )
}