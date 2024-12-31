import { tw } from '@/utils/cx';
import { Link } from '@/components/atoms/link';

export const Nav = tw.nav`
  relative
  mx-auto
  h-full
  w-full
  z-4 bg-base-100
  desktop:px-[50px] desktop:py-5 
  px-[30px] py-[15px]
  backdrop-saturate-125
  transform-gpu
  grid
  grid-cols-[auto_1fr]
  grid-rows-[auto_1fr]
  transition
  duration-200
  desktop:items-center
  desktop:grid-cols-[auto_1fr_auto]
  desktop:grid-rows-1
  desktop:gap-2
`
export const NavList = tw.ul`
  opacity-0
  select-none
  pointer-events-none
  invisible
  flex flex-col
  justify-center
  gap-2
  px-0.5
  transition
  duration-200
  delay-150
  will-change-[max-height,opacity,visibility]
  desktop:p-0
  desktop:opacity-100
  desktop:select-auto
  desktop:pointer-events-auto
  desktop:visible
  desktop:flex-row
  desktop:justify-end
  max-desktop:col-span-2
`
export const NavItem = tw.li`
  relative
  desktop:h-fit
  before:absolute
  before:top-0
  before:right-0
  before:bottom-0
  before:left-0
  before:rounded-1.5
  before:transition-colors
  before:duration-150
  before:bg-transparent
  hocus:before:bg-base-300
`

export const NavLink = tw(Link)`
  px-3 py-5 
  relative
  no-underline
  h-fit
  font-semibold rounded-1.5
  flex items-center
  transition-colors duration-200
`;

export const NavPageLink = tw(NavLink)`
text-base-content
  transition-colors
  hocus:saturate-125
  hocus:dark:saturate-150
`;

export const NavPageLinkText = tw.span`
  p
  text-base-content
`;

export const ButtonsGroup = tw.ul`
  flex flex-row
  items-center
  justify-end
  gap-2
  [grid-row:1]
  [grid-column:2]
  desktop:gap-0
  desktop:justify-start
  desktop:[grid-column:3/4]
`;

export const ExtraNavLinks = tw.li`
  desktop:hidden
  desktop:invisible
  desktop:select-none
  desktop:pointer-events-none
`;