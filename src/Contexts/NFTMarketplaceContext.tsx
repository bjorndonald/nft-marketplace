"use client";
import React, { ReactNode, useEffect, useState } from 'react'
import Web3Modal from "web3modal"
import {ethers} from "ethers"
import axios from 'axios';


import {NFTMarketplaceAddress, NFTMarketplaceABI} from './constants'





const fetchContract = (signerOrProvider: ethers.Signer | ethers.providers.Provider) => new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
)

const connectingWithSmartContract = async () => {
    try {
        const web3Modal = new Web3Modal()
        const  connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = await provider.getSigner()
        const contract = fetchContract(signer);
        return contract
    } catch (error) {
        console.log("Something went wrong while connecting the contract")
    }
}

type NFTMarketplaceCOntextType = {
    checkContract: Function
    checkIfWalletConnected: Function
    connectWallet: Function
    createNFT: Function
    uploadToIPFS: Function
    currentAccount: any
    fetchNFTs: Function
    buyNFT: Function
    fetchMyNFTsOrListedNFTs: Function
}

export const NFTMarketplaceContext = React.createContext<NFTMarketplaceCOntextType>({
    checkContract: () => {},
    checkIfWalletConnected: () => {},
    connectWallet: () => {},
    createNFT: () => {},
    uploadToIPFS: () => {},
    currentAccount: undefined,
    fetchNFTs: () => {},
    buyNFT: () => {},
    fetchMyNFTsOrListedNFTs: () => {},
});

export const NFTMarketplaceProvider = ({children}:{children: ReactNode}) => {
    const [currentAccount, setCurrentAccount] = useState();

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
                console.log(currentAccount)
        } catch (error) {
            console.log("Something wrong while connecting wallet")
        }
    }

    useEffect(() => {
      checkIfWalletConnected()
    
      return () => {
        
      }
    }, [])
    

    const checkContract = async () => {
        const contract = await connectingWithSmartContract()
         return contract
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
            const formData = new FormData()
            formData.append("file", file)
            const res = await axios.post("/api/file-upload", formData)
            
            return res.data.url
        } catch (error) {
            console.log("upload error")
        }
    }

    interface Inputs {
        name: string;
        description: string;
        price: number;
    }

    // -- CREATE NFT Function
    const createNFT = async (formInput: Inputs, fileUrl: string,) => {
        
            const {name, description, price} =formInput;

            if(!name || !description || !price || !fileUrl.length)
                return console.log("Data is Missing")

            const data = JSON.stringify({name, description, price, fileUrl})

            try {
                
                const res = await axios.post("/api/upload",data)
                await createSale(res.data.url, price)
            }
           catch (error) {
                    console.log("Error while creating NFT")
                }
       
    }

    //--- createSale Function

    const createSale = async (url:string, nftPrice: number, isResale: boolean = false, id: string = "") => {
        try {
            const price = ethers.utils.parseUnits(nftPrice.toString(), "ether")
            const contract = await connectingWithSmartContract()

            const listingPrice = await contract?.getListingPrice()
            console.log(url, price)
            const transaction = !isResale ? 
            await contract?.createToken(url, price, {
                value: listingPrice.toString()
            }) : await contract?.reSellToken(url, price, {
                value: listingPrice.toString()
            })

            await transaction.wait();

        } catch (error) {
            console.log("error while creating sale")
        }
    }

    //-- FETCH NFTS
    const fetchNFTs = async () => {
        try {
            const provider = new ethers.providers.JsonRpcProvider();
            const contract = fetchContract(provider);

            const data = await contract.fetchMarketItems();
            console.log(data)
            const items = await Promise.all(
                data.map(async({tokenId, seller, owner, price: unformattedPrice}:{tokenId: string, seller: string, owner: string, price: string})=> {
                    const tokenURI = await contract.tokenURI(tokenId);
                    console.log(tokenURI)
                    const {
                        data: {image, name, description},
                    } = await axios.get(tokenURI);
                    const price = ethers.utils.formatUnits(
                        unformattedPrice.toString(),
                        "ether"
                    );

                    return {
                        price,
                        tokenId: parseInt(tokenId),
                        seller,
                        owner,
                        image,
                        name,
                        description,
                        tokenURI
                    }
                })
            );
            return items;
        } catch (error) {
            console.log("Error while fetching NFTs")
        }
    }

    interface NFT {
        tokenId: string
        price: number;
    }

    const buyNFT = async (nft: NFT) => {
        try {
            const contract = await connectingWithSmartContract();
            const price = ethers.utils.parseUnits(nft.price.toString(), "ether")

            const transaction = await contract?.createMarketSale(nft.tokenId, {
                value: price
            })
             
            await transaction.wait();
        } catch (error) {
            console.log("Error While buying NFT")
        }
    }

    const fetchMyNFTsOrListedNFTs = async(type: string) => {
        try {
            const contract = await connectingWithSmartContract();
            const data = type == "fetchItemsListed" ? await contract?.fetchItemsListed(): await contract?.fetchMyNFTs()

            const items = await Promise.all(
                data.map(async ({ tokenId, seller, owner, price: unformattedPrice }: { tokenId: string, seller: string, owner: string, price: string }) => {
                    const tokenURI = await contract?.tokenURI(tokenId);

                    const {
                        data: { image, name, description },
                    } = await axios.get(tokenURI);
                    const price = ethers.utils.formatUnits(
                        unformattedPrice.toString(),
                        "ether"
                    );

                    return {
                        price,
                        tokenId: parseInt(tokenId),
                        seller,
                        owner,
                        image,
                        name,
                        description,
                        tokenURI
                    }
                })
            );
            return items;
        } catch (error) {
            console.log("While fetching listed NFTs")
        }
    }

    return (
        <NFTMarketplaceContext.Provider value={{ checkContract, checkIfWalletConnected, connectWallet, createNFT, currentAccount, uploadToIPFS, buyNFT, fetchMyNFTsOrListedNFTs, fetchNFTs }}>
            {children}
        </NFTMarketplaceContext.Provider>
    )
}