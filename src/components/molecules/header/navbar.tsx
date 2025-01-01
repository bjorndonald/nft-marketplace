"use client"
import React, { useContext, useEffect } from "react"
import { ButtonsGroup, ExtraNavLinks, Nav, NavItem, NavLink, NavList, NavPageLink, NavPageLinkText } from "./navbar.style"
import cx, { TWComponentProps } from "@/utils/cx";
import Logo from "@/components/atoms/logo";
import { NavToggle } from "./nav-toggle";
import { Button } from "@/components/atoms/button";
import User from "@/components/icons/User.icon";
import { NFTMarketplaceContext } from "@/Contexts/NFTMarketplaceContext";
import { useRouter } from "next/navigation";

const linkList = [
    {
        title: "Marketplace",
        href: "/marketplace",
        className: "text-green",
    },
    {
        title: "Rankings",
        href: "/rankings",
        className: "text-orange",
    },
    
];

interface NavbarProps extends TWComponentProps<typeof Nav> {
    path?: string;
    expanded?: boolean;
    onNavToggleClick?: () => void;
}

const Navbar = (props: NavbarProps) => {
    const navigate = useRouter()
    const { expanded, className } = props;
    const {currentAccount, connectWallet} = useContext(NFTMarketplaceContext)

    const { checkContract, checkIfWalletConnected } = useContext(NFTMarketplaceContext)
    useEffect(() => {
        checkContract()
        checkIfWalletConnected()
        return () => {

        }
    }, [])
    console.log(currentAccount)
    return (
        <Nav id={"navigation"} className={className}>
            <NavLink
                title={"NFT Marketplace - Home Page"}
                href={"/"}
                className={"gap-2 p-0 !self-center hocus:text-base-content"}
                aria-current={props.path === "/" ? "page" : undefined}
            >
                <Logo className={"saturate-125 dark:saturate-150"} />
                <span className={"saturate-125 dark:saturate-150"}>
                    NFT Marketplace
                </span>
            </NavLink>
            <NavList
                className={
                    expanded
                        ? "max-h-[calc(100vh-54px)] opacity-100 select-auto pointer-events-auto visible"
                        : ""
                }
            >
                {linkList.map((link) => {
                    const isActive = props.path?.startsWith(link.href) || false;
                    return (
                        <NavItem
                            key={link.href}
                            className={isActive ? "before:bg-base-300" : ""}
                        >
                            <NavPageLink
                                title={`${link.title} page`}
                                href={link.href}
                                aria-current={isActive ? "page" : undefined}
                                className={cx(
                                    `hocus:${link.className}`,
                                    isActive ? link.className : "",
                                    isActive ? "saturate-125 dark:saturate-150" : "",
                                )}
                                prefetch={!isActive}
                            >
                                <NavPageLinkText>{link.title}</NavPageLinkText>
                            </NavPageLink>
                        </NavItem>
                    );
                })}
                {!!currentAccount ? <>
                    
                    <Button onClick={() => navigate.push("upload-nft")} title="Create NFT">Create</Button>
                   
                {/* <NavPageLinkText className="px-3 py-5">{currentAccount}</NavPageLinkText> */}
                    
                </>  : <NavItem 
                className="cursor-pointer px-3 py-5"
                    onClick={() => {
                        console.log("issiur")
                        connectWallet()}}
                >

                    <NavPageLinkText className="hover:text-white">Connect to Wallet</NavPageLinkText>

                </NavItem>}
                
                <ExtraNavLinks aria-hidden={"true"} />
                <ExtraNavLinks>
                    <Button className="px-[30px] py-3" title="Sign up">
                        <User width={20} height={20} fill="#fff" />
                        Sign Up
                    </Button>
                </ExtraNavLinks>
            </NavList>
            <ButtonsGroup>
                <li>
                    <NavToggle
                        title={`${expanded ? "Collapse" : "Expand"} menu`}
                        aria-label={`${expanded ? "Collapse" : "Expand"} menu`}
                        aria-expanded={expanded}
                        aria-controls={"header"}
                        onClick={props.onNavToggleClick}
                    />
                </li>
            </ButtonsGroup>
        </Nav>
    )
}

export default Navbar