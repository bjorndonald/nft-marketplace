import cx, { tw, type TWComponentProps } from "@/utils/cx";

const NavToggleButton = tw.button`
  flex
  items-center
  justify-center
  p-2
  rounded-1.5
  transition
  hocus:bg-toolbar-highlight
  group/nav-toggle
  [--move:0.3125rem]
  desktop:hidden
  desktop:invisible
  desktop:select-none
  desktop:pointer-events-none
`;

const MenuLine = tw.span.attrs({ "aria-hidden": true })`
  w-[12.75px]
  h-0.5
  bg-base-content
  transition
  group-hocus/nav-toggle:bg-accent-dark
`;

export const NavToggle = (props: TWComponentProps<typeof NavToggleButton>) => {
    const expanded = Boolean(props["aria-expanded"]);
    return (
        <NavToggleButton {...props} aria-expanded={expanded}>
            <div aria-hidden={"true"} className={"flex flex-col gap-0.75"}>
                <MenuLine
                    className={expanded ? "translate-y-[var(--move)] rotate-45 w-[18px]" : ""}
                />
                <MenuLine className={cx("w-[18px]", expanded && "opacity-0")} />
                <MenuLine
                    className={
                        expanded ? "w-[18px] translate-y-[calc(var(--move)_*_-1)] -rotate-45" : ""
                    }
                />
            </div>
        </NavToggleButton>
    );
};