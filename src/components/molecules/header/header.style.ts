import cx, { tw } from "@/utils/cx";

export const StyledHeader = tw.header`desktop:px-0 desktop:py-0 w-screen absolute top-0 left-0 z-50 transition-[height] duration-300 ease-in-out max-h-[54px] desktop:max-h-[100px] overflow-hidden`;

export const expandedClasses = cx(
    "desktop:h-[unset]",
    "h-screen",
    "fixed",
    "max-desktop:max-h-full",
);