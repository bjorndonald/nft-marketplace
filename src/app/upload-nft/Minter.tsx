/** 
HOW TO?

* Open two terminals

* In the first one run `yarn hardhat node`

* In the second one run `yarn hardhat run scripts/deploy.js --network localhost`
  Then run `yarn dev` in the same terminal

**/
"use client";

import { useContext, useState } from "react";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { getContract } from "@/helper/contract";
import { create as ipfsHttpClient, Options } from "ipfs-http-client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Image from "next/image";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";

import "react-toastify/dist/ReactToastify.css";
import { NFTMarketplaceContext } from "@/Contexts/NFTMarketplaceContext";

interface Inputs {
    name: string;
    description: string;
    price: number;
    nftFile: File;
}

export default function Minter() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({});
    const [preview, setPreview] = useState <string | ArrayBuffer | null>(null);
    const {uploadToIPFS, createNFT} = useContext(NFTMarketplaceContext)

    const { active } = useWeb3React();

    const [file, setFile] = useState<File | null>();
    const router = useRouter();
    const web3reactContext = useWeb3React();
    const notify = () => {
        toast.error("Your wallet is not connected !!!");
    };

    // Function for creating and updating the file url
    async function onChange(e: any) {
        // e is an event
        const file = e.target.files[0];
        try {
            
            setFile(file)
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    setPreview(e.target!.result);
                };
                reader.readAsDataURL(file);
            }
        } catch (error) {
            console.log("Error uploading file: ", error);
        }
        
    }

    async function onSubmit({ name, description, price }: Inputs) {
        try {
            const fileUrl = await uploadToIPFS(file)
            const url = await createNFT({
                name,
                description,
                price,

            }, fileUrl);

            toast.success(`NFT created: ${url}`)
        } catch (error) {
            console.log("Error minting", error);
            
        }
       
        // router.push("/marketplace"); 
   }

    return (
        <motion.div animate={{ scale: [0.9, 1] }} transition={{ duration: 1 }}>
            <div
                className="flex justify-center py-10 items-center"
                
            >
                <form
                    className="mt-16 flex flex-col space-y-3 tablet:w-1/2 p-4 desktop:-mt-10 bg-slate-300 rounded-lg bg-gradient-to-tr from-violet-500 to-fuchsia-500 "
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        type="text"
                        placeholder="NFT name"
                        className="p-5 rounded"
                        {...register("name", {
                            required: true,
                            maxLength: 50,
                        })}
                    />
                    {errors?.name?.type === "required" && (
                        <p>This field is required</p>
                    )}
                    {errors?.name?.type === "maxLength" && (
                        <p>Name cannot exceed 20 characters</p>
                    )}

                    <input
                        type="text"
                        placeholder="NFT Description"
                        className="p-5 rounded"
                        {...register("description", { maxLength: 200 })}
                    />
                    {errors?.description?.type === "maxLength" && (
                        <p>Description cannot exceed 200 characters</p>
                    )}

                    <input
                        type="number"
                        placeholder="Listing price"
                        className="p-5 rounded"
                        {...register("price", { required: true, min: 0.001 })}
                    />
                    {errors.price && <p>Price must be at least 1</p>}

                    <input
                        type="file"
                        className=""
                        {...register("nftFile", { required: true })}
                        onChange={onChange}
                        accept="image/*" //TODO Only accept images for now
                    // accept="image/*,video/*,audio/*,.glb,.gltf"
                    />
                    {errors?.nftFile?.type === "required" && (
                        <p>Adding a file is required</p>
                    )}
                    {file && (
                        <div className="rounded-lg mx-auto">
                            <img
                                className="rounded"
                                src={preview as string}
                                alt="NFT file"
                                width={350}
                                height={257}
                                
                               
                            />
                        </div>
                    )}
                   
                        <button
                            type="submit"
                            className="items-center py-2 px-6 mx-0 mt-2 mb-0 font-semibold text-center normal-case whitespace-nowrap bg-none rounded-full border-2 border-solid cursor-pointer box-border border-stone-500 bg-zinc-800 text-stone-200 hover:border-neutral-600"
                        >
                            Mint an NFT
                        </button>
                    
                    
                </form>
            </div>
        </motion.div>
    );
}
