import React, { ComponentProps } from 'react'

const Plus = (props: ComponentProps<"svg">) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16Z" fill="white" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16 11C13.7909 11 12 12.7909 12 15C12 17.2091 13.7909 19 16 19C18.2091 19 20 17.2091 20 15C20 12.7909 18.2091 11 16 11ZM10 15C10 11.6863 12.6863 9 16 9C19.3137 9 22 11.6863 22 15C22 18.3137 19.3137 21 16 21C12.6863 21 10 18.3137 10 15Z" fill="white" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0003 20.999C14.523 20.999 13.0745 21.4081 11.8154 22.1809C10.5563 22.9538 9.53577 24.0602 8.86698 25.3775C8.61696 25.8699 8.01507 26.0665 7.52262 25.8165C7.03017 25.5664 6.83363 24.9646 7.08365 24.4721C7.91963 22.8255 9.19526 21.4425 10.7691 20.4764C12.343 19.5104 14.1536 18.999 16.0003 18.999C17.847 18.999 19.6576 19.5104 21.2315 20.4764C22.8054 21.4425 24.081 22.8255 24.917 24.4721C25.167 24.9646 24.9705 25.5664 24.478 25.8165C23.9855 26.0665 23.3837 25.8699 23.1336 25.3775C22.4649 24.0602 21.4444 22.9538 20.1853 22.1809C18.9262 21.4081 17.4777 20.999 16.0003 20.999Z" fill="white" />
    </svg>
  )
}

export default Plus