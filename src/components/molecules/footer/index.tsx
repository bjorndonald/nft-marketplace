import Logo from "@/components/atoms/logo";
import cx from "@/utils/cx";
import { BottomInfo, DetailList, Details, FooterContainer, FooterLink, StyledFooter } from "./footer.styles";
import FullLogo from "@/components/atoms/full-logo";
import { SocialLinks } from "../social-links";
import { footerLinks } from "./footer.data";
import SubscribeForm from "../../atoms/subscribe-form";

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterContainer>
            <Details>
                <DetailList>
                    <FullLogo className="mb-5 desktop:mb-[30px]" />
                    <p className={"text-neutral-content mb-5"}>
                        NFT marketplace UI created with Anima for Figma.
                    </p>
                    <p className={"text-neutral-content mb-[15px]"}>Join our community</p>
                    <SocialLinks />
                </DetailList>
                <DetailList>
                    <h5 className="desktop:mb-[25px] mb-5">Explore</h5>
                    <ul 
                        title={"Site Links"}
                        aria-label={"Site Links"}
                    className="flex flex-col gap-5">
                        {footerLinks.map((link)=> {
                            const className = `hocus:${link.className}`;
                            return (<li key={link.title}>
                                <FooterLink
                                    title={link.title}
                                    href={link.href}
                                    className={className}
                                    {...link.props}
                                    prefetch={false}
                                >
                                    {link.title}
                                </FooterLink>
                            </li>)
                        })}
                    </ul>
                </DetailList>
                <DetailList>
                        <h5 className="desktop:mb-[25px] mb-5">Join our weekly digest</h5>
                    <p className={"text-neutral-content mb-5"}>
                        Get exclusive promotions & updates straight to your inbox.
                    </p>
                    <SubscribeForm />
                    </DetailList>
               
            </Details>
            <BottomInfo>
                Ⓒ NFT Market. Use this template freely.
            </BottomInfo>
        </FooterContainer>
        </StyledFooter>
    )
}