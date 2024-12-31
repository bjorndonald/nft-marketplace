"use client";
import { useNavbarState } from "@/hooks/use-navbar-state"
import React from "react"
import { expandedClasses, StyledHeader } from "./header.style"
import Navbar from "./navbar"

const Header = () => {
  const { pathname, expanded, setExpanded } = useNavbarState()

  return (
    <StyledHeader id="header" className={expanded ? expandedClasses : ''}>
      <Navbar
        path={pathname}
        expanded={expanded}
        onNavToggleClick={() => {
          setExpanded(!expanded);
        }}
      />
    </StyledHeader>
  )
}

export default Header