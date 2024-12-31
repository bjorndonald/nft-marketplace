/* eslint-disable max-len */
import type { ComponentProps } from "react";

import { discord } from "@/components/icons";
import cx from "@/utils/cx";

import { SocialLink } from "./social-link";
import Youtube from "@/components/icons/Youtube.icon";
import Discord from "@/components/icons/Discord.icon";

export const SocialLinks = (props: ComponentProps<"ul">) => {
    return (
        <ul className={cx("flex flex-row items-center gap-2.5", props.className)}>
            <li>
                <SocialLink
                    title={"discord"}
                    href={"https://discord.com/bjorndonald"}
                    iconPath={discord}
                    className={
                        "hocus:bg-[#424549] dark:hocus:bg-[#424549] [&_path]:fill-[#858584] discord"
                    }
                >
                    <Discord className={"transition-colors delay-[-100ms] size-5.5"} />
                    </SocialLink>
            </li>
            <li>
                <SocialLink
                    title={"Youtube"}
                    href={"#"}
                    className={
                        "hocus:text-[#FF0000] hocus:dark:text-[#FF0000] hocus:bg-[#e7f0f9] text-[#858584]"
                    }
                >
                    <Youtube className={"transition-colors delay-[-100ms] size-5.5"} />
                </SocialLink>
            </li>
            <li>
                <SocialLink
                    title={"𝕏 (formerly Twitter)"}
                    aria-label={"𝕏 (formerly Twitter)"}
                    href={"https://twitter.com/6lackbjorn"}
                    className={cx(
                        "leading-none text-[#858584]",
                        "hocus:text-[#1471a9] hocus:dark:text-[#1da1f2] hocus:bg-[#e8f6fe] dark:hocus:bg-[#093049]",
                    )}
                >
                    <span
                        className={cx(
                            "font-spacemono font-semibold",
                            "size-5.5 select-none",
                            "flex items-center justify-center",
                            "leading-none text-xl text-center",
                        )}
                    >
                        𝕏
                    </span>
                </SocialLink>
            </li>
            <li>
                <SocialLink
                    title={"Instagram"}
                    href={"https://instagram.com/6lackbjorn"}
                    iconPath={
                        "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                    }
                    className={
                        "text-[#858584] hocus:text-[#ae3077] hocus:dark:text-[#d472a9] hocus:bg-[#f9ebf3] dark:hocus:bg-[#3a1028]"
                    }
                />
            </li>
        </ul>
    )
}